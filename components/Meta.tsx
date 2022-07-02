import { NextSeo, EventJsonLd } from "next-seo";

const title = "Leland Hacks";
const description =
  "Leland Hacks is a 12-hour high school hackathon, held in-person in September 2022.";
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
        }}
      />
      <EventJsonLd
        name="Leland Hacks"
        startDate="2022-09-10"
        endDate="2022-09-10"
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
      />
    </>
  );
};

export default Meta;
