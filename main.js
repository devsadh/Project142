wristY = ""
wristX = ""
GameStatus = ""

function setup(){
    canvas = createCanvas(600,300)
    canvas.parent('game_console')
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotResults)
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
  if(results.length>0){
      console.log(results)
  }
}

function draw(){
    image(video,0,0,600,300)
    fill("red")
    circle(20,wristX,wristY)

   
}

function gotResults(results){
    if(results.length>0){
       
        wristX = results[0].pose.rigthWrist.x
        wristY = results[0].pose.rightWrist.y

    }
}

function start(){
    GameStatus = "start"
    document.getElementById("status").innerHTML = "Game Is Loading"
}