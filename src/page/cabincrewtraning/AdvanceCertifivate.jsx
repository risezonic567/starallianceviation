import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function CertificateHospitality() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-700">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>
                  Advanced Aviation Certificate Course India
                </title>
                <meta
                    name="description"
                    content="Upgrade your skills with advanced certification in aviation, travel & hospitality industries."
                />
                <link
                    rel="canonical"
                    href="https://www.starallianceaviation.com/advance-certificate-course"
                />
            </Helmet>

            {/* ===== Hero Section ===== */}
            <section
                style={{
                    backgroundImage: `url(https://i.postimg.cc/K8jHhcND/Advance-Certificate-Course-BANNERS.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8  h-[190px] sm:h-[520px] 2xl:h-[700px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-xl">
                        <h1 className="text-3xl sm:text-3xl font-bold text-white font-heading animate-fade-in-down">
                            Advance Certificate Course in Aviation, Hospitality, Travel, Customer Service and Airport Ground Services

                        </h1>
                        <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
                            <Link to="/" className="hover:underline text-blue-300">
                                Star Alliance Aviation Academy /
                            </Link>{" "}
                          
                        </h2>
                        <Link
                            to="/make-appointment"
                            className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
                        >
                            Make an Appointment
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== About Course ===== */}
            <section className="py-16 px-4 border-b sm:mt-32 mt-12">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://i.postimg.cc/T1zq6Bwf/Advance_Certificate_Course_500_500.jpg"
                            alt="Hospitality Training"
                            loading="lazy"
                            className="rounded-2xl shadow-lg w-[80%] object-cover"
                        />
                    </div>

                    <div className="lg:w-1/2 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                            Course Overview
                        </h2>
                        <p className="leading-relaxed text-justify">
                            The Advanced Aviation Training & Airport Ground Handling Program is one of Star Alliance Aviation Academy's most inclusive aviation career courses.

                        </p>
                        <p className="leading-relaxed text-justify">
                            The 6-month fast-tracked program is for 12th-grade graduate students who are ready to join the aviation workforce. It provides advanced training in areas such as airport ground handling, marshalling, airside operations, flight coordination, and the passenger management system.
                        </p>
                        <p className="leading-relaxed text-justify">
                            Students gain a thorough understanding of aviation safety procedures, service delivery standards, and communication protocols through extensive simulation, analysis of case studies, and trainer-led workshops. The course provides each candidate with the necessary institutional knowledge as well as the professional discipline and confidence expected by airline professionals around the world.
                            Graduates will be fully prepared to take on roles such as ground operations executive, flight dispatch assistant, and aviation service coordinator with stations and operations with major airlines and aviation service providers throughout India and the world.

                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Modules Covered ===== */}
            <section className="py-16 px-4 bg-gray-50 border-b">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Modules Covered
                    </h2>

                    <ul className="list-disc space-y-3 pl-6">
                        {[
                            "Aviation Operation & Airport Ground Handling",
                            "Travel & Tourism Management",
                            "Hospitality & Customer Service Excellence",
                            "Safety Procedures & Emergency Training",
                            "Communication & Personality Development",
                            "Industry Internship & Placement Assistance"

                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ===== Course Info ===== */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Duration</h3>
                        <p>6 Months</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Schedule</h3>
                        <p>6 Days/Week (4 Hours/Day)</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Eligibility</h3>
                        <p>12th Pass </p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Age Limit</h3>
                        <p>17–24 Years</p>
                    </div>
                </div>
            </section>

            {/* ===== Course Objectives ===== */}
            <section className="py-16 px-4 bg-gray-50 border-t">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Career Opportunities
                    </h2>
                    <ul className="list-disc space-y-3 pl-6">
                        <p className="mb-6">
                            Graduates can pursue careers as:

                        </p>

                        {[
                            " Ground Staff Executive",

                            "Flight Coordinator",

                            "Check -in Agent",

                            "Cabin Crew Assistant",

                            "Customer Service Officer"

                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>


                </div>
            </section>

            {/* ===== Career Opportunities ===== */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Why Choose Star Alliance Aviation Academy:

                    </h2>

                    <ul className="list-disc space-y-3 pl-6">
                        {[
                            "Industry - focused, job - ready curriculum",

                            "Training by experienced airline and airport professionals",

                            "Career counseling and placement assistance",

                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
