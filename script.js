function searchFN() {
    var searchVal, wrapper, textDiv, text, searchInfo;
    searchVal = document.getElementById('search').value;
    searchInfo = document.getElementById("searchInfo");
    wrapper = document.getElementsByClassName("wrapper");


    for (i = 0; i < wrapper.length; i++) {
        textDiv = wrapper[i].getElementsByTagName("p")[0];
        text = textDiv.textContent || textDiv.innerText;
        if (text.toUpperCase().indexOf(searchVal.toUpperCase()) > -1) {
            wrapper[i].style.display = "";
        } else {
            wrapper[i].style.display = "none";
            hero.style.height = "70vh";
        }
        searchInfo.innerHTML = "<h1 class='mb-4 px-5'> Search Results for : " + searchVal + "</h1>"
    }
}