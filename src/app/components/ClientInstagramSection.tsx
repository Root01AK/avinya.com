"use client";
import { useEffect, useState } from "react";

/* ✅ EXTEND WINDOW TYPE */
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

type Client = {
  id: number;
  name: string;
  instagramUrl: string;
  category: string;
};

const clientsData: Client[] = [
  {
    id: 1,
    name: "Dumont.lakeway",
    instagramUrl: "https://www.instagram.com/dumont.lakeway/?igsh=Y2plNngyeGl6bnk3#",
    category: "Hotel",
  },
  {
    id: 2,
    name: "Dumont.cedarpark",
    instagramUrl: "https://www.instagram.com/dumont.cedarpark/?igsh=MWE4eGFuY3YyZWE0dQ%3D%3D#",
    category: "Restaurant",
  },
  {
    id: 3,
    name: "House of Chettinad",
    instagramUrl: "https://www.instagram.com/houseofchettinad_/?igsh=M250bTVveWJwanpm#",
    category: "Retail",
  },
  {
    id: 4,
    name: "Tuff Puff",
    instagramUrl: "https://www.instagram.com/tuffpuffsmokenvape/?igsh=MTV6dXNyZW8zYnp2Ng%3D%3D#",
    category: "Renovation",
  },
    {
    id: 5,
    name: "Sangam Chettinad",
    instagramUrl: "https://www.instagram.com/austinsangam/?igsh=OG9lMXc2Z2xtejFt#",
    category: "Renovation",
  },
    {
    id: 6,
    name: "Island Riddim Grill",
    instagramUrl: "https://www.instagram.com/islandriddimgrill?igsh=MWJldTZteGpzODRzbw==",
    category: "Renovation",
  },
    {
    id: 7,
    name: "Kizza Pizza",
    instagramUrl: "https://www.instagram.com/kizzacedarpark?igsh=cWcybGk4YzVhZ2ow",
    category: "Renovation",
  },
];

export default function ClientInstagramSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Load Instagram embed script safely
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    }
  }, []);

  const filtered =
    activeCategory === "All"
      ? clientsData
      : clientsData.filter((c) => c.category === activeCategory);

  return (
    <section className="client-section">
      <h2 className="client-title">Our Clients on Instagram</h2>
      <p className="client-subtitle">
        Real projects. Real brands. Real results.
      </p>

      {/* FILTER BAR */}
      <div className="client-filters">
        {["All", "Retail", "Restaurant", "Renovation", "Hotel"].map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="client-grid">
        {filtered.map((client) => (
          <div key={client.id} className="client-card">
            <h3>{client.name}</h3>

            <blockquote
              className="instagram-media"
              data-instgrm-permalink={client.instagramUrl}
              data-instgrm-version="14"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
