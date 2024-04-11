const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieseat = document.getElementById("movie");

let ticketprice= +movieseat.value;

function updateselectedcount() {
  const selectedseats = document.querySelectorAll(".row .seat.selected");
  const selectedseatscount = selectedseats.length;
  console.log(selectedseatscount);
  count.innerText = selectedseatscount;
  total.innerText = selectedseatscount*ticketprice;
}
movieseat.addEventListener('change',(e) => {
  ticketprice = +e.target.value;
  updateselectedcount();
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateselectedcount();
});
