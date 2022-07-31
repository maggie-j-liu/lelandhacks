import { NextSeo, EventJsonLd } from "next-seo";

const title = "Leland Hacks";
const description =
  "Leland Hacks is a 12-hour hackathon that will be held in-person on September 18th 2022, at the Vineland Branch Library in San Jose, CA.";
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
              url: `${url}/og.png`,
              width: 1200,
              height: 630,
              alt: "Leland Hacks. An in-person hackathon in San Jose, CA. September 18, 2022",
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
        startDate="2022-09-18T09:00:00-07:00"
        endDate="2022-09-18T21:00:00-07:00"
        eventStatus="https://schema.org/EventScheduled"
        eventAttendanceMode="https://schema.org/OfflineEventAttendanceMode"
        location={{
          name: "Vineland Branch Library",
          address: {
            streetAddress: "1450 Blossom Hill Rd",
            addressLocality: "San Jose",
            addressRegion: "CA",
            postalCode: "95118",
            addressCountry: "US",
          },
        }}
        url={url}
        description="Leland Hacks is a hackathon that will be held at the Vineland Branch Library on September 18th, 2022. We'll bring together students for 12 hours of hacking, workshops, and forming connections."
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
        images={[`${url}/og.png`]}
      />
    </>
  );
};

export default Meta;
