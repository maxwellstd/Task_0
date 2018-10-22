/*TABS*/
document.getElementById("tabAbout").addEventListener("click", function(e){
	openTab(e, "About");
});	
document.getElementById("tabPhotos").addEventListener("click", function(e){
	openTab(e, "Photos");
});
function openTab(evt, tabName) {
	var i, about_container, photos_container, tablinks;
	about_container = document.getElementsByClassName("about_container");
	for (i = 0; i < about_container.length; i++) {
		about_container[i].style.display = "none";
	}
	photos_container = document.getElementsByClassName("photos_container");
	for (i = 0; i < photos_container.length; i++) {
		photos_container[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "inline-block";
	evt.currentTarget.className += " active";
}
/*POPUP*/
var popupBtn = document.querySelectorAll(".popupBtn"),
popupImage= document.querySelectorAll(".popupImage");
for (let i = 0; i < popupBtn.length; i++) {
	popupBtn[i].addEventListener("click", function(e) {
		showModal(popupImage[i]);
	})
}
function showModal(image) {
	var popup = document.getElementById("myModal");
	popup.innerHTML = `
	<div class="popEdupImage_container" >
	<img class="popEdupImage" src="${image.src}">
	<span class="close">&times;</span> 
	</div>
	`;
	popup.style.display = "flex";
	var span = document.getElementsByClassName("close")[0].addEventListener("click", function(){
		popup.style.display = "none";
	});
}
