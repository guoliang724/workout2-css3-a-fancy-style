var ul = document.querySelector(".container ul");
var lis = document.querySelectorAll(".container li");
var last = null;
var closebtns = document.querySelectorAll(".container .close");
lis.forEach((element, index) => {
  element.onclick = function (e) {
    last && last.classList.remove("active");
    e.currentTarget.classList.add("active");
    last = e.currentTarget;
    last.parentNode.classList.add("activewrap");
    closebtns[index].onclick = function (ev) {
      ev.target.parentNode.parentNode.parentNode.classList.remove("active");
      ev.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
        "activewrap"
      );

      /*close up the bubble function*/
      ev.cancelBubble = true;
    };
  };
});

setTimeout(() => {
  ul.classList.remove("initial");
}, 200);
