const btn = document.getElementById("m-nav-btn");
const list = document.getElementById("m-container");

const handleBtn = () => {
	const temp = list.classList.contains("on");
	if (temp) {
		list.classList.remove("on");
		list.style.display = "none";
	} else {
		list.classList.add("on");
		list.style.display = "block";
	}
};

const init = () => {
	btn.addEventListener("click", handleBtn);
};

if (btn) init();
