
let audio = document.querySelector("audio")
let train = document.querySelector('#train')

let open = () => {
  audio.innerHTML='<source src="audio/5.wav"> '
}
train.addEventListener('click',open)





let move  =  () => {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    train.style.left = timePassed / 3 + 'px';

    if (timePassed > 7300) clearInterval(timer);
   

  }, 5);
  setTimeout(function(){
    window.location.reload(1);
 }, 13000);
}



train.addEventListener('click' , move)