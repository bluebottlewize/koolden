var search_box = document.getElementsByClassName("input-search")[0];

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "Enter") {
        var query = search_box.value;
        console.log(query);
        window.location.href = "http://google.com/search?q=" + query;
    } else if (e.key === "Enter") {
        var query = search_box.value;
        console.log(query);
        window.location.href = "http://duckduckgo.com/?q=" + query;
    } else {
        search_box.focus();
    }
});

var bookmarks = document.getElementsByClassName("card-container");

var nav_items = document.getElementsByClassName("nav-item");

for (var i = 0; i < 3; ++i) {
    nav_items[i].addEventListener("click", function (e) {
        let id = e.target.innerText.toLowerCase();

        for (var j = 0; j < 3; ++j) {
            if (bookmarks[j].id == id) {
                console.log(id);
                bookmarks[j].classList.add("active");
                nav_items[j].classList.add("active");
            } else {
                bookmarks[j].classList.remove("active");
                nav_items[j].classList.remove("active");
            }
        }
    });
}
