//your parameter variables go here!
let pomEarY = 138;
let pomEyeY = 150;
let eyethickness = 4;
let eyelength = 4;     
let eyecolor = (0);      //pomeranian ear & eye
let pawcolor = "#3d85c6"
let bgcolor = "#9FC5E8"
let rowOffset = 0;
//let cellWidth =200;
let cellHeight =200;

//

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); 

  //Grid settings
  pWallpaper.grid_settings.cell_width  =cellWidth;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = rowOffset;

 
}

function wallpaper_background() {
  background(bgcolor); 
}

function my_symbol() { // If statement goes under here!! do not rename this function. Treat this similarly to a Draw function
  
 
  
  if(pawcolor !== (0))//green background 
  {  
    
    noStroke();
    fill(255, 250, 234);
     ellipse(28,160,10,10)
     ellipse(28,168,10,10)
     rect(28,159,27,9)
     ellipse(58,160,10,10)
     ellipse(58,168,10,10);//bone
    
    
     fill(pawcolor);
     ellipse(167,50,22,19);
     ellipse(167,30,9,9);
     ellipse(154,38,9,9);
     ellipse(180,38,9,9);//paw
  
  }


  if(rowOffset !== 200) {

noStroke();  
fill(255, 250, 234);

square(7, pomEarY-115, 20, 9, 7, 7, 2);//golden ear left
square(55, pomEarY-115, 20, 7, 9, 2, 5);//golden ear right



ellipse(42.7, 40, 44, 42);//golden head
square(27, 41, 30, 12);//golden head_lowerpart



fill(0);
ellipse(42, 57, 9, 5);//golden nose


ellipse(30.5,pomEyeY-107,eyethickness+0.5,eyelength+1.5);//golden eye left
ellipse(53.5,pomEyeY-107,eyethickness+0.5,eyelength+1.5);//golden eye right


fill(237,	88,	88);
arc(43.4, 67, 7, 15, -30, 160);//golden tongue

arc(17,pomEarY-106,9,13,0,100);
arc(67,pomEarY-106,9,13,70,-900);//golden ear_inside


stroke(0);
strokeWeight(1);
line(42,58,42.7,67,139);
line(37,69,49,64);//golden mouth line 




noStroke();
fill(0)
ellipse(95, pomEarY-53, 15, 40);//husky ear right
ellipse(115, pomEarY-53, 15, 40);//husky ear left

fill(237,	88,	88);//ear inside
ellipse(95, pomEarY-53, 6, 23);//r
ellipse(115, pomEarY-53, 6, 23);//l


fill(0);
ellipse(105, 107, 30, 50);//upper head
ellipse(105, 105, 45, 38);//head

fill(255)
ellipse(98, 112, 16.5, 36);//white part L
ellipse(112, 112, 16.5, 36);//white part R
square(94, 111, 22, 8)//mouth
ellipse(105, 113, 38, 23);//face

fill(0)
ellipse(105, 126, 8, 5)//husky nose


ellipse (96,pomEyeY-42,eyethickness,eyelength+2);//husky eye L
ellipse (114,pomEyeY-42,eyethickness,eyelength+2)//husky eye R

stroke(0);
strokeWeight(1);
line(105,126,105,133)//husky mouth line



fill(255); 
noStroke(); 


ellipse(158, pomEarY, 10,13);//pom ear L
ellipse(181, pomEarY, 10,13);//pom ear R

fill(237,	88,	88);//ear inside
ellipse(158, pomEarY+2, 6,11);//L
ellipse(181, pomEarY+2, 6,11);//R

fill(255);
ellipse(170, 161, 51, 54);//pomeranian face

fill(eyecolor);
ellipse (164,pomEyeY,eyethickness,eyelength);//pomeranian eye L
ellipse (175,pomEyeY,eyethickness,eyelength);//pomeranian eye R

ellipse (169.4,155,5,3);//pomeranian nose

noStroke();
fill(237,	88,	88);
arc(169.6, 159.2, 3.5, 8, 1, 160);//pomeranian tongue

stroke(0);
strokeWeight(1);
noFill();
arc(167, 157, 5, 6, -5, 160);//pomeranian mouth line L
arc(172, 157, 5, 6, 5, 190);//pomeranian mouth line R
}



 if (eyethickness > 4){
  fill(255);
  ellipse (164,150,6,6);
  ellipse (175,150,6,6);//pom
  ellipse (96,108,5,9);
  ellipse (114,108,5,9);//husky
  ellipse(30.5,43,6.5,7.5);
  ellipse(53.5,43,6.5,7.5);//golden 

 }

}