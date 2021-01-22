window.onload=function(){
  // const btn=document.getElementById("modeBtn");
  //   btn.addEventListener('click',(e)=>{
  //     const body=document.body;
  //     if(body.className !== 'night'){
  //       body.className='night';
  //     }else{
  //       body.className='';
  //     }
  //   })
  
  // three
  const traffic=document.querySelector('.traffic');
  function loop(subject){
    subject.className='traffic pass';
    setTimeout(()=>{
      subject.className='traffic wait';
      setTimeout(()=>{
        subject.className='traffic stop';
        setTimeout(loop.bind(null, subject), 3500);
      },1500)
    },5000)
  }
  loop(traffic)
}