// scripts.js
//導覽頁home鍵
document.addEventListener('DOMContentLoaded', () => {
	const scrollContainer = document.getElementById('horizontalScroll');
	home.onclick = () => {
		scrollContainer.scrollTo({
			left: 0,
			top: 0,
			behavior: "smooth"
		})
	}

	//服務項目畫布
	const canvas = document.getElementById('canvas')
	const context = canvas.getContext('2d')
	/*const scale = window.devicePixelRatio || 2;

	canvas.width = 500 * scale;
	canvas.height = 500 * scale;*/

	function draw() {
		context.strokeStyle = '#d6c9bc'
		context.lineWidth = 300
		context.beginPath()
		context.moveTo(100, -150)
		context.lineTo(700, 700)
		context.stroke()

		context.strokeStyle = '#cdd2d5'
		context.lineWidth = 300
		context.beginPath()
		context.moveTo(1400, -150)
		context.lineTo(500, 700)
		context.stroke()
	}
	window.onload = draw;


	scrollContainer.addEventListener('wheel', (event) => {
			// 防止默認的垂直滾動行為
			event.preventDefault();
			// 設定一次滾動的距離，這裡設為 50px
			const scrollAmount = 500;
			// 根據滾輪的方向進行橫向滾動
			scrollContainer.scrollBy({
					left: event.deltaY < 0 ? -scrollAmount : scrollAmount,
					behavior: 'smooth' // 平滑滾動
			});

		//滑動背景變色
	const scrollPosition = scrollContainer.scrollLeft;
	const changeBackgroundcolor = 700;

	if (scrollPosition >= changeBackgroundcolor) {
		document.body.style.backgroundColor = "#94aca6";
	} else {
		document.body.style.backgroundColor = "#5a5247";
		}
	});
});
