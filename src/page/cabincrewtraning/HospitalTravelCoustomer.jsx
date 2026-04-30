import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function HospitalityTravelCustomerService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-700">
            {/* ===== SEO META TAGS ===== */}
            <Helmet>
                <title>
                 Hospitality & Travel Customer Service Course India
                </title>
                <meta
                    name="description"
                    content="Learn customer service skills for hospitality & travel industry with practical training and global career opportunities."
                />
                <link rel="canonical" href="https://www.starallianceaviation.com/aviation-hospitality-travel-management" />
            </Helmet>

            {/* ===== HERO SECTION ===== */}
            <section
                style={{
                    backgroundImage: `url(https://i.postimg.cc/RhkQB2Fv/Hospitality_Travel_Customer_Service_banner.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[190px] sm:h-[520px] 2xl:h-[700px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
                        <h1 className="text-3xl sm:text-3xl font-bold text-white font-heading animate-fade-in-down">
                            Certificate Course in Hospitality, Travel & Customer Service
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

            {/* ===== ABOUT COURSE ===== */}
            <section className="py-16 px-4 border-b sm:mt-32 mt-12">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://i.postimg.cc/7h8V2BkN/Hospitality-Travel-Customer-Service-500-500.jpg"
                            alt="Hospitality Course"
                            loading="lazy"
                            className="rounded-2xl shadow-lg w-[80%] object-cover"
                        />
                    </div>

                    <div className="lg:w-1/2 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                            Course Overview
                        </h2>
                        <p className="leading-relaxed text-justify">
                            The Aviation Customer Service & Ground Operations Course at Star Alliance Aviation Academy offers students practical experiences in the frontline functions of aviation management. The emphasis of this course is on airport terminal operations, passenger handling, baggage handling, flight check-in, and in-flight support systems.

                        </p>
                        <p className="leading-relaxed text-justify">
                            Students engage with real-time industry experience brought into the classroom by aviation professionals. This ensures all students develop an operational mindset that is consistent with airline standards. Through active and practical engagement, students become proficient in airline communication systems, safety regulations and procedures, and emergency coordination.
                        </p>
                        <p className="leading-relaxed text-justify">
                            The reputation that Star Alliance Aviation Academy has developed is based on its delivery of highly skilled professionals, who appreciate the value of precision, customer avenues, and above all, safety in aviation.
                        </p>
                        <p className="leading-relaxed text-justify">
                            Students completing this program will be seemingly job-ready for positions such as airline customer service executive, airport ground staff, and passenger relations officer. Ultimately, students leave with confidence and competencies.

                        </p>
                    </div>
                </div>
            </section>

            {/* ===== MODULES COVERED ===== */}
            <section className="py-16 px-4 bg-gray-50 border-b">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">Modules Covered</h2>

                    <ul className="list-disc space-y-3 pl-6">
                        {[
                            "Overview of the Hospitality Industry—Familiarity, structure, and scope of the hospitality industry.",
                            "Food and Beverage Management—service skills, menu design, and guest satisfaction.",
                            "Front Office and Housekeeping Operations—Reservation systems, check-in and check-out, and cleaning standards and procedures.",
                            "Grooming and Personality Development—Improved appearance, communication, and confidence.",
                            "Customer Service Training—Answering guest questions and providing five-star service.",
                            "Professional Development and Internship—Experience and placement support.",
                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ===== COURSE INFO ===== */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Duration</h3>
                        <p>11 Months</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Schedule</h3>
                        <p>4 Days/Week (2–4 Hours/Day)</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Eligibility</h3>
                        <p>12th Pass</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
                        <h3 className="text-primary font-bold text-xl mb-2">Age Limit</h3>
                        <p>17–24 Years</p>
                    </div>
                </div>
            </section>

            {/* ===== COURSE OBJECTIVES ===== */}
            <section className="py-16 px-4 bg-gray-50 border-t">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Course Objectives
                    </h2>
                    <ul className="list-disc space-y-3 pl-6">
                        {[
                            "Hospitality Operations: Learn procedures for customer service at hotels and airlines.",
                            "Travel Processes: Gain understanding of ticketing, reservations, and itinerary management.",
                            "Customer Handling: Develop skills to solve problems and manage complaints effectively.",
                            "Professional Grooming: Improve presentation, confidence, and workplace etiquette.",
                            "Communication Excellence: Enhance fluency in English and interpersonal soft skills.",
                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <p className="mt-6 leading-relaxed">
                        This course equips students with the knowledge and confidence to
                        understand traveler expectations and operate effectively within
                        global hospitality and aviation environments.
                    </p>
                </div>
            </section>

            {/* ===== CAREER OPPORTUNITIES ===== */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Career Opportunities
                    </h2>
                    <p className="mb-6">
                        Upon successful completion, graduates can explore dynamic career
                        paths such as:
                    </p>
                    <ul className="list-disc space-y-3 pl-6">
                        {[
                            "Airline Ground Service Executive",
                            "Front Office Associate",
                            "Guest Relations Officer",
                            "Travel Desk Coordinator",
                            "Cruise Line or Resort Executive",
                        ].map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
