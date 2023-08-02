//your parameter variables go here!
let dogearY = 23;
let dogearS = 47;
let dogeyeY = 43;
let dogeyethickness = 4.5;
let dogeyelength = 5.5; 






function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  =200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 20;

 
}

function wallpaper_background() {
  background(159, 197, 232); //faded sky blue
}

function my_symbol() { // If statement goes under here!! do not rename this function. Treat this similarly to a Draw function
  noStroke();
  
  if(dogeyeY>43){dogeyelength = 9}

  if(false){}
  

  fill(255, 250, 234);

  square(7, dogearY, dogearS-27, 9, 7, 7, 2);//dog ear left
  square(55, dogearY, dogearS-27, 7, 9, 2, 5);//dog ear right

 

  ellipse(42.7, 40, 44, 42);//dog head
  square(27, 41, 30, 12);//dog head_lowerpart



  fill(0);
  ellipse(42, dogearY+34, 9, 5);//dog nose
  

  ellipse(30.5,dogeyeY,dogeyethickness,dogeyelength);//dog eye left
  ellipse(53.5,dogeyeY,dogeyethickness,dogeyelength);//dog eye right
  

  fill(237,	88,	88);
  arc(43.4, 67, 7, 15, -30, 160);//dog tongue

arc(17,dogearY+9,9,13,0,100);
arc(67,dogearY+9,9,13,70,-900);//dog ear_inside


  stroke(0);
  strokeWeight(1);
  line(42,dogearY+35,42.7,dogearY+44,139);
  line(37,dogearY+46,49,dogearY+41);//dog mouth line

noStroke();
fill(255, 250, 234);
 ellipse(28,160,10,10)
 ellipse(28,168,10,10)
 rect(28,159,27,9)
 ellipse(58,160,10,10)
 ellipse(58,168,10,10);//bone

 fill(0);
 ellipse(167,50,22,19);
 ellipse(167,30,9,9);
 ellipse(154,38,9,9);
 ellipse(180,38,9,9);//paw




 
 
fill(0)
 ellipse(95, 85, 15, 40);//husky ear right
 ellipse(115, 85, 15, 40);//husky ear left

 fill(237,	88,	88);//ear inside
 ellipse(95, 85, 6, 23);//r
 ellipse(115, 85, 6, 23);//l


fill(0);
 ellipse(105, 107, 30, 50);//upper head
 ellipse(105, 105, 45, 38);//head

 fill(255)
 ellipse(98, 112, 16.5, 36);//white part R
 ellipse(112, 112, 16.5, 36);//white part L
 square(94, 111, 22, 8)//mouth
 ellipse(105, 113, 38, 23);//face

fill(0)
 ellipse(105, 126, 8, 5)//husky nose


 ellipse (95,108,4,6);////husky eyes R
 ellipse (114,108,4,6)

 stroke(0);
 strokeWeight(1);
 line(105,126,105,133)//husky mouth line





fill(255);
noStroke();


 ellipse(158, 138, 10,13);
 ellipse(181, 138, 10,13);

 fill(237,	88,	88);//ear inside
 ellipse(158, 140, 6,11);
 ellipse(181, 140, 6,11);
 
fill(255);
 ellipse(170, 161, 51, 54);//pomeranian face

fill(0);
 ellipse (164,150,4,3.7);
 ellipse (175,150,4,3.7);

 ellipse (169.4,155,5,3);

 noStroke();
 fill(237,	88,	88);
 arc(169.6, 159.2, 3.5, 8, 1, 160);//pomeranian tongue

 stroke(0);
 strokeWeight(1);
 noFill();
 arc(167, 157, 5, 6, -5, 160)
 arc(172, 157, 5, 6, 5, 190)




 


 
  
}

