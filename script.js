var a,i,Tstart;
var chkStart=1;
addEventListener("load" , function() {
  init_start_stop();
  start_stopUI();
});

function init_start_stop() {
  document.getElementById("circle").style.backgroundColor = "turquoise" ;
  document.getElementById("circle").innerHTML = "START!" ;
}

function start_stopUI() {
  document.getElementById("circle").addEventListener("click", function (){
    if (chkStart==1) {
      document.getElementById("Output").style.display = "none";
      document.getElementById("circle").style.backgroundColor = "lightgreen" ;
      document.getElementById("circle").innerHTML = '<br>';
      var t=Math.floor((Math.random()*8)+1)*1000;
      chkStart=2;
      a=setTimeout(Timerstart,t);
      console.log("true1");
    }
    else if (chkStart==0){
      console.log("false1");
      var Tstop=new Date();
      var f=Tstop.getTime();
      var reacTime= (f-i);
      document.getElementById("Output").innerHTML="Your Reaction Time is: &nbsp" + reacTime +" milliseconds";
      document.getElementById("Output").style.display = "block" ;
      clearTimeout(a);
      chkStart=true;
      init_start_stop();
    }
    else {
      clearTimeout(a);
      chkStart=1;
      document.getElementById("circle").style.backgroundColor = "turquoise" ;
      document.getElementById("circle").innerHTML = "OOPS!" ;
      document.getElementById("Output").innerHTML = "You have to wait until the color changes to red!!" + '<br>' + "Click again to start!" ;
      document.getElementById("Output").style.display = "block" ;
    }
  });
}

function Timerstart() {
  Tstart=new Date();
  i=Tstart.getTime();
  document.getElementById("circle").style.backgroundColor = "lightcoral" ;
  document.getElementById("circle").innerHTML = "STOP!" ;
  chkStart=0;
}
