const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const hidenElement = document.querySelector(".main-class");
const HIDDEN = "hidden";
function showElement() {
    hidenElement.classList.remove(HIDDEN);

}
function hideElement() {
    hidenElement.classList.add(HIDDEN);
}
function setDetails(anchor) {
    showElement();
    const dataImage = anchor.getAttribute("data-detailes-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-detailes-title");
}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function () {
        setDetails(anchorElements[i])
    })
}