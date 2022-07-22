function getLanguage() {
    return navigator.language || navigator.userLanguage;
}

if(!localStorage.getItem("lang")){
    if(getLanguage() == "ko"){
        localStorage.setItem("lang", 'ko');
        location.href = './ko/index.html';
    }else if(getLanguage() == "ja"){
        localStorage.setItem("lang", 'ja');
        location.href = './ja/index.html';
    }else{
        localStorage.setItem("lang", 'en');
        location.href = './en/index.html';
    }
}else{
    location.href = `./${localStorage.getItem("lang")}/index.html`;
};