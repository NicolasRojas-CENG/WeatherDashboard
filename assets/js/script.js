var searchHistoryId = 0

function loadSearchHistory() {
    var size = JSON.parse(localStorage.getItem("size"));
    for (var i = 0; i < size; i++) {
        var key = "search" + i;
        var text = JSON.parse(localStorage.getItem(key));
        var historyButton = $("<button>");
        historyButton.addClass("col-12 my-2 btn btn-secondary");
        historyButton.attr("id", key);
        historyButton.text(text);
        $(".searchHistory").append(historyButton);
        searchHistoryId++;
    }
}

function updateSearchHistory() {
    var historyButton = $("<button>");
    var text = $("#searchInfo").val();
    historyButton.addClass("col-12 my-2 btn btn-secondary");
    if (searchHistoryId > 7){
        $("#search0").remove();
        for (var i = 0; i < 8;i++) {
            $("#search" + (i+1)).attr("id", "search" + i);
            saveSearchHistory("search" + i, $("#search" + i).text());
        }
        searchHistoryId = 7;
    }
    idValue = "search" + searchHistoryId
    historyButton.attr("id", idValue);
    historyButton.text(text);
    $(".searchHistory").append(historyButton);
    searchHistoryId++;
    saveSearchHistory(idValue, text); 
}

function saveSearchHistory(id, text) {
    localStorage.setItem(id, JSON.stringify(text));
    localStorage.setItem("size", JSON.stringify(searchHistoryId));
}

$("#searchBtn").on("click", function(){
    var search = $("#searchInfo").val();
    if (!search){
        alert("Please enter the name of a city.");
    } else {
        updateSearchHistory();
    }
});

loadSearchHistory();