'use client';

import * as React from 'react';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    title: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <div className="relative">
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </div>
        );
    }
);
ListItem.displayName = "ListItem";

const navigationItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        description: "Comprehensive construction and development solutions for your needs.",
        items: [
            {
                title: "Construction Management",
                href: "/services#construction",
                description: "Expert oversight and execution of construction projects.",
            },
            {
                title: "Industrial Solutions",
                href: "/services#industrial",
                description: "Specialized solutions for manufacturing and industrial facilities.",
            },
            {
                title: "Maintenance Services",
                href: "/services#maintenance",
                description: "Comprehensive maintenance and repair services.",
            },
            {
                title: "Project Planning",
                href: "/services#planning",
                description: "Strategic planning and project development.",
            },
        ],
    },
    {
        title: "Company",
        description: "Learn more about our commitment to excellence in construction.",
        items: [
            {
                title: "About Us",
                href: "/about",
                description: "Our history, values, and mission.",
            },
            {
                title: "Projects",
                href: "/projects",
                description: "View our portfolio of completed projects.",
            },
            {
                title: "Our Team",
                href: "/about#team",
                description: "Meet our experienced professionals.",
            },
            {
                title: "Contact Us",
                href: "/contact",
                description: "Get in touch with our team.",
            },
        ],
    },
];

export function Header1() {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {!item.items ? (
                                        <Link href={item.href || "/"} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="w-[500px] p-4">
                                                    <div className="grid gap-3">
                                                        <div className="row-span-3">
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                {item.title}
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground mb-4">
                                                                {item.description}
                                                            </p>
                                                            <div className="grid grid-cols-2 gap-3">
                                                                {item.items.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.title}
                                                                        href={subItem.href}
                                                                        legacyBehavior
                                                                        passHref
                                                                    >
                                                                        <ListItem title={subItem.title}>
                                                                            {subItem.description}
                                                                        </ListItem>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <Link href="/" className="font-bold text-xl">
                        FUTONIX
                    </Link>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Link href="/quote-request" legacyBehavior passHref>
                        <Button variant="ghost" className="hidden md:inline">
                            Request Quote
                        </Button>
                    </Link>
                    <div className="border-r hidden md:inline"></div>
                    <Link href="/contact" legacyBehavior passHref>
                        <Button variant="outline">Contact Us</Button>
                    </Link>
                    <Link href="/contact" legacyBehavior passHref>
                        <Button>Get Started</Button>
                    </Link>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {!item.items ? (
                                            <Link
                                                href={item.href || "/"}
                                                className="flex justify-between items-center"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <>
                                                <p className="text-lg font-medium">{item.title}</p>
                                                <div className="pl-4 flex flex-col gap-2">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className="flex justify-between items-center"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="text-muted-foreground">
                                                                {subItem.title}
                                                            </span>
                                                            <MoveRight className="w-4 h-4 stroke-1" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}