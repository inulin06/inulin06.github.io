// scripts.js
//導覽頁傳送門
document.addEventListener('DOMContentLoaded', () => {
	const scrollContainer = document.getElementById('horizontalScroll');
	home.onclick = () => {
		scrollContainer.scrollTo({
			left: 0,
			top: 0,
			behavior: "smooth"
		})
	}
		const aboutSection = document.getElementById('aboutSection')
		About.onclick = () => {
			scrollContainer.scrollTo({
				left: aboutSection.offsetLeft,
				top: 0,
				behavior: "smooth",
			})
	}
		const ServiceSection = document.getElementById('ServiceSection')
		Service.onclick = () => {
			scrollContainer.scrollTo({
				left: ServiceSection.offsetLeft,
				top: 0,
				behavior: "smooth",
			})
	}
		const CollectionSection = document.getElementById('CollectionSection')
		Collection.onclick = () => {
			scrollContainer.scrollTo({
				left: CollectionSection .offsetLeft,
				top: 0,
				behavior: "smooth",
			})
	}
		const ContactSection = document.getElementById('ContactSection')
		Contact.onclick = () => {
			scrollContainer.scrollTo({
				left: ContactSection.offsetLeft,
				top: 0,
				behavior: "smooth",
			})
	}

	//服務項目畫布
	const canvas = document.getElementById('canvas')
	const context = canvas.getContext('2d')

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
			const scrollAmount = event.deltaY*5;
			// 根據滾輪的方向進行橫向滾動
			scrollContainer.scrollBy({
				left: event.deltaY < 0 ? -scrollAmount : scrollAmount,
				left:scrollAmount,
				behavior: 'smooth' // 平滑滾動
			});

		//滑動背景變色
		scrollContainer.addEventListener('scroll', () => {
			const scrollPosition = scrollContainer.scrollLeft;
			const changeBackgroundcolor = 700;

			if (scrollPosition >= changeBackgroundcolor) {
				document.body.style.backgroundColor = "#94aca6";
			} else {
				document.body.style.backgroundColor = "#5a5247";
				}
			});
	});
});

//照片牆超出內容範圍可往下滑動

window.onload = function(){
	const photoWall =document.querySelectorAll('.photo-wall')
	if(photoWall.scrollHeight > photoWall.clientHeight){
		photoWall.style.overflowY='scroll';
	}else{
		photoWall.style.overflowY='hidden';
	}
}

const images = document.querySelectorAll('.photo-wall-img');
const photoWallModal = document.getElementById('photo-wall-modal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// 當點擊圖片時，顯示模態窗口
images.forEach((image, index) => {
    image.onclick = function() {
        currentIndex = index; // 更新當前圖片索引
        photoWallModal.style.display = "block";
        modalImg.src = this.src; // 將模態窗口的圖片設置為點擊的圖片
    }
});

// 當點擊關閉按鈕時，隱藏模態窗口
closeBtn.onclick = function() {
	photoWallModal.style.display = "none";
}

// 切換到上一張圖片
prevBtn.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // 循環到最後一張
    modalImg.src = images[currentIndex].src; // 更新圖片來源
}

// 切換到下一張圖片
nextBtn.onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // 循環到第一張
    modalImg.src = images[currentIndex].src; // 更新圖片來源
}

// 當用戶在模態窗口以外的區域點擊時，也隱藏模態窗口
window.onclick = function(event) {
    if (event.target == photoWallModal) {
			photoWallModal.style.display = "none";
    }
}
