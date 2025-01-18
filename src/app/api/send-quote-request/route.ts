import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate environment variables with detailed error messages
    const missingVars = [];
    if (!process.env.SENDGRID_API_KEY) missingVars.push('SENDGRID_API_KEY');
    if (!process.env.SMTP_USER) missingVars.push('SMTP_USER');
    if (!process.env.SMTP_TO_EMAIL) missingVars.push('SMTP_TO_EMAIL');
    
    if (missingVars.length > 0) {
      throw new Error(`Missing required email configuration: ${missingVars.join(', ')}`);
    }

    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    // Verify SendGrid API key
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('Missing SendGrid API key');
    }

    // Determine if this is a quote request or contact form submission
    const isQuoteRequest = 'projectType' in data;

    // Format the email content based on the form type
    let emailContent;
    let htmlContent;
    let subject;

    if (isQuoteRequest) {
      emailContent = `
        New Quote Request from ${data.name}

        Contact Information
        ==================
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company}

        Project Details
        ==============
        Project Type: ${data.projectType}
        Project Size: ${data.projectSize} sq ft
        Timeline: ${data.timeline}
        Budget Range: ${data.budget}
        Location: ${data.location}

        Requirements and Specifications
        ============================
        ${data.requirements}

        This request was sent from the Futonix website quote request form.
      `;

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Quote Request from ${data.name}</h2>
          
          <div style="margin: 20px 0; background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h3 style="color: #444;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Company:</strong> ${data.company}</p>
          </div>

          <div style="margin: 20px 0; background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h3 style="color: #444;">Project Details</h3>
            <p><strong>Project Type:</strong> ${data.projectType}</p>
            <p><strong>Project Size:</strong> ${data.projectSize} sq ft</p>
            <p><strong>Timeline:</strong> ${data.timeline}</p>
            <p><strong>Budget Range:</strong> ${data.budget}</p>
            <p><strong>Location:</strong> ${data.location}</p>
          </div>

          <div style="margin: 20px 0; background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h3 style="color: #444;">Requirements and Specifications</h3>
            <p style="white-space: pre-wrap;">${data.requirements}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This request was sent from the Futonix website quote request form.
          </p>
        </div>
      `;

      subject = `Quote Request: ${data.projectType} Project - ${data.company}`;
    } else {
      emailContent = `
        New Contact Form Message from ${data.name}

        Contact Information
        ==================
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company}

        Message
        =======
        ${data.message}

        This message was sent from the Futonix website contact form.
      `;

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Message from ${data.name}</h2>
          
          <div style="margin: 20px 0; background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h3 style="color: #444;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Company:</strong> ${data.company}</p>
          </div>

          <div style="margin: 20px 0; background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h3 style="color: #444;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This message was sent from the Futonix website contact form.
          </p>
        </div>
      `;

      subject = `Contact Form Message from ${data.name} - ${data.company}`;
    }

    // Send the email using SendGrid
    const msg = {
      to: process.env.SMTP_TO_EMAIL,
      from: process.env.SMTP_USER || 'noreply@futonix.com',
      subject: subject,
      text: emailContent,
      html: htmlContent,
    };

    try {
      const [response] = await sgMail.send(msg);
      console.log('SendGrid response:', {
        statusCode: response.statusCode,
        headers: response.headers,
        body: response.body
      });
    } catch (err) {
      const error = err as Error & {
        code?: number;
        response?: {
          statusCode: number;
          body: string;
          headers: Record<string, string>;
        };
      };
      
      console.error('SendGrid error:', {
        message: error.message,
        code: error.code,
        response: error.response ? {
          statusCode: error.response.statusCode,
          body: error.response.body,
          headers: error.response.headers
        } : null
      });
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
    });
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}