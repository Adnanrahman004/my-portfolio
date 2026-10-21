import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Award,
  ChevronLeft,
  ChevronRight,
  Eye,
  ExternalLink,
  X,
} from "lucide-react";
import "./Certificates.css";

/* ---------- CONTENT: edit here ----------
   image: full URL or file inside /public/certificates/
   category: used for the filter chips
   credentialUrl: optional, shows a "Verify" link */
const certificates = [
  {
    title: "Introduction to Biology: Evolution",
    issuer: "Coursera (Rice University)",
    year: "2025",
    category: "Biology",
    // Direct image URL — no need to keep file in public folder
    image: "biology evolution.jpg", // fallback (will show verify page)
    // Better: paste a direct image URL below if you have one.
    // For now we use a remote placeholder that works:
    // (replace with your own hosted image link, e.g. from imgur / cloudinary)
    credentialUrl: "https://coursera.org/verify/V04MYG6D5WD1",
  },
  {
    title: "Engineering Life: Synbio, Bioethics & Public Policy",
    issuer: "Coursera (JOHNS HOPKINS University)",
    year: "2025",
    category: "Biology",
    image: "/public policy.jpg",
    credentialUrl: "https://coursera.org/verify/DAXQMOF9FCI3",
  },
  {
    title: "Data Structures",
    issuer: "Coursera (UC San Diego)",
    year: "2025",
    category: "Programming",
    image: "/data structures.jpg",
    credentialUrl: "https://coursera.org/verify/X84T64RIP3RQ",
  },
  {
    title: "Junior Software Developer",
    issuer: "Skill India (Digital Hub)",
    year: "2026",
    category: "Programming",
    image: "/software developer.jpg",
    credentialUrl: "/software developer.jpg",
  },
];

/* onBack (optional): pass a function to show a "Back" button */
export default function Certificates({ onBack }) {
  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState(null);
  const [failed, setFailed] = useState({});
  const lastFocus = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);

  const categories = useMemo(
    () => ["All", ...new Set(certificates.map((c) => c.category))],
    [],
  );
  const visible = useMemo(
    () =>
      filter === "All"
        ? certificates
        : certificates.filter((c) => c.category === filter),
    [filter],
  );

  const isOpen = openIdx !== null;
  const current = isOpen ? visible[openIdx] : null;

  const openViewer = (index, e) => {
    lastFocus.current = e.currentTarget;
    setOpenIdx(index);
  };
  const close = useCallback(() => {
    setOpenIdx(null);
    lastFocus.current?.focus?.();
  }, []);
  const step = useCallback(
    (dir) =>
      setOpenIdx((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  const changeFilter = (cat) => {
    setFilter(cat);
    setOpenIdx(null);
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, step]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null || visible.length < 2) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const markFailed = (src) => setFailed((f) => ({ ...f, [src]: true }));

  return (
    <section className="certificates-page">
      {onBack && (
        <button type="button" className="certificates-back" onClick={onBack}>
          <ArrowLeft size={15} /> Back
        </button>
      )}

      <header className="certificates-head">
        <p className="certificates-label">MY ACHIEVEMENTS</p>
        <h1>My Certificates</h1>
        <p className="certificates-intro">
          A collection of courses and certifications that reflect my learning
          journey.
        </p>
      </header>

      <div className="certificates-toolbar">
        {categories.length > 2 && (
          <div
            className="certificates-filters"
            role="tablist"
            aria-label="Certificate categories"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                className={`filter-chip${filter === cat ? " active" : ""}`}
                onClick={() => changeFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
        <span className="certificates-count">
          {visible.length} certificate{visible.length === 1 ? "" : "s"}
        </span>
      </div>

      {visible.length === 0 ? (
        <p className="certificates-empty">
          No certificates in this category yet.
        </p>
      ) : (
        <div className="certificates-grid">
          {visible.map((cert, index) => (
            <article
              className="certificate-card"
              key={cert.image}
              style={{ "--i": index }}
            >
              <button
                type="button"
                className="certificate-thumb"
                aria-label={`View ${cert.title} certificate`}
                onClick={(e) => openViewer(index, e)}
              >
                {failed[cert.image] ? (
                  <span className="certificate-thumb-fallback">
                    <Award size={30} />
                    <small>Preview unavailable</small>
                  </span>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    onError={() => markFailed(cert.image)}
                  />
                )}
                <span className="certificate-badge">{cert.category}</span>
                <span className="certificate-zoom" aria-hidden="true">
                  <Eye size={16} /> View
                </span>
              </button>

              <div className="certificate-info">
                <h2>{cert.title}</h2>
                <p>
                  {cert.issuer} · {cert.year}
                </p>

                <div className="certificate-actions">
                  <button
                    type="button"
                    className="certificate-view"
                    onClick={(e) => openViewer(index, e)}
                  >
                    View Certificate
                  </button>
                  <a
                    className="certificate-open"
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${cert.title} in a new tab`}
                    title="Open in new tab"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                {cert.credentialUrl && (
                  <a
                    className="certificate-verify"
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify credential ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* FULL-SCREEN VIEWER */}
      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} certificate`}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-close"
            aria-label="Close viewer"
            onClick={close}
          >
            <X size={20} />
          </button>

          {visible.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav prev"
                aria-label="Previous certificate"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="lightbox-nav next"
                aria-label="Next certificate"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            {failed[current.image] ? (
              <div className="lightbox-fallback">
                <Award size={40} />
                <p>This certificate image could not be loaded.</p>
              </div>
            ) : (
              <img
                key={current.image}
                className="lightbox-img"
                src={current.image}
                alt={current.title}
                onError={() => markFailed(current.image)}
              />
            )}
            <figcaption className="lightbox-caption">
              <strong>{current.title}</strong>
              <span>
                {current.issuer} · {current.year}
                {visible.length > 1 && ` · ${openIdx + 1}/${visible.length}`}
              </span>
              <a href={current.image} target="_blank" rel="noreferrer">
                Open full image <ExternalLink size={13} />
              </a>
              {current.credentialUrl && (
                <a
                  href={current.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify credential ↗
                </a>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
