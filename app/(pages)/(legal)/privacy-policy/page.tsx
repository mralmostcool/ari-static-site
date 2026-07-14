"use client";

import React, { useEffect, useState } from "react";
import { PageHeader } from "@/components";

interface TocItem {
    id: string;
    label: string;
}

const TOC_ITEMS: TocItem[] = [
    { id: "personal-information", label: "Personal Information" },
    { id: "how-we-use", label: "How We Use Your Information" },
    { id: "legal-disclosure", label: "Legal Disclosure" },
    { id: "non-personal-information", label: "Non-Personal Information" },
    { id: "cookies", label: "Information Placed on Your Computer" },
    { id: "security", label: "Security" },
    { id: "third-parties", label: "Third Parties" },
];

export default function PrivacyPolicyPage() {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the sweet spot of the viewport
            threshold: 0,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        TOC_ITEMS.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => {
            TOC_ITEMS.forEach((item) => {
                const el = document.getElementById(item.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140; // Increased offset to clear sticky navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setActiveId(id);
        }
    };

    return (
        <div className="w-full bg-white">
            <PageHeader title="Privacy Policy" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Table of Contents - Sidebar */}
                    <aside className="lg:w-1/4 lg:sticky lg:top-36 h-fit hidden lg:block">
                        <div className="border-l-2 border-zinc-100 pl-4 py-2">
                            <nav className="flex flex-col gap-3">
                                {TOC_ITEMS.map((item) => {
                                    const isActive = activeId === item.id;
                                    return (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={(e) => handleScrollTo(e, item.id)}
                                            className={`group relative text-sm font-medium pl-3 py-1 transition-all duration-300 block leading-snug rounded-lg ${isActive
                                                    ? "text-sky-700 font-semibold bg-sky-50/50"
                                                    : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
                                                }`}
                                        >
                                            {/* Active indicator bar */}
                                            {isActive && (
                                                <span className="absolute left-[-18px] top-0 bottom-0 w-0.5 bg-sky-600 rounded-full transition-all duration-300" />
                                            )}
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Column */}
                    <main className="flex-1 max-w-full lg:max-w-3xl lg:w-3/4">
                        <article className="space-y-10 text-zinc-600 leading-relaxed text-base sm:text-lg">

                            {/* Intro Tagline Paragraph */}
                            <p className="text-zinc-600 text-lg sm:text-xl font-medium leading-relaxed border-b border-zinc-100 pb-8 mb-8">
                                ARI Simulation respects the privacy of everyone who visits this website and is committed to maintaining the privacy and security of the personal information of all its visitors. Our Privacy Policy framework is fully integrated into the organisation's risk and compliance management system.
                            </p>

                            <section id="personal-information" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    Personal Information
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        We at ARI Simulation do not require personal information to gain access to most of our website pages.
                                        This Policy covers the processing of personal data of employees, contractors, clients, suppliers, business partners, and other identifiable individuals.
                                    </p>
                                    <p>
                                        Any breach of this Policy will be taken seriously and may result in disciplinary action. Privacy is integrated into our enterprise risk and compliance programme, with regular oversight, reviews, and third-party controls.
                                    </p>
                                    <p>
                                        ARI Simulation shall obtain personal data only by lawful and fair means and, where applicable, with the knowledge and explicit consent of the individual concerned. ARI Simulation obtains opt-in consent wherever required by applicable data protection laws before collecting, using, or disclosing personal data.
                                    </p>
                                    <p>
                                        Where consent is required, ARI Simulation shall seek explicit opt-in consent and ensure that individuals are provided with clear, accessible information to support informed decision-making. Data subjects can request that data we hold about them be transferred to another organisation.
                                    </p>
                                    <p>
                                        We collect personal information from our visitors on a voluntary basis. Personal information may include name, title, company, address, phone number, email address, and other relevant data. Questions or comments submitted by visitors also come under personal information.
                                    </p>
                                </div>
                            </section>

                            <section id="how-we-use" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    How We Use Your Information
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>We collect and use personal information for the following business purposes:</p>
                                    <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                                        <li>To allow you to download product information, order products, and take advantage of certain other features of our website.</li>
                                        <li>To provide information or interactive services through this website, to your email address or, where you wish, by post to your name and postal address.</li>
                                        <li>To seek your feedback on our products and services or to contact you in relation to those services offered on our website.</li>
                                        <li>To process orders or applications submitted by you.</li>
                                        <li>To administer or otherwise carry out our obligations in relation to any agreement you have with us.</li>
                                        <li>To anticipate and resolve problems with any goods or services.</li>
                                        <li>To create products or services that may meet your needs.</li>
                                        <li>To process your requests, improve our operations, and communicate about our products, services, and businesses.</li>
                                        <li>To allow you to subscribe to our newsletter.</li>
                                    </ul>
                                    <p className="mt-4">
                                        We will not use or share, either within ARI Simulation or with a third party, any information collected from this page for direct marketing purposes. However, we may transmit the information to another country, among ARI Simulation and its affiliates, for purposes such as storage and for carrying out the processing detailed above.
                                    </p>
                                    <p>
                                        Where applicable by law, data subjects may request the transfer of their personal data to another organisation.
                                    </p>
                                </div>
                            </section>

                            <section id="legal-disclosure" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    Legal Disclosure
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        To the extent required or permitted by law, we may also collect, use, and disclose personal information in connection with security-related or law enforcement investigations or in the course of cooperating with authorities or complying with legal requirements.
                                    </p>
                                    <p>
                                        We may also remove all personally identifiable information and use the remainder for historical, statistical, or scientific purposes.
                                    </p>
                                    <p>
                                        If you email us, you are voluntarily releasing information to us. Your email address will be used by ARI Simulation to respond to you. We will not use information that can identify you, such as your email address, for mass mailing purposes.
                                    </p>
                                    <p>
                                        In addition, we may have collected similar information from you in the past. By entering this website you are consenting to the terms of our information privacy policy and to our continued use of previously collected information. By submitting your personal information to us, you will be treated as having given your permission for the processing of your personal data as set out in this policy.
                                    </p>
                                </div>
                            </section>

                            <section id="non-personal-information" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    Non-Personal Information
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        At this website, information sent by your web browser may be automatically collected. This information typically includes your domain name. It may also contain your username. Other examples of information collected by our server include the Internet Protocol (IP) address used to connect your computer to the Internet, operating system and platform, the average time spent on our website, pages viewed, information searched for, access times, websites visited before visiting our website, and other relevant statistics. The amount of information sent depends on the settings of your web browser.
                                    </p>
                                    <p>
                                        All such information will be used only to assist us in providing an effective service on this website. We may from time to time supply the owners or operators of third-party websites from which it is possible to link to our website with information relating to the number of users linking to our website from such third-party websites. You cannot be identified from this information.
                                    </p>
                                    <p>
                                        We use the information we automatically receive from your web browser to understand the pages you visited inside our website, which website you visited before coming to ours, and where you go after you leave. ARI Simulation can then develop statistics that are helpful in understanding how our visitors use this website. We use this information in the aggregate to measure the use of our website and to administer and improve it.
                                    </p>
                                </div>
                            </section>

                            <section id="cookies" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    Information Placed on Your Computer
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        We may store some information such as cookies on your computer when you visit our website. Cookies are pieces of information that a website transfers to the hard drive of a visitor's computer for record-keeping purposes. This information facilitates your use of our website and ensures that you do not need to re-enter your details every time you visit.
                                    </p>
                                    <p>
                                        You can erase or choose to block this information from your computer if you want to; please refer to your browser settings to do so. Erasing or blocking such information may limit the range of features available to you on our website.
                                    </p>
                                    <p>
                                        We also use such information to provide visitors a personalised experience on our website - to allow visitors to use the website without logging on upon returning, to auto-populate forms, to make improvements, and to better tailor our website to our visitors' needs. We also use this information to verify that visitors meet the criteria required to process their requests.
                                    </p>
                                </div>
                            </section>

                            <section id="security" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    Security
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        We have implemented technology and policies with the objective of protecting your privacy from unauthorised access and improper use, and we periodically review these measures.
                                    </p>
                                </div>
                            </section>

                            <section id="third-parties" className="scroll-mt-36 group">
                                <h3 className="text-zinc-900 font-bold text-lg mb-4 group-hover:text-sky-800 transition-colors duration-200">
                                    Third Parties
                                </h3>
                                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        For your convenience, this page may contain certain hyperlinks to other ARI Simulation pages as well as to websites outside ARI Simulation. In addition, you may have linked to our website from another website.
                                    </p>
                                    <p>
                                        We cannot be responsible for the privacy policies and practices of other websites, even if you access them using links from our website. We can make no promises or guarantees regarding data collection on hyperlinked pages and on websites not owned by ARI Simulation.
                                    </p>
                                    <p>
                                        We recommend that you check the policy of each website you visit and contact the owners or operators of such websites if you have any concerns or questions.
                                    </p>
                                </div>
                            </section>

                        </article>
                    </main>

                </div>
            </div>
        </div>
    );
}