//Verify the file is working
console.log("javascript is working!");

//Selections for Icon Groups

let contactIcons = document.querySelector('.footer_icons');
let personalIcons = document.querySelector('.personal_icons');
let creativeIcons = document.querySelector('.creativity_icons');

//Selections for Individual Icons



//Functions for the selections

function logFooter(){
	console.log('You Selected a Contact Icon!');
	console.log("I am called:", this.id);
}

function logPersonal(){
	console.log('You selected a Personal Icon!');
	console.log("I am called:", this.id);
}

function logCreative(){
	console.log('You selected a Creativity Icon!');
	console.log("I am called:", this.id);
}

//These events tell the user which Icon package they have selected

contactIcons.addEventListener("click", logFooter);
personalIcons.addEventListener("click", logPersonal);
creativeIcons.addEventListener("click", logCreative);

