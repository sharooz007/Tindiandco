// TINDI & CO - site content + verified imagery.
// All image URLs were checked (HTTP 200) before use. Swap these freely
// when real product photography is ready: replace the `img()` ids below.

const UNSPLASH = "https://images.unsplash.com/photo-";

export function img(id: string, w = 1200, q = 80) {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const contact = {
  whatsappLabel: "+91 96068 29682",
  whatsapp: "https://wa.me/919606829682",
  email: "info@tindiandco.com",
  instagram: "https://www.instagram.com/tindi_and_co",
  facebook: "https://www.facebook.com/share/1FWjLSAYwn/?mibextid=LQQJ4d",
  linkedin: "https://www.linkedin.com/company/tindi-and-co/",
};

export const heroFloats = [
  { id: "1601050690597-df0568f70950", alt: "Crispy fried samosas" },
  { id: "1606755962773-d324e0a13086", alt: "Golden fried chicken" },
  { id: "1610440042657-612c34d95e9f", alt: "Crisp spring rolls" },
  { id: "1585032226651-759b368d7246", alt: "Onion rings" },
];

export const categories = [
  {
    title: "Frozen Non-Veg Snacks",
    blurb: "Premium frozen non-veg, sealed at peak freshness.",
    img: "1633237308525-cd587cf71926", // fried wings
    alt: "Crispy non-veg snacks",
  },
  {
    title: "Frozen Veg Snacks",
    blurb: "Ready-to-cook bites for every occasion and craving.",
    img: "1541592106381-b31e9677c0e5", // veg dumplings
    alt: "Veg snacks ready to cook",
  },
  {
    title: "Fried Takeaway",
    blurb: "Hot, crisp and golden. Favourites packed to travel.",
    img: "1573080496219-bb080dd4f877", // fries
    alt: "Fried takeaway favourites",
  },
];

export const benefits = [
  {
    title: "Fry or air fry",
    blurb:
      "Deep-fry for the classic crunch or air-fry for a lighter bite. Both land crisp.",
    img: "1585032226651-759b368d7246",
    alt: "Air-fried snacks",
  },
  {
    title: "Cook without thawing",
    blurb:
      "Straight from the freezer to the heat. No waiting, no planning ahead.",
    img: "1639024471283-03518883512d",
    alt: "Frozen dumplings cooking",
  },
  {
    title: "Stays fresh, frozen",
    blurb:
      "Stored right in your freezer, the crunch keeps for the long run.",
    img: "1559847844-5315695dadae",
    alt: "Spring rolls kept fresh",
  },
  {
    title: "No added preservatives",
    blurb:
      "Taste and freshness held naturally, the way good food should be.",
    img: "1626700051175-6818013e1d4f",
    alt: "Fresh fritters",
  },
];

export const reasons = [
  {
    no: "01",
    title: "Premium frozen quality",
    blurb: "Every batch chosen with care, freshness locked in from day one.",
  },
  {
    no: "02",
    title: "Quick and convenient",
    blurb: "Ready-to-cook and ready-to-eat. Snacks on your schedule.",
  },
  {
    no: "03",
    title: "Trusted ingredients",
    blurb: "Sourced honestly, made for families who read the label.",
  },
  {
    no: "04",
    title: "Crunch worth remembering",
    blurb: "The kind of bite everyone reaches back for. That is the point.",
  },
];

export const story = {
  storyImg: "1548340748-6d2b7d7da280", // snack mix
  storyAlt: "An assortment of crunchy snacks",
};
