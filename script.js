

let skins=[]
let skinpick
let btn
let download

function preload(){
	for(let i=1;i<13;i++){
		skins.push(loadImage('Layer '+i+'.png'))
	}
	
}

function setup(){
	createCanvas(640,640)
	imageMode(CENTER)
	btn=select('#btn')
	btn.mouseClicked(generateNew)
	download=select('#download')
	download.mouseClicked(savePic)
	skinpick=random(skins)
}

function draw(){
	image(skinpick,width/2,height/2)
	
}

function generateNew(){
	skinpick=random(skins)
}

function savePic(){
	saveCanvas(Date.now()+'.png')
}