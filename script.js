const waktu = document.getElementById("date");
const time = document.getElementById("time");
const hari = document.getElementById("hari");
const jam = document.getElementById("jam");
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

// cek local storage
setInterval(function () {
  const m = localStorage.getItem("waktu");
  if (m == null) {
    hari.innerHTML = "0 Hari ";
    jam.innerHTML = " 0 Jam ";
    menit.innerHTML = " 0 Menit ";
    detik.innerHTML = " 0 Detik ";
  } else {
    const y = new Date(m).getTime();
    const now = new Date().getTime();
    const distance = y - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hari.innerHTML = days + " Hari ";
    jam.innerHTML = hours + " Jam ";
    menit.innerHTML = minutes + " Menit ";
    detik.innerHTML = seconds + " Detik ";
  }
}, 1000);

start.addEventListener("click", function () {
  // cek isi
  if (waktu.value == "" && time.value == "") {
    document.getElementById("pesan").innerHTML =
      "Masukan Tanggal dan Waktu terlebih dahulu";
  } else {
    const x = waktu.value + " " + time.value;
    localStorage.setItem("waktu", x);
  }
});

reset.addEventListener("click", function () {
  localStorage.clear();
});
