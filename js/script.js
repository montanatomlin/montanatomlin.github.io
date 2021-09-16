const toggleButton = document.getElementById('toggle-button');
const navbarlinks = document.getElementById('navbar-links');
const menuCloseButton = document.getElementById('close-button');

toggleButton.addEventListener('click',handleHamburger);


function hamburgerDisplay(){
	console.log('hamburgerDisplay');
	navbarlinks.classList.add('menu-open');
	navbarlinks.classList.remove('menu-close');
	menuClose = false;

	}
menuCloseButton.addEventListener('click', hamburgerCloses);

function hamburgerCloses() {
	console.log('hiddenHamburgerCloses');
  navbarlinks.classList.add('menu-close');
    navbarlinks.classList.remove('menu-open');
    menuClose = true;
}




let menuClose = true;
console.log('menuClose',menuClose);
function handleHamburger(){
	console.log('hiddenHandleHamburger');
	if(menuClose===true){
		console.log('hiddenIfStatement');
		hamburgerDisplay();
		//if the menu is closed we want to open it
		//function menuOpen
	} else {
		console.log('hiddenElseStatement');
		hamburgerCloses();
		//This is saying if menu is open we want to close it
		//function menuClose

	}

}