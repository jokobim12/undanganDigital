document.body.classList.add("tidak-scroll"); // awal tidak bisa scroll

document.getElementById("mulai").addEventListener("click", function () {
  // Sembunyikan cover
  document.getElementById("pembuka").style.display = "none";

  // Tampilkan semua section lain
  document.querySelectorAll(".tersembunyi").forEach(function (section) {
    section.style.display = "block";
  });

  // Aktifkan scroll lagi
  document.body.classList.remove("tidak-scroll");
});

// Ambil parameter 'nama' dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama");

// Jika parameter ada, ganti teksnya
if (nama) {
  document.getElementById("nama-undangan").innerText = `${decodeURIComponent(
    nama
  )}`;
}

// Countdown Timer
const weddingDate = new Date("2025-07-15T10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  if (gap < 0) return;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

setInterval(updateCountdown, 1000);
updateCountdown(); // panggil sekali biar nggak nunggu 1 detik

//   lanjutan countdown
function addToGoogleCalendar() {
  const title = encodeURIComponent("Pernikahan Joko & Fulan");
  const location = encodeURIComponent("Gedung Kuliah Terpadu Politala");
  const details = encodeURIComponent("Yuk hadir di hari bahagia kami 💕");

  // Format UTC time: 20250315T030000Z = 15 Maret 2025, 10.00 WITA
  const startDate = "20250715T020000Z";
  const endDate = "20250715T090000Z";
}
