function toggleHide(){
    const menubar = document.getElementById('menu-bar');
    const ullink = document.getElementById('ul-link');

    if(ullink.style.display != 'none'){
        ullink.style.display = 'none'
    }
    else{
        ullink.style.display = 'block';
    }
}