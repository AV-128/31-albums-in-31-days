const listItems = document.querySelectorAll("#updated-albums-ranking li");

listItems.forEach(item => {
  if (item.textContent.includes("(+")) {
    item.classList.add("positive");
  }
});

listItems.forEach(item => {
  if (item.textContent.includes("(-")) {
    item.classList.add("negative");
  }
});