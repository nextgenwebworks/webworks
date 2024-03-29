const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = function () {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
};

const dragEnd = function () {
  this.className = "fill";
};

const dragOver = function (e) {
  e.preventDefault();
};

const dragEnter = function (e) {
  console.log("entering");
  e.preventDefault();
  this.className += " hovered";
};

const dragLeave = function () {
  this.className = "empty";
  console.log("leave");
};

const dragDrop = function () {
  this.className = "empty";
  this.append(fill);
  console.log("droped");
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
