


function countWord() {

   let text = document.getElementById("text").value;
   text =text.trim();
   
    let words = text.split(" ").length ;
  
    
   
      
   document.getElementById("best4").innerHTML=words;
 
 
   
     
   
     
   
   let Counter1 = 0 ;
   let Counter2 = 0 ;
   let Counter3 = 0 ;
   let Counter4 = 0 ;
   
    let Counter5 = 0 ;
    let Counter6 = 0 ;
   let Counter7 = 0 ;
   let Counter8 = 0 ;
   let Counter9 = 0 ;
   let Counter10 = 0 ;
   
   let Counter11 = 0 ;
   let Counter12 = 0 ;
   let Counter13 = 0 ;
   let Counter14 = 0 ;
   let Counter15 = 0 ;
   let Counter16 = 0 ;
   let Counter17 = 0 ;
   let Counter18 = 0 ;
   let Counter19 = 0 ;
   let Counter20 = 0 ;
   let Counter21 = 0 ;
   let Counter22 = 0 ;
   let Counter23 = 0 ;
   let Counter24 = 0 ;
   let Counter25 = 0 ;
   let Counter26 = 0 ;
   let Counter27 = 0 ;
   let Counter28 = 0 ;
   // let Counter29 = 0 ;
   
   
   
   
   
   
   
   
   
   
   
   let alif = ['ا','أ','إ','آ'];

   let laa = ['ل'];
   let haa = ['ح'];
   let mim = ['م'];
   let dal = ['د'];
   let haae = ['ه' ,'ة'];
   let raa = ['ر'];
   let baa = ['ب'];
   let ine = ['ع'];
   let yaa = ['ي','ى','ئ'];
    let noon = ['ن'];
   let kaf = ['ك'];
   let ouaou = ['و','ؤ'];
   let sin = ['س'];
   let taa = ['ت'];
   let saad = ['ص'];
   let ttae = ['ط'];
   let ppaf = ['ق'];
   let ddal = ['ذ'];
   let gaa = ['غ'];
   let daa = ['ض'];
   let faa = ['ف'];
   let zay = ['ز'];
   let kha = ['خ'];
   let chine = ['ش'];
   let ddda = ['ظ'];
   let jim = ['ج'];
   let ttta = ['ث'];
   
   
   

   //




   //
   
   
   for(ch of text) {
   
      
   
    if (alif.includes(ch)){
       Counter1++
    }
    if (baa.includes(ch)){
       Counter2++
    }
   
    if (jim.includes(ch)){
      Counter3++
   }
   
   if (dal.includes(ch)){
      Counter4++
      
   }
   
   if (haae.includes(ch)){
      Counter5++
   }
   
   if (ouaou.includes(ch)){
      Counter6++
   }
   
   
   if (zay.includes(ch)){
      Counter7++
   }
   if (haa.includes(ch)){
      Counter8++
   }
   if (ttae.includes(ch)){
      Counter9++
   }
   if (yaa.includes(ch)){
      Counter10++
   }
   
   if (kaf.includes(ch)){
      Counter11++
   }
   
   
   if (laa.includes(ch)){
      Counter12++
   }
   
   
   if (mim.includes(ch)){
      Counter13++
   }
   
   
   
   if (noon.includes(ch)){
      Counter14++
   }
   
   
   if (sin.includes(ch)){
      Counter15++
   }
   
   
   if (ine.includes(ch)){
      Counter16++
   }
   
   
   if (faa.includes(ch)){
      Counter17++
   }
   
   
   if (saad.includes(ch)){
      Counter18++
   }
   
   
   if (ppaf.includes(ch)){
      Counter19++
   }
   
   
   if (raa.includes(ch)){
      Counter20++
   }
   
   
   if (chine.includes(ch)){
      Counter21++
   }
   
   
   if (taa.includes(ch)){
      Counter22++
   }
   
   
   if (ttta.includes(ch)){
      Counter23++
   }
   
   
   if (kha.includes(ch)){
      Counter24++
   }
   
   
   if (ddal.includes(ch)){
      Counter25++
   }
   
   
   if (daa.includes(ch)){
      Counter26++
   }
   
   
   if (ddda.includes(ch)){
      Counter27++
   }
   
   
   if (gaa.includes(ch)){
      Counter28++
   }

  
   
  

   
   
   
   }

   
   
   
   // document.getElementById("alif").innerHTML=Counter1;
   // document.getElementById("alif1").innerHTML=Counter1;
   
   // document.getElementById("baa").innerHTML=Counter2;
   // document.getElementById("baa2").innerHTML=Counter2*2;
   
   // document.getElementById("jim").innerHTML=Counter3;
   // document.getElementById("jim3").innerHTML=Counter3*3;
   
   // document.getElementById("dal").innerHTML=Counter4;
   // document.getElementById("dal4").innerHTML=Counter4*4;
   
   // document.getElementById("haae").innerHTML=Counter5;
   // document.getElementById("haae5").innerHTML=Counter5*5;
   
   // document.getElementById("ouaou").innerHTML=Counter6;
   // document.getElementById("ouaou6").innerHTML=Counter6*6;
   
   // document.getElementById("zay").innerHTML=Counter7;
   // document.getElementById("zay7").innerHTML=Counter7*7;
   
   // document.getElementById("haa").innerHTML=Counter8;
   // document.getElementById("haa8").innerHTML=Counter8*8;
   
   // document.getElementById("ttae").innerHTML=Counter9;
   // document.getElementById("ttae9").innerHTML=Counter9*9;
   
   // document.getElementById("yaa").innerHTML=Counter10;
   // document.getElementById("yaa10").innerHTML=Counter10*10;
   
   // document.getElementById("kaf").innerHTML=Counter11;
   // document.getElementById("kaf11").innerHTML=Counter11*20;
   
   // document.getElementById("laa").innerHTML=Counter12;
   // document.getElementById("laa12").innerHTML=Counter12*30;
   
   
   // document.getElementById("mim").innerHTML=Counter13;
   // document.getElementById("mim13").innerHTML=Counter13*40;
   
   
   // document.getElementById("noon").innerHTML=Counter14;
   // document.getElementById("noon14").innerHTML=Counter14*50;
   
   // document.getElementById("sin").innerHTML=Counter15;
   // document.getElementById("sin15").innerHTML=Counter15*60;
   
   // document.getElementById("ine").innerHTML=Counter16;
   // document.getElementById("ine16").innerHTML=Counter16*70;
   
   // document.getElementById("faa").innerHTML=Counter17;
   // document.getElementById("faa17").innerHTML=Counter17*80;
   
   // document.getElementById("saad").innerHTML=Counter18;
   // document.getElementById("saad18").innerHTML=Counter18*90;
   
   
   // document.getElementById("ppaf").innerHTML=Counter19;
   // document.getElementById("ppaf19").innerHTML=Counter19*100;
   
   // document.getElementById("raa").innerHTML=Counter20;
   // document.getElementById("raa20").innerHTML=Counter20*200;
   
   // document.getElementById("chine").innerHTML=Counter21;
   // document.getElementById("chine21").innerHTML=Counter21*300;
   
   // document.getElementById("taa").innerHTML=Counter22;
   // document.getElementById("taa22").innerHTML=Counter22*400;
   
   // document.getElementById("ttta").innerHTML=Counter23;
   // document.getElementById("ttta23").innerHTML=Counter23*500;
   
   // document.getElementById("kha").innerHTML=Counter24;
   // document.getElementById("kha24").innerHTML=Counter24*600;
   
   // document.getElementById("ddal").innerHTML=Counter25;
   // document.getElementById("ddal25").innerHTML=Counter25*700;
   
   // document.getElementById("daa").innerHTML=Counter26;
   // document.getElementById("daa26").innerHTML=Counter26*800;
   
   // document.getElementById("ddda").innerHTML=Counter27;
   // document.getElementById("ddda27").innerHTML=Counter27*900;
   
   // document.getElementById("gaa").innerHTML=Counter28;
   // document.getElementById("gaa28").innerHTML=Counter28*1000;
   
 

   
   document.getElementById("text").addEventListener("keyup",countWord);
   
   
   document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000  ;
   
   document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
   
  
  
  // document.getElementById("best7").innerHTML=words + Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 + Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28;

//  azer1 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%12;
//  azer2 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%4;
//  azer3 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%7;
  a = Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 ;

  
//    b_k12 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%12 ;
//   b_k4 =(Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%4 ;
//   b_k7 = (Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter15*60 + Counter16*70 + Counter17*80 + Counter18*90 + Counter19*100 + Counter20*200 + Counter21*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter26*800 + Counter27*900 + Counter28*1000 )%7 ;
  




  

}

   //

 



var ws1 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :) </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">1</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;الحمل</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">المريخ</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#ff6600"><span style="background-color:#000000">&nbsp;ناري</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الأولى بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws2 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :) </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">2</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;الثور</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">الزهرة</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#cc6600"><span style="background-color:#000000">&nbsp;ترابي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الثانية بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws3 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">3</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;الجوزاء</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">عطارد</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ccff"><span style="background-color:#000000">هوائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الثالثة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws4 =`<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl" style="text-align:center"><span style="color:#2ecc71"><span style="font-size:36px"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp;على </span></span><span style="color:#ffffff"><span style="background-color:#000000">( 12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">4</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;السرطان</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">القمر</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#66ffff"><span style="background-color:#000000">مائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الرابعة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>



`;
var ws5 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">5</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;الأسد</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">الشمس</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#f39c12"><span style="background-color:#000000">ناري</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الخامسة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws6 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على</span></span><span style="color:#ffffff"><span style="background-color:#000000"> (12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">6</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;العذراء</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">عطارد</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#cc6600"><span style="background-color:#000000"> ترابي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;السادسة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws7 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">( 12) </span></span><span style="color:#0066ff"><span style="background-color:#000000">:)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">7</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;الميزان</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">الزهراء</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#00ccff"><span style="background-color:#000000"> هوائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;السابعة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws8 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :) </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">8</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">&nbsp;العقرب</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">المريخ</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#00ccff"><span style="background-color:#000000"> مائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الثامنة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>


`;
var ws9 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">9</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">القوس</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">المشتري</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f39c12"><span style="background-color:#000000"> ناري</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;التاسعة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws10 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(10) </span></span><span style="color:#0066ff"><span style="background-color:#000000">:)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">10</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">الجدي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">زحل</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#cc6600"><span style="background-color:#000000"> ترابي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;العاشرة بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws11 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">11</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">الدلو</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">زحل</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#00ccff"><span style="background-color:#000000"> هوائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الحادية عشر بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws12 =`<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">12</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">الحوت</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">المشتري</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#66ffff"><span style="background-color:#000000"> مائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الثانية عشر بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;
var ws13 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#2ecc71"><span style="background-color:#000000">بسم الله الرحمن الرحيم</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp; على </span></span><span style="color:#ffffff"><span style="background-color:#000000">(12)</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span><span style="background-color:#000000"> </span></span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">0&nbsp;</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">البرج الروحاني&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp; </span><span style="color:#00ff00"><span style="background-color:#000000">الحوت</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الطالع&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=&nbsp;</span></span><span style="background-color:#000000"> &nbsp;</span><span style="color:#00ff00"><span style="background-color:#000000">المشتري</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ffffff"><span style="background-color:#000000">الطبع / المثلث&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="background-color:#000000"> </span><span style="color:#ccff00"><span style="background-color:#000000">=</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#66ffff"><span style="background-color:#000000"> مائي</span></span></span></p>

<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">الساعة الروحانية&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الثانية عشر بعد الشروق</span></span></span></p>

<p dir="rtl">&nbsp;</p>

`;

var smm1 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة&nbsp; على </span></span><span style="color:#2ecc71"><span style="background-color:#000000">(4)</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp;:)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;1</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>


`;
var smm2 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة&nbsp; على </span></span><span style="color:#2ecc71"><span style="background-color:#000000">(4)</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp;:)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;2</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>



`;
var smm3 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة&nbsp; على </span></span><span style="color:#2ecc71"><span style="background-color:#000000">(4)</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp;:)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;3</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var smm4 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة&nbsp; على </span></span><span style="color:#2ecc71"><span style="background-color:#000000">(4)</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp;:)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;4</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var smm5 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">باقي القسمة&nbsp; على </span></span><span style="color:#2ecc71"><span style="background-color:#000000">(4)</span></span><span style="color:#0066ff"><span style="background-color:#000000">&nbsp;:)</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;0</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;


var youm1 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :1</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الأحد</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>



`;
var youm2 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :2</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الإثنين</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>


`;
var youm3 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :3</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الثلاثاء</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var youm4 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :4</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الأربعاء</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var youm5 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :5</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الخميس</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var youm6 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :6</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;الجمعة</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var youm7 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> :7</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;السبت</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;
var youm8 = `<p dir="rtl" style="text-align:center"><span style="font-size:36px"><span style="color:#ecf0f1"><span style="background-color:#000000">اليوم الخاص بك&nbsp; هو باقي القسمة على </span></span><span style="color:#66ffff"><span style="background-color:#000000">(7)</span></span><span style="color:#ecf0f1"><span style="background-color:#000000">&nbsp;</span></span><span style="color:#0066ff"><span style="background-color:#000000"> : 0</span></span><span style="color:#ccff00"><span style="background-color:#000000"> =</span></span><span style="background-color:#000000">&nbsp;</span><span style="color:#f1c40f"><span style="background-color:#000000"> &nbsp;السبت</span></span></span></p>

<p dir="rtl" style="text-align:center">&nbsp;</p>

<p dir="rtl">&nbsp;</p>

`;

function run_rohani(){
    var a = document.getElementById("numbero").value;
var b_k12 = a%12 ;
var b_k4 = a%4 ;
var b_k7 = a%7 ;

    if (b_k12 ===1){
        document.write(ws1);
    }else if (b_k12 ===2){
        document.write(ws2);
    }else if (a%12 ===3){
        document.write(ws3);
    }else if (b_k12 ===4){
        document.write(ws4);
    }else if (b_k12 ===5){
        document.write(ws5);
    }else if (b_k12 ===6){
        document.write(ws6);
    }else if (b_k12 ===7){
        document.write(ws7);
    }else if (b_k12 ===8){
        document.write(ws8);
    }else if (b_k12 ===9){
        document.write(ws9);
    }else if (b_k12 ===10){
        document.write(ws10);
    }else if (b_k12 ===11){
        document.write(ws11);
   
    }else if (b_k12 ===12  ){
        document.write(ws12);
    }else  if (b_k12 ===0  ){
        document.write(ws13);
    }else
    document.write("");

    //
    if (b_k4 === 1) {

        document.write(smm1);
    }else if (b_k4 === 2) {
    
        document.write(smm2);
    }else if (b_k4 === 3) {
    
        document.write(smm3);
    }else if (b_k4 === 4) {
    
        document.write(smm4);
    }else if (b_k4 === 0) {
    
        document.write(smm5);
    }else
    document.write("");
    //


    if (b_k7 ===1) {

        document.write(youm1)
    
    }else if (b_k7 ===2) {
    
        document.write(youm2)
    
    }else if (b_k7 ===3) {
    
        document.write(youm3)
    
    }else if (b_k7 ===4) {
    
        document.write(youm4)
    
    }else if (b_k7 ===5) {
    
        document.write(youm5)
    
    }else if (b_k7 ===6) {
    
        document.write(youm6)
    
    
    }else if (b_k7 ===7) {
    
        document.write(youm7)
    
    
    }else if (b_k7 ===0) {
    
        document.write(youm8)
    
    
    }
     
    else
    
    document.write("")
    

}














