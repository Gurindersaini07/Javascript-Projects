let inputbttn = document.querySelectorAll('.otherbtn')
let arthsigndiv = document.querySelectorAll('.arthsign')
const liverestdiv = document.getElementById('liveresult')
const typstatediv = document.getElementById('typingstate')
let adddot = 0
usearthsign = 0

inputbttn.forEach(otherbtn => {
    otherbtn.onclick = () => onlicksend(otherbtn.value)
})

arthsigndiv.forEach(arthsign => {
    arthsign.onclick = () => limitarthsign(arthsign.value)
})

function updateClock() {
    let today = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').innerText = `${today}`
    setTimeout(updateClock, 700);
}

updateClock();

const limitarthsign = (value) => {

    if (usearthsign === 0) {
        typstatediv.innerText += value
        liverestdiv.innerText = `${typstatediv.innerHTML}`
        usearthsign = 1
        adddot=0
    }
    else if (usearthsign === 1) {
        overwritearthsign(value)
    }
}
const overwritearthsign=(value)=>{
        
    typstatediv.innerText=`${typstatediv.innerText.slice(0, -1)}`
    typstatediv.innerText=`${typstatediv.innerText+value}`
    return
}

const onlicksend = (value) => {
    if (value === "." && adddot === 0) {
        typstatediv.innerText += value
        liverestdiv.innerText = `=${eval(typstatediv.innerHTML)}`
        adddot = 1
    } else if (value == "." && adddot === 1) {
        return
    }
    else {
        usearthsign=0

        typstatediv.innerText += value
        liverestdiv.innerText= `=${eval(typstatediv.innerHTML)}`

    }
}
const clearscr = () => {
    liverestdiv.innerText = " "
    typstatediv.innerText = " "
    adddot = 0
    usearthsign=0
}
function equalto(){
    liverestdiv.innerText= `=${eval(typstatediv.innerHTML)}`
}
function erase(){
    typstatediv.innerText=`${typstatediv.innerText.slice(0, -1)}`
    liverestdiv.innerText=`${liverestdiv.innerText.slice(0, -1)}`
}