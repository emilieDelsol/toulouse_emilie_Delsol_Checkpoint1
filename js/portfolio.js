var img = document.getElementById("photoCV");
 
img.addEventListener("click", function(){img.src="image/photoCVs.jpg";img.classList.toggle("photoCV");})
//img.src = 'image/avatarEmilieBgBlack.jpg';

var photo = document.getElementsByClassName("photoCV");
photo.addEventListener("click", function(){photo.src="image/avatarEmilieBgBlack.jpg";})




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
    var allYellowBg=document.querySelectorAll(".yellow-bg");
    for (i=0 ; i<allYellowBg.length;i++){
        allYellowBg[i].classList.toggle("darkTheme");
    }
    document.querySelector("body").classList.toggle("darkThemeBody");
    
    var darkText=document.querySelectorAll(".darkText");
    for (j=0;j<darkText.length;j++){
        darkText[i].classList.toggle("darkThemeText");
    }
        
}
    
    
