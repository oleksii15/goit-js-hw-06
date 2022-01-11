const items = document.querySelectorAll(".item");
console.log(`Number of categories ${items.length}`);

[...items].map((item) => {
  console.log(`Category ${item.firstElementChild.textContent}`);
  console.log(`Elements ${item.lastElementChild.children.length}`);
});

// const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl.children.length);

// const firstListEl = categoriesEl.firstElementChild;
// console.log(firstListEl.children[0].textContent);
// console.log(firstListEl.children[1].children.length);
// const secondListEl = categoriesEl.firstElementChild.nextElementSibling;
// console.log(secondListEl.children[0].textContent);
// console.log(secondListEl.children[1].children.length);
// const lastListEl = categoriesEl.lastElementChild;
// console.log(lastListEl.children[0].textContent);
// console.log(lastListEl.children[1].children.length);
