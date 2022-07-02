import { NextSeo, EventJsonLd } from "next-seo";

const title = "Leland Hacks";
const description =
  "Leland Hacks is a 12-hour high school hackathon that will be held in-person in September 2022, at Leland High School in San Jose, CA.";
const url = "https://lelandhacks.com";

const Meta = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url,
          type: "website",
          images: [
            {
              url: `${url}/og-image.png`,
              width: 1200,
              height: 630,
              alt: "Leland Hacks. An in-person hackathon in San Jose, CA. September 2022",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <EventJsonLd
        name="Leland Hacks"
        startDate="2022-09-17"
        endDate="2022-09-17"
        eventStatus="https://schema.org/EventScheduled"
        eventAttendanceMode="https://schema.org/OfflineEventAttendanceMode"
        location={{
          name: "Leland High School",
          address: {
            streetAddress: "6677 Camden Avenue",
            addressLocality: "San Jose",
            addressRegion: "CA",
            postalCode: "95120",
            addressCountry: "US",
          },
        }}
        url={url}
        description="Leland Hacks is a high school hackathon that will be held at Leland High School in September 2022. We'll bring together high school students for 12 hours of hacking, workshops, and forming connections."
        offers={{
          price: "0",
          priceCurrency: "USD",
          url: url,
          availability: "https://schema.org/PreOrder",
        }}
        organizer={{
          "@type": "Organization",
          name: "Leland Computer Science Club",
          url: "https://lelandcs.vercel.app",
        }}
        images={[`${url}/og-image.png`]}
      />
    </>
  );
};

export default Meta;
