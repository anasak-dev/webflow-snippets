// select array of collections and push each as an array item
const items = document.querySelectorAll(".blog__post__collection__wrapper");

const arr = [];
items.forEach((item) => arr.push(item));
// select array of collections and push each as an array item

// select a trigger on which array items should be check for an empty state

$(".select-filter-field").on("change", function () {
  // timeout added since triggering change immediately may result in false positive/negatives

  setTimeout(() => {
    const isEmpty = arr.some(function (input) {
      return input.querySelector(".blog__post__collection").firstChild;
    });

    console.log(isEmpty);
    if (isEmpty) {
      $(".empty-blog").hide();
    } else {
      $(".empty-blog").show();
    }
  }, 200);
});
