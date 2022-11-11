const metronome = document.querySelector(".metronome")
const tick = new Audio('tick.mp3')
const tock = new Audio('tock.mp3')

console.log( )

let isRunning = false;
let counting = 0;
let timer = null;
let measure_beat= document.querySelector(".measure-beat");

let slider = document.querySelector(".slider");
let counter = document.querySelector(".counter");

slider.addEventListener('change' , function() {
    console.log(slider.value)
    document.querySelector(".counter").innerHTML = slider.value;
    console.log( document.querySelector(".counter").innerHTML)
});

counter.innerHTML = slider.value
slider.oninput = function() {
    counter.innerHTML = this.value;
    //setData(slider.value);
}

document.querySelector(".minus").addEventListener('click' , function() {
    let result = Number(counter.innerHTML);
    result = result - 1;
    counter.innerHTML = result;
    slider.value  = result;   

})

document.querySelector(".plus").addEventListener('click' , function() {
    let result = Number(counter.innerHTML);
    result = result + 1;
    counter.innerHTML = result;
    slider.value  = result;
})
//Number(document.querySelector(".counter").innerHTML)

document.querySelector(".start").addEventListener('click' , function() {
 
   let border = 1/(slider.value/60) + "s"
    counting = 0;
    if( !isRunning ) {
        timer = setInterval(tickTock , 60000/slider.value );
        metronome.style.animation=`border-pulsate ${border} infinite`;
        
        isRunning = true;
        document.querySelector(".start").innerHTML = "STOP";
    }else {
        clearInterval(timer)
        isRunning = false;
        document.querySelector(".start").innerHTML = "Start";
        metronome.style.animation = 'none';
    }
    
})



document.querySelector(".plus-beat").addEventListener('click' , function() {
    let result_beat = Number(document.querySelector(".measure-beat").innerHTML); 
    if( result_beat >= 12 ){ return;}
    result_beat = result_beat + 1;
    document.querySelector(".measure-beat").innerHTML = result_beat;
    counting =0;
    

} )
document.querySelector(".minus-beat").addEventListener('click' , function() {
    let result_beat = Number(document.querySelector(".measure-beat").innerHTML);
    if( result_beat <= 2 ){ return;}
    result_beat = result_beat - 1;
    document.querySelector(".measure-beat").innerHTML = result_beat;
    counting = 0;
    console.log( result_beat ) 
});


function tickTock() {
    if( counting%Number(document.querySelector(".measure-beat").innerHTML)== 0 ) {
        tick.play();
    }else {
        tock.play();
    }   
    counting++;
    //tick.currentTime = 0;
}