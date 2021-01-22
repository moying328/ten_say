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
  function wait(ms){
    return new Promise((resolve)=>{
      setTimeout(resolve,ms);
    })
  }
  const traffic=document.querySelector('.traffic');

  async function signalLoop(subject,signals=[],onSignal){
    const signalCount=signals.length;
    for(let i=0;;i++){
      const {signal,duration}=signals[i % signalCount];
      // subject.className=signal;
      await onSignal(subject,signal);
      await wait(duration);
    }
  }
  // 数据抽象
  const signals = [
    {signal: 'pass', duration: 5000},
    {signal: 'wait', duration: 3500},
    {signal: 'stop', duration: 1500},
  ];
  signalLoop(traffic, signals,(subject,signal)=>{
    subject.className=`traffic ${signal}`
  });

  // four
  const list=document.querySelector('ul');
  const buttons=list.querySelectorAll('button');
  buttons.forEach((button)=>{
    button.addEventListener('click',function f(evt){
      const target=evt.target;
      target.parentNode.className='completed';
      setTimeout(()=>{
        list.removeChild(target.parentNode);
      },2000)
      // target.removeEventListener('click',f)
      target.disabled=true;
    })
  })
}