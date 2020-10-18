var img = document.getElementById("photoCV");
 
img.addEventListener("click", function(){
    if (img.getAttribute('src') == "image/avatarEmilieBgWhiteRed.jpg") 
    {
        img.src="image/avatarEmilieBgWhite.jpg";
    }
    else
    {
        img.src="image/avatarEmilieBgWhiteRed.jpg";
    }

    

    
});



  function promptFunction () {
    var color = prompt ("choose a background color, ex: #750ff7");
    var Text = prompt ("Hello! What's your name?", "");
    var allYellowBg=document.querySelectorAll(".yellow-bg");
    var allYellowText=document.querySelectorAll(".yellow-text");
    if (Text != null && color!= null) {
        if (Text != "" && color != "") {
            document.getElementById ("name"). innerHTML = Text ;
            document.getElementById ("name").style.color="white";
            document.getElementById("description").classList.toggle("yellow-bg");
            document.getElementById ("description")
            for (i=0 ; i<allYellowText.length;i++){
                allYellowText[i].style.color=color;
            }
            for (i=0 ; i<allYellowBg.length;i++){
                allYellowBg[i].style.backgroundColor=color;
            }
                
            
                
           
            
        }}
    
    
    }
function darkFunction () {
    //change Bg yellow by background image code
    var allYellowBg=document.querySelectorAll(".yellow-bg");
    for (i=0 ; i<allYellowBg.length;i++){ 
        allYellowBg[i].classList.toggle("darkTheme");
    }

    //Change body background
    document.querySelector("body").classList.toggle("darkThemeBody"); 
    
    //change text color in white
    var darkText=document.querySelectorAll(".darkText");
    for (j=0;j<darkText.length;j++){ 
        darkText[i].classList.toggle("darkThemeText");
    }

    //change desktop img opacity
    document.getElementById("desktop").style.opacity="0.8";

    var column = document.getElementsByClassName("column");
    for (n=0; n<column.length; n++){
        column[n].style.backgroundColor="rgba(233, 240, 243, 0.8)";
    }
    if (img.getAttribute('src')=="image/avatarEmilieBgWhiteRed.jpg")
    {
        img.src="image/avatarEmilieBgBlackRed.jpg"
    }
    else if (img.getAttribute('src')=="image/avatarEmilieBgWhite.jpg")
    {
        img.src="image/avatarEmilieBgBlack.jpg";
    }
    else if (img.getAttribute('src')=="image/avatarEmilieBgBlackRed.jpg")
    {
        img.src="image/avatarEmilieBgWhiteRed.jpg";
    }
    else
    {
        img.src="image/avatarEmilieBgWhite.jpg";
    }

    
    
}