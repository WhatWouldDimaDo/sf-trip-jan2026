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
    festivalPerk: "VIP Luxury Tent (Cardboard box with view)"
  },
  {
    id: "carl-craig",
    artist: "Detroit Love (Carl Craig)",
    date: "Fri Jan 23",
    venue: "Public Works",
    category: "Club",
    vibe: "Techno Legend",
    image: "https://publicsf.com/wp-content/uploads/2023/05/23.jpg",
    youtubeId: "gbXWLRLDh7Y",
    bio: "Pioneer of the second wave of Detroit techno. His 'Detroit Love' project celebrates the city's rich electronic heritage.",
    tickets: "https://publicsf.com/events",
    festivalTitle: "Bio-Hack-A-Thon Afterparty",
    festivalPerk: "Unlimited Soylent & Cold Plunges"
  },
  {
    id: "ship-wrek",
    artist: "Ship Wrek",
    date: "Fri Jan 23",
    venue: "1015 Folsom",
    category: "Club",
    vibe: "Tech House",
    image: "https://1015.com/wp-content/uploads/2023/08/Venue-Photos-1015-Folsom-56-scaled.jpg",
    youtubeId: "u9qmYUHee3c",
    bio: "High-energy tech house duo known for high-octane festival performances and a signature sound that dominates the club scene.",
    tickets: "https://1015.com/events",
    festivalTitle: "Feldman's Fyre Mainstage",
    festivalPerk: "Signed Cheese Sandwich (NFT)"
  },
  {
    id: "einmusik",
    artist: "Einmusik",
    date: "Fri Jan 23",
    venue: "Halcyon",
    category: "Club",
    vibe: "Melodic Techno",
    image: "https://images.unsplash.com/photo-1574169208507-84376194878d?q=80&w=3840",
    youtubeId: "3cHC7nnHd6g",
    bio: "Berlin-based producer recognized for atmospheric and melodic techno. His soundscapes blend deep house with intricate melodies.",
    tickets: "https://halcyon-sf.com/",
    festivalTitle: "Y-Combinator-Con Deep Work",
    festivalPerk: "Equity-based drinks (0.01% per sip)"
  },
  {
    id: "thomas-lennon",
    artist: "Thomas Lennon Sings The Smiths",
    date: "Fri Jan 23",
    venue: "Great American Music Hall",
    category: "Comedy",
    vibe: "Tribute/Comedy",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/The_Fillmore.jpg",
    youtubeId: "",
    bio: "Reno 911 star performing a bizarre, high-production tribute/comedy show singing The Smiths. A unique SF Sketchfest event.",
    tickets: "https://sfsketchfest.com/",
    festivalTitle: "Feldman's Fyre Karaoke",
    festivalPerk: "Earplugs (Limited Supply)"
  },
  {
    id: "deep-dish",
    artist: "Deep Dish",
    date: "Sat Jan 24",
    venue: "Public Works",
    category: "Club",
    vibe: "Progressive House",
    image: "https://publicsf.com/wp-content/uploads/2023/05/3.jpg",
    youtubeId: "E3eds2a5RcI",
    bio: "Grammy-winning duo (Dubfire & Sharam) reuniting. Legends of progressive house known for their 'Global Underground' mixes.",
    tickets: "https://publicsf.com/events",
    festivalTitle: "Watson-ella Headliner",
    festivalPerk: "Backstage access to the Coffee Machine"
  },
  {
    id: "ray-volpe",
    artist: "Ray Volpe",
    date: "Sat Jan 24",
    venue: "Bill Graham Civic",
    category: "Concert",
    vibe: "Dubstep",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bill_Graham_Civic_Auditorium_%28San_Francisco%29.JPG",
    youtubeId: "ctSk59McAJ4",
    bio: "Modern dubstep leader known for 'Laserbeam'. Blends heavy, aggressive bass with melodic elements and his own vocals.",
    tickets: "https://billgrahamcivic.com/",
    festivalTitle: "Watson-ella Laser Show",
    festivalPerk: "Free Sunglasses (Broken)"
  },
  {
    id: "austra",
    artist: "Austra",
    date: "Sat Jan 24",
    venue: "The Independent",
    category: "Concert",
    vibe: "Synth-pop",
    image: "https://images.squarespace-cdn.com/content/v1/62412e669e45ef6f3383b2f6/7274a8be-8039-4dc4-80e8-7fe624f5022a/The-Independent-SF-Venue-Stage-DDion.jpg",
    youtubeId: "XAbaKHmqXs4",
    bio: "Majestic synth-pop and dark wave defined by operatic vocals and lush electronic arrangements. Dreamy and trance-like.",
    tickets: "https://theindependentsf.com/",
    festivalTitle: "Watson-ella Dreamscape",
    festivalPerk: "Access to Watson's private Slack"
  },
  {
    id: "mxpx",
    artist: "MxPx",
    date: "Sat Jan 24",
    venue: "The Fillmore",
    category: "Concert",
    vibe: "Pop Punk",
    image: "https://images.squarespace-cdn.com/content/v1/65b842a3deae47489794fadb/655e9953-d2b7-4f79-968e-c280ed94f086/San-Francisco-Unique-Venue-Event-Rental-Space-The-Fillmore-Auditorium-3+Header.jpg?format=2500w",
    youtubeId: "hS28zgLLMhk",
    bio: "Pop-punk cornerstones since 1992. Fast-paced, infectious anthems at SF's most historic venue.",
    tickets: "https://www.livenation.com/",
    festivalTitle: "Watson-ella Nostalgia Trip",
    festivalPerk: "Vintage 2026 wristband"
  },
  {
    id: "ecstatic",
    artist: "Ecstatic Dance SF",
    date: "Sun Jan 25",
    venue: "The Center SF",
    category: "Dance",
    vibe: "Conscious Dance",
    image: "https://images.squarespace-cdn.com/content/v1/560c702ae4b0fdd5d69e6f79/9f4f43b9-0411-4dfb-bf96-c3815c4c965b/MoonMedicine_forreel-71.jpg",
    youtubeId: "",
    bio: "Sunday morning movement meditation. DJ Izzy Wise. No shoes, no booze, no talking. 10AM Start.",
    tickets: "https://www.eventbrite.com/",
    festivalTitle: "Burning Dima Sunrise Ritual",
    festivalPerk: "Free Sunscreen (SPF 15 only)"
  },
  {
    id: "seahaven",
    artist: "Seahaven",
    date: "Sun Jan 25",
    venue: "The Chapel",
    category: "Concert",
    vibe: "Indie/Emo",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3726?q=80&w=3840",
    youtubeId: "9ibj6MKL_eA",
    bio: "Atmospheric indie rock with raw emo influences. Performing 'Winter Forever' at a converted church venue.",
    tickets: "https://thechapelsf.com/",
    festivalTitle: "Burning Dima Closing Act",
    festivalPerk: "Personalized 'Why?' from Dima"
  }
];
