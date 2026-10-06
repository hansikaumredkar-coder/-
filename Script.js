let current = 1;
const total = 5;

function showPage(n) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + n).classList.add("active");
  current = n;
}

function nextPage() {
  if (current < total) {
    showPage(current + 1);
  } else {
    showPage(1);
  }
}

function restart() {
  showPage(1);
}
