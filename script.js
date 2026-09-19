// 页面切换
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'books') renderBooks();
    if (pageId === 'images') renderImages();
    if (pageId === 'links') renderLinks();
}

// 背景切换
const bgColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    '#2c3e50'
];
let bgIndex = 0;

function changeBg() {
    bgIndex = (bgIndex + 1) % bgColors.length;
    document.body.style.background = bgColors[bgIndex];
}

// 渲染书籍
function renderBooks() {
    const container = document.getElementById('book-list');
    container.innerHTML = myBooks.map(book => `
        <div class="card">
            <h3>${book.title}</h3>
            <p>作者：${book.author}</p>
            <p><small>${book.note}</small></p>
        </div>
    `).join('');
}

// 渲染图片
function renderImages() {
    const container = document.getElementById('image-grid');
    container.innerHTML = myImages.map(img => `
        <div class="card">
            <img src="${img.url}" alt="${img.desc}">
            <p>${img.desc}</p>
        </div>
    `).join('');
}

// 渲染链接
function renderLinks() {
    const container = document.getElementById('link-list');
    container.innerHTML = myLinks.map(link => `
        <li><a href="${link.url}" target="_blank">${link.name}</a></li>
    `).join('');
}

// 初始化背景
//document.body.style.background = bgColors[0];
