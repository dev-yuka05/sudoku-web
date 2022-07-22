const g = (e) => {
    let n = [];
    while(n.length < e){
        n.push(Math.floor(Math.random() * (e - 1 + 1)) + 1);
        n = Array.from(new Set(n));
    };
    return n;
}

function numberMaxLength(e){

    if(e.value.length > e.maxLength){

        e.value = e.value.slice(0, e.maxLength);

    }

}

if(localStorage.getItem("level") == 0){
    document.querySelector('.title').innerHTML = '레벨 1 - 연습게임';
    let ns = g(4);
    let i = 0;
    let ele = "";
    ns.forEach((e)=>{
        i++;
        if(i == 3){
            ele += `<input class="v" type="number" maxlength="1" oninput="numberMaxLength(this);">`;
        }else{
            ele += `<input class="v" type="number" placeholder="${e}" value="${e}" disabled>`;
        }
    });

    document.querySelector('.game').innerHTML = `<div class="box-1">${ele}</div>`;    

    document.querySelector('#end').addEventListener('click',()=>{
        let q = [];
        document.querySelectorAll('.v').forEach((el)=>{
            q.push(Number(el.value));
        });

        if(String(q) == String(ns)){
            localStorage.setItem("level", 1);
            location.reload();
        }
    });
}