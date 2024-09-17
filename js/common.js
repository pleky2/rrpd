function tPop() {
    document.addEventListener("DOMContentLoaded", function (e) {
        o()(".grid-container .grid-item").on("click", function (e) {
            e.preventDefault();
            this.find(".data-popup").html();
            o()("#popup-bod .content-popup").html(t), openPopup("#popup-bod");
        });
    });
}