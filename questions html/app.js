//using selectors inside the element
// traversing the dom

//  here we will select all three
//  questions button and once we will
//  select then we will loop over them
//   and then we will add clickEventListener
//    and then we will make sure that the parent
//     is infact the question

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
