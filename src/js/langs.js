document.querySelector('.ko').addEventListener('click',()=>{
    localStorage.setItem("lang", 'ko');
    location.href = './index.html';
});
document.querySelector('.ja').addEventListener('click',()=>{
    localStorage.setItem("lang", 'ja');
    location.href = './index.html';
});
document.querySelector('.en').addEventListener('click',()=>{
    localStorage.setItem("lang", 'en');
    location.href = './index.html';
});

