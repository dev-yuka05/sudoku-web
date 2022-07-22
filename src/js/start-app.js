if(localStorage.getItem("start")){
    location.href = './index.html';
}else{
    localStorage.setItem("start", true);
}

if(!localStorage.getItem("level")){
    localStorage.setItem("level", 0);
};