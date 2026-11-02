
import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles
} from "lucide-react";

import rocket from "../assets/rocket.png";
import flowerpot from "../assets/flowerpot.png";
import chakri from "../assets/chakri.png";
import sparklers from "../assets/sparklers.png";
import groundChakkar from "../assets/ground-chakkar.png";

import "./FireworksCarousel.css";

const items = [
  {
    name: "Rocket",
    category: "SKY COLLECTION",
    description: "A colorful festive sky-inspired design for your Diwali celebration.",
    image: rocket,
    color: "#ff794f"
  },
  {
    name: "Flower Pot",
    category: "GLOW COLLECTION",
    description: "A bright and beautiful festive favorite with a golden glow.",
    image: flowerpot,
    color: "#ffc65b"
  },
  {
    name: "Chakri",
    category: "SPIN COLLECTION",
    description: "A playful circular design that adds color to the festive collection.",
    image: chakri,
    color: "#a78bfa"
  },
  {
    name: "Sparklers",
    category: "SPARK COLLECTION",
    description: "A golden sparkling visual for those special festive moments.",
    image: sparklers,
    color: "#54d6c2"
  },
  {
    name: "Ground Chakkar",
    category: "FESTIVE COLLECTION",
    description: "A vibrant circular festive design with a colorful look.",
    image: groundChakkar,
    color: "#ff78a8"
  }
];

export default function FireworksCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [playing]);

  const current = items[active];

  return (
    <section
      className="spark-fireworks-section"
      style={{ "--firework-accent": current.color }}
    >
      <div className="spark-fireworks-heading">
        <span className="spark-fireworks-kicker">
          <Sparkles size={14} />
          THE FESTIVE FIREWORKS EDIT
        </span>

        <h2>
          A little more <em>sparkle.</em>
        </h2>

        <p>
          Explore the colors and magic of our festive collection.
        </p>
      </div>

      <div className="spark-carousel-stage">
        <div className="spark-carousel-glow" />

        <div className="spark-carousel">
          {items.map((item, index) => {
            const position =
              (index - active + items.length) % items.length;

            const offsets = [0, 1, 2, -2, -1];
            const offset = offsets[position];

            return (
              <button
                type="button"
                key={item.name}
                className={`spark-carousel-card ${
                  active === index ? "spark-card-active" : ""
                }`}
                style={{
                  "--card-offset": offset,
                  "--card-depth": position === 0 ? "100px" : "-70px",
                  "--card-rotation":
                    position === 0
                      ? "0deg"
                      : position === 1
                      ? "-25deg"
                      : position === 2
                      ? "-40deg"
                      : position === 3
                      ? "40deg"
                      : "25deg",
                      "--card-x": `${offset * (window.innerWidth < 700 ? 115 : 310)}px`,
zIndex: position === 0 ? 10 : 5 - position,
                  "--card-scale":
                    position === 0
                      ? "1"
                      : position === 1 || position === 4
                      ? ".68"
                      : ".48"
                      
                }}
                onClick={() => setActive(index)}
                aria-label={`Select ${item.name}`}
              >
                <img src={item.image} alt={item.name} />

                <span className="spark-card-number">
                  0{index + 1}
                </span>
              </button>
            );
          })}
        </div>

        <div className="spark-carousel-arrows">
          <button onClick={previous} aria-label="Previous">
            <ChevronLeft size={23} />
          </button>

          <button onClick={next} aria-label="Next">
            <ChevronRight size={23} />
          </button>
        </div>
      </div>

      <div className="spark-carousel-details">
        <div className="spark-current-info" key={current.name}>
          <span>{current.category}</span>
          <h3>{current.name}</h3>
          <p>{current.description}</p>
        </div>

        <div className="spark-carousel-counter">
          <span>0{active + 1}</span>
          <div>
            <i
              style={{
                width: `${((active + 1) / items.length) * 100}%`
              }}
            />
          </div>
          <span>05</span>
        </div>
      </div>

      <div className="spark-carousel-bottom">
        <div className="spark-carousel-names">
          {items.map((item, index) => (
            <button
              key={item.name}
              className={active === index ? "spark-name-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              {item.name}
            </button>
          ))}
        </div>

        <button
          className="spark-autoplay"
          onClick={() => setPlaying((prev) => !prev)}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </section>
  );
}
