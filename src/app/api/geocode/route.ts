import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}&limit=5&addressdetails=1&countrycodes=us`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Futonix Construction Website',
        'Accept-Language': 'en-US,en',
      },
    });

    if (!response.ok) {
      const errorMessage = `OpenStreetMap API error: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    if (!Array.isArray(data)) {
      console.error('Invalid response format from OpenStreetMap:', data);
      return NextResponse.json(
        { error: 'Invalid response format from geocoding service' },
        { status: 500 }
      );
    }

    // Filter and transform the response
    const suggestions = data.map(item => ({
      place_id: item.place_id,
      display_name: item.display_name,
    }));

    return NextResponse.json(suggestions);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Geocoding error:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}