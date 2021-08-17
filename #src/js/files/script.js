let detailedButtonWrapper = document.querySelector(".workspace__link-wrapper");
if (detailedButtonWrapper != null) {
  let detailedButton = document.querySelector(".workspace__link_mobile");
  detailedButtonWrapper.addEventListener("click", function (e) {
    detailedButtonWrapper.classList.add("_active");
    detailedButton.classList.add("_active");
  });
}