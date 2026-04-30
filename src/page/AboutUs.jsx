import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import { Link } from "react-router-dom";
import WeAreCommitted from "../components/WeAreCommitted";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>
        About Us | Aviation Training Institute in Delhi
        </title>
        <meta
          name="description"
          content="Learn about our aviation institute in Delhi, expert trainers, and our mission to build successful pilot and aviation careers in India."
        />
        <link
          rel="canonical"
          href="https://www.starallianceaviation.com/about-us"
        />

        {/* --- Educational Organization Schema --- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Star Alliance Aviation Academy",
            url: "https://www.starallianceaviation.com/about-us",
            logo: "https://i.postimg.cc/FKqwPS2B/white-logo-1.png",
            foundingDate: "2022",
            description:
              "Star Alliance Aviation Academy is a leading aviation training institute in New Delhi offering pilot, cabin crew, and aviation management courses, committed to excellence, integrity, and innovation.",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "E-551, 2nd, 3rd, and 4th Floor, Ramphal Chowk, Dwarka Sector – 7, Manyavar Showroom Building",
              addressLocality: "New Delhi",
              postalCode: "110075",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 92895 95558",
              contactType: "customer service",
              areaServed: "IN",
            },
            sameAs: [
              "https://www.facebook.com/starallianceaviationacademy/",
              "https://www.instagram.com/starallianceaviation/?hl=en",
              "https://www.youtube.com/@starallianceaviationacademy",
              "https://www.linkedin.com/company/starallianceaviationacademy/",
              "https://in.pinterest.com/starallianceaviationacademy/",
              "https://x.com/staralliance_in",
            ],
          })}
        </script>

        {/* --- WebPage + Breadcrumb Schema --- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://www.starallianceaviation.com/about-us",
            name: "About Us – Star Alliance Aviation Academy",
            description:
              "Learn more about Star Alliance Aviation Academy—our mission, values, team and commitment to delivering top-quality aviation training.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://starallianceaviation.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://starallianceaviation.com/about-us",
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <section
        style={{
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/About/About%20us%20banners.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px] "
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-[1150px] mt-8">
          <div className="sm:visible invisible text-white p-5 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading animate-fade-in-down">
              AboutUs
            </h1>
            <h2 className=" mt-2 text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              AboutUs
            </h2>
            <Link
              to="/make-appointment"
              className="inline-block mt-6 px-6 py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>
      <WhoWeAre />
      <WeAreCommitted />
    </>
  );
}
