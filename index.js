const music = new Audio('Rangi Sari(PagalWorld.com.se).mp3'); // assigning a audio file to variable "music" using constructor
music.currentTime = 20; // it ensures that the music will play from 20 sec each time and initial music from 0 to 20 sec will be skipped
setInterval(() => {
    date = new Date(); //retrieving current date and time every sec

    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    //formulas to calculate how many degrees hands of the clock will rotate
    hrotation = 30*htime + mtime/2; 
    mrotation = 6*mtime;
    srotation = 6*stime;

    //USING CSS PROPERTIES IN JAVASCRIPT
    hour.style.transform = `rotate(${hrotation}deg)`; //it rotates by its center by default...we want it to rotate from its bottom
    minute.style.transform = `rotate(${mrotation}deg)`; // here minute is id name
    second.style.transform = `rotate(${srotation}deg)`;

    //SETTING ALARM
    if(htime==5 && mtime==8) //setting alarm time
    {
        if(music.currentTime<30){ //so, after audio is paused ; due to prior setinterval function it will not try to execute this and try to play it again and pause due to other settimeout func as it can't enter inside this loop as condition will not become true
        music.play(); //plays the music and currentime of music increases
        }
        setTimeout(() => {       
            if(music.currentTime>30) //so, current time is increasing and checking every sec that if it is > 30 then the music will be paused
            {
                music.pause();
            }
        }, 1000);
    }
    
}, 1000); // for every sec or for every 1000 milli sec