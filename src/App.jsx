
import React, { useEffect, useMemo, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Heart,
  Search,
  Plus,
  Minus,
  Trash2,
  Star,
  Truck,
  ShieldCheck,
  Gift,
  Flame
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import "./style.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Golden Diya Collection",
    category: "Diyas",
    price: 899,
    oldPrice: 1299,
    badge: "BESTSELLER",
    rating: "4.9",
    description: "Hand-finished golden diyas that bring a warm festive glow to every corner of your home.",
    image: `${import.meta.env.BASE_URL}images/products/golden-diya.jpg`,
    accent: "#e8b65d"
  },
  {
    id: 2,
    name: "Festive LED Lights",
    category: "Lighting",
    price: 649,
    oldPrice: 999,
    badge: "GLOW PICK",
    rating: "4.8",
    description: "A beautiful cascade of warm lights for balconies, windows and celebration spaces.",
    image: `${import.meta.env.BASE_URL}images/products/festive-led-lights.jpg`,
    accent: "#f3d47b"
  },
  {
    id: 3,
    name: "Royal Diwali Gift Box",
    category: "Gift Hampers",
    price: 1499,
    oldPrice: 1999,
    badge: "GIFT FAVOURITE",
    rating: "5.0",
    description: "A thoughtfully curated festive gift box, made to turn every little moment into a memory.",
    image: `${import.meta.env.BASE_URL}images/products/royal-gift-box.jpg`,
    accent: "#dba34f"
  },
  {
    id: 4,
    name: "Marigold Decor Set",
    category: "Decorations",
    price: 499,
    oldPrice: 799,
    badge: "NEW ARRIVAL",
    rating: "4.7",
    description: "Vibrant marigold-inspired decor to give your doorway and celebrations a joyful welcome.",
    image: `${import.meta.env.BASE_URL}images/products/marigold-decor.jpg`,
    accent: "#f28c35"
  },
  {
    id: 5,
    name: "Premium Rangoli Kit",
    category: "Decorations",
    price: 399,
    oldPrice: 599,
    badge: "FESTIVE PICK",
    rating: "4.8",
    description: "Create colourful festive patterns with an easy-to-use rangoli kit for your home entrance.",
    image: `${import.meta.env.BASE_URL}images/products/rangoli-kit.jpg`,
    accent: "#db72a5"
  },
  {
    id: 6,
    name: "Celebration Hamper",
    category: "Gift Hampers",
    price: 1899,
    oldPrice: 2499,
    badge: "LIMITED EDITION",
    rating: "4.9",
    description: "A premium celebration hamper filled with thoughtful festive treats and beautiful details.",
    image: `${import.meta.env.BASE_URL}images/products/celebration-hamper.jpg`,
    accent: "#9dbe78"
  },
  {
    id: 7,
    name: "Brass Pooja Thali",
    category: "Diyas",
    price: 1199,
    oldPrice: 1599,
    badge: "ARTISAN MADE",
    rating: "4.8",
    description: "A timeless brass thali set that adds an elegant touch to your festive rituals.",
    image: `${import.meta.env.BASE_URL}images/products/brass-pooja-thali.jpg`,
    accent: "#d7a54d"
  },
  {
    id: 8,
    name: "Starry Sky Curtain Lights",
    category: "Lighting",
    price: 799,
    oldPrice: 1199,
    badge: "TRENDING",
    rating: "4.9",
    description: "Turn an ordinary wall into a magical festive backdrop with soft starry curtain lights.",
       image: `${import.meta.env.BASE_URL}images/products/curtain-lights.jpg`,
    accent: "#8eb8d8"
  }
];

const CATEGORIES = [
  { name: "All", note: "Explore everything", symbol: "✦" },
  { name: "Diyas", note: "Light up traditions", symbol: "🪔" },
  { name: "Lighting", note: "Make it sparkle", symbol: "✨" },
  { name: "Decorations", note: "Dress your home", symbol: "🌼" },
  { name: "Gift Hampers", note: "Share the joy", symbol: "🎁" }
];

// FIREWORKS BACKGROUND

function FireworksBackground() {
  const bursts = [
    { x: 12, y: 17, delay: "0s", scale: 1 },
    { x: 83, y: 13, delay: "1.2s", scale: .8 },
    { x: 67, y: 42, delay: "2.1s", scale: .65 },
    { x: 22, y: 58, delay: "2.8s", scale: .75 },
    { x: 91, y: 72, delay: "1.7s", scale: .9 },
    { x: 47, y: 85, delay: "3.3s", scale: .6 }
  ];

  return (
    <div className="fireworks-layer" aria-hidden="true">
      <svg
        className="fireworks-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="fireGlow">
            <stop stopColor="#ffd879" stopOpacity=".9" />
            <stop offset="1" stopColor="#ff9b35" stopOpacity="0" />
          </radialGradient>
        </defs>

        {bursts.map((b, index) => (
          <g
            key={index}
            className="firework-burst"
            style={{
              transformOrigin: `${b.x * 10}px ${b.y * 10}px`,
              animationDelay: b.delay,
              transform: `scale(${b.scale})`
            }}
          >
            <circle
              cx={b.x * 10}
              cy={b.y * 10}
              r="35"
              fill="url(#fireGlow)"
              opacity=".35"
            />

            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (Math.PI * 2 * i) / 16;

              const x1 = b.x * 10 + Math.cos(angle) * 9;
              const y1 = b.y * 10 + Math.sin(angle) * 9;

              const x2 =
                b.x * 10 + Math.cos(angle) * (24 + (i % 3) * 5);

              const y2 =
                b.y * 10 + Math.sin(angle) * (24 + (i % 3) * 5);

              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 2 ? "#ffbd59" : "#ffe9a7"}
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <circle
                    cx={x2}
                    cy={y2}
                    r="2"
                    fill="#fff0b5"
                  />
                </g>
              );
            })}
          </g>
        ))}

        <g className="sparkle-drift" fill="#ffd477">
          {Array.from({ length: 35 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 137) % 1000}
              cy={(i * 83) % 1000}
              r={i % 4 === 0 ? 2.2 : 1.1}
              opacity={.25 + (i % 5) * .12}
            />
          ))}
        </g>
      </svg>

      <div className="fireworks-vignette" />
    </div>
  );
}

// TYPE ON VIEW ANIMATION

function TypeOnView({ children, className = "" }) {
  const [visible, setVisible] = useState(false);

  const refCallback = (node) => {
    if (!node || node.dataset.observed) return;

    node.dataset.observed = "true";

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: .25 });

    observer.observe(node);
  };

  const text = String(children);

  return (
    <span
      ref={refCallback}
      className={`type-view ${visible ? "type-view-active" : ""} ${className}`}
      aria-label={text}
    >
      {Array.from(text).map((char, i) => (
        <span key={i} style={{ "--char-index": i }}>
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}

// REVEAL ANIMATION

function Reveal({
  children,
  className = "",
  side = "up",
  delay = 0
}) {
  const [shown, setShown] = useState(false);

  const refCallback = (node) => {
    if (!node || node.dataset.revealObserved) return;

    node.dataset.revealObserved = "true";

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, {
      threshold: .12,
      rootMargin: "0px 0px -35px 0px"
    });

    observer.observe(node);
  };

  return (
    <div
      ref={refCallback}
      className={`reveal reveal-${side} ${shown ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// PRODUCT CARD

function ProductCard({
  product,
  index,
  wished,
  onWish,
  onAdd
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal
      side={index % 2 === 0 ? "left" : "right"}
      delay={(index % 4) * 90}
    >
      <article
        className={`product-card ${flipped ? "product-card-flipped" : ""}`}
        style={{ "--card-accent": product.accent }}
      >
        <div className="flip-card-inner">

          {/* FRONT SIDE */}

          <div className="flip-face flip-front">
            <div className="product-card-top">
              <span className="product-badge">
                {product.badge}
              </span>

              <button
                className={`wish-button ${wished ? "wish-active" : ""}`}
                onClick={() => onWish(product.id)}
                aria-label="Toggle wishlist"
              >
                <Heart
                  size={17}
                  fill={wished ? "currentColor" : "none"}
                />
              </button>
            </div>

            <div className="product-art-placeholder">
              <div className="placeholder-orbit" />

              <span className="placeholder-symbol">
                {product.category === "Diyas" ? "🪔" :
                  product.category === "Lighting" ? "✨" :
                    product.category === "Gift Hampers" ? "🎁" : "🌼"}
              </span>

              <small>YOUR PRODUCT IMAGE</small>

              <span className="image-path-hint">
                {product.image}
              </span>
            </div>

            <div className="product-info">
              <div className="product-meta">
                <span>{product.category}</span>

                <span className="rating">
                  <Star size={12} fill="currentColor" />
                  {product.rating}
                </span>
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="product-bottom">
                <div>
                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <del>
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </del>
                </div>

                <button
                  className="add-button"
                  onClick={() => onAdd(product)}
                >
                  <Plus size={17} />
                  Add
                </button>
              </div>

              <button
                className="flip-hint"
                onClick={() => setFlipped(true)}
              >
                Hover to reveal image
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

          {/* BACK SIDE */}

          <div className="flip-face flip-back">
            <div className="back-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";

                  e.currentTarget.nextSibling.style.display = "grid";
                }}
              />

              <div className="image-fallback">
                <span>
                  {product.category === "Diyas" ? "🪔" :
                    product.category === "Lighting" ? "✨" :
                      product.category === "Gift Hampers" ? "🎁" : "🌼"}
                </span>

                <b>Add your image</b>

                <small>{product.image}</small>
              </div>

              <div className="back-shade" />

              <span className="back-label">
                SPARKORA • FESTIVE EDITION
              </span>

              <div className="back-copy">
                <small>MADE FOR THE MOMENT</small>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <button onClick={() => onAdd(product)}>
                  Add to bag
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <button
              className="flip-back-button"
              onClick={() => setFlipped(false)}
              aria-label="Flip card back"
            >
              <ArrowUpRight size={16} />
              Back
            </button>
          </div>

        </div>
      </article>
    </Reveal>
  );
}

// MAIN APP

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // LOADING SCREEN

  useEffect(() => {
    const timer = window.setTimeout(
      () => setLoading(false),
      5000
    );

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      "sparkora-lock",
      loading
    );

    return () => {
      document.body.classList.remove("sparkora-lock");
    };
  }, [loading]);

  // SEARCH AND CATEGORY FILTER

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  // CART TOTALS

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // TOAST MESSAGE

  function showToast(message) {
    setToast(message);

    window.clearTimeout(showToast.timer);

    showToast.timer = window.setTimeout(
      () => setToast(""),
      2400
    );
  }

  // ADD TO CART

  function addToCart(product) {
    setCart((old) => {
      const exists = old.find(
        (item) => item.id === product.id
      );

      return exists
        ? old.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          )
        : [
            ...old,
            {
              ...product,
              quantity: 1
            }
          ];
    });

    showToast(`${product.name} added to your bag`);
  }

  // UPDATE QUANTITY

  function updateQuantity(id, amount) {
    setCart((old) =>
      old
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // WISHLIST

  function toggleWishlist(id) {
    setWishlist((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );

    showToast(
      wishlist.includes(id)
        ? "Removed from wishlist"
        : "Saved to wishlist"
    );
  }

  // NEWSLETTER

  function subscribe(event) {
    event.preventDefault();

    setSubscribed(true);

    showToast("You're on the Sparkora festive list!");

    setEmail("");
  }

  // LOADING SCREEN

  if (loading) {
    return (
      <div className="loading-screen">
        <FireworksBackground />

        <div className="loader-mandala">
          <span>✺</span>
          <i />
          <b>✦</b>
        </div>

        <p className="loader-kicker">
          THE FESTIVE HOUSE PRESENTS
        </p>

        <h1>SPARKORA</h1>

        <p className="loader-subtitle">
          LET THE LIGHTS FIND YOU
        </p>

        <div className="loader-track">
          <span />
        </div>

        <small className="loader-percent">
          PREPARING YOUR FESTIVE EXPERIENCE · 05
        </small>
      </div>
    );
  }

  // MAIN WEBSITE

  return (
    <div className="sparkora-app">

      <FireworksBackground />

      {/* ANNOUNCEMENT */}

      <div className="announcement">
        <Sparkles size={14} />

        THE FESTIVE EDIT IS HERE

        <span>•</span>

        LIGHT UP EVERY LITTLE MOMENT

        <Sparkles size={14} />
      </div>

      {/* HEADER */}

      <header className="site-header">

        <a className="brand" href="#home">
          <span className="brand-icon">✺</span>

          <span>
            SPARKORA
            <small>THE FESTIVE HOUSE</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#collections" onClick={() => setMenuOpen(false)}>
            Collections
          </a>

          <a href="#story" onClick={() => setMenuOpen(false)}>
            Our story
          </a>

          <a href="#moments" onClick={() => setMenuOpen(false)}>
            Festive moments
          </a>
        </nav>

        <div className="header-actions">

          <label className="search-box">
            <Search size={16} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find your sparkle..."
            />
          </label>

          <button
            className="header-icon"
            onClick={() =>
              showToast(`${wishlist.length} saved favourites`)
            }
            aria-label="Wishlist"
          >
            <Heart size={19} />
            <i>{wishlist.length}</i>
          </button>

          <button
            className="bag-button"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={17} />
            BAG
            <b>{cartCount}</b>
          </button>

        </div>
      </header>

      <main>

        {/* HERO SECTION */}{/* HERO SECTION */}

<section className="hero-section" id="home">

  {/* BACKGROUND VIDEO */}

  <div className="hero-video-background">
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={`${import.meta.env.BASE_URL}videos/hero.mp4`} type="video/mp4" />
    </video>

    <div className="hero-video-overlay" />
  </div>

  <div className="hero-spark hero-spark-one">✦</div>
  <div className="hero-spark hero-spark-two">✧</div>

  <div className="hero-copy">

    <Reveal side="left">
      <span className="eyebrow">
        <i />
        A LITTLE MORE LIGHT. A LOT MORE MAGIC.
      </span>
    </Reveal>

    <h1>
      <TypeOnView>Make this Diwali</TypeOnView>
      <br />
      <em>
        <TypeOnView>unforgettable.</TypeOnView>
      </em>
    </h1>

    <Reveal delay={300}>
      <p>
        Bring home the glow, colour and joy of the season.
        Discover thoughtful decor, luminous lights and gifts
        made to be remembered.
      </p>
    </Reveal>

    <Reveal delay={450}>
      <div className="hero-actions">

        <a href="#collections" className="gold-button">
          Explore the collection
          <ArrowUpRight size={17} />
        </a>

        <a href="#story" className="text-cta">
          Discover our story
          <ArrowRight size={15} />
        </a>

      </div>
    </Reveal>

    <Reveal delay={550}>
      <div className="hero-note">
        <span>✺</span>

        <div>
          <b>Celebrate beautifully</b>
          <small>
            Curated with love for your brightest moments
          </small>
        </div>
      </div>
    </Reveal>

  </div>

  <a className="scroll-cue" href="#collections">
    <span />
    SCROLL TO DISCOVER
    <ArrowRight size={13} />
  </a>

</section>

       

        

        {/* BENEFITS */}

        <section className="benefit-strip">

          <div>
            <Truck />

            <span>
              <b>Thoughtful delivery</b>
              <small>Carefully packed with love</small>
            </span>
          </div>

          <div>
            <ShieldCheck />

            <span>
              <b>Quality you can feel</b>
              <small>Selected for your celebrations</small>
            </span>
          </div>

          <div>
            <Gift />

            <span>
              <b>Festive-ready gifting</b>
              <small>Make every moment special</small>
            </span>
          </div>

          <div>
            <Flame />

            <span>
              <b>Made to glow</b>
              <small>Bring home the festive spirit</small>
            </span>
          </div>

        </section>

        {/* CATEGORY SECTION */}

        <section
          className="category-section section-wrap"
          id="collections"
        >

          <Reveal>
            <div className="section-heading">

              <div>
                <span className="section-kicker">
                  FIND YOUR FESTIVE FEELING
                </span>

                <h2>
                  <TypeOnView>Shop the celebration.</TypeOnView>
                </h2>

                <p>Little details. Big festive energy.</p>
              </div>

              <span className="section-ornament">✺</span>

            </div>
          </Reveal>

          <div className="category-grid">

            {CATEGORIES.map((item, i) => (
              <Reveal
                key={item.name}
                side={i % 2 ? "right" : "left"}
                delay={i * 80}
              >
                <button
                  className={`category-card ${
                    category === item.name ? "category-active" : ""
                  }`}
                  onClick={() => setCategory(item.name)}
                >
                  <span>{item.symbol}</span>

                  <b>
                    {item.name === "All" ? "Everything" : item.name}
                  </b>

                  <small>{item.note}</small>

                  <ArrowUpRight size={16} />
                </button>
              </Reveal>
            ))}

          </div>

        </section>

        {/* COLLECTION SECTION */}

        <section className="collection-section section-wrap">

          <Reveal>
            <div className="section-heading collection-heading">

              <div>
                <span className="section-kicker">
                  THE SPARKORA EDIT
                </span>

                <h2>
                  <TypeOnView>Find your kind of magic.</TypeOnView>
                </h2>

                <p>
                  Hover over each card to flip it and reveal your product image.
                </p>
              </div>

              <span className="product-total">
                {filteredProducts.length} CURATED PIECES
              </span>

            </div>
          </Reveal>

          <div className="collection-toolbar">

            <div className="filter-tabs">

              {CATEGORIES.map((item) => (
                <button
                  key={item.name}
                  className={
                    category === item.name ? "filter-active" : ""
                  }
                  onClick={() => setCategory(item.name)}
                >
                  {item.name === "All" ? "All pieces" : item.name}
                </button>
              ))}

            </div>

            <span className="flip-tip">
              ↻ HOVER / TAP TO FLIP
            </span>

          </div>

          <div className="product-grid">

            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                wished={wishlist.includes(product.id)}
                onWish={toggleWishlist}
                onAdd={addToCart}
              />
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              No festive pieces found. Try another search.
            </div>
          )}

        </section>

        {/* FESTIVAL BANNER */}

        <section className="festival-banner section-wrap" id="moments">

          <Reveal side="left" className="festival-copy">

            <span className="section-kicker">
              A HOME FULL OF LIGHT
            </span>

            <h2>
              <TypeOnView>Let every corner</TypeOnView>
              <br />
              <em>
                <TypeOnView>tell a story.</TypeOnView>
              </em>
            </h2>

            <p>
              From the first diya at the doorway to the last sparkle
              in the night sky, create a celebration that feels beautifully yours.
            </p>

            <a
              href="#collections"
              className="outline-gold-button"
            >
              Discover festive favourites
              <ArrowRight size={16} />
            </a>

          </Reveal>

          <Reveal side="right" className="festival-art">

            <div className="festival-art-glow" />

            <div className="festival-art-image">

              <img
                src="/images/festive-home.jpg"
                alt="Your festive home decor"
                onError={(e) => {
                  e.currentTarget.style.display = "none";

                  e.currentTarget.parentElement.classList.add(
                    "art-placeholder"
                  );
                }}
              />

              <span className="art-fallback">
                🪔
                <small>ADD YOUR FESTIVE PHOTO</small>
              </span>

            </div>

            <span className="art-star star-one">✦</span>
            <span className="art-star star-two">✧</span>

          </Reveal>

        </section>

        {/* OUR STORY */}

        <section className="story-section section-wrap" id="story">

          <Reveal>
            <div className="story-heading">

              <span className="section-kicker">
                THE SPARKORA PROMISE
              </span>

              <h2>
                <TypeOnView>More than a festival.</TypeOnView>
                <br />
                <em>
                  <TypeOnView>A feeling that stays.</TypeOnView>
                </em>
              </h2>

              <p>
                We believe the best celebrations are made of warm lights,
                familiar traditions, thoughtful gifts and the people who
                make a place feel like home.
              </p>

            </div>
          </Reveal>

          <div className="story-points">

            <Reveal side="left">
              <article>
                <span>01</span>

                <div>
                  <b>Curated with intention</b>

                  <p>
                    Every detail is selected to make your festive moments
                    feel a little more special.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal side="right">
              <article>
                <span>02</span>

                <div>
                  <b>Designed to delight</b>

                  <p>
                    Beautiful pieces, joyful colours and thoughtful
                    finishing touches for your home.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal side="left">
              <article>
                <span>03</span>

                <div>
                  <b>Made to be shared</b>

                  <p>
                    Because the brightest memories are the ones
                    we create together.
                  </p>
                </div>
              </article>
            </Reveal>

          </div>

        </section>

        {/* NEWSLETTER */}

        <section className="newsletter-section section-wrap">

          <Reveal>
            <div className="newsletter-card">

              <div>
                <span className="section-kicker">
                  A LITTLE SPARK IN YOUR INBOX
                </span>

                <h2>
                  Stay close to the <em>celebration.</em>
                </h2>

                <p>
                  Get festive inspiration, new arrivals and special offers
                  from Sparkora.
                </p>
              </div>

              <form onSubmit={subscribe}>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />

                <button type="submit">
                  Join the list
                  <ArrowRight size={16} />
                </button>

                {subscribed && (
                  <small className="success-note">
                    You're on the festive list!
                  </small>
                )}

              </form>

              <span className="newsletter-star">✺</span>

            </div>
          </Reveal>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="site-footer">

        <div className="footer-main section-wrap">

          <div className="footer-brand">

            <a className="brand footer-logo" href="#home">

              <span className="brand-icon">✺</span>

              <span>
                SPARKORA
                <small>THE FESTIVE HOUSE</small>
              </span>

            </a>

            <p>
              Light up your home. Celebrate your people.
              Make every little moment sparkle.
            </p>

            {/* FIXED SOCIAL ICONS */}

            <div className="social-links">

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          <div className="footer-column">

            <b>EXPLORE</b>

            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#story">Our story</a>
            <a href="#moments">Festive moments</a>

          </div>

          <div className="footer-column">

            <b>SHOP BY</b>

            {CATEGORIES.slice(1).map((item) => (
              <a
                key={item.name}
                href="#collections"
                onClick={() => setCategory(item.name)}
              >
                {item.name}
              </a>
            ))}

          </div>

          <div className="footer-column">

            <b>WE'RE HERE</b>

            <a href="mailto:hello@sparkora.example">
              Contact us
            </a>

            <a href="#collections">
              Shipping information
            </a>

            <a href="#collections">
              Returns & support
            </a>

            <a href="#home">
              Privacy policy
            </a>

          </div>

        </div>

        <div className="footer-bottom section-wrap">

          <span>
            © 2026 SPARKORA — THE FESTIVE HOUSE
          </span>

          <span>
            CRAFTED WITH ✦ FOR THE FESTIVE SEASON
          </span>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            BACK TO TOP ↑
          </button>

        </div>

      </footer>

      {/* CART DRAWER */}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <aside
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-head">

              <div>
                <small>YOUR FESTIVE PICKS</small>
                <h2>Your bag ({cartCount})</h2>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X />
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="cart-empty">

                <span>🪔</span>

                <h3>Your bag is waiting</h3>

                <p>
                  Add a little sparkle to your celebration.
                </p>

                <button onClick={() => setCartOpen(false)}>
                  Explore collection
                </button>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div className="cart-item" key={item.id}>

                      <div className="cart-thumb">
                        {item.category === "Diyas" ? "🪔" :
                          item.category === "Lighting" ? "✨" : "🎁"}
                      </div>

                      <div className="cart-item-info">

                        <b>{item.name}</b>

                        <strong>
                          ₹{item.price.toLocaleString("en-IN")}
                        </strong>

                        <div className="quantity-control">

                          <button
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                          >
                            <Minus size={13} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                          >
                            <Plus size={13} />
                          </button>

                        </div>

                      </div>

                      <button
                        className="remove-item"
                        onClick={() =>
                          updateQuantity(item.id, -item.quantity)
                        }
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  ))}

                </div>

                <div className="cart-total">

                  <span>Subtotal</span>

                  <b>
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </b>

                </div>

                <button
                  className="checkout-button"
                  onClick={() =>
                    showToast(
                      "Checkout demo — connect your payment gateway to accept orders."
                    )
                  }
                >
                  Continue to checkout
                  <ArrowRight size={16} />
                </button>

              </>

            )}

          </aside>

        </div>

      )}

      {/* TOAST */}

      {toast && (

        <div className="toast">

          <Sparkles size={17} />

          {toast}

          <button onClick={() => setToast("")}>
            <X size={14} />
          </button>

        </div>

      )}

    </div>
  );
}
