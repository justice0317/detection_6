const sidebar = document.querySelector('.sidebar');
const overlay = document.createElement('div');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const nextButton = document.querySelector('.next-btn');

// 建立遮罩元素
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// 彈跳視窗控制
menuButton.addEventListener('click', () => {
    sidebar.style.left = '0';
    overlay.classList.add('active');
});

closeButton.addEventListener('click', () => {
    sidebar.style.left = '-100%';
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.style.left = '-100%';
    overlay.classList.remove('active');
});

// 按鈕跳轉功能
nextButton.addEventListener('click', () => {
    window.location.href = 'https://aibadminton-6.vercel.app';
});
