"use strict";

(function() {

  window.addEventListener("load", init);

  function init() {
    document.getElementById("sum").addEventListener("change", start);
    document.getElementById("showAll").addEventListener("change", showAll);
    document.getElementById("answer").addEventListener("click", getAnswers);
    document.getElementById("draw").addEventListener("click", drawPictures);
    document.getElementById("clear").addEventListener("click", clear);

    clear();
  }

  function start() {
    const tree = document.querySelector("article.tree");
    tree.innerHTML = "";

    const sum = document.getElementById("sum").value;
    const p = document.createElement("p");
    p.classList.add("row");
    p.textContent = sum;
    tree.appendChild(p);

    let row = document.createElement("div");
    row.classList.add("row");
    let triangle = document.createElement("div");
    triangle.classList.add("triangle");
    tree.appendChild(row);
    row.appendChild(triangle);

    const drawing = document.querySelector("article.illustration");
    if (drawing.querySelector("ul li")) {
      drawPictures();
    }
  }

  function getAnswers() {
    start();
    const tree = document.querySelector("article.tree");

    const sum = parseInt(document.getElementById("sum").value);
    for (const item of addends(sum)) {
      const row = document.createElement("div");
      row.classList.add("answer", "row");

      const left = document.createElement("div");
      const right = document.createElement("div");
      left.classList.add("left");
      right.classList.add("right");
      left.textContent = item;
      right.textContent = sum - item;
      row.appendChild(left);
      row.appendChild(right);
      tree.appendChild(row);
    }
  }

  function getLimit(sum) {
    return document.getElementById("showAll").checked ? sum - 1 : sum / 2;
  }

  function addends(sum) {
    let result = [];
    const limit = getLimit(sum);
    for (let i = 1; i <= limit; i++) {
      result.push(i);
    }
    return result;
  }

  function showAll() {
    const tree = document.querySelector("article.tree");
    const drawing = document.querySelector("article.illustration");

    if (tree.querySelector(".row.answer")) {
      getAnswers();
    }

    if (drawing.querySelector("ul li")) {
      drawPictures();
    }
  }

  function drawPictures() {
    const drawing = document.querySelector("article.illustration");
    drawing.innerHTML = "";

    const sum = parseInt(document.getElementById("sum").value);
    drawing.appendChild(drawBalls(sum));
  }

  function drawBalls(sum) {
    const ul = document.createElement("ul");

    const phantom = document.createElement("li");
    phantom.classList.add("phantom");
    ul.appendChild(phantom);

    for (const item of addends(sum)) {
      const li = document.createElement("li");
      li.classList.add("row");

      for (let i = 0; i < item; i++) {
        const ball = document.createElement("div");
        ball.classList.add("ball", "blue");
        li.appendChild(ball);
      }

      for (let i = item; i < sum; i++) {
        const ball = document.createElement("div");
        ball.classList.add("ball", "red");
        li.appendChild(ball);
      }

      ul.appendChild(li);
    }

    return ul;
  }

  function clear() {
    document.querySelector("article.tree").innerHTML = "";
    document.querySelector("article.illustration").innerHTML = "";

    start();
  }

})();
