const photo = (id, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const media = {
  hero: photo("photo-1600607687920-4e2a09cf159d", 2400),
  studio: photo("photo-1600210492486-724fe5c67fb0"),
  detail: photo("photo-1616486338812-3dadae4b4ace"),
  film:
    "https://videos.pexels.com/video-files/856857/856857-hd_1920_1080_30fps.mp4",
};

export const projects = [
  {
    id: "courtyard",
    number: "01",
    title: "The Courtyard House",
    location: "Ojai, California",
    category: "Private residence",
    year: "2025",
    size: "3,200 sq ft",
    image: photo("photo-1600607687939-ce8a6c25118c"),
    alt: "Light-filled residential interior with natural finishes",
    description:
      "A home organized around an open-air courtyard. Sheltered rooms unfold into outdoor spaces, bringing changing light and the rhythm of the garden into everyday life.",
    materials: "Limewashed plaster · White oak · Honed limestone",
  },
  {
    id: "ridge",
    number: "02",
    title: "Ridge Residence",
    location: "Sonoma, California",
    category: "Landscape retreat",
    year: "2024",
    size: "2,850 sq ft",
    image: photo("photo-1600047509807-ba8f99d2cdde"),
    alt: "Contemporary residence opening onto landscaped outdoor space",
    description:
      "A quiet retreat shaped by the slope of the land. Long horizontal lines, deep overhangs, and generous openings create a continuous relationship between shelter and landscape.",
    materials: "Board-formed concrete · Cedar · Natural stone",
  },
  {
    id: "stillwater",
    number: "03",
    title: "Stillwater",
    location: "Montecito, California",
    category: "Coastal living",
    year: "2025",
    size: "4,100 sq ft",
    image: photo("photo-1600607688969-a5bfcd646154"),
    alt: "Calm contemporary living space with an understated material palette",
    description:
      "An exploration of light, texture, and restraint. A series of intimate living spaces balances expansive views with places to retreat, pause, and feel at home.",
    materials: "Travertine · Brushed oak · Mineral plaster",
  },
];

export const process = [
  {
    title: "Listen & discover",
    text: "We begin with how you live. Your routines, the places you love, and the possibilities of your site shape a shared brief.",
  },
  {
    title: "Imagine & refine",
    text: "Ideas become spaces through sketches, models, and conversation. We consider light, proportion, and materials together.",
  },
  {
    title: "Detail & build",
    text: "Careful documentation brings clarity to construction. We collaborate with craftspeople to carry the design into every detail.",
  },
];
