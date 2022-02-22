var wakeuptime = 7
const noon = 12
var lunchtime = 12
var naptime = lunchtime + 2
var partytime
const evening = 18
// var milliseconds=currentTime.getMilliseconds()
var meridian="AM"


console.log(new Date())

var showCurrentTime=function(){
    const clock=document.getElementById("clock")
    var currentTime=new Date()
    var hours=currentTime.getHours()
    var minutes=currentTime.getMinutes()
    var seconds=currentTime.getSeconds()

    // Hours
    if(hours>=noon){
        meridian="PM"
        hours=hours-noon
    }
    if(hours<10){
        hours="0"+hours
    }
    //Minutes
    if(minutes<10){
        minutes="0"+minutes
    }
    //Seconds
    if(seconds<10){
        seconds="0"+seconds
    }
    var screenTime=hours+":"+minutes+":"+seconds+" "+meridian+"!"
    clock.innerText=screenTime
}
var updateClock=function(){
    var message
    //declare image
    var time=new Date().getHours()
    const textEvent=document.getElementById("text-event")
    const myimage=document.getElementById("myimage")
    if(time==partytime){
        // change image
        message="Let's Party"
    }
    else if(time==wakeuptime){
        // change image
        message="Wake up!"
    }
    else if(time==lunchtime){
        //change image
        message="Let's have some Lunch!"
    }
    else if(time==naptime){
        message="Sleep well!"
    }
    else if(time<noon){
        // change image
        message="Good Morning!"
    }
    else if(time>=evening){
        message="Good Evening!"
    }
    else{
        //change image
        message="Good Afternoon!"
    }
    textEvent.innerText=message
    showCurrentTime()
}
updateClock()
setInterval(updateClock,1000)

const partyButton=document.getElementById("partybutton")
var partyEvent=function(){
    if(partytime<0){
        partytime=new Date().getHours()
        partyButton.innerText="Party is Over"
        partyButton.style.background="#0A8DAB"
    }
    else{
        partytime=-1
        partyButton.innerText="Party time"
        partyButton.style.background="#222"
    }
}
partyButton.addEventListener("click",partyEvent)
partyEvent()

const wakeUpTimeSelector=document.getElementById("wakeupselector")
const lunchTimeSelector=document.getElementById("lunchselector")
const napTimeSelector=document.getElementById("napselector")

var wakeUpEvent=function(){
    wakeuptime=wakeUpTimeSelector.value
}
wakeUpTimeSelector.addEventListener("change",wakeUpEvent)

var lunchEvent=function(){
    lunchtime=lunchTimeSelector.value
}
lunchTimeSelector.addEventListener("change",lunchEvent)

var napEvent=function(){
    naptime=napTimeSelector.value
}
napTimeSelector.addEventListener("change",napEvent)