//Buttons activations
const slidepage=document.querySelector(".slidepage");
slidepage.style.paddingRight="10%";
const firstNextBtn=document.querySelector(".nextBtn");
const prevBtnSec=document.querySelector(".prev-1");
const nextBtnSec=document.querySelector(".next-1");

const prevBtnThr=document.querySelector(".prev-2");
const nextBtnThr=document.querySelector(".next-2");

const prevBtnfour=document.querySelector(".prev-3");
const nextBtnfour=document.querySelector(".next-3");


const prevBtnfive=document.querySelector(".prev-4");
const nextBtnfive=document.querySelector(".next-4");



const submitBtn=document.querySelector(".submit");
firstNextBtn.addEventListener("click",function(){


//     var name=document.getElementsByName("name")[0].value;
//     var reg=document.getElementsByName("reg")[0].value;
//    var religion=document.getElementsByName("religion")[0].value;
//    var dob=document.getElementsByName("dob")[0].value;
//    var parent=document.getElementsByName("parent")[0].value;

//    var nationality=document.getElementsByName("nation")[0].value;
//    var email=document.getElementsByName("email")[0].value;
//    var phone=document.getElementsByName("phno")[0].value;


//    var count1=0;
//    var count2=0;
//    //Name validation
//      if(name=="")
//      {
//         document.getElementsByClassName("f3")[0].innerHTML="required";
      
//     }
//     else
//     {
//         var letters = /^[A-Za-z]+$/;
//         if(name.match(letters))
//         {
//         document.getElementsByClassName("f3")[0].innerHTML="";
//         count1++;
//         }
//         else
//         {
//             document.getElementsByClassName("f3")[0].innerHTML="white spaces and numbers not allowed";
       
//         }
       
//     }
    
//     //register number validation

//     if(reg=="")
//     {
//         document.getElementsByClassName("f1")[0].innerHTML="required";
       
//     }
//     else
//     {
//         var letters = /^[0-9A-Za-z]+$/;
//         if(reg.match(letters))
//         {
//         document.getElementsByClassName("f1")[0].innerHTML="";
//         count1++;
//         }
//         else
//         {
//             document.getElementsByClassName("f1")[0].innerHTML="white spaces and special character not allowed";
       
//         }
       
//     }


//     //religion validation



//     if(religion=="")
//     {
//         document.getElementsByClassName("f4")[0].innerHTML="required";
      

//     }   else
//     {
//         var letters = /^[A-Za-z]+$/;
//         if(religion.match(letters))
//         {
//         document.getElementsByClassName("f4")[0].innerHTML="";
//         count1++;
//         }
//         else
//         {
//             document.getElementsByClassName("f4")[0].innerHTML="Invalid format";
       
//         }
       
//     }


// //date of birth validation

//     if(dob=="")
//     {
//        document.getElementsByClassName("f5")[0].innerHTML="required";
     
//    }
//    else
//    {
//        document.getElementsByClassName("f5")[0].innerHTML="";
//        count1++;
//    }
//    //Nationality validation
//    if(nationality=="")
//    {
//       document.getElementsByClassName("f6")[0].innerHTML="required";
    
//   }
//   else
//     {
//         var letters = /^[A-Za-z]+$/;
//         if(nationality.match(letters))
//         {
//         document.getElementsByClassName("f6")[0].innerHTML="";
//         count1++;
//         }
//         else
//         {
//             document.getElementsByClassName("f6")[0].innerHTML="Invalid format";
       
//         }
       
//     }
  
// //Guardian name validation

//   if(parent=="")
//   {
//      document.getElementsByClassName("f7")[0].innerHTML="required";
   
//  }
//  else
//     {
//         var letters = /^[A-Za-z]+$/;
//         if(parent.match(letters))
//         {
//         document.getElementsByClassName("f7")[0].innerHTML="";
//         count1++;
//         }
//         else
//         {
//             document.getElementsByClassName("f7")[0].innerHTML="Invalid format";
       
//         }
       
//     }


//    //Email Validation 
  
//  if(email=="")
//  {
//     document.getElementsByClassName("f8")[0].innerHTML="required";
  
// }
// else
// {
// var letters =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(email.match(letters))
// {
// document.getElementsByClassName("f8")[0].innerHTML="";
// count1++;
// }
// else
// {
//     document.getElementsByClassName("f8")[0].innerHTML="Invalid format";

// }
// }

//  //Phone number validation
// if(phone=="")
// {
//    document.getElementsByClassName("f9")[0].innerHTML="required";
 
// }
// else
//     {
//         var letters = /^[0-9]+$/;
//         if(phone.match(letters))
//         {
//         document.getElementsByClassName("f9")[0].innerHTML="";
//         count1++;
//         }
//         else
//         {
//             document.getElementsByClassName("f9")[0].innerHTML="Invalid format";
       
//         }
       
//     }
// if(count1==8){

    slidepage.style.paddingRight="0%";

    slidepage.style.marginLeft="-25%";

    document.querySelectorAll(".bullet")[0].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[0].style.color="#fff";
// }
});

nextBtnSec.addEventListener("click",function(){
    
//     var category=document.getElementsByName("category")[0].value;
//     var caste=document.getElementsByName("caste")[0].value;
   
//     var count2=0;
//     if(category=="")
// {
//    document.getElementsByClassName("f10")[0].innerHTML="required";
 
// }
// else
//     {
//         var letters = /^[a-zA-Z]+$/;
//         if(category.match(letters))
//         {
//         document.getElementsByClassName("f10")[0].innerHTML="";
//         count2++;
//         }
//         else
//         {
//             document.getElementsByClassName("f10")[0].innerHTML="Invalid format";
       
//         }
       
//     }


//     if(caste=="")
//     {
//        document.getElementsByClassName("f11")[0].innerHTML="required";
     
//     }
//     else
//         {
//             var letters = /^[a-zA-z]+$/;
//             if(caste.match(letters))
//             {
//             document.getElementsByClassName("f11")[0].innerHTML="";
//             count2++;
//             }
//             else
//             {
//                 document.getElementsByClassName("f11")[0].innerHTML="Invalid format";
           
//             }
           
//         }
    

// if(count2==2)
// {
    slidepage.style.marginLeft="-50%";
    document.querySelectorAll(".bullet")[1].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[1].style.color="#fff";
// }
});
nextBtnThr.addEventListener("click",function(){
//     var preprogram=document.getElementsByName("preprogram")[0].value;
//     var native=document.getElementsByName("native")[0].value;
//     var programname=document.getElementsByName("programname")[0].value;
//     var school=document.getElementsByName("school")[0].value;
//     var schoolmark=document.getElementsByName("school-mark")[0].value;
//     var yop=document.getElementsByName("yop10th")[0].value;
//     var count3=0;
//     if(preprogram=="")
//     {
//         document.getElementsByClassName("f12")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f12")[0].innerHTML="";
//         count3++;
//     }
//     if(native=="")
//     {
//         document.getElementsByClassName("f13")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f13")[0].innerHTML="";
//         count3++;
//     }

//     if(programname=="")
//     {
//         document.getElementsByClassName("f14")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f14")[0].innerHTML="";
//         count3++;
//     }
    
//     if(school=="")
//     {
//         document.getElementsByClassName("f15")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f15")[0].innerHTML="";
//         count3++;
//     }

//     if(schoolmark=="")
//     {
//         document.getElementsByClassName("f16")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f16")[0].innerHTML="";
//         count3++;
//     }

    
//     if(yop=="")
//     {
//         document.getElementsByClassName("f17")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f17")[0].innerHTML="";
//         count3++;
//     }


//     if(count3==6)
//     {
    slidepage.style.marginLeft="-75%";
    document.querySelectorAll(".bullet")[2].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[2].style.color="#fff";
    // }
});
nextBtnfour.addEventListener("click",function(){

//     var subject=document.getElementsByName("subject")[0].value;
//     var school=document.getElementsByName("school")[1].value;

//     var mark12th=document.getElementsByName("mark12th")[0].value;
//     var yop12th=document.getElementsByName("yop12th")[0].value;

//     var count4=0;
//     if(subject=="")
//     {
//         document.getElementsByClassName("f18")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f18")[0].innerHTML="";
//         count4++;
//     }

    
//     if(school=="")
//     {
//         document.getElementsByClassName("f19")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f19")[0].innerHTML="";
//         count4++;
//     }

    
//     if(mark12th=="")
//     {
//         document.getElementsByClassName("f20")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f20")[0].innerHTML="";
//         count4++;
//     }


    
    
//     if(yop12th=="")
//     {
//         document.getElementsByClassName("f21")[0].innerHTML="required";
        
//     }
//     else
//     {
//         document.getElementsByClassName("f21")[0].innerHTML="";
//         count4++;
//     }
    

// if(count4==4)
// {
    slidepage.style.marginLeft="-100%";
    document.querySelectorAll(".bullet")[3].style.backgroundColor="#d43f8d";
    document.querySelectorAll(".bullet")[3].style.color="#fff";
// }
});
var box=document.getElementById("check");
document.getElementById("check").addEventListener("click",function(){
       if(box.checked)
       {
    
        document.getElementById("page4").style.display = "none";
    }
    else
    {
        document.getElementById("page4").style.display = "block";

    }
})

prevBtnSec.addEventListener("click",function(){
    slidepage.style.marginLeft="0%";
    slidepage.style.paddingRight="10%";


    document.querySelectorAll(".bullet")[0].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[0].style.color="#000";

});

prevBtnThr.addEventListener("click",function(){
    slidepage.style.marginLeft="-25%";
    document.querySelectorAll(".bullet")[1].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[1].style.color="#000";

});
prevBtnfour.addEventListener("click",function(){
    slidepage.style.marginLeft="-50%";
    document.querySelectorAll(".bullet")[2].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[2].style.color="#000";

});
prevBtnfive.addEventListener("click",function(){
    slidepage.style.marginLeft="-75%";
    document.querySelectorAll(".bullet")[3].style.backgroundColor="antiquewhite";
    document.querySelectorAll(".bullet")[3].style.color="#000";

});
