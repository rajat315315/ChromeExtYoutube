// function state() { console.log("Re-Sorted!"); }
// var player = document.getElementById("movie_player");
// player.addEventListener("onStateChange", "state");
// console.log("Over!");

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// window.addEventListener("load", async function(){
	// console.log("Re-Sorted!");
	// await sleep(2000);

// function myFunction(){
var points = $("html").html().match(/{"videoRenderer":{"videoId":"([\w]*)"/g);
// 	points.forEach(function(word){
let reg = /{"videoRenderer":{"videoId":"([\w]*)"/g;
let w = (points || []).map(e => e.replace(reg, '$1'));
console.log(w);
// }
// var script = document.createElement('script');
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
// document.getElementsByTagName('head')[0].appendChild(script);
// console.log("Re-Sorted!");

// w.forEach(Id){
var htmlURL = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + w.toString() + "&key=AIzaSyCtqSZFcOd1h4JSLbNtJi9XNlMpT8lh8Tk";
// var xhr = new XMLHttpRequest();
// xhr.open('GET', htmlURL, true);
// xhr.send();
 
// xhr.onreadystatechange = processRequest;
 
// function processRequest(e) {
// 	console.log(xhr.responseText);
// 	console.log(xhr.responseText.canApprove);
//  	var response = jQuery.parseJSON(xhr.responseText);
        

//  
    
    

    $.getJSON( htmlURL, {
    	format: "json"
  	})
  		.done(function( data ) {
  			var line = [];
	      	$.each( data.items, function( i, item ) {
	      		console.log(item.statistics);
	      		console.log(item.statistics.toLocaleString);
	      		console.log(item.statistics.valueOf);
	      		console.log(JSON.stringify(item.statistics));
	      		console.log(i);
	      		line[i] = document.createElement("p");
				line[i].innerHTML = JSON.stringify(item.statistics);
	      		
			})
	      	var i;
			for (i = 0; i < 10; i++) { 
				console.log($('#contents.style-scope.ytd-item-section-renderer')[0]['childNodes']);
				console.log(line[i]);
			  $('#contents.style-scope.ytd-item-section-renderer')[0]['childNodes'][i].appendChild(line[i]);
			}
	
		});


  	// $('#contents.style-scope.ytd-item-section-renderer').children[i].appendChild(line);
// }

// setTimeout(myFunction, 5000);

// console.log("Re-Sorted!");

// });


//     });
