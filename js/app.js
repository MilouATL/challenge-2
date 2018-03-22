var realTime = document.getElementById('realTime');

//clock function
function myClock() {
    var d = new Date();
    var time = d.toLocaleTimeString();

    document.getElementById('realTime').innerHTML = time;
} 

//day and night change function
document.addEventListener('DOMContentLoaded', function () {
    myClock();
    setInterval(myClock, 1000);

    var d = new Date(),
        h = d.getHours(),
        message = document.getElementById('message');

    //console.log(d.getHours());
    if ( h >= 6 && h < 18) {
        document.body.classList.add('day');
        document.body.classList.remove('night');
        message.innerHTML = 'Good day!'; 
    } else {
        document.body.classList.add('night');
        document.body.classList.remove('day');
        message.innerHTML = 'Good night!';
        TweenMax.from('body', 2.5, { backgroundColor: '#eee'});
        TweenMax.to('body', 2.5, { backgroundColor: '#2D6D79'});
    }
});

// water animation
var waterAnimation = new TimelineMax({ repeat: -1, ease: Power0.easeNone });
waterAnimation
    .to('.water', 2.5, { opacity: 1})
    .from('.water', 1000, { backgroundPositionX: 2400}, 'water');
    
TweenLite.to('.water', 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: 100 });


// animate sun and moon
TweenLite.to('#sun', 2.5, {bezier: [{x:0, y:-30}, {x:0, y:0}, {x:0, y:20}], ease:Power1.easeInOut});
TweenLite.to('#moon', 2.5, {bezier: [{x:-20, y:0}, {x:20, y:-10}, {x:0, y:30}], ease:Power1.easeInOut});

//message animation
// var tl = new TimelineMax ({repeat: 2, yoyo: true, repeatDelay:1, delay:2});
// tl.staggerTo('message', 1, {x: 250, ease:Power1.easeInOut},0.1);
TweenLite.to('#message', 2.5, { ease: Power3.easeOut, y: -30 });
