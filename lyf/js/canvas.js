function can(i,num,m){

    var bg = document.getElementsByTagName("canvas")[i]
    var ctx = bg.getContext('2d');
    var imd = null;
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;



    ctx.beginPath();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineCap = 'square';
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 10.0;

    imd = ctx.getImageData(0, 0, 152, 152);
    function draw(current){
        ctx.putImageData(imd, 0, 0);
        ctx.beginPath();
        ctx.arc(76, 76, 71, -(quart), ((circ) * current) - quart, false);
        ctx.stroke();
    }
//draw(0.6);
    var t=0;
    var timer;
    function loadCanvas(now){
        timer = setInterval(function(){
            if(t>now){
                clearInterval(timer);
            }else{
                draw(t);
                t+=0.01;
                $(".current").eq(i).html(parseInt(t*100)+"%")
                if(m){ctx.clearRect(0,0,152,152)}
            }
        },20);
    }
    loadCanvas(num);

}