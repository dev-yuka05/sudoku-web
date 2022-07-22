if(!localStorage.getItem("start")){
    location.href = './start.html';
}

if(document.querySelector('.level')){
    document.querySelectorAll('.level').forEach((el)=>{
        el.innerHTML = localStorage.getItem('level');
    });
};