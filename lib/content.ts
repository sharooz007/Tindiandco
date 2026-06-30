// TINDI & CO - site content + verified imagery.
// All image URLs were checked (HTTP 200) before use. Swap these freely
// when real product photography is ready: replace the `img()` ids below.

const UNSPLASH = "https://images.unsplash.com/photo-";

export function img(id: string, w = 1200, q = 80) {
  if (id.startsWith("/")) return id;
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
  { id: "/tindi-logo.svg", alt: "Tindi and Co Logo" },
  { id: "/hero1.jpeg", alt: "Corn Cheese Balls" },
  { id: "/hero2.jpeg", alt: "Hara Bhara Kebab" },
  { id: "/hero3.jpeg", alt: "Mini Kesar Jalebi" },
];

export const categories = [
  {
    title: "Frozen Non-Veg Snacks",
    blurb: "Premium frozen non-veg, sealed at peak freshness.",
    img: "/Frozen Non-Veg Snacks.jpeg", // chicken strips & nuggets
    alt: "Crispy non-veg snacks",
  },
  {
    title: "Frozen Veg Snacks",
    blurb: "Ready-to-cook bites for every occasion and craving.",
    img: "/Frozen Veg Snacks.jpeg", // punjabi samosa
    alt: "Veg snacks ready to cook",
  },
  {
    title: "Fried Takeaway",
    blurb: "Hot, crisp and golden. Favourites packed to travel.",
    img: "/Fried Take.jpeg", // peri peri finger & cheese roll
    alt: "Fried takeaway favourites",
  },
];

export const benefits = [
  {
    title: "Fry or air fry",
    blurb:
      "Deep-fry for the classic crunch or air-fry for a lighter bite. Both land crisp.",
    img: "/Fry or air fry.jpeg",
    alt: "Paneer kurkure air-fried",
  },
  {
    title: "Cook without thawing",
    blurb:
      "Straight from the freezer to the heat. No waiting, no planning ahead.",
    img: "/Cook without thawing.jpeg",
    alt: "Mini batata vadas cooking",
  },
  {
    title: "Stays fresh, frozen",
    blurb:
      "Stored right in your freezer, the crunch keeps for the long run.",
    img: "/Stays fresh, frozen.jpeg",
    alt: "Tandoori samosa frosted",
  },
  {
    title: "No added preservatives",
    blurb:
      "Taste and freshness held naturally, the way good food should be.",
    img: "/No preservatives.jpeg",
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
  storyImg: "/Brand Story Section.jpeg", // snack mix
  storyAlt: "An assortment of crunchy snacks",
};
