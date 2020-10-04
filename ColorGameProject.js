 var jbt=document.querySelector(".jt");
 jbt.style.background="#4b7cb8";
 jbt.style.color="white";

 //var p=document.querySelector("#h1");
 //p.style.fontSize="large";
 //var cont=document.querySelector(".container");
 //cont.style.margin="10%";
//  var imp=document.querySelectorAll("#imp");

//  function mp(){

 
//  this.style.margin="7px";
//  }
//  imp.forEach(mp);

//var body=document.querySelector("body");
//body.style.background="black";
var i=1;
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
hard.style.color="white";
hard.style.background="#4b7cb8";

hard.addEventListener("click",function(){

this.style.color="white";
this.style.background="#4b7cb8";
i=!i;
easy.style.color="#4b7cb8";
easy.style.background="white";
//easy select kiya to i=0 hogya;


}
);
easy.addEventListener("click",function(){ 
    
    this.style.color="white";
    this.style.background="#4b7cb8";
    hard.style.color="#4b7cb8";
hard.style.background="white";







    }
);





        //   var colors=["rgb(46, 131, 250)",
        //               "rgb(46, 13, 20)",
        //               "rgb(4, 210, 50)",
        //               "rgb(246, 131, 250)",
        //               "rgb(246, 200, 225)",
        //               "rgb(146, 100, 50)"
        //              ];
        function randomColors(num)
        { var arr=[];
         for(var j=0;j<num;j++){
           arr.push(randomColor());


         }   
         return arr;

        }
        function randomColor(){

            var r=Math.floor(Math.random() *256);
            var b=Math.floor(Math.random() *256);
            var g=Math.floor(Math.random() *256);
            return "rgb(" + r + ", " + g + ", " + b +")";
        }
       
        
        
        var colors=randomColors(6);

var boxes=document.querySelectorAll(".ind");
function pickColor(){

    var a=Math.floor(Math.random() *6);
    return a;
}
var om=colors[pickColor()];





var result=document.querySelector(".result");

var count=0;



for(var j=0;j<boxes.length;j++)
   {    
        
    boxes[j].style.background=colors[j];
    
       boxes[j].addEventListener("click",function (){
           
        
        var kp=this.style.background;
        
        
    
           if(kp == om)
                {
                     result.textContent="Correct!";
                    jbt.style.background=om;

                      $(".wrong").fadeIn(0);




                    for(var k=0;k<boxes.length;k++)
                      {
                           boxes[k].classList.add("ind");
                           
        
                           boxes[k].style.background=om;
                
                      }
                }
           else
                {    count++;
                     
                    //this.classList.remove("ind");
                    $(this).fadeOut(1000);
                    result.textContent="Try Again!";
                    
            }
                       



       });
   }

   
   hard.addEventListener("mouseover",function(){
           this.style.cursor="pointer";



   });
   hard.addEventListener("mouseout",function(){
    this.style.cursor="initial";
    



});
easy.addEventListener("mouseover",function(){
    this.style.cursor="pointer";



});
easy.addEventListener("mouseout",function(){
this.style.cursor="initial";




});






for(var j=0;j<boxes.length;j++)
   {
       if(boxes[j].style.background!==om)
          boxes[j].classList.add("wrong");
   }


var wrong=document.querySelectorAll(".wrong");
easy.addEventListener("click",function(){
              for(var j=0;j<3;j++)
                  wrong[j].classList.remove("ind");


});
hard.addEventListener("click",function(){
    for(var j=0;j<3;j++)
                  wrong[j].classList.add("ind");


});

var h1=document.querySelector("h1");
h1.textContent=om;

var btn=document.querySelector("button");


btn.addEventListener("mouseover",function(){
btn.style.background="#4b7cb8";
btn.style.color="white";

});
btn.addEventListener("mouseout",function(){
    btn.style.background="white";
    btn.style.color="#4b7cb8";
    });




