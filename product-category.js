//Full Screen Overlay-產品類別
  function openCategoryOverlay() {
    document.getElementById("categoryOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeCategoryOverlay() {
    document.getElementById("categoryOverlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeCategoryOverlay();
    }
  });