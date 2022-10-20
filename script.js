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
// set up text to print, each item in array is new line
var aText = new Array(
"This is Facts - Website, You can Read New and Unique Fact. This Website Provides you a Inspiring, Fun, Motivational, New, and many more types of Facts."
   " If You are Developer or You Want Contribute then click on Contribute button and solve issues or add Unique Facts."
   " If you are Normal User then do not Click on Contribute Button you can only Read Facts."
);
var iSpeed = 100; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
var iTextPos = 0;
var sContents = ''; 
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}
