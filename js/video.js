var video = document.querySelector('.video');

console.log(video)

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector('#volume').innerHTML = document.querySelector("#slider").value  + "%";
	video.play();
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	video.defaultPlaybackRate *= 0.9;
	console.log(video.defaultPlaybackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.defaultPlaybackRate /= 0.9;
	console.log(video.defaultPlaybackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute"){
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
	else{
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
})

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector('#volume').innerHTML = document.querySelector("#slider").value + "%";
	console.log(video.volume);
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})