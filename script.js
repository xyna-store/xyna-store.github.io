const button = document.querySelector("#switch button")
button.onclick = toggleMode

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Layanan Topup All Game & Jasa Gift MLBB"
    )
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Layanan Topup All Game & Jasa Gift MLBB")
  }
}
