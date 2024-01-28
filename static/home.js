document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded')
    /*
    const viewRefresher = document.getElementById("view");
    console.log('test1')
        viewRefresher.addEventListener("submit", function(e) {
            console.log('test2')
            e.preventDefault()
        });
    */
    const view = document.getElementById("view");
    view.addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5000/view";
    });
    const send = document.getElementById("send");
    send.addEventListener("click", function() {
        console.log('asdfasdf2')
        window.location.href = "http://127.0.0.1:5000/send";
    });

    const edit = document.getElementById("edit");
    edit.addEventListener("click", function() {
        console.log('asdfasdf3')
        window.location.href = "http://127.0.0.1:5000/edit";
    });
});