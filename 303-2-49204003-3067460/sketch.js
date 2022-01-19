/*

Officer: 3067460
CaseNum: 303-2-49204003-3067460

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make restrictedLockerCombination0 equal to the value of mouseY
	- Use the 'max' function to prevent restrictedLockerCombination0 from falling below 3

	When any key is released:
	- Increment restrictedLockerCombination1 by 2
	- Use the 'max' function to prevent restrictedLockerCombination1 from falling below 2

	When the mouse button is released:
	- Make restrictedLockerCombination2 equal to the value of mouseX
	- Use the 'max' function to prevent restrictedLockerCombination2 from falling below 1

	Whilst the mouse is being dragged:
	- Decrement restrictedLockerCombination3 by 3
	- Use the 'constrain' function to prevent restrictedLockerCombination3 from falling below 3 and going above 13

	Whilst the mouse is moving:
	- Make restrictedLockerCombination4 equal to the value of mouseX
	- Use the 'min' function to prevent restrictedLockerCombination4 from going above 80



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var restrictedLockerCombination0;
var restrictedLockerCombination1;
var restrictedLockerCombination2;
var restrictedLockerCombination3;
var restrictedLockerCombination4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	restrictedLockerCombination0 = 0;
	restrictedLockerCombination1 = 0;
	restrictedLockerCombination2 = 0;
	restrictedLockerCombination3 = 0;
	restrictedLockerCombination4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseReleased() {
    console.log("mouseReleased", mouseX, mouseY);
    restrictedLockerCombination0 = max(mouseY, 3);
}

function keyReleased() {
    console.log("keyReleased", key);
    restrictedLockerCombination1 += 2;
    restrictedLockerCombination1 = max(restrictedLockerCombination1, 2);
}

function mouseReleased() {
    console.log("mouseReleased", mouseX, mouseY);
    restrictedLockerCombination2 = max(mouseX, 1);
}

function mouseDragged() {
    console.log("mouseDragged", mouseX, mouseY);
    restrictedLockerCombination3 -= 3;
    restrictedLockerCombination3 = constrain(restrictedLockerCombination3, 3, 13)
}

function mouseMoved() {
    console.log("mouseMoved", mouseX, mouseY);
    restrictedLockerCombination4 = min(mouseX, 80);
}

//	When the mouse button is released:
//	- Make restrictedLockerCombination0 equal to the value of mouseY
//	- Use the 'max' function to prevent restrictedLockerCombination0 from falling below 3
//
//	When any key is released:
//	- Increment restrictedLockerCombination1 by 2
//	- Use the 'max' function to prevent restrictedLockerCombination1 from falling below 2
//
//	When the mouse button is released:
//	- Make restrictedLockerCombination2 equal to the value of mouseX
//	- Use the 'max' function to prevent restrictedLockerCombination2 from falling below 1
//
//	Whilst the mouse is being dragged:
//	- Decrement restrictedLockerCombination3 by 3
//	- Use the 'constrain' function to prevent restrictedLockerCombination3 from falling below 3 and going above 13
//
//	Whilst the mouse is moving:
//	- Make restrictedLockerCombination4 equal to the value of mouseX
//	- Use the 'min' function to prevent restrictedLockerCombination4 from going above 80

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,restrictedLockerCombination0, 24);
	pop();

	push();
	translate(120,380);
	drawDial(140,restrictedLockerCombination1, 14);
	pop();

	push();
	translate(280,170);
	drawDial(140,restrictedLockerCombination2, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,restrictedLockerCombination3, 18);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(restrictedLockerCombination4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
