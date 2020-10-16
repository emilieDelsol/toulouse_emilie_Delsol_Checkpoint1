var img = document.getElementById("photoCV");
 
img.addEventListener("click", function(){img.src="image/photoCVs.jpg";img.classList.toggle("photoCV");})
//img.src = 'image/avatarEmilieBgBlack.jpg';

var photo = document.getElementsByClassName("photoCV");
photo.addEventListener("click", function(){photo.src="image/avatarEmilieBgBlack.jpg";})


f

  function promptFunction () {
    var Text = prompt ("Hello! What's your name?", "");
    if (Text != null) {
        if (Text != "") {
            document.getElementById ("name"). innerHTML = Text ;
            document.getElementById ("name").style.color="white";
        }}
    
}