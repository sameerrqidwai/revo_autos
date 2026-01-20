"use client";
import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Dribbble,
    Globe,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";
import logoIcon from "@/assets/revo_logo.jpg";

function HoverFooter() {
    // Footer link data
    const footerLinks = [
        {
            title: "About Us",
            links: [
                { label: "Company History", href: "#" },
                { label: "Meet the Team", href: "#" },
                { label: "Employee Handbook", href: "#" },
                { label: "Careers", href: "#" },
            ],
        },
        {
            title: "Helpful Links",
            links: [
                { label: "FAQs", href: "#" },
                { label: "Support", href: "#" },
                {
                    label: "Live Chat",
                    href: "#",
                    pulse: true,
                },
            ],
        },
    ];

    // Contact info data
    const contactInfo = [
        {
            icon: <Mail size={18} className="text-[#E30613]" />,
            text: "hello@revo.com",
            href: "mailto:hello@revo.com",
        },
        {
            icon: <Phone size={18} className="text-[#E30613]" />,
            text: "(647) 382-5749",
            href: "tel:+16473825749",
        },
        {
            icon: <MapPin size={18} className="text-[#E30613]" />,
            text: "Toronto, Canada",
        },
    ];

    // Social media icons
    const socialLinks = [
        { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
        { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
        { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
        { icon: <Globe size={20} />, label: "Globe", href: "#" },
    ];

    return (
        <footer className="bg-[#050505] relative h-fit rounded-3xl overflow-hidden m-8 border border-white/5">
            <div className="max-w-6xl mx-auto p-14 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 pb-12 items-start">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src={logoIcon} alt="REVO Autogroup" className="h-28 w-auto" />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Revo is Canada's premier premium automotive platform, handling everything from luxury rentals to sales and detailing.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label} className="relative">
                                        <a
                                            href={link.href}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className="hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                        {link.pulse && (
                                            <span className="absolute top-1 right-[-14px] w-2 h-2 rounded-full bg-[#E30613] animate-pulse"></span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact section */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-white/10 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    {/* Social icons */}
                    <div className="flex space-x-6 text-gray-400">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="hover:text-[#E30613] transition-colors opacity-70 hover:opacity-100"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-left text-gray-500">
                        &copy; {new Date().getFullYear()} Revo. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
                <TextHoverEffect text="REVO" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}

export default HoverFooter;
