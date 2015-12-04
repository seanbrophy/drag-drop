// JavaScript Document

//this is how you typically setup your javascript files

//self exectuing anonymous function - use this. prevents global variables.. use paranthesis () for anonymous below

(function() {
	"use strict";
	//console.log("Yep the SEAF Fired");
	
	//Variables
	var dropZoneOne = document.querySelector("#targetOne");
	var dropZoneTwo = document.querySelector("#targetTwo");
	
	var dragElements = document.querySelectorAll("#drag-elements li");
	
	var elementDragged = null;
	
	var catPoints = document.querySelector("#cats");
	var dogPoints = document.querySelector("#dogs");
	var catScore = 0;
	var dogScore = 0;
	
	//Functions
	function dragStart(e) {
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text', this.innerHTML);
			elementDragged = this;
	}
	
	function dragEnd(e){
			elementDragged = null;
	}
	
	function dragOver(e){
		if(e.preventDefault){
			e.preventDefault();
		}
		
		e.dataTransfer.dropEffect = "move";
		
		return false;
	}
	
	function dragEnter(e) {
  		this.className = "over";
	}
	
	function dragLeave(e) {
	  	this.className = "";
	}
	
	//makes only cats enter the cat box
	function cat(e){
		if (e.preventDefault){ e.preventDefault(); }
  		if (e.stopPropagation){e.stopPropagation();}
		
		if(elementDragged.className==="cat" && this.id==="targetOne"){
			console.log("this is a cat");
			document.querySelector('#drag-elements').removeChild(elementDragged);
			this.className="";
			this.innerHTML= e.dataTransfer.getData('text');
			++catScore;
			catPoints.innerHTML= "Cats: " + catScore;
			//console.log(catScore);
		}
		else if(elementDragged.className==="dog" && this.id==="targetTwo"){
			console.log("this is a dog");
			document.querySelector('#drag-elements').removeChild(elementDragged);
			this.className="";
			this.innerHTML= e.dataTransfer.getData('text');
			++dogScore;
			dogPoints.innerHTML= "Dogs: " + dogScore;
			//console.log(dogScore);
		}
		else{
			window.alert("This Does Not Go Here");
		}
		
		return false;
	}
	
	//makes only dogs enter the dog box
	function dog(e){
		if (e.preventDefault){e.preventDefault(); }
  		if (e.stopPropagation){e.stopPropagation();}
		
		if(elementDragged.className==="dog"){
			console.log("this is a dog");
			document.querySelector('#drag-elements').removeChild(elementDragged);
			this.className="";
			this.innerHTML= e.dataTransfer.getData('text');
			++dogScore;
			dogPoints.innerHTML= "Dogs: " + dogScore;
			//console.log(dogScore);
		}
		else{
			window.alert("This Does Not Go Here");
		}
		
		return false;
	}
	
	
	//Listeners
	for (var i = 0; i < dragElements.length; i++){
		dragElements[i].addEventListener("dragstart", dragStart, false);
		
		dragElements[i].addEventListener("dragend", dragEnd, false);
	}
	
	dropZoneOne.addEventListener('dragover', dragOver, false);
	dropZoneOne.addEventListener('dragenter', dragEnter, false);
	dropZoneOne.addEventListener('dragleave', dragLeave, false);
	dropZoneOne.addEventListener('drop', cat, false);
	
	dropZoneTwo.addEventListener('dragover', dragOver, false);
	dropZoneTwo.addEventListener('dragenter', dragEnter, false);
	dropZoneTwo.addEventListener('dragleave', dragLeave, false);
	dropZoneTwo.addEventListener('drop', dog, false);
})();