function NurseryResult() {
  // console.log("HELLO")
 var fullName = document.getElementById("fullName").value;
 var termSelect = document.querySelector("#termSelect").value;
 var gender = document.querySelector('input[name="flexRadioDefault"]:checked');
 var yearSelect = document.querySelector("#yearSelect").value;
  
 var Subject1 = document.querySelector("#Subject1").value;
 var NurseryCaTest1 = document.querySelector("#NurseryCaTest1").value;
 var NurseryCaTest2 = document.querySelector("#NurseryCaTest2").value;
 var NurseryExam = document.querySelector("#NurseryExam").value;

 var Subject2 = document.querySelector("#Subject2").value;
 var NurseryCaTest11 = document.querySelector("#NurseryCaTest11").value;
 var NurseryCaTest22 = document.querySelector("#NurseryCaTest22").value;
 var NurseryExam11 = document.querySelector("#NurseryExam11").value;

 var Subject33 = document.querySelector("#Subject33");
 var NurseryCaTest3 = document.querySelector("#NurseryCaTest3").value;
var  NurseryCaTest33 = document.querySelector("#NurseryCaTest33").value;
 var NurseryExam3 = document.querySelector("#NurseryExam3").value;

 var Subject4 = document.querySelector("#Subject4");
 var NurseryCaTest4 = document.querySelector("#NurseryCaTest4").value;
 var NurseryCaTest44 = document.querySelector("#NurseryCaTest44").value;
 var NurseryExam4 = document.querySelector("#NurseryExam4").value;

 var Subject5 = document.querySelector("#Subject5");
 var NurseryCaTest5 = document.querySelector("#NurseryCaTest5").value;
 var NurseryCaTest55 = document.querySelector("#NurseryCaTest55").value;
 var NurseryExam5 = document.querySelector("#NurseryExam5").value;

 var Subject6 = document.querySelector("#Subject6");
 var NurseryCaTest6 = document.querySelector("#NurseryCaTest6").value;
 var NurseryCaTest66 = document.querySelector("#NurseryCaTest66").value;
 var NurseryExam6 = document.querySelector("#NurseryExam6").value;

 var Subject7 = document.querySelector("#Subject7");
 var NurseryCaTest7 = document.querySelector("#NurseryCaTest7").value;
 var NurseryCaTest77 = document.querySelector("#NurseryCaTest77").value;
 var NurseryExam7 = document.querySelector("#NurseryExam7").value;

 var Subject8 = document.querySelector("#Subject8");
 var NurseryCaTest8 = document.querySelector("#NurseryCaTest8").value;
 var NurseryCaTest88 = document.querySelector("#NurseryCaTest88").value;
 var NurseryExam8 = document.querySelector("#NurseryExam8").value;

  var Subject9 = document.querySelector("#Subject9");
  var NurseryCaTest9 = document.querySelector("#NurseryCaTest9").value;
  var NurseryCaTest99 = document.querySelector("#NurseryCaTest99").value;
 var  NurseryExam9 = document.querySelector("#NurseryExam9").value;
 
  // gender.value;
  subject33.value;
  subject4.value;
  subject5.value;
  subject6.value;
  subject7.value;
  subject8.value;
  parseInt(subject9.value);
  


  //  arthematics for grade  convert to string 
 var  a = parseInt(NurseryCaTest1);
 var  b = parseInt(NurseryCaTest2);
 var  c = parseInt(NurseryExam);

 var  d = parseInt(NurseryCaTest11);
var  e =  parseInt(NurseryCaTest22);
var  f =  parseInt(NurseryExam11);

 var  g = parseInt(NurseryCaTest3);
 var  h = parseInt(NurseryCaTest33);
var  i =  parseInt(NurseryExam3);

 var  j = parseInt(NurseryCaTest4);
 var  k= parseInt(NurseryCaTest44);
 var  l = parseInt(NurseryExam4);

 var  m = parseInt(NurseryCaTest5);
 var  n = parseInt(NurseryCaTest55);
 var  o = parseInt(NurseryExam5);

 var  p = parseInt(NurseryCaTest6);
 var  q = parseInt(NurseryCaTest66);
var  r =  parseInt(NurseryExam6);

var  s  =  parseInt(NurseryCaTest7);
var  t  =  parseInt(NurseryCaTest77);
 var  u = parseInt(NurseryExam7);

 var  v  = parseInt(NurseryCaTest8);
 var  w = parseInt(NurseryCaTest88);
 var  x = parseInt(NurseryExam8);

 var  y = parseInt(NurseryCaTest9);
var  z =  parseInt(NurseryCaTest99);
var  az =  parseInt(NurseryExam9);



  





























  const ResultObject = {
    fullName,
    termSelect,
    gender,
    yearSelect,

    Subject1,
    NurseryCaTest1,
    NurseryCaTest2,
    NurseryExam,

    Subject2,
    NurseryCaTest11,
    NurseryCaTest22,
    NurseryExam11,

    Subject33,
    NurseryCaTest3,
    NurseryCaTest33,
    NurseryExam3,

    Subject4,
    NurseryCaTest4,
    NurseryCaTest44,
    NurseryExam4,

    Subject5,
    NurseryCaTest5,
    NurseryCaTest55,
    NurseryExam5,

    Subject6,
    NurseryCaTest6,
    NurseryCaTest66,
    NurseryExam6,

    Subject7,
    NurseryCaTest7,
    NurseryCaTest77,
    NurseryExam7,

    Subject8,
    NurseryCaTest8,
    NurseryCaTest88,
    NurseryExam8,

    Subject9,
    NurseryCaTest9,
    NurseryCaTest99,
    NurseryExam9,

  }
  


    localStorage.setItem('fullName',JSON.stringify(ResultObject));


}

let resultShet = localStorage.getItem('fullName');

console.table(resultShet)
