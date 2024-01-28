document.addEventListener("DOMContentLoaded", function() {
    const view = document.getElementById("view");
    view.addEventListener("click", function() {
        window.location.href = "/view";
    });
    const send = document.getElementById("send");
    send.addEventListener("click", function() {
        window.location.href = "/send";
    });

    const edit = document.getElementById("edit");
    edit.addEventListener("click", function() {
        window.location.href = "/edit";
    });
    const back = document.getElementById("back-btn");
    back.addEventListener("click", function() {
        window.location.href = "/home";
    });
});