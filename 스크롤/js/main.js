const sections = document.querySelectorAll('section');
const lis = document.querySelectorAll('ul li');
let postionArray = [];

//postionArray에 각 섹션의 offsetTop의 값을 넣을것입니다
function setPosition() {
	for (let el of sections) {
		postionArray.push(el.offsetTop);
	}
}
setPosition();
console.log(postionArray); // [0, 1000, 2200, 3100]

window.addEventListener('scroll', () => {
	// let scroll = window.scrollY;
	// let scroll2 = window.pageYOffset;
	let scroll = window.scrollY || window.pageYOffset;
	// let scroll2 = window.scrollY || window.pageYOffset ||
	// document.documentElement.scrollTop;

	sections.forEach((el, index) => {
		//만약에 scroll의 값이 0인덱스의 섹션과 1인덱스의 섹션
		//사이에 있다면??
		//sections[0]에 on을 붙여줍니다
		// if (scroll >= postionArray[0] && scroll < postionArray[1]) {
		// 	//on활성화 클래스를 붙이려면 먼저? on을 떼는 과정이 있어야
		// 	for (let el of sections) {
		// 		el.classList.remove('on');
		// 	}
		// 	sections[0].classList.add('on');
		// }
		// if (scroll >= postionArray[1] && scroll < postionArray[2]) {
		// 	for (let el of sections) {
		// 		el.classList.remove('on');
		// 	}
		// 	sections[1].classList.add('on');
		// }
		// if (scroll >= postionArray[2] && scroll < postionArray[3]) {
		// 	for (let el of sections) {
		// 		el.classList.remove('on');
		// 	}
		// 	sections[2].classList.add('on');
		// }
		// if (scroll >= postionArray[3]) {
		// 	for (let el of sections) {
		// 		el.classList.remove('on');
		// 	}
		// 	sections[3].classList.add('on');
		// }
		if (scroll >= postionArray[index]) {
			for (let el of sections) {
				el.classList.remove('on');
			}
			sections[index].classList.add('on');
		}
	});
});
