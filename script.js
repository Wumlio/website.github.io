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
    "url('1786188610083.png')",
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
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
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

// 渲染工作
function renderWorks() {
    const container = document.getElementById('work-list');
    const types = Object.keys(myWorks);

    // 三个分类标签
    let html = '<div class="work-tabs">';
    types.forEach((type, i) => {
        html += `<button class="work-tab ${i === 0 ? 'active' : ''}" 
                    onclick="showWorkTab('${type}', this)">${type}</button>`;
    });
    html += '</div>';

    // 每个分类的内容
    types.forEach((type, i) => {
        html += `<div class="work-panel ${i === 0 ? 'active' : ''}" id="work-${type}">`;
        html += myWorks[type].map(item => `
            <div class="card">
                <h3>${item.title}</h3>
                <p>📅 ${item.date}</p>
                <p><small>${item.note}</small></p>
            </div>
        `).join('');
        html += '</div>';
    });

    container.innerHTML = html;
}

// 切换工作分类
function showWorkTab(type, btn) {
    document.querySelectorAll('.work-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.work-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('work-' + type).classList.add('active');
}

// 渲染影视
function renderMovies() {
    const container = document.getElementById('movie-list');
    container.innerHTML = myMovies.map(item => `
        <div class="card">
            <h3>${item.title}</h3>
            <p>类型：${item.type}</p>
            <p><small>${item.note}</small></p>
        </div>
    `).join('');
}

// 渲染年度清单
function renderYearList() {
    const container = document.getElementById('year-list');
    container.innerHTML = `
        <div class="year-grid">
            ${myYearList.map(m => `
                <div class="month-card">
                    <div class="month-header">
                        <span class="month-icon">${m.icon}</span>
                        <span class="month-name">${m.month}</span>
                    </div>
                    <ul class="month-items">
                        ${m.items.map(i => `<li>${i}</li>`).join('') || '<li class="empty">暂无计划</li>'}
                    </ul>
                    ${m.note ? `<div class="month-note">📝 ${m.note}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

// 渲染学习
function renderStudy() {
    const container = document.getElementById('study-list');
    container.innerHTML = myStudy.map(item => `
        <div class="card">
            <h3>${item.title}</h3>
            <p>进度：${item.progress}</p>
        </div>
    `).join('');
}
