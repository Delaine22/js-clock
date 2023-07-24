const hour = document.getElementById('hora')
const minute = document.getElementById('minuto')
const second = document.getElementById('segundo')

const container = setInterval(function tempo(){
var hoje = new Date()
var hr = hoje.getHours()
var min = hoje.getMinutes()
var sec = hoje.getSeconds()

if (hr < 10) hr = '0'+ hr
if(min <10) min = '0'+ min
if (sec <10) sec ='0'+ sec

hour.innerHTML = hr
minute.innerHTML = min
second.innerHTML = sec
})
