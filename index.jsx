import { useState } from "react";

const categories = [
  {
    id: "movies",
    icon: "🎬",
    label: "Movies & TV",
    color: "#FF4D4D",
    glow: "#FF4D4D44",
    sources: [
      {
        name: "Internet Archive – Films",
        url: "https://archive.org/details/movies",
        best: "Public domain classics, cult films, silent era, B-movies",
        bookmark: 'site:archive.org "feature film" OR "full movie"',
      },
      {
        name: "Pluto TV",
        url: "https://pluto.tv",
        best: "Free ad-supported live TV + VOD. Movies, news, reality, niche channels",
        bookmark: "pluto.tv movies channels free",
      },
      {
        name: "Tubi",
        url: "https://tubitv.com",
        best: "Huge free library — Hollywood films, TV series, anime, Bollywood",
        bookmark: "tubitv.com free movies TV shows",
      },
      {
        name: "Kanopy (via library)",
        url: "https://www.kanopy.com",
        best: "Art-house, indie, documentaries, The Criterion Collection — free with library card",
        bookmark: "kanopy.com criterion indie documentary",
      },
      {
        name: "Plex",
        url: "https://watch.plex.tv",
        best: "Free tier: thousands of movies & shows, live TV, Plex originals",
        bookmark: "watch.plex.tv free movies",
      },
      {
        name: "Peacock Free Tier",
        url: "https://www.peacocktv.com",
        best: "NBC classics, WWE, news, select Originals without subscription",
        bookmark: "peacocktv.com free tier shows",
      },
      {
        name: "YouTube – Free Movies",
        url: "https://www.youtube.com/feed/storefront?bp=ogUgmgI",
        best: "Google-licensed free movies with ads — genres: action, comedy, horror",
        bookmark: 'youtube.com "free with ads" movies full',
      },
      {
        name: "Crackle",
        url: "https://www.crackle.com",
        best: "Sony-backed free platform — Hollywood films, originals, TV",
        bookmark: "crackle.com free movies Hollywood originals",
      },
      {
        name: "Hoopla (via library)",
        url: "https://www.hoopladigital.com",
        best: "Comics, movies, music, audiobooks — zero waitlist with library card",
        bookmark: "hoopladigital.com library card movies TV",
      },
    ],
  },
  {
    id: "music",
    icon: "🎵",
    label: "Music & Radio",
    color: "#FF9A3C",
    glow: "#FF9A3C44",
    sources: [
      {
        name: "Spotify Free",
        url: "https://open.spotify.com",
        best: "Full catalog, shuffle/radio mode, daily mixes, podcasts — ad-supported",
        bookmark: "open.spotify.com daily mix radio free",
      },
      {
        name: "YouTube Music Free",
        url: "https://music.youtube.com",
        best: "Deep catalog including rare/live tracks, auto-generated radio stations",
        bookmark: "music.youtube.com free radio auto-mix",
      },
      {
        name: "Internet Archive – Audio",
        url: "https://archive.org/details/audio",
        best: "Grateful Dead, live concerts, old-time radio, historical recordings",
        bookmark: 'site:archive.org "live music" OR "concert" free download',
      },
      {
        name: "Radio Garden",
        url: "https://radio.garden",
        best: "Spin the globe and tune into real radio stations worldwide in real-time",
        bookmark: "radio.garden live world radio globe",
      },
      {
        name: "SomaFM",
        url: "https://somafm.com",
        best: "Curated ad-free indie internet radio — Drone Zone, Groove Salad, etc.",
        bookmark: "somafm.com channels groove salad drone zone",
      },
      {
        name: "Free Music Archive",
        url: "https://freemusicarchive.org",
        best: "Legally downloadable music under Creative Commons — all genres",
        bookmark: "freemusicarchive.org creative commons download genre",
      },
      {
        name: "Bandcamp",
        url: "https://bandcamp.com",
        best: "Stream albums free before buying. Best for indie, metal, experimental",
        bookmark: "bandcamp.com name-your-price free stream indie",
      },
      {
        name: "BBC Radio (Global)",
        url: "https://www.bbc.co.uk/sounds",
        best: "BBC Radio 1/2/3/6 — live + on-demand. Jazz, classical, pop, world music",
        bookmark: "bbc.co.uk/sounds radio 6music live jazz",
      },
    ],
  },
  {
    id: "podcasts",
    icon: "🎙️",
    label: "Podcasts & Audiobooks",
    color: "#A78BFA",
    glow: "#A78BFA44",
    sources: [
      {
        name: "Spotify Podcasts",
        url: "https://open.spotify.com/genre/podcasts-page",
        best: "Largest podcast catalog. True crime, science, comedy, tech, culture",
        bookmark: "open.spotify.com podcasts true-crime science tech",
      },
      {
        name: "Apple Podcasts Web",
        url: "https://podcasts.apple.com",
        best: "Every major podcast, free web playback — good for discovery",
        bookmark: "podcasts.apple.com browse top charts",
      },
      {
        name: "Pocket Casts Web",
        url: "https://play.pocketcasts.com",
        best: "Free-tier cross-platform podcast player. Clean UI, excellent filters",
        bookmark: "play.pocketcasts.com discover trending",
      },
      {
        name: "Internet Archive – Audio Books",
        url: "https://archive.org/details/audiobooks",
        best: "LibriVox + other public domain audiobooks — classics, Sherlock, Dickens",
        bookmark: 'site:archive.org librivox audiobook "full book"',
      },
      {
        name: "LibriVox",
        url: "https://librivox.org",
        best: "Volunteer-read public domain audiobooks — massive, fully free, no DRM",
        bookmark: "librivox.org free audiobook download public domain",
      },
      {
        name: "Loyal Books",
        url: "https://www.loyalbooks.com",
        best: "Curated free audiobooks & ebooks — better browsing UI than LibriVox",
        bookmark: "loyalbooks.com free audiobook classic fiction",
      },
      {
        name: "Hoopla Audiobooks",
        url: "https://www.hoopladigital.com/browse?kind=AUDIOBOOK",
        best: "Current bestsellers & new releases free with library card — no waitlist",
        bookmark: "hoopladigital.com audiobooks new releases no waitlist",
      },
      {
        name: "Project Gutenberg + Audacity",
        url: "https://www.gutenberg.org",
        best: "70k+ free ebooks. Pair with TTS for DIY audiobook of any classic",
        bookmark: "gutenberg.org ebook public domain TTS text-to-speech",
      },
    ],
  },
  {
    id: "games",
    icon: "🎮",
    label: "Games & Interactive",
    color: "#34D399",
    glow: "#34D39944",
    sources: [
      {
        name: "itch.io – Free Games",
        url: "https://itch.io/games/free",
        best: "Indie treasure trove — horror, RPG, visual novels, jams, weird stuff",
        bookmark: "itch.io/games/free top-rated indie horror RPG",
      },
      {
        name: "Internet Archive – MS-DOS Games",
        url: "https://archive.org/details/softwarelibrary_msdos_games",
        best: "Play 7000+ DOS classics in browser — Doom, Quake, Commander Keen",
        bookmark: 'site:archive.org "ms-dos" games play browser free',
      },
      {
        name: "ClassicReload",
        url: "https://classicreload.com",
        best: "Browser-playable classic PC games — DOS, Windows 3.1 era",
        bookmark: "classicreload.com browser dos windows classic play",
      },
      {
        name: "Poki",
        url: "https://poki.com",
        best: "High-quality browser games — racing, puzzle, action, multiplayer",
        bookmark: "poki.com free browser games multiplayer puzzle",
      },
      {
        name: "Epic Games Free Tier",
        url: "https://store.epicgames.com/en-US/free-games",
        best: "Weekly free AAA game giveaways — keep them forever",
        bookmark: "store.epicgames.com free-games weekly giveaway",
      },
      {
        name: "Steam Free to Play",
        url: "https://store.steampowered.com/genre/Free%20to%20Play",
        best: "Dota 2, TF2, Warframe, Path of Exile — legit F2P with no BS",
        bookmark: "store.steampowered.com free-to-play top-rated",
      },
      {
        name: "GOG Free Games",
        url: "https://www.gog.com/en/games?priceRange=0,0",
        best: "DRM-free free games — regularly updated, classics included",
        bookmark: "gog.com free games DRM-free filter price:0",
      },
      {
        name: "Newgrounds",
        url: "https://www.newgrounds.com/games",
        best: "Flash-era games (now HTML5), indie shooters, animation, adult games",
        bookmark: "newgrounds.com games top-rated adult indie browser",
      },
    ],
  },
  {
    id: "docs",
    icon: "🧠",
    label: "Documentaries & Education",
    color: "#38BDF8",
    glow: "#38BDF844",
    sources: [
      {
        name: "YouTube – Documentaries",
        url: "https://www.youtube.com/results?search_query=full+documentary+free",
        best: "Vast free library — nature, history, true crime, tech, space",
        bookmark: 'youtube.com "full documentary" OR "BBC documentary" free 2023 2024',
      },
      {
        name: "Documentary Heaven",
        url: "https://documentaryheaven.com",
        best: "Curated documentary index with descriptions — links to free streams",
        bookmark: "documentaryheaven.com best documentaries history nature",
      },
      {
        name: "Top Documentary Films",
        url: "https://topdocumentaryfilms.com",
        best: "Rated and categorized — science, conspiracy, crime, politics, religion",
        bookmark: "topdocumentaryfilms.com top-rated science politics free",
      },
      {
        name: "Khan Academy",
        url: "https://www.khanacademy.org",
        best: "Math, science, economics, coding, SAT prep — fully free, no ads",
        bookmark: "khanacademy.org math computer science economics free",
      },
      {
        name: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu",
        best: "Full MIT course materials free — CS, physics, math, engineering",
        bookmark: "ocw.mit.edu computer science physics full course free",
      },
      {
        name: "Coursera Audit Mode",
        url: "https://www.coursera.org",
        best: "Audit most courses for free — Google certs, ML, data science",
        bookmark: 'coursera.org "audit" free machine-learning data-science certificate',
      },
      {
        name: "Smithsonian Channel Free",
        url: "https://www.smithsonianchannel.com/full-episodes",
        best: "History, space, science docs — full episodes free on site",
        bookmark: "smithsonianchannel.com full-episodes free history space",
      },
      {
        name: "NASA+ Streaming",
        url: "https://plus.nasa.gov",
        best: "Live launches, mission docs, space science — completely free, no ads",
        bookmark: "plus.nasa.gov free live launch documentary science",
      },
      {
        name: "CuriosityStream Free Tier",
        url: "https://curiositystream.com",
        best: "Select free docs on science, nature, tech — no CC needed for free tier",
        bookmark: "curiositystream.com free documentary science nature",
      },
    ],
  },
];

export default function EntertainmentDashboard() {
  const [activeCategory, setActiveCategory] = useState("movies");
  const [copiedIdx, setCopiedIdx] = useState(null);

  const current = categories.find((c) => c.id === activeCategory);

  const copyBookmark = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1800);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
      color: "#e8e8f0",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .grain {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
        }

        .header {
          position: relative; z-index: 2;
          padding: 48px 40px 32px;
          border-bottom: 1px solid #1a1a2e;
        }

        .header-eyebrow {
          font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #555580;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 10px;
        }

        .header-title {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800; line-height: 1;
          background: linear-gradient(135deg, #e8e8f0 40%, #888899);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .header-sub {
          font-size: 14px; color: #44445a; font-weight: 400;
          font-family: 'JetBrains Mono', monospace;
        }

        .layout {
          position: relative; z-index: 2;
          display: flex; gap: 0;
          min-height: calc(100vh - 140px);
        }

        .sidebar {
          width: 220px; flex-shrink: 0;
          border-right: 1px solid #1a1a2e;
          padding: 28px 0;
          position: sticky; top: 0; height: calc(100vh - 140px);
          overflow-y: auto;
        }

        .sidebar-label {
          font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; color: #333355;
          padding: 0 24px 12px;
          font-family: 'JetBrains Mono', monospace;
        }

        .cat-btn {
          width: 100%; padding: 14px 24px;
          background: none; border: none; cursor: pointer;
          text-align: left; display: flex; align-items: center; gap: 12px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600;
          color: #44445a; transition: all 0.18s ease;
          border-left: 2px solid transparent;
          position: relative;
        }

        .cat-btn:hover { color: #c0c0d8; background: #0f0f1a; }

        .cat-btn.active {
          color: #e8e8f0;
          border-left-color: var(--accent);
          background: linear-gradient(90deg, var(--glow) 0%, transparent 80%);
        }

        .cat-icon { font-size: 18px; width: 24px; text-align: center; }
        .cat-count {
          margin-left: auto; font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: #333355;
        }
        .cat-btn.active .cat-count { color: var(--accent); opacity: 0.7; }

        .main { flex: 1; padding: 36px 40px; overflow-y: auto; }

        .section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 32px;
        }

        .section-icon { font-size: 32px; }

        .section-title {
          font-size: 28px; font-weight: 800;
          color: var(--accent);
        }

        .section-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #333355;
          background: #0f0f1a; border: 1px solid #1a1a2e;
          padding: 4px 10px; border-radius: 20px;
          margin-left: auto;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
        }

        .card {
          background: #0d0d18;
          border: 1px solid #1a1a2e;
          border-radius: 12px;
          padding: 22px;
          transition: all 0.2s ease;
          position: relative; overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .card:hover {
          border-color: #2a2a40;
          background: #0f0f1e;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px var(--glow);
        }

        .card:hover::before { opacity: 0.6; }

        .card-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 12px; margin-bottom: 10px;
        }

        .card-name {
          font-size: 15px; font-weight: 700; color: #d0d0e8;
          text-decoration: none;
          transition: color 0.15s;
        }

        .card-name:hover { color: var(--accent); }

        .card-link-icon {
          font-size: 12px; color: #333355; flex-shrink: 0; margin-top: 3px;
        }

        .card-best {
          font-size: 12.5px; color: #5a5a78; line-height: 1.6;
          margin-bottom: 14px;
        }

        .bookmark-row {
          display: flex; align-items: center; gap: 8px;
          background: #080810; border: 1px solid #18182a;
          border-radius: 7px; padding: 9px 12px;
        }

        .bookmark-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: #333355; flex-shrink: 0;
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        .bookmark-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px; color: #606085; flex: 1;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        .copy-btn {
          background: none; border: none; cursor: pointer;
          font-size: 12px; padding: 2px 6px;
          border-radius: 4px; flex-shrink: 0;
          transition: all 0.15s;
          color: #333355;
          font-family: 'JetBrains Mono', monospace;
        }

        .copy-btn:hover { color: var(--accent); background: #1a1a2e; }
        .copy-btn.copied { color: #34D399; }

        .footer-note {
          margin-top: 40px; padding: 20px;
          border: 1px solid #1a1a2e; border-radius: 10px;
          background: #08080f;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #2a2a40;
          line-height: 1.7;
        }

        .footer-note span { color: #444460; }

        @media (max-width: 700px) {
          .header { padding: 28px 20px 20px; }
          .sidebar { display: none; }
          .main { padding: 24px 16px; }
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="grain" />

      <header className="header">
        <div className="header-eyebrow">// personal entertainment OS</div>
        <div className="header-title">Free Stack Dashboard</div>
        <div className="header-sub">100% legal · 0% subscriptions needed · bookmark-ready</div>
      </header>

      <div className="layout">
        <nav className="sidebar">
          <div className="sidebar-label">Categories</div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn${activeCategory === cat.id ? " active" : ""}`}
              style={{ "--accent": cat.color, "--glow": cat.glow }}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              {cat.label}
              <span className="cat-count">{cat.sources.length}</span>
            </button>
          ))}
        </nav>

        <main className="main" style={{ "--accent": current.color, "--glow": current.glow }}>
          <div className="section-header">
            <span className="section-icon">{current.icon}</span>
            <span className="section-title">{current.label}</span>
            <span className="section-count">{current.sources.length} sources</span>
          </div>

          <div className="cards-grid">
            {current.sources.map((s, idx) => (
              <div className="card" key={idx}>
                <div className="card-header">
                  <a
                    className="card-name"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.name}
                  </a>
                  <span className="card-link-icon">↗</span>
                </div>
                <div className="card-best">{s.best}</div>
                <div className="bookmark-row">
                  <span className="bookmark-label">BKM</span>
                  <span className="bookmark-text" title={s.bookmark}>{s.bookmark}</span>
                  <button
                    className={`copy-btn${copiedIdx === `${activeCategory}-${idx}` ? " copied" : ""}`}
                    onClick={() => copyBookmark(s.bookmark, `${activeCategory}-${idx}`)}
                  >
                    {copiedIdx === `${activeCategory}-${idx}` ? "✓" : "copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="footer-note">
            <span>LEGAL STATUS:</span> All sources listed are either fully free, ad-supported, public domain, Creative Commons, or require only a free library card. Epic Games giveaways are permanently owned once claimed. Kanopy/Hoopla require a free library card — get one at your local library's website. Coursera audit mode is free; only certificates cost money.
          </div>
        </main>
      </div>
    </div>
  );
}
