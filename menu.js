function Menu() {
    for (let i = 1; i < 5; i++) {
        let page = document.getElementById('page' + i);
        page.style.display = 'block';
    };
    let menu = document.getElementById('open');
    menu.style.display = 'none';
    let close = document.getElementById('close');
    close.style.display = 'block';
}
function Close() {
    for (let i = 1; i < 5; i++) {
        let page = document.getElementById('page' + i);
        page.style.display = 'none';
    };
    let menu = document.getElementById('open');
    menu.style.display = 'block';
    let close = document.getElementById('close');
    close.style.display = 'none';
    
}