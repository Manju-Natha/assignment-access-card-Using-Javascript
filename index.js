// Example Valid URLs: https://learning.ccbp.in/, https://www.google.c

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
let submitBtn = document.getElementById("submitBtn");

function addbookmark() {
  let sitename = siteNameInput.value;
  let urlname = siteUrlInput.value;
  let Listitem = document.createElement("li");
  bookmarksList.appendChild(Listitem);
  let bookmarkname = document.createElement("p");
  let bookmarkurl = document.createElement("a");
  bookmarkname.textContent = sitename;
  bookmarkurl.textContent = urlname;
  bookmarkurl.href = urlname;
  bookmarkurl.setAttribute("target", "_black");
  bookmarksList.classList.toggle("d-none");
  Listitem.appendChild(bookmarkname);
  Listitem.appendChild(bookmarkurl);
}

siteUrlInput.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteUrlErrMsg.textContent = "Required**";
  } else {
    siteUrlErrMsg.textContent = "";
  }
});

siteNameInput.addEventListener("change", function (event) {
  if (event.target.value === "") {
    siteNameErrMsg.textContent = "Required**";
  } else {
    siteNameErrMsg.textContent = "";
  }
});

bookmarkForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addbookmark();
});
