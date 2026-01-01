// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// Copy poetry
const copyBtn = document.getElementById("copyPoemBtn");
const copyNote = document.getElementById("copyNote");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const poemText =
      'Sabse bura rishta hota hai dosti me pyar, kyunki aksar kisi ek ko hota hai ye pyar. Na vo apne labon par vo baat la payega, na vo apne jazbaat kisi ko bata payega. Lekin apne ehsason ko vo apne andar samet le jayega.';

    try {
      await navigator.clipboard.writeText(poemText);
      if (copyNote) copyNote.textContent = "Poetry copied.";
      setTimeout(() => { if (copyNote) copyNote.textContent = ""; }, 1800);
    } catch {
      if (copyNote) copyNote.textContent = "Copy failed. Aap manually select karke copy kar sakte ho.";
      setTimeout(() => { if (copyNote) copyNote.textContent = ""; }, 2200);
    }
  });
}

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Subtle parallax glow movement (mouse only)
const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  if (glow1) glow1.style.transform = `translate(${x}px, ${y}px)`;
  if (glow2) glow2.style.transform = `translate(${-x}px, ${-y}px)`;
});
