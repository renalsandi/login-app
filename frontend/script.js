// Ambil elemen form & input
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Tambahkan event saat form disubmit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // cegah reload halaman

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    message.textContent = "Username dan password tidak boleh kosong!";
    message.style.color = "red";
    return;
  }

  // contoh login sederhana (dummy)
  if (username === "admin" && password === "1234") {
    message.textContent = "Login berhasil! Selamat datang 🎉";
    message.style.color = "green";
  } else {
    message.textContent = "Username atau password salah!";
    message.style.color = "red";
  }
});
