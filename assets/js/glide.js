import Glide from "@glidejs/glide";

const glide = document.querySelector(".glide");
if (glide) {
	new Glide(".glide", {
		type: "carousel1",
		startAt: 0,
		perView: 1,
		autoplay: 3500,
		animationDuration: 100
	}).mount();
}
