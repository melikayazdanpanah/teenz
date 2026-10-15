import React from "react";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Gamepad2,
  GitCompareArrows,
  History,
  LineChart,
  LogIn,
  Menu,
  MessageCircle,
  Search,
  Send,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingDown,
  Verified,
  Wallet,
  X,
  Zap
} from "lucide-react";
import {
  features,
  formatPrice,
  formatToman,
  heroFeatured,
  platforms,
  products,
  stats
} from "./data.js";
import { FloatingCard, GlowBlob, HexGrid, PhoneMockup, Sparkline } from "./splats.jsx";

const ICON = { size: 18, strokeWidth: 2 };

const initialFilters = {
  platform: "همه",
  region: "همه",
  type: "همه",
  currency: "همه",
  budget: ""
};

const featureIcons = {
  compare: GitCompareArrows,
  shield: Shield,
  history: History,
  bell: Bell,
  wallet: Wallet,
  verified: Verified
};

/* ---------- Header ---------- */
function Header({ onHome, onSearch, onPlatforms }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); onHome(); }}>
        <span className="brand-mark"><Gamepad2 size={20} strokeWidth={2.4} /></span>
        <span className="brand-text">TEENZ</span>
        <span className="demo-pill">DEMO</span>
      </a>

      <nav className="desktop-nav" aria-label="ناوبری اصلی">
        <a href="#home" onClick={(e) => { e.preventDefault(); onHome(); }}>خانه</a>
        <a href="#platforms" onClick={(e) => { e.preventDefault(); onPlatforms(); }}>پلتفرم‌ها</a>
        <a href="#deals">پیشنهادها</a>
        <a href="#features">چرا TEENZ</a>
        <a href="#faq">راهنما</a>
      </nav>

      <button className="signin-button" type="button">
        <LogIn size={17} strokeWidth={2.2} />
        <span>ورود / ثبت‌نام</span>
      </button>

      <button className="mobile-menu icon-button" aria-label="بازکردن منو">
        <Menu size={20} strokeWidth={2.2} />
      </button>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onSearch, onPlatforms }) {
  const [query, setQuery] = useState("");

  function submit(event) {
    event.preventDefault();
    onSearch(query);
  }

  const history = heroFeatured.history;

  return (
    <section className="hero" id="home">
      <GlowBlob className="glow-1" color="#FF6A1A" />
      <GlowBlob className="glow-2" color="#1E40AF" />
      <HexGrid className="hero-grid" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> مقایسه‌ی لحظه‌ای بین فروشگاه‌ها
          </div>

          <h1 className="hero-title">
            <span>قیمت بازی‌ات را</span>
            <span className="hero-accent">قبل از خرید مقایسه کن.</span>
          </h1>

          <p className="hero-sub">
            TEENZ قیمت بازی‌های PC، PlayStation، Xbox و Nintendo را در چند فروشگاه
            هم‌زمان نشان می‌دهد؛ با نمودار قیمت، هشدار ریجن و تبدیل ارز خودکار.
          </p>

          <form className="search-box" onSubmit={submit} role="search">
            <Search size={19} strokeWidth={2.1} aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="نام بازی را وارد کن (مثلاً Elden Ring)"
              aria-label="جست‌وجوی بازی"
            />
            <button type="submit">
              مقایسه <ArrowLeft size={16} strokeWidth={2.2} />
            </button>
          </form>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => onSearch("")}>
              <span>شروع مقایسه</span>
              <ArrowLeft size={16} strokeWidth={2.2} />
            </button>
            <button className="btn-ghost" onClick={onPlatforms}>
              مشاهده‌ی پلتفرم‌ها
            </button>
          </div>

          <ul className="hero-bullets">
            <li><ShieldCheck size={15} strokeWidth={2.2} /> فروشگاه‌های تأییدشده</li>
            <li><LineChart size={15} strokeWidth={2.2} /> نمودار تاریخچه‌ی قیمت</li>
            <li><Clock3 size={15} strokeWidth={2.2} /> به‌روزرسانی هر ۱۵ دقیقه</li>
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          <PhoneMockup>
            <div className="phone-app">
              <div className="phone-app-top">
                <span className="phone-app-title">Elden Ring</span>
                <span className="phone-app-tag">-۲۰٪</span>
              </div>
              <div className="phone-app-image" style={{ background: "linear-gradient(135deg,#1a1a2e,#0f3460 60%,#e94560)" }} />
              <div className="phone-app-row">
                <span>Steam</span>
                <strong>۲٬۷۹۹٬۰۰۰</strong>
              </div>
              <div className="phone-app-row dim">
                <span>PlayStation</span>
                <strong>۴٬۱۸۰٬۰۰۰</strong>
              </div>
              <div className="phone-app-row dim">
                <span>فروشگاه نمونه</span>
                <strong>۲٬۵۸۰٬۰۰۰</strong>
              </div>
              <div className="phone-app-spark">
                <Sparkline points={history} />
              </div>
              <div className="phone-app-cta">بهترین قیمت ←</div>
            </div>
          </PhoneMockup>

          <FloatingCard
            tone="orange"
            store="Steam"
            percent="-۲۰٪"
            title="Elden Ring"
            price="۲٬۷۹۹٬۰۰۰ تومان"
            style={{ top: "8%", right: "-12%" }}
          />
          <FloatingCard
            tone="cyan"
            store="PS Store"
            percent="-۱۰٪"
            title="Ragnarök"
            price="۳٬۴۹۰٬۰۰۰ تومان"
            style={{ bottom: "12%", left: "-10%" }}
          />
          <div className="hero-stat-bubble">
            <span className="live-dot" />
            <div>
              <strong>{stats[2].value}</strong>
              <span>رضایت کاربران</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats bar ---------- */
function StatsBar() {
  return (
    <section className="stats-bar" aria-label="آمار کلی">
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}

/* ---------- Platforms grid ---------- */
function Platforms({ onPick }) {
  return (
    <section className="platforms" id="platforms">
      <div className="section-head">
        <div>
          <span className="eyebrow">پلتفرم‌ها</span>
          <h2>هر پلتفرمی که بازی می‌کنی، یک‌جا</h2>
        </div>
        <p className="section-sub">روی پلتفرم مورد نظرت بزن تا مقایسه‌ی قیمت همان بازی‌ها نمایش داده شود.</p>
      </div>

      <div className="platform-grid">
        {platforms.map((p) => (
          <button
            key={p.key}
            className="platform-card"
            onClick={() => onPick(p.name)}
            style={{ "--brand": p.color }}
          >
            <span className="platform-bar" />
            <span className="platform-name">{p.name}</span>
            <span className="platform-sub">{p.sub}</span>
            <span className="platform-count">{p.count}</span>
            <span className="platform-go"><ArrowUpLeft size={16} strokeWidth={2.2} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------- Featured deals ---------- */
function FeaturedDeals({ onOpen }) {
  return (
    <section className="deals" id="deals">
      <div className="section-head">
        <div>
          <span className="eyebrow">پیشنهادهای ویژه</span>
          <h2>بازی‌هایی که الان ارزش خریدن دارند</h2>
        </div>
        <button className="link-button">
          دیدن همه <ArrowLeft size={16} strokeWidth={2.2} />
        </button>
      </div>

      <div className="deal-grid">
        {products.map((p) => {
          const best = p.offers.reduce(
            (min, o) => (o.tomanPrice < min.tomanPrice ? o : min),
            p.offers[0]
          );
          const history = [3200, 3100, 3050, 3000, 2920, 2850, best.tomanPrice / 1000];
          return (
            <article key={p.id} className="deal-card">
              <div
                className="deal-cover"
                style={{ backgroundImage: `url(${p.image})` }}
              >
                {p.badge && <span className="deal-badge">{p.badge}</span>}
              </div>
              <div className="deal-body">
                <div className="deal-meta">
                  <span>{p.platform}</span>
                  <span className="dot" />
                  <span>{p.genre}</span>
                </div>
                <h3>{p.title}</h3>
                <div className="deal-price-row">
                  <strong>{formatToman(best.tomanPrice)}</strong>
                  {best.discount && <span className="deal-pct">{best.discount}</span>}
                </div>
                <div className="deal-spark">
                  <Sparkline points={history} />
                  <span className="deal-updated"><Clock3 size={12} strokeWidth={2.2} /> {best.updated}</span>
                </div>
                <div className="deal-actions">
                  <button className="btn-primary small" onClick={() => onOpen(p)}>
                    مقایسه قیمت
                  </button>
                  <span className="deal-store">
                    {p.offers.length} فروشگاه
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  return (
    <section className="features" id="features">
      <div className="section-head">
        <div>
          <span className="eyebrow">چرا TEENZ</span>
          <h2>ابزارهایی که خرید بازی را ساده‌تر می‌کند</h2>
        </div>
        <p className="section-sub">از مقایسه‌ی ساده تا هشدار قیمت — همه چیز برای یک خرید مطمئن.</p>
      </div>

      <div className="feature-grid">
        {features.map((f) => {
          const Icon = featureIcons[f.icon] || Sparkles;
          return (
            <article key={f.title} className="feature-card">
              <span className="feature-icon"><Icon size={20} strokeWidth={2.1} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- CTA strip ---------- */
function CtaStrip({ onSearch }) {
  return (
    <section className="cta-strip">
      <div className="cta-inner">
        <div>
          <span className="eyebrow">شروع کن</span>
          <h2>بازی بعدی‌ات یک مقایسه‌ی کوتاه فاصله دارد.</h2>
        </div>
        <div className="cta-actions">
          <button className="btn-primary" onClick={() => onSearch("")}>
            <Zap size={16} strokeWidth={2.2} />
            مقایسه‌ی سریع
          </button>
          <button className="btn-ghost">
            دانلود اپ (نمایشی)
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-mark"><Gamepad2 size={20} strokeWidth={2.4} /></span>
          <span className="brand-text">TEENZ</span>
        </div>
        <p>مقایسه‌ی هوشمند قیمت بازی — برای گیمرهایی که قبل از خرید فکر می‌کنند.</p>
      </div>

      <div className="footer-cols">
        <div>
          <h4>محصول</h4>
          <a href="#deals">پیشنهادها</a>
          <a href="#platforms">پلتفرم‌ها</a>
          <a href="#features">قابلیت‌ها</a>
        </div>
        <div>
          <h4>منابع</h4>
          <a href="#faq">راهنما</a>
          <a href="#">API (نمایشی)</a>
          <a href="#">قیمت‌های تاریخی</a>
        </div>
        <div>
          <h4>درباره</h4>
          <a href="#">تیم ما</a>
          <a href="#">تماس</a>
          <a href="#">حریم خصوصی</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© ۱۴۰۳ TEENZ. تمامی قیمت‌ها نمایشی هستند.</span>
        <span className="footer-demo">DEMO · غیرزنده</span>
      </div>
    </footer>
  );
}

/* ---------- Filters / Results ---------- */
function Filters({ filters, setFilters, showAll, setShowAll }) {
  function update(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }
  return (
    <aside className="filter-panel" aria-label="فیلتر نتایج">
      <div className="filter-title">
        <div><SlidersHorizontal size={18} strokeWidth={2.1} /><h2>فیلترها</h2></div>
        <button className="reset-button" onClick={() => setFilters(initialFilters)}>پاک‌کردن</button>
      </div>

      <FilterSelect label="پلتفرم"  value={filters.platform} onChange={(v) => update("platform", v)}  options={["همه", "Steam", "PlayStation", "Xbox", "Nintendo"]} />
      <FilterSelect label="ریجن"    value={filters.region}   onChange={(v) => update("region", v)}    options={["همه", "Global", "آمریکا", "ترکیه", "نامشخص"]} />
      <FilterSelect label="نوع"     value={filters.type}     onChange={(v) => update("type", v)}      options={["همه", "بازی دیجیتال", "اشتراک", "کارت هدیه"]} />
      <FilterSelect label="ارز"     value={filters.currency} onChange={(v) => update("currency", v)}  options={["همه", "USD", "EUR", "TRY"]} />

      <label className="field-label" htmlFor="budget">حداکثر بودجه (تومان)</label>
      <input
        id="budget"
        className="budget-input"
        type="number"
        min="0"
        inputMode="numeric"
        placeholder="مثلاً ۳٬۰۰۰٬۰۰۰"
        value={filters.budget}
        onChange={(event) => update("budget", event.target.value)}
      />

      <div className="filter-divider" />
      <label className="check-row">
        <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} />
        <span className="custom-check"><Check size={12} strokeWidth={3.2} /></span>
        <span>نمایش ریجن‌های ناسازگار و نامشخص</span>
      </label>
      <p className="filter-hint">پیشنهادهای نامطمئن با هشدار مشخص می‌شوند.</p>
    </aside>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="field-wrap">
      <span className="field-label">{label}</span>
      <span className="select-wrap">
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown size={15} strokeWidth={2.2} aria-hidden="true" />
      </span>
    </label>
  );
}

function OfferCard({ offer }) {
  return (
    <article className={`offer-card ${!offer.compatible ? "offer-uncertain" : ""}`}>
      <div className="offer-top">
        <div className="store-avatar" aria-hidden="true">{offer.store.slice(0, 1)}</div>
        <div className="store-info">
          <strong>{offer.store}</strong>
          <span>{offer.activation}</span>
        </div>
        {offer.discount && <span className="discount-badge">{offer.discount}</span>}
      </div>

      <div className="offer-price">
        <strong>{formatToman(offer.tomanPrice)}</strong>
        <span>{formatPrice(offer.price, offer.currency)} <span className="mock-tag">نمونه</span></span>
      </div>

      <div className="offer-details">
        <Detail label="ریجن" value={offer.region} />
        <Detail label="فعال‌سازی" value={offer.activation} />
        <Detail label="آخرین بررسی" value={offer.updated} />
      </div>

      {!offer.compatible && (
        <div className="warning-message" role="note">
          ریجن ناسازگار یا تأییدنشده؛ پیش از خرید شرایط فروشگاه را بررسی کن.
        </div>
      )}

      <a className="store-link" href={offer.url} target="_blank" rel="noreferrer">
        رفتن به فروشگاه <ArrowUpLeft size={15} strokeWidth={2.2} />
      </a>
    </article>
  );
}

function Detail({ label, value }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ResultsPage({ query, onHome }) {
  const [filters, setFilters] = useState(initialFilters);
  const [showAll, setShowAll] = useState(false);
  const [status, setStatus] = useState("ready");
  const [selected, setSelected] = useState(null);

  const matchingProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) =>
      (!q || p.title.toLowerCase().includes(q) || p.platform.toLowerCase().includes(q)) &&
      (filters.platform === "همه" || p.platform === filters.platform)
    );
  }, [query, filters.platform]);

  const offers = useMemo(() => {
    const budget = Number(filters.budget || 0);
    return matchingProducts.flatMap((p) =>
      p.offers
        .filter((o) => {
          if (!showAll && !o.compatible) return false;
          if (filters.region !== "همه" && o.region !== filters.region) return false;
          if (filters.currency !== "همه" && o.currency !== filters.currency) return false;
          if (budget && o.tomanPrice > budget) return false;
          if (filters.type !== "همه" && p.type !== filters.type) return false;
          return true;
        })
        .map((o) => ({ ...o, product: p }))
    );
  }, [matchingProducts, filters, showAll]);

  function runSearch() {
    setStatus("loading");
    window.setTimeout(() => setStatus("ready"), 350);
  }

  return (
    <main className="results-page" id="results">
      <div className="breadcrumbs">
        <button onClick={onHome}>خانه</button>
        <span>/</span>
        <span>نتایج جست‌وجو</span>
      </div>

      <div className="results-heading">
        <div>
          <span className="eyebrow">مقایسه‌ی پیشنهادها</span>
          <h1>{query ? `نتایج برای «${query}»` : "بازی‌های پیشنهادی"}</h1>
          <p>قیمت‌ها و فروشگاه‌های این صفحه نمونه و غیرزنده هستند.</p>
        </div>
        <button className="mobile-filter-button" onClick={() => document.getElementById("filter-panel")?.scrollIntoView()}>
          <SlidersHorizontal size={16} strokeWidth={2.1} /> فیلترها
        </button>
      </div>

      <div className="results-layout">
        <div id="filter-panel">
          <Filters filters={filters} setFilters={setFilters} showAll={showAll} setShowAll={setShowAll} />
        </div>

        <section className="results-content" aria-live="polite">
          {selected ? (
            <ProductDetails product={selected} onBack={() => setSelected(null)} />
          ) : status === "loading" ? (
            <LoadingState />
          ) : offers.length === 0 ? (
            <EmptyState onReset={() => { setFilters(initialFilters); setShowAll(false); }} />
          ) : (
            <>
              <div className="offers-toolbar">
                <span className="count-chip"><strong>{offers.length}</strong> پیشنهاد نمایشی</span>
                <label>
                  مرتب‌سازی
                  <select onChange={runSearch} aria-label="مرتب‌سازی پیشنهادها">
                    <option>کمترین قیمت نمونه</option>
                    <option>بیشترین تخفیف</option>
                    <option>آخرین بررسی</option>
                  </select>
                </label>
              </div>
              <div className="offer-list">
                {offers.map((offer) => (
                  <div key={offer.id} className="offer-with-product">
                    <button className="product-name" onClick={() => setSelected(offer.product)}>
                      {offer.product.title} <ArrowUpLeft size={14} strokeWidth={2.2} />
                    </button>
                    <OfferCard offer={offer} />
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

function ProductDetails({ product, onBack }) {
  return (
    <section className="product-details">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} strokeWidth={2.2} /> بازگشت به نتایج
      </button>
      <div className="product-hero" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="product-hero-overlay">
          <span className="eyebrow">{product.platform} · {product.genre}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <h3>پیشنهادهای مقایسه</h3>
      <div className="offer-list">
        {product.offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
      </div>
    </section>
  );
}

function LoadingState() {
  return (
    <div className="state-card" role="status">
      <div className="spinner" />
      <h2>در حال آماده‌سازی نتایج</h2>
      <p>این حالت در نسخه‌ی نمایشی است؛ داده‌ای از فروشگاه دریافت نمی‌شود.</p>
    </div>
  );
}

function EmptyState({ onReset }) {
  return (
    <div className="state-card">
      <div className="state-icon">∅</div>
      <h2>پیشنهادی پیدا نشد</h2>
      <p>فیلترها را تغییر بده یا نمایش ریجن‌های نامشخص را فعال کن.</p>
      <button className="btn-primary" onClick={onReset}>پاک‌کردن فیلترها</button>
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [page, setPage] = useState("home");
  const [query, setQuery] = useState("");

  function goToResults(value = "") {
    setQuery(value);
    setPage("results");
    window.location.hash = "results";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setPage("home");
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollTo(id) {
    setPage("home");
    window.location.hash = "";
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  if (page === "results") {
    return (
      <div className="app-shell">
        <Header onHome={goHome} onSearch={() => goToResults("")} onPlatforms={() => scrollTo("platforms")} />
        <ResultsPage query={query} onHome={goHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header onHome={goHome} onSearch={(v) => goToResults(v)} onPlatforms={() => scrollTo("platforms")} />
      <Hero onSearch={goToResults} onPlatforms={() => scrollTo("platforms")} />
      <StatsBar />
      <Platforms onPick={(name) => goToResults(name)} />
      <FeaturedDeals onOpen={(p) => goToResults(p.title)} />
      <Features />
      <CtaStrip onSearch={goToResults} />
      <Footer />
    </div>
  );
}
