// --- Free Hosting Popup Controls ---

// Open popup
function openPopup() {
  const popup = document.getElementById("hostingPopup");
  if (popup) popup.style.display = "flex";
}

// Close popup
function closePopup() {
  const popup = document.getElementById("hostingPopup");
  if (popup) popup.style.display = "none";
}

// Close popup when clicking outside the content
window.addEventListener("click", function (e) {
  const popup = document.getElementById("hostingPopup");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
