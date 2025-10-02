// Dark/Light Mode
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Search Function
const search = document.getElementById("search");
search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "block" : "none";
  });
});

// Filter by Category
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = (cat === "all" || card.dataset.category === cat) ? "block" : "none";
    });
  });
});

// Modal Stories
const stories = {
  bali: `<h2>Bali Adventure</h2><p>Bali is a paradise with stunning beaches, lush rice terraces, and vibrant culture. 
         Visit Ubud for spiritual retreats, surf in Kuta, and explore temples like Tanah Lot. 
         Don’t forget Balinese food — spicy, flavorful, unforgettable.</p><p>Tips: Rent a scooter, try Nasi Goreng, and watch sunset at Uluwatu.</p>`,
  paris: `<h2>Paris Romance</h2><p>Paris is the city of love, filled with historic monuments, charming cafes, and world-class art. 
          Visit the Eiffel Tower, stroll along the Seine, and explore the Louvre. 
          Croissants and coffee in Montmartre make mornings magical.</p><p>Tips: Buy a metro pass, visit off-season, and enjoy street artists.</p>`,
  newyork: `<h2>New York Life</h2><p>The city that never sleeps offers Broadway shows, Times Square lights, and Central Park walks. 
            From Wall Street to Statue of Liberty, energy is everywhere. Food trucks and rooftop bars complete the vibe.</p><p>Tips: Wear comfy shoes, explore boroughs, and don’t miss Brooklyn Bridge views.</p>`,
  safari: `<h2>Safari Journey</h2><p>African safaris let you witness lions, elephants, and giraffes in their natural habitat. 
           Experience sunsets over the savannah and nights under starry skies. Safari camps offer both adventure and comfort.</p><p>Tips: Carry binoculars, respect wildlife, and book early morning drives.</p>`
};

const modal = document.getElementById("storyModal");
const modalContent = document.getElementById("storyDetails");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".read-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    modalContent.innerHTML = stories[btn.dataset.story];
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
