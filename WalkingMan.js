var walker;

function setup(){
	createCanvas(600,600);
	frameRate(60);
	walker = new WalkingMan(300,360);
	// STARTING POSITION    ^^^^^^^

}

function draw(){
	background(200);

	walker.render();
	walker.move();
	walker.debug();
	walker.moveLegs();
	walker.swingArms();
	


	
}

function WalkingMan(x,y){
	this.posX = x;
	this.posY = y;
	this.speed = 1.5;

	this.shirtColor = color(255,200,200);
	this.shirtColorLite = color(255,210,210);
	this.pantsColor = color(61,82,107);
	this.pantsColorLite = color(68,90,115)
	this.skinColor = color(218, 143, 111);
	this.shoesColor = color(244,164,96);
	this.hairColor = color(67, 38, 32);
	this.lipColor = color(255,90,90);

	this.counter = 0;

	// LEFT LEG VARIABLES
	this.llegUpperR = radians(-20);
	this.swingUpperR = true;
	this.llegUInc = radians(1);

	this.llegLowerR = 0;
	this.lswingLower = false;
	this.llegInc = radians(80)/25; // angleDist/frameInterval

	// RIGHT LEG VARIABLES
	this.rlegUpperR = radians(30);
	this.rlegUInc = radians(1);

	this.rlegLowerR = 0;
	this.rlegInc = this.llegInc;
	this.rswingLower = true;

	// RIGHT ARM SWING VARIABLES
	this.rArmRot = radians(15);
	this.rArmSwingForward = true;

	// LEFT ARM SWING VARIABLES
	this.lArmRot = radians(-10);
	this.lArmSwingForward = false;


	

	this.render = function()
	{
		noStroke();
		push();
			// Translate the main body
			translate(this.posX,this.posY);

			push();
				translate(10,-121);
				rotate(this.lArmRot);
				// LEFT HAND
				fill(this.skinColor);
				stroke(0);
				beginShape();
					curveVertex(12, 128);
					curveVertex(13, 137);
					curveVertex(14, 142);
					curveVertex(14, 147);
					curveVertex(14, 151);
					curveVertex(14, 154);
					curveVertex(17, 154);
					curveVertex(18, 151);
					curveVertex(19, 149);
					curveVertex(20, 146);
					curveVertex(20, 142);
					curveVertex(20, 146);
					curveVertex(20, 150);
					curveVertex(18, 151);
					curveVertex(17, 154);
					curveVertex(19, 155);
					curveVertex(20, 154);
					curveVertex(23, 152);
					curveVertex(25, 151);
					curveVertex(25, 148);
					curveVertex(25, 146);
					curveVertex(26, 150);
					curveVertex(24, 154);
					curveVertex(23, 157);
					curveVertex(25, 157);
					curveVertex(28, 155);
					curveVertex(29, 152);
					curveVertex(30, 144);
					curveVertex(31, 150);
					curveVertex(30, 154);
					curveVertex(29, 155);
					curveVertex(31, 156);
					curveVertex(33, 153);
					curveVertex(36, 150);
					curveVertex(36, 149);
					curveVertex(34, 147);
					curveVertex(33, 134);
					curveVertex(33, 132);
					curveVertex(32, 131);
					curveVertex(27, 122);
					curveVertex(24, 122);
					curveVertex(22, 122);
					curveVertex(9 ,122);
					curveVertex(15, 124);
					curveVertex(12, 125);
					curveVertex(10, 127);
				endShape();
				// LEFT ARM
				fill(this.shirtColor);
				stroke(0);
				beginShape();
					curveVertex(-2, -18);
					curveVertex(6, -18);
					curveVertex(10, -11);
					curveVertex(14, 0);
					curveVertex(14, 10);
					curveVertex(16, 26);
					curveVertex(17, 45);
					curveVertex(17, 62);
					curveVertex(17, 73);
					curveVertex(17, 82);
					curveVertex(20, 93);
					curveVertex(22, 102);
					curveVertex(26, 112);
					curveVertex(26, 120);
					curveVertex(26, 125);
					curveVertex(21, 126);
					curveVertex(16, 128);
					curveVertex(10, 128);
					curveVertex(6, 120);
					curveVertex(-0, 112);
					curveVertex(-4, 105);
					curveVertex(-7, 94);
					curveVertex(-11, 84);
					curveVertex(-14, 74);
					curveVertex(-16, 61);
					curveVertex(-18, 52);
					curveVertex(-20, 32);
					curveVertex(-20, 20);
					curveVertex(-22, 6);
					curveVertex(-20, -4);
					curveVertex(-16, -10);
					curveVertex(-14, -12);
					curveVertex(-12, -15);
					curveVertex(-6, -20);
					curveVertex(2,-20);
					curveVertex(6, -18);
					curveVertex(6, -18);
				endShape(CLOSE);
			pop();
			// Leg Region
			push();
				// UPPER LEG (LEFT)
				translate(4,0);
				rotate(this.llegUpperR);
				fill(this.pantsColor);
				beginShape();
						curveVertex(-8 -42);
						curveVertex(11,-35);
						curveVertex(24, -22);
						curveVertex(26, -1);
						curveVertex(28, 18);
						curveVertex(28, 34);
						curveVertex(26, 56);
						curveVertex(26, 70);
						curveVertex(26, 79);
						curveVertex(26, 88);
						curveVertex(20, 100);
						curveVertex(4, 103);
						curveVertex(-7, 100);
						curveVertex(-13, 92);
						curveVertex(-14, 83);
						curveVertex(-16, 62);
						curveVertex(-16, 54);
						curveVertex(-20, 31);
						curveVertex(-20, 30);
						curveVertex(-22, 26);
						curveVertex(-26, 22);
						curveVertex(-30, 18);
						curveVertex(-34, 12);
						curveVertex(-35, 3);
						curveVertex(-35, -4);
						curveVertex(-34, -12);
						curveVertex(-31, -14);
						curveVertex(-28, -22);
						curveVertex(-27, -36);
						curveVertex(-27, -36);
				endShape();

				push();
					// LOWER LEG (LEFT)
					translate(5.75,88);
					rotate(this.llegLowerR);
					fill(this.pantsColor);
					beginShape();
						curveVertex(23-4, 91-88);
						curveVertex(23-4, 91-88);
						curveVertex(22-4, 79-88);
						curveVertex(14-4, 73-88);
						curveVertex(6-4, 71-88);
						curveVertex(-2-4, 73-88);
						curveVertex(-9-4, 80-88);
						curveVertex(-13-4, 87-88);
						curveVertex(-13-4, 91-88);
						curveVertex(-13-4, 104-88);
						curveVertex(-10-4, 115-88);
						curveVertex(-8-4, 123-88);
						curveVertex(-4-4, 135-88);
						curveVertex(-1-4, 147-88);
						curveVertex(-1-4, 153-88);
						curveVertex(-0-4, 172-88);
						curveVertex(2-4, 179-88);
						curveVertex(7-4, 180-88);
						curveVertex(15-4, 181-88);
						curveVertex(20-4, 181-88);
						curveVertex(22-4, 173-88);
						curveVertex(23-4, 163-88);
						curveVertex(23-4, 153-88);
						curveVertex(24-4, 143-88);
						curveVertex(24-4, 131-88);
						curveVertex(24-4, 119-88);
						curveVertex(24-4, 107-88);
						curveVertex(24-4, 96-88);
						curveVertex(24-4, 96-88);
					endShape();
					// SHOE
					translate(5,95);
					fill(this.shoesColor);
					stroke(0);
					beginShape();
						curveVertex(24, -16);
						curveVertex(18, -20);
						curveVertex(18, -13);
						curveVertex(40, -11.75);
						curveVertex(40, 1);
						curveVertex(-8, 1);
						curveVertex(-11, -18);
						curveVertex(-11, -18);
					endShape();
				pop();
			pop();

			push();
				// UPPER LEG (RIGHT)
				translate(4,0);
				rotate(this.rlegUpperR);
				fill(this.pantsColorLite);
				noStroke();
				beginShape();
						curveVertex(-8 -42);
						curveVertex(11,-35);
						curveVertex(24, -22);
						curveVertex(26, -1);
						curveVertex(28, 18);
						curveVertex(28, 34);
						curveVertex(26, 56);
						curveVertex(26, 70);
						curveVertex(26, 79);
						curveVertex(26, 88);
						curveVertex(20, 100);
						curveVertex(4, 103);
						curveVertex(-7, 100);
						curveVertex(-13, 92);
						curveVertex(-14, 83);
						curveVertex(-16, 62);
						curveVertex(-16, 54);
						curveVertex(-20, 31);
						curveVertex(-20, 30);
						curveVertex(-22, 26);
						curveVertex(-26, 22);
						curveVertex(-30, 18);
						curveVertex(-34, 12);
						curveVertex(-35, 3);
						curveVertex(-35, -4);
						curveVertex(-34, -12);
						curveVertex(-31, -14);
						curveVertex(-28, -22);
						curveVertex(-27, -36);
						curveVertex(-27, -36);
				endShape();

				push();
					// LOWER LEG (RIGHT)
					translate(5.75,88);
					rotate(this.rlegLowerR);
					fill(this.pantsColorLite);
					beginShape();
						curveVertex(23-4, 91-88);
						curveVertex(23-4, 91-88);
						curveVertex(22-4, 79-88);
						curveVertex(14-4, 73-88);
						curveVertex(6-4, 71-88);
						curveVertex(-2-4, 73-88);
						curveVertex(-9-4, 80-88);
						curveVertex(-13-4, 87-88);
						curveVertex(-13-4, 91-88);
						curveVertex(-13-4, 104-88);
						curveVertex(-10-4, 115-88);
						curveVertex(-8-4, 123-88);
						curveVertex(-4-4, 135-88);
						curveVertex(-1-4, 147-88);
						curveVertex(-1-4, 153-88);
						curveVertex(-0-4, 172-88);
						curveVertex(2-4, 179-88);
						curveVertex(7-4, 180-88);
						curveVertex(15-4, 181-88);
						curveVertex(20-4, 181-88);
						curveVertex(22-4, 173-88);
						curveVertex(23-4, 163-88);
						curveVertex(23-4, 153-88);
						curveVertex(24-4, 143-88);
						curveVertex(24-4, 131-88);
						curveVertex(24-4, 119-88);
						curveVertex(24-4, 107-88);
						curveVertex(24-4, 96-88);
						curveVertex(24-4, 96-88);
					endShape();
					// SHOE
					translate(5,95);
					fill(this.shoesColor);
					stroke(0);
					beginShape();
						curveVertex(24, -16);
						curveVertex(18, -20);
						curveVertex(18, -13);
						curveVertex(40, -11.75);
						curveVertex(40, 1);
						curveVertex(-8, 1);
						curveVertex(-11, -18);
						curveVertex(-11, -18);
					endShape();
				pop();
			pop();
			// Head
			// Flesh Head
			fill(this.skinColor);
			noStroke();
			beginShape();
				curveVertex(10+4, -29-121);
				curveVertex(10+7, -32-121);
				curveVertex(10+9, -38-121);
				curveVertex(10+14, -40-121);
				curveVertex(10+19, -42-121);
				curveVertex(10+20, -44-121);
				curveVertex(10+21, -47-121);
				curveVertex(10+21, -49-121);
				curveVertex(10+22, -51-121);
				curveVertex(10+22, -52-121);
				curveVertex(10+22, -53-121);
				curveVertex(10+20, -54-121);
				curveVertex(10+23, -55-121);
				curveVertex(10+23, -59-121);
				curveVertex(10+27, -62-121);
				curveVertex(10+27, -64-121);
				curveVertex(10+26, -65-121);
				curveVertex(10+23, -70-121);
				curveVertex(10+24, -73-121);
				curveVertex(10+24, -75-121);
				curveVertex(10+25, -79-121);
				curveVertex(10+25, -83-121);
				curveVertex(10+25, -86-121);
				curveVertex(10+25, -88-121);
				curveVertex(10+16, -91-121);
				curveVertex(10+7, -92-121);
				curveVertex(10-6, -82-121);
				curveVertex(10-14, -68-121);
				curveVertex(10-17, -59-121);
				curveVertex(10-18, -54-121);
				curveVertex(10-18, -51-121);
				curveVertex(10-18, -46-121);
				curveVertex(10-25, -23-121);
				curveVertex(10-19, -15-121);
				curveVertex(10-14, -16-121);
				curveVertex(10-8, -19-121);
			endShape();
			// HAIR
			fill(this.hairColor);
			beginShape();
				curveVertex(10-23, -92-121);
				curveVertex(10-25, -90-121);
				curveVertex(10-27, -87-121);
				curveVertex(10-28, -84-121);
				curveVertex(10-29, -75-121);
				curveVertex(10-29, -71-121);
				curveVertex(10-26, -69-121);
				curveVertex(10-24, -65-121);
				curveVertex(10-23, -61-121);
				curveVertex(10-22, -58-121);
				curveVertex(10-20, -54-121);
				curveVertex(10-19, -52-121);
				curveVertex(10-17, -53-121);
				curveVertex(10-12, -54-121);
				curveVertex(10-9, -57-121);
				curveVertex(10-9, -59-121);
				curveVertex(10-8, -63-121);
				curveVertex(10-7, -65-121);
				curveVertex(10-6, -67-121);
				curveVertex(10-4, -69-121);
				curveVertex(10-3, -70-121);
				curveVertex(10-1, -70-121);
				curveVertex(10-0, -69-121);
				curveVertex(10+4, -67-121);
				curveVertex(10+4, -65-121);
				curveVertex(10+5, -63-121);
				curveVertex(10+4, -61-121);
				curveVertex(10+7, -61-121);
				curveVertex(10+9, -63-121);
				curveVertex(10+8, -65-121);
				curveVertex(10+8, -69-121);
				curveVertex(10+9, -72-121);
				curveVertex(10+10, -73-121);
				curveVertex(10+12, -75-121);
				curveVertex(10+13, -75-121);
				curveVertex(10+14, -77-121);
				curveVertex(10+14, -80-121);
				curveVertex(10+14, -82-121);
				curveVertex(10+14, -84-121);
				curveVertex(10+16, -85-121);
				curveVertex(10+20, -85-121);
				curveVertex(10+23, -89-121);
				curveVertex(10+24, -89-121);
				curveVertex(10+26, -93-121);
				curveVertex(10+27, -95-121);
				curveVertex(10+26, -97-121);
				curveVertex(10+25, -99-121);
				curveVertex(10+23, -101-121);
				curveVertex(10+18, -105-121);
				curveVertex(10+16, -107-121);
				curveVertex(10+12, -107-121);
				curveVertex(10+9 ,-108-121);
				curveVertex(10+5, -109-121);
				curveVertex(10-0, -109-121);
				curveVertex(10-3, -109-121);
				curveVertex(10-6, -109-121);
				curveVertex(10-10, -109-121);
				curveVertex(10-11, -106-121);
				curveVertex(10-14, -103-121);
				curveVertex(10-16, -102-121);
				curveVertex(10-17, -101-121);
				curveVertex(10-20, -98-121);
				curveVertex(10-20, -96-121);
			endShape();
			// EYEBROWS
			fill(this.hairColor);
			noStroke();
			beginShape();
				vertex(34, -194);
				vertex(31, -194.25);
				vertex(28, -192);
				vertex(31, -193);
			endShape(CLOSE);
			// LIPS
			fill(this.lipColor);
			noStroke();
			beginShape();
				vertex(29, -173);
				vertex(32, -172.5);
				vertex(32.5, -174);
				vertex(30, -175);
				vertex(30, -176);
				vertex(29, -174);
			endShape();
			// EYES
			noFill();
			stroke(1);
			beginShape();
				vertex(33, -190);
				vertex(30, -190);
				vertex(27, -188);
			endShape(OPEN);

			// Shirt/Torso
			stroke(0);
			fill(this.shirtColor);
			beginShape();
				curveVertex(0, -14.200004577636719);
				curveVertex(0, -14.200004577636719);
				curveVertex(-6, -13.200004577636719);
				curveVertex(-8, -9.200004577636719);
				curveVertex(-16, -4.200004577636719);
				curveVertex(-24, -0.20000457763671875);
				curveVertex(-28, 2.7999954223632812);
				curveVertex(-36, -0.20000457763671875);
				curveVertex(-38, -10.200004577636719);
				curveVertex(-39, -29.20000457763672);
				curveVertex(-39, -45.20000457763672);
				curveVertex(-40, -62.20000457763672);
				curveVertex(-40, -78.20000457763672);
				curveVertex(-40, -93.20000457763672);
				curveVertex(-42, -110.20000457763672);
				curveVertex(-39, -129.20000457763672);
				curveVertex(-32, -141.20000457763672);
				curveVertex(-24, -150.20000457763672);
				curveVertex(-15, -158.20000457763672);
				curveVertex(-14, -165.20000457763672);
				curveVertex(-8, -168.20000457763672);
				curveVertex(4, -162.20000457763672);
				curveVertex(12, -156.20000457763672);
				curveVertex(22, -148.20000457763672);
				curveVertex(22, -142.20000457763672);
				curveVertex(20, -140.20000457763672);
				curveVertex(24, -118.20000457763672);
				curveVertex(26, -105.20000457763672);
				curveVertex(26, -90.20000457763672);
				curveVertex(28, -77.20000457763672);
				curveVertex(29, -65.20000457763672);
				curveVertex(30, -50.20000457763672);
				curveVertex(32, -34.20000457763672);
				curveVertex(36, -22.20000457763672);
				curveVertex(36, -12.200004577636719);
				curveVertex(36, -2.2000045776367188);
				curveVertex(34, 1.7999954223632812);
				curveVertex(32, 1.7999954223632812);
				curveVertex(28, -1.2000045776367188);
				curveVertex(28, -2.2000045776367188);
				curveVertex(20, -10.200004577636719);
				curveVertex(16, -12.200004577636719);
				curveVertex(9, -13.200004577636719);
				curveVertex(5, -14.200004577636719);
				curveVertex(0, -14.200004577636719);
				curveVertex(0, -14.200004577636719);
			endShape();
			// Collar
			stroke(0);
			line(-15, -160.20000457763672, 18, -142.20000457763672);
			push();
				translate(10,-121);
				rotate(this.rArmRot);
				// RIGHT HAND
				fill(this.skinColor);
				beginShape();
					curveVertex(12, 128);
					curveVertex(13, 137);
					curveVertex(14, 142);
					curveVertex(14, 147);
					curveVertex(14, 151);
					curveVertex(14, 154);
					curveVertex(17, 154);
					curveVertex(18, 151);
					curveVertex(19, 149);
					curveVertex(20, 146);
					curveVertex(20, 142);
					curveVertex(20, 146);
					curveVertex(20, 150);
					curveVertex(18, 151);
					curveVertex(17, 154);
					curveVertex(19, 155);
					curveVertex(20, 154);
					curveVertex(23, 152);
					curveVertex(25, 151);
					curveVertex(25, 148);
					curveVertex(25, 146);
					curveVertex(26, 150);
					curveVertex(24, 154);
					curveVertex(23, 157);
					curveVertex(25, 157);
					curveVertex(28, 155);
					curveVertex(29, 152);
					curveVertex(30, 144);
					curveVertex(31, 150);
					curveVertex(30, 154);
					curveVertex(29, 155);
					curveVertex(31, 156);
					curveVertex(33, 153);
					curveVertex(36, 150);
					curveVertex(36, 149);
					curveVertex(34, 147);
					curveVertex(33, 134);
					curveVertex(33, 132);
					curveVertex(32, 131);
					curveVertex(27, 122);
					curveVertex(24, 122);
					curveVertex(22, 122);
					curveVertex(9 ,122);
					curveVertex(15, 124);
					curveVertex(12, 125);
					curveVertex(10, 127);
				endShape();
				// RIGHT ARM
				fill(this.shirtColorLite);
				noStroke();
				beginShape();
					curveVertex(-2, -18);
					curveVertex(6, -18);
					curveVertex(10, -11);
					curveVertex(14, 0);
					curveVertex(14, 10);
					curveVertex(16, 26);
					curveVertex(17, 45);
					curveVertex(17, 62);
					curveVertex(17, 73);
					curveVertex(17, 82);
					curveVertex(20, 93);
					curveVertex(22, 102);
					curveVertex(26, 112);
					curveVertex(26, 120);
					curveVertex(26, 125);
					curveVertex(21, 126);
					curveVertex(16, 128);
					curveVertex(10, 128);
					curveVertex(6, 120);
					curveVertex(-0, 112);
					curveVertex(-4, 105);
					curveVertex(-7, 94);
					curveVertex(-11, 84);
					curveVertex(-14, 74);
					curveVertex(-16, 61);
					curveVertex(-18, 52);
					curveVertex(-20, 32);
					curveVertex(-20, 20);
					curveVertex(-22, 6);
					curveVertex(-20, -4);
					curveVertex(-16, -10);
					curveVertex(-14, -12);
					curveVertex(-12, -15);
					curveVertex(-6, -20);
					curveVertex(2,-20);
					curveVertex(6, -18);
					curveVertex(6, -18);
				endShape(CLOSE);
			pop();

		pop();
	}
	this.move = function()
	{
		this.posX += this.speed;
	}

	this.moveLegs = function()
	{
		// UPPER LEG
		// DIRECTION CHANGER
		if(this.llegUpperR <= radians(-20)){
			this.swingUpperR = true;
		}
		if(this.llegUpperR >= radians(30)){
			this.swingUpperR = false;
		}
		
		// ANGLE INCREMENTER
		if(this.swingUpperR){
			this.llegUpperR += this.llegUInc;
			this.rlegUpperR -= this.rlegUInc;
		}
		else{
			this.llegUpperR -= this.llegUInc;
			this.rlegUpperR += this.rlegUInc;
		}


		// LOWER
		if(this.counter==0 || this.counter==1){
			//this.llegLowerR = radians(80);
			this.rswingLower = true;
		}
		else if(this.counter==25)
		{
			this.rswingLower = false;
		}
		else if(this.counter==50){
			this.lswingLower = true;
		}
		else if(this.counter==75){
			this.lswingLower = false;
		}

		if(this.rswingLower)
		{
			this.rlegLowerR += this.rlegInc;
		}
		else
		{
			if(this.rlegLowerR >= 0)
				this.rlegLowerR -= this.rlegInc;

		}
		if(this.lswingLower)
		{
			this.llegLowerR += this.llegInc;
		}
		else
		{
			if(this.llegLowerR >= 0)
				this.llegLowerR -= this.llegInc;

		}
		
		
	}

	this.debug = function()
	{
		if(this.counter==100)
			this.counter=0;

		//if(this.counter%25 == 0)
			//console.log(this.counter);

		this.counter++

	}

	this.swingArms = function()
	{
		// RIGHT ARM
		if(this.rArmRot <= radians(-10))
		{
			this.rArmRot = radians(-10);
			this.rArmSwingForward = false;
		}
		if(this.rArmRot >= radians(15))
		{
			this.rArmRot = radians(15);
			this.rArmSwingForward = true;
		}
		if(this.rArmSwingForward)
		{
			this.rArmRot -= radians(25)/50;
		}
		else
		{
			this.rArmRot += radians(25)/50;
		}

		// LEFT ARM
		if(this.lArmRot <= radians(-10))
		{
			this.lArmRot = radians(-10);
			this.lArmSwingForward = false;
		}
		if(this.lArmRot >= radians(15))
		{
			this.lArmRot = radians(15);
			this.lArmSwingForward = true;
		}
		if(this.lArmSwingForward)
		{
			this.lArmRot -= radians(25)/50;
		}
		else
		{
			this.lArmRot += radians(25)/50;
		}
	}


}
