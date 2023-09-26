// select value based on current category page
const url = window.location.href;

const category = url.split("/");
let selectedCategory;
let urlsplit = category[category.length - 1].split("-");
// check if string is more then one word , i.e case studies
if (urlsplit) {
  urlsplit = urlsplit.join(" ");
  selectedCategory = capitalizeWords(urlsplit);
}
// check if string is one word , i.e learn
else {
  selectedCategory = capitalizeWords(category[category.length - 1]);
}
// jQuery(`.select-filter-field option:contains(${selectedCategory})`).prop('selected',true)
jQuery(`.select-filter-field option[value='${selectedCategory}']`).prop(
  "selected",
  true
);

// select value based on current category page
