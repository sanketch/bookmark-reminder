function clickHandler(e) {
  	var select = document.getElementById("preference");
	preference = select.children[select.selectedIndex].value;
	localStorage["preference"] = preference;
	document.getElementById("current").textContent = localStorage.preference;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});

window.onload = function (){
	document.getElementById("current").textContent = localStorage.preference;
}