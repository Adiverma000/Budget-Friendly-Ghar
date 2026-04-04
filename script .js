/* ============================================================
   EstateElite India — script.js
   All prices in Indian Rupees. Locations across India.
   ============================================================ */

/* ---- Property Data (India) ---- */
const properties = {
  1: {
    id: 1,
    title: "The Lutyens Grand Villa",
    price: "\u20b935 Crore",
    location: "Lutyens' Bungalow Zone, New Delhi",
    type: "Villa",
    status: "For Sale",
    beds: 5, baths: 4, sqft: "6,800",
    parking: "3-Car",
    year: "2018",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    desc: "Located in the most exclusive address in India, this Lutyens' Bungalow Zone villa is a rare opportunity to own a piece of New Delhi's heritage. Spread across a 1-acre corner plot, the property combines colonial-era architecture with contemporary interiors — Italian marble flooring, teak wood panelling, and a landscaped garden with a temperature-controlled pool. Direct proximity to Rajpath, India Gate, and diplomatic enclaves makes this an irreplaceable asset.",
    features: ["1-Acre Corner Plot", "Temperature-Controlled Pool", "Landscaped Garden", "Home Theatre", "Modular Chef's Kitchen", "Servant Quarters", "CCTV & Security System", "Imported Marble Flooring", "3-Car Garage", "Inverter & Generator Backup"]
  },
  2: {
    id: 2,
    title: "Worli Sea Face Penthouse",
    price: "\u20b98.5 Lakh/month",
    location: "Worli Sea Face, Mumbai",
    type: "Penthouse",
    status: "For Rent",
    beds: 4, baths: 4, sqft: "4,200",
    parking: "Valet + 2 Dedicated",
    year: "2022",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
    desc: "Commanding the most coveted stretch of the Mumbai skyline, this Worli Sea Face penthouse offers unobstructed views of the Arabian Sea and the iconic Bandra-Worli Sea Link. Designed by an award-winning Mumbai architect, the interiors feature floor-to-ceiling glass, a wraparound private terrace, and a dedicated home office. Access to the building's concierge, spa, and infinity pool on the 48th floor elevates this to an unrivalled Mumbai lifestyle.",
    features: ["Arabian Sea Views", "Sea Link Views", "Private Wraparound Terrace", "48th Floor Infinity Pool", "Concierge & Valet", "Home Office", "Spa & Gym Access", "Private Elevator Lobby", "Smart Home Automation", "24x7 Security"]
  },
  3: {
    id: 3,
    title: "Jaipur Heritage Bungalow",
    price: "\u20b912.75 Crore",
    location: "Civil Lines, Jaipur, Rajasthan",
    type: "Bungalow",
    status: "For Sale",
    beds: 5, baths: 4, sqft: "3,600",
    parking: "2-Car + Covered",
    year: "2015",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
    desc: "A magnificent blend of traditional Rajasthani craftsmanship and modern sensibility, this Civil Lines bungalow is set in one of Jaipur's most prestigious residential pockets. Handcrafted pink sandstone jharokhas, arched doorways, and a central courtyard with a marble fountain give this home its royal character, while the fully updated kitchen, bathrooms, and electrical systems offer complete modern comfort. A rare find in the Pink City.",
    features: ["Pink Sandstone Exterior", "Traditional Jharokha Windows", "Central Marble Courtyard Fountain", "Rooftop Terrace", "Modern Modular Kitchen", "Pooja Room", "Servant Quarters", "Rainwater Harvesting", "Solar Panels", "Vastu Compliant Design"]
  },
  4: {
    id: 4,
    title: "Indiranagar Skyline Residences",
    price: "\u20b91.2 Lakh/month",
    location: "Indiranagar, Bengaluru, Karnataka",
    type: "Apartment",
    status: "For Rent",
    beds: 3, baths: 3, sqft: "2,100",
    parking: "2 Covered",
    year: "2021",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    desc: "In the heart of Bengaluru's most vibrant neighbourhood, the Indiranagar Skyline Residences offer a sophisticated urban lifestyle. Just minutes from 100 Feet Road's finest restaurants and boutiques, and within easy reach of major IT corridors, this apartment combines cosmopolitan convenience with luxurious interiors — wide-plank wooden floors, a chef's kitchen, and a large private balcony with unobstructed city views.",
    features: ["City Views from Balcony", "Wide-Plank Wood Flooring", "Modular Chef's Kitchen", "Clubhouse & Gym Access", "Swimming Pool", "Co-working Lounge", "EV Charging Point", "Pet-Friendly Society", "24x7 CCTV Security", "Power Backup"]
  },
  5: {
    id: 5,
    title: "Jubilee Hills Prestige Villa",
    price: "\u20b922 Crore",
    location: "Jubilee Hills, Hyderabad, Telangana",
    type: "Villa",
    status: "For Sale",
    beds: 6, baths: 5, sqft: "7,500",
    parking: "4-Car",
    year: "2020",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    desc: "Nestled in Hyderabad's most sought-after address, this Jubilee Hills villa is a landmark property favoured by Tollywood and tech industry royalty alike. Set on a sprawling 4,000 sq yard plot, it features a 50-foot private pool, a full home theatre, a dedicated puja mandapam, and a guest wing with private entrance. Lush landscaping, a terrace garden, and premium security infrastructure make this an outstanding trophy asset in the City of Pearls.",
    features: ["4,000 Sq Yard Plot", "50-ft Private Pool", "Home Theatre", "Dedicated Puja Mandapam", "Separate Guest Wing", "Terrace Garden", "Staff Quarters x3", "Solar Power System", "CCTV & Video Doorbell", "Gated Private Compound"]
  },
  6: {
    id: 6,
    title: "Koregaon Park Penthouse",
    price: "\u20b99.5 Crore",
    location: "Koregaon Park, Pune, Maharashtra",
    type: "Penthouse",
    status: "For Sale",
    beds: 4, baths: 4, sqft: "4,800",
    parking: "2 Covered",
    year: "2019",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    desc: "Perched above Pune's most cosmopolitan neighbourhood, the Koregaon Park Penthouse is surrounded by the canopy of ancient trees and the hum of Pune's vibrant cafe culture. The double-height living room, private rooftop terrace with a jacuzzi, bespoke Italian kitchen, and panoramic views of the Pune hills make this a one-of-a-kind residence. A stone's throw from Osho International, top hospitals, and premium schools.",
    features: ["Double-Height Living Room", "Private Rooftop Jacuzzi", "Panoramic Pune Hills Views", "Bespoke Italian Kitchen", "Walk-in Wardrobe", "Home Office", "Building Gym & Pool", "Concierge Service", "Smart Home System", "Generator Backup"]
  }
};

/* ============================================================
   1. NAVBAR — scroll effect & active link
   ============================================================ */
const navbar   = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);

  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

/* ============================================================
   2. MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
  document.body.style.overflow = navMenu.classList.contains("open") ? "hidden" : "";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
});

/* ============================================================
   3. PROPERTY FILTER
   ============================================================ */
const filterBtns   = document.querySelectorAll(".filter-btn");
const propertyGrid = document.getElementById("propertyGrid");
const cards        = document.querySelectorAll(".property-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    cards.forEach((card, i) => {
      const match = filter === "all" || card.dataset.type === filter;
      if (match) {
        card.style.display = "";
        card.style.animationDelay = `${i * 0.07}s`;
        card.style.animation = "none";
        card.offsetHeight;
        card.style.animation = "fadeUp .5s ease forwards";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    const existingMsg = propertyGrid.querySelector(".no-results");
    if (existingMsg) existingMsg.remove();
    if (visibleCount === 0) {
      propertyGrid.insertAdjacentHTML("beforeend",
        `<div class="no-results"><span>&#127968;</span><p>No properties found for this filter.</p></div>`);
    }
  });
});

/* ============================================================
   4. SAVE / WISHLIST TOGGLE
   ============================================================ */
document.querySelectorAll(".card-save").forEach(btn => {
  btn.addEventListener("click", function () {
    const saved = this.classList.toggle("saved");
    this.textContent = saved ? "\u2665" : "\u2661";
    this.style.color = saved ? "#e05252" : "";
  });
});

/* ============================================================
   5. PROPERTY DETAIL MODAL
   ============================================================ */
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose   = document.getElementById("modalClose");

function openModal(id) {
  const p = properties[id];
  if (!p) return;

  const badgeBg = p.status === "For Sale" ? "#b8975a" : "#1a1814";

  modalContent.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="modal-img" />
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:.5rem;">
      <div>
        <div class="modal-price">${p.price}</div>
        <h2 class="modal-title">${p.title}</h2>
        <p class="modal-location">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${p.location}
        </p>
      </div>
      <span style="background:${badgeBg};color:#fff;padding:.35rem .9rem;border-radius:100px;font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;height:fit-content;">
        ${p.status}
      </span>
    </div>

    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Bedrooms</span>
        <span class="modal-meta-val">&#128716; ${p.beds} Beds</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Bathrooms</span>
        <span class="modal-meta-val">&#128704; ${p.baths} Baths</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Area</span>
        <span class="modal-meta-val">&#128208; ${p.sqft} sqft</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Parking</span>
        <span class="modal-meta-val">&#128664; ${p.parking}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Year Built</span>
        <span class="modal-meta-val">&#127959; ${p.year}</span>
      </div>
    </div>

    <p class="modal-desc">${p.desc}</p>

    <div class="modal-features">
      <h4>Property Features</h4>
      <ul class="modal-feature-list">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-actions">
      <a href="#contact" class="btn btn-primary" id="modalContactBtn">Schedule a Site Visit</a>
      <button class="btn btn-outline" onclick="window.print()">Download Brochure</button>
    </div>
  `;

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("modalContactBtn").addEventListener("click", closeModal);
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".view-details").forEach(btn => {
  btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* ============================================================
   6. CONTACT FORM — validation & AJAX submit
   ============================================================ */
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const submitBtn   = document.getElementById("submitBtn");
const btnText     = document.getElementById("btnText");
const btnLoader   = document.getElementById("btnLoader");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) { shakeForm(); return; }
  if (!isValidEmail(email)) { highlightField(document.getElementById("email")); return; }

  btnText.classList.add("hidden");
  btnLoader.classList.remove("hidden");
  submitBtn.disabled = true;

  try {
    const formData = new FormData(contactForm);
    const response = await fetch("contact.php", { method: "POST", body: formData });
    const text     = await response.text();
    if (response.ok && text.includes("success")) { showSuccess(); }
    else { simulateSuccess(); }
  } catch (err) {
    simulateSuccess();
  }
});

function simulateSuccess() { setTimeout(showSuccess, 900); }

function showSuccess() {
  contactForm.reset();
  btnText.classList.remove("hidden");
  btnLoader.classList.add("hidden");
  submitBtn.disabled = false;
  formSuccess.classList.remove("hidden");
  formSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => formSuccess.classList.add("hidden"), 6000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function highlightField(el) {
  el.style.borderColor = "#e05252";
  el.style.boxShadow   = "0 0 0 3px rgba(224,82,82,.15)";
  el.focus();
  el.addEventListener("input", () => { el.style.borderColor = ""; el.style.boxShadow = ""; }, { once: true });
}
function shakeForm() {
  contactForm.style.animation = "none";
  contactForm.offsetHeight;
  contactForm.style.animation = "shake .4s ease";
}

const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
  @keyframes shake {
    0%,100%{transform:translateX(0)}
    20%    {transform:translateX(-8px)}
    40%    {transform:translateX(8px)}
    60%    {transform:translateX(-6px)}
    80%    {transform:translateX(6px)}
  }`;
document.head.appendChild(shakeStyle);

/* ============================================================
   7. SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll(
  ".property-card, .about-image-wrap, .about-content, .contact-info, .contact-form-wrap, .section-header, .footer-brand, .footer-links-group"
);
revealEls.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);
revealEls.forEach(el => observer.observe(el));

/* ============================================================
   8. SMOOTH SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  });
});
