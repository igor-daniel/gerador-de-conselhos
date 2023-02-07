const clickBtn = async ()=>{
  let advArea = document.querySelector('.adiviceArea')
  let req = await fetch('https://api.adviceslip.com/advice');
  let content = await req.json();
  let advice = content.slip.advice

  if(advice != undefined){
    advArea.innerHTML = `<p>${advice} </p>`;
  }else{
    advArea.innerHTML = 'Anyone text found'
  }
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', clickBtn);
