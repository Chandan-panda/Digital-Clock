setInterval(function() {
  let x=new Date();
  let hr=x.getHours();
  let min=x.getMinutes();
  let sec=x.getSeconds();
  let Day=new Date().getDay();

  if (hr>12){
    hr=hr-12;
    document.getElementById("meridiem").innerHTML="PM";
  }
  else{
    document.getElementById("meridiem").innerHTML="AM";
  }
  if(Day==1){
    day.innerHTML="Monday";
  }
  if(Day==2){
    day.innerHTML="Tuesday";
  }
  if(Day==3){
    day.innerHTML="Wednesday";
  }
  if(Day==4){
    day.innerHTML="Thursday";
  }
  if(Day==5){
    day.innerHTML="Friday";
  }
  if(Day==6){
    day.innerHTML="Saturday";
  }
  if(Day==7){
    day.innerHTML="Sunday";
  }

  hours.innerHTML=hr+'<p class="time-text">Hour</p>';
  minutes.innerHTML=min+'<p class="time-text">Minutes</p>';
  seconds.innerHTML=sec+'<p class="time-text">Seconds</p>';
},1000)