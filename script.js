var search_box = document.getElementsByClassName("input-search")[0];

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "Enter") {
        var query = search_box.value;
        console.log(query);
        window.location.href = "http://google.com/search?q=" + query;
    } else if (e.key === "Enter") 
    {
        var query = search_box.value;
        console.log(query);
        window.location.href = "http://duckduckgo.com/?q=" + query;
    }
    else
    {
        search_box.focus();
    }
});
