'use strict'

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milesimos valem 1 seguundo
var cron;

function start() {
  cron = setInterval(() => {timer()}, tempo);
}

function pause() {
  clearInterval(cron);
}

function stop() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;
  document.querySelector("#counter").innerText = "00:00:00";
}

function timer() {

  ss++;

  if(ss == 60) {
    ss = 0;
    mm++;
  }

  if(mm == 60){
    mm = 0;
    hh++;
  }

  if(hh == 24){
    hh = 0;
  }

  var format = (hh < 10 ? "0" + hh : hh) + ':' + (mm < 10 ? "0" + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
  document.querySelector("#counter").innerText = format;
}
