const DOM = {
    header: document.getElementById('header')
}


function getHeader() {
    const div = document.createElement("div");
    div.classList.add('py-5')
    const h1 = document.createElement("h1");
    h1.innerText = page.header.h1;
    h1.classList.add('ps-4')
    const h2 = document.createElement("h2");
    h2.innerText = page.header.h2;
    h2.classList.add('ps-5', 'py-3')
    div.append(h1, h2)
    DOM.header.append(div)
}

function getNavbar() {
    const div = document.createElement("div");
    div.classList.add('py-5')
    const homeLink = document.createElement("a");
    homeLink.innerText = 'Home';
    homeLink.href = './index.html'
    div.append(homeLink)
    DOM.header.append(div)
}

function init() {
    console.log('script start');
    getHeader()
    getNavbar()
}

init()