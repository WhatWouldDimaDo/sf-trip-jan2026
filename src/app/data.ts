export interface SFEvent {
  id: string;
  artist: string;
  date: string;
  venue: string;
  category: string;
  vibe: string;
  image: string;
  youtubeId: string;
  bio: string;
  tickets: string;
  festivalTitle?: string;
  festivalPerk?: string;
  price?: string;
  address?: string;
  isSpecialGuest?: boolean;
}

export const sfEvents: SFEvent[] = [
  {
    id: "inzo",
    artist: "Inzo",
    date: "Fri Jan 23",
    venue: "Regency Ballroom",
    category: "Concert",
    vibe: "Melodic Bass",
    image: "https://images.unsplash.com/photo-1597083950211-c2e8bfc5dae0?fm=jpg&q=80&w=3840",
    youtubeId: "B4D884onUSk",
    bio: "Chicago-based producer blending future bass, dubstep, and euphoric melodies. Known for atmospheric synths and emotional soundscapes.",
    tickets: "https://www.axs.com/events/inzo-tickets",
    festivalTitle: "Feldman's Fyre Opening Ceremony",
    festivalPerk: "VIP Luxury Tent (Cardboard box with view)",
    address: "1300 Van Ness Ave, San Francisco, CA 94109",
    price: "$53 - $67"
  },
  {
    id: "carl-craig",
    artist: "Detroit Love (Carl Craig)",
    date: "Fri Jan 23",
    venue: "Public Works",
    category: "Club",
    vibe: "Techno Legend",
    image: "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/23920659/10b04074-2839-4a34-8c84-f062b79d2305.jpg",
    youtubeId: "gbXWLRLDh7Y",
    bio: "Pioneer of the second wave of Detroit techno. His 'Detroit Love' project celebrates the city's rich electronic heritage.",
    tickets: "https://publicsf.com/events",
    festivalTitle: "Bio-Hack-A-Thon Afterparty",
    festivalPerk: "Unlimited Soylent & Cold Plunges",
    address: "161 Erie St, San Francisco, CA 94103",
    price: "$20 - $43"
  },
  {
    id: "gray-watson",
    artist: "Gray Watson",
    date: "Fri Jan 23",
    venue: "Public Works",
    category: "Club",
    vibe: "Special Guest",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=3840",
    youtubeId: "",
    bio: "A very special appearance by Gray Watson, bringing unique energy to the Detroit Love showcase.",
    tickets: "https://publicsf.com/events",
    isSpecialGuest: true,
    address: "161 Erie St, San Francisco, CA 94103",
    price: "Guest List"
  },
  {
    id: "ship-wrek",
    artist: "Ship Wrek",
    date: "Fri Jan 23",
    venue: "1015 Folsom",
    category: "Club",
    vibe: "Tech House",
    image: "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/28710181/77d9196f-4738-4ff4-88dd-39cce4c810cb.jpg",
    youtubeId: "u9qmYUHee3c",
    bio: "High-energy tech house duo known for high-octane festival performances and a signature sound that dominates the club scene.",
    tickets: "https://1015.com/events",
    festivalTitle: "Feldman's Fyre Mainstage",
    festivalPerk: "Signed Cheese Sandwich (NFT)",
    address: "1015 Folsom St, San Francisco, CA 94103",
    price: "$25 - $31"
  },
  {
    id: "einmusik",
    artist: "Einmusik",
    date: "Fri Jan 23",
    venue: "Halcyon",
    category: "Club",
    vibe: "Melodic Techno",
    image: "https://dice-media.imgix.net/attachments/2025-12-24/390385e1-0ca0-427d-b734-f6d6816fbd46.jpg",
    youtubeId: "3cHC7nnHd6g",
    bio: "Berlin-based producer recognized for atmospheric and melodic techno. His soundscapes blend deep house with intricate melodies.",
    tickets: "https://halcyon-sf.com/",
    festivalTitle: "Y-Combinator-Con Deep Work",
    festivalPerk: "Equity-based drinks (0.01% per sip)",
    address: "314 11th St, San Francisco, CA 94103",
    price: "From $12"
  },
  {
    id: "thomas-lennon",
    artist: "Thomas Lennon Sings The Smiths",
    date: "Fri Jan 23",
    venue: "Great American Music Hall",
    category: "Comedy",
    vibe: "Tribute/Comedy",
    image: "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/28616566/8adc6863-c517-4306-af9e-7e320ce0d914.png",
    youtubeId: "",
    bio: "Reno 911 star performing a bizarre, high-production tribute/comedy show singing The Smiths. A unique SF Sketchfest event.",
    tickets: "https://sfsketchfest.com/",
    festivalTitle: "Feldman's Fyre Karaoke",
    festivalPerk: "Earplugs (Limited Supply)",
    address: "859 O'Farrell St, San Francisco, CA 94109",
    price: "$45 - $75"
  },
  {
    id: "deep-dish",
    artist: "Deep Dish",
    date: "Sat Jan 24",
    venue: "Public Works",
    category: "Club",
    vibe: "Progressive House",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1171447964%2F564127626281%2F1%2Foriginal.20251120-202116",
    youtubeId: "E3eds2a5RcI",
    bio: "Grammy-winning duo (Dubfire & Sharam) reuniting. Legends of progressive house known for their 'Global Underground' mixes.",
    tickets: "https://publicsf.com/events",
    festivalTitle: "Watson-ella Headliner",
    festivalPerk: "Backstage access to the Coffee Machine",
    address: "161 Erie St, San Francisco, CA 94103",
    price: "$33 - $51"
  },
  {
    id: "mystery-guest",
    artist: "Mystery Guest (TBA)",
    date: "Sat Jan 24",
    venue: "TBA",
    category: "Club",
    vibe: "Surprise",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=3840",
    youtubeId: "",
    bio: "A legendary surprise guest to be announced on the day. Keep your eyes on the Slack.",
    tickets: "#",
    festivalTitle: "Watson-ella Secret Set",
    festivalPerk: "Early access info",
    address: "Secret Location, San Francisco",
    price: "TBA"
  },
  {
    id: "ray-volpe",
    artist: "Ray Volpe",
    date: "Sat Jan 24",
    venue: "Bill Graham Civic",
    category: "Concert",
    vibe: "Dubstep",
    image: "https://billgrahamcivic.com/wp-content/uploads/2025/08/RayVolpe_Web.jpg",
    youtubeId: "ctSk59McAJ4",
    bio: "Modern dubstep leader known for 'Laserbeam'. Blends heavy, aggressive bass with melodic elements and his own vocals.",
    tickets: "https://billgrahamcivic.com/",
    festivalTitle: "Watson-ella Laser Show",
    festivalPerk: "Free Sunglasses (Broken)",
    address: "99 Grove St, San Francisco, CA 94102",
    price: "$95 - $98"
  },
  {
    id: "austra",
    artist: "Austra",
    date: "Sat Jan 24",
    venue: "The Independent",
    category: "Concert",
    vibe: "Synth-pop",
    image: "https://i.ticketweb.com/i/00/13/21/99/63_Edp.jpg",
    youtubeId: "XAbaKHmqXs4",
    bio: "Majestic synth-pop and dark wave defined by operatic vocals and lush electronic arrangements. Dreamy and trance-like.",
    tickets: "https://theindependentsf.com/",
    festivalTitle: "Watson-ella Dreamscape",
    festivalPerk: "Access to Watson's private Slack",
    address: "628 Divisadero St, San Francisco, CA 94117",
    price: "$73"
  },
  {
    id: "mxpx",
    artist: "MxPx",
    date: "Sat Jan 24",
    venue: "The Fillmore",
    category: "Concert",
    vibe: "Pop Punk",
    image: "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/28774428/d19371a5-41d7-48cd-983c-46f99096a81c.jpg",
    youtubeId: "hS28zgLLMhk",
    bio: "Pop-punk cornerstones since 1992. Fast-paced, infectious anthems at SF's most historic venue.",
    tickets: "https://www.livenation.com/",
    festivalTitle: "Watson-ella Nostalgia Trip",
    festivalPerk: "Vintage 2026 wristband",
    address: "1805 Geary Blvd, San Francisco, CA 94115",
    price: "$62 - $81"
  },
  {
    id: "ecstatic",
    artist: "Ecstatic Dance SF",
    date: "Sun Jan 25",
    venue: "The Center SF",
    category: "Dance",
    vibe: "Conscious Dance",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1173698129%2F57558423205%2F1%2Foriginal.20251230-073331",
    youtubeId: "",
    bio: "Sunday morning movement meditation. DJ Izzy Wise. No shoes, no booze, no talking. 10AM Start.",
    tickets: "https://www.eventbrite.com/",
    festivalTitle: "Burning Dima Sunrise Ritual",
    festivalPerk: "Free Sunscreen (SPF 15 only)",
    address: "764 Laguna St, San Francisco, CA 94102",
    price: "$25"
  },
  {
    id: "seahaven",
    artist: "Seahaven",
    date: "Sun Jan 25",
    venue: "The Chapel",
    category: "Concert",
    vibe: "Indie/Emo",
    image: "https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/28206884/5766ed3a-5fc7-4f04-83da-c42154f0fb5a.png",
    youtubeId: "9ibj6MKL_eA",
    bio: "Atmospheric indie rock with raw emo influences. Performing 'Winter Forever' at a converted church venue.",
    tickets: "https://thechapelsf.com/",
    festivalTitle: "Burning Dima Closing Act",
    festivalPerk: "Personalized 'Why?' from Dima",
    address: "777 Valencia St, San Francisco, CA 94110",
    price: "$25 - $30"
  }
];

export const siteMeta = {
  sponsoredBy: "OLO",
  fueledBy: "Dumplings",
  createdBy: "Fourth Owl Digital"
};
