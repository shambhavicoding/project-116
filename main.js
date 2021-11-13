function preload(){
    moustache_fitler=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save("myFilter.png");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        moustacheX=results[0].pose.nose.x-15;
        moustacheY=results[0].pose.nose.y+15;
    }
}
moustacheX=0;
moustacheY=0;

function draw(){
    image(video,0,0,300,300);
    image(moustache_fitler,moustacheX,moustacheY,30,30);
}