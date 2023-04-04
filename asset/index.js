const hour = document.getElementById('hora')
const minute = document.getElementById('minuto')
const second = document.getElementById('segundo')
const milesim = document.getElementById('milesimo')

const container = setInterval(function tempo(){
var hoje = new Date()
var hr = hoje.getHours()
var min = hoje.getMinutes()
var sec = hoje.getSeconds()
var mil = hoje.getMilliseconds()

if (hr < 10) hr = '0'+ hr
if(min <10) min = '0'+ min
if (sec <10) sec ='0'+ sec
if (mil <10) mil = '0'+ mil

hour.innerHTML = hr
minute.innerHTML = min
second.innerHTML = sec
milesim.innerHTML = mil
})
