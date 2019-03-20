

//when press start button / start button disappears and timer displays and begins
$("#start-button").click(function () {


    window.onload = function () {
        var display = document.querySelector('#timer'),
            timer = new CountDownTimer(5),
            timeObj = CountDownTimer.parse(5);
    
        format(timeObj.minutes, timeObj.seconds);
        
        timer.onTick(format);
        
        document.querySelector('button').addEventListener('click', function () {
            timer.start();
        });
        
        function format(minutes, seconds) {
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ':' + seconds;
        }
    };
//Questions Display














   // $("#start-button").click(function () {
       // var counter = 5;
        //setInterval(function () {
           // counter--;
           // if (counter >= 0) {
             //   span = document.getElementById("start-button");
               // span.innerHTML = counter;
           // }
           // if (counter === 0) {
           //     alert('sorry, out of time');
           //     clearInterval(counter);
         //   }
       // }, 1000);
  //  });

















});