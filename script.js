const places = {
  pub: {
    title: "Puben",
    image: "assets/pub.jpg",
    description: "Ett varmt ljus strålar från pubens färgglada sken. En varm plats i en kall värld, där det finns plats för alla.",
  },
  bar: {
    title: "Baren",
    image: "assets/bar.jpg",
    description: "Här blandas kvällens första drinkar medan lamporna glittrar mellan takbjälkarna.",
  },
  greenhouse: {
    title: "Växthuset",
    image: "assets/outside_greenhouse.jpg",
    description: "Även mitt i vintern håller växthuset en liten bit grönska vid liv.",
  },
  sauna: {
    title: "Bastun",
    image: "assets/outside_sauna.jpg",
    description: "Ångan stiger i den kalla luften. Bastun är den perfekta platsen att tina upp under stjärnorna.",
  },
  "guest-house": {
    title: "Gästhuset",
    image: "assets/guest_house.jpg",
    description: "Ett lugnt rum, en mjuk filt och tänd brasa gör detta till en välkomnande tillflyktsort.",
  },
};

const modal = document.querySelector("#place-modal");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const closeButton = document.querySelector(".close-button");
const continueButton = document.querySelector(".continue-button");
const barHotspot = document.querySelector("#bar-hotspot");
let previouslyFocused;

function openPlace(placeId) {
  const place = places[placeId];
  if (!place) return;

  previouslyFocused = document.activeElement;
  dialogImage.src = place.image;
  dialogImage.alt = place.title;
  dialogTitle.textContent = place.title;
  dialogDescription.textContent = place.description;
  modal.hidden = false;
  barHotspot.hidden = placeId !== "pub";
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closePlace() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  dialogImage.removeAttribute("src");
  previouslyFocused?.focus();
}

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", () => openPlace(hotspot.dataset.place));
});

closeButton.addEventListener("click", closePlace);
continueButton.addEventListener("click", closePlace);
barHotspot.addEventListener("click", () => openPlace("bar"));
modal.addEventListener("click", (event) => {
  if (event.target === modal) closePlace();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closePlace();
});
