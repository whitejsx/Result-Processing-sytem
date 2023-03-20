function show(){
// window.alert("hello is working")
var name = document.getElementById('name').value;
var classStudent= document.getElementById('classNumber').value;
var teacherId = document.getElementById('teacherID').value;

localStorage.setItem("fullName", name )
localStorage.setItem("classStudent", classStudent )
localStorage.setItem("teacherId", teacherId )

}
const viewName = localStorage.getItem("fullName");
const classStudent = localStorage.getItem("classStudent");
const teacherId = localStorage.getItem("teacherId");



function NurseryResult(){
    window.alert("Are you sure you whan to Submit...")

     // console.log("HELLO")
 
  var termSelect = document.querySelector("#termSelect").value;
  var gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  var yearSelect = document.querySelector("#yearSelect").value;
  // console.log(termSelect)
  var Subject1 = document.querySelector("#Subject1").value;
  var NurseryCaTest1 = document.querySelector("#NurseryCaTest1").value;
  var NurseryCaTest2 = document.querySelector("#NurseryCaTest2").value;
  var NurseryExam = document.querySelector("#NurseryExam").value;

  var Subject2 = document.querySelector("#Subject2").value;
  var NurseryCaTest11 = document.querySelector("#NurseryCaTest11").value;
  var NurseryCaTest22 = document.querySelector("#NurseryCaTest22").value;
  var NurseryExam11 = document.querySelector("#NurseryExam11").value;

  var Subject33 = document.querySelector("#subject33").value;
  var NurseryCaTest3 = document.querySelector("#NurseryCaTest3").value;
  var NurseryCaTest33 = document.querySelector("#NurseryCaTest33").value;
  var NurseryExam3 = document.querySelector("#NurseryExam3").value;

  var Subject4 = document.querySelector("#subject4").value;
  var NurseryCaTest4 = document.querySelector("#NurseryCaTest4").value;
  var NurseryCaTest44 = document.querySelector("#NurseryCaTest44").value;
  var NurseryExam4 = document.querySelector("#NurseryExam4").value;

  var Subject5 = document.querySelector("#subject5").value;
  var NurseryCaTest5 = document.querySelector("#NurseryCaTest5").value;
  var NurseryCaTest55 = document.querySelector("#NurseryCaTest55").value;
  var NurseryExam5 = document.querySelector("#NurseryExam5").value;

  var Subject6 = document.querySelector("#subject6").value;
  var NurseryCaTest6 = document.querySelector("#NurseryCaTest6").value;
  var NurseryCaTest66 = document.querySelector("#NurseryCaTest66").value;
  var NurseryExam6 = document.querySelector("#NurseryExam6").value;

  var Subject7 = document.querySelector("#subject7").value;
  var NurseryCaTest7 = document.querySelector("#NurseryCaTest7").value;
  var NurseryCaTest77 = document.querySelector("#NurseryCaTest77").value;
  var NurseryExam7 = document.querySelector("#NurseryExam7").value;

  var Subject8 = document.querySelector("#subject8").value;
  var NurseryCaTest8 = document.querySelector("#NurseryCaTest8").value;
  var NurseryCaTest88 = document.querySelector("#NurseryCaTest88").value;
  var NurseryExam8 = document.querySelector("#NurseryExam8").value;

  var Subject9 = document.querySelector("#subject9").value;
  var NurseryCaTest9 = document.querySelector("#NurseryCaTest9").value;
  var NurseryCaTest99 = document.querySelector("#NurseryCaTest99").value;
  var NurseryExam9 = document.querySelector("#NurseryExam9").value;

  localStorage.setItem("termSelect", termSelect );
  localStorage.setItem("gender", gender );
  localStorage.setItem("yearSelect", yearSelect);

  localStorage.setItem("Subject1", Subject1);
  localStorage.setItem("NurseryCaTest1",NurseryCaTest1);
  localStorage.setItem("NurseryCaTest2",NurseryCaTest2);
  localStorage.setItem("NurseryExam",NurseryExam);

  localStorage.setItem("Subject2",Subject2);
  localStorage.setItem("NurseryCaTest11",NurseryCaTest11);
  localStorage.setItem("NurseryCaTest22",NurseryCaTest22);
  localStorage.setItem("NurseryExam11",NurseryExam11);

  localStorage.setItem("Subject33",Subject33);
  localStorage.setItem("NurseryCaTest3",NurseryCaTest3);
  localStorage.setItem("NurseryCaTest33",NurseryCaTest33);
  localStorage.setItem("NurseryExam3",NurseryExam3);


  localStorage.setItem("Subject4",Subject4);
  localStorage.setItem("NurseryCaTest4",NurseryCaTest4);
  localStorage.setItem("NurseryCaTest44",NurseryCaTest44);
  localStorage.setItem("NurseryExam4",NurseryExam4);

  localStorage.setItem("Subject5",Subject5);
  localStorage.setItem("NurseryCaTest5",NurseryCaTest5);
  localStorage.setItem("NurseryCaTest55",NurseryCaTest55);
  localStorage.setItem("NurseryExam5",NurseryExam5);

  localStorage.setItem("Subject6",Subject6);
  localStorage.setItem("NurseryCaTest6",NurseryCaTest6);
  localStorage.setItem("NurseryCaTest66",NurseryCaTest66);
  localStorage.setItem("NurseryExam6",NurseryExam6);

  localStorage.setItem("Subject7",Subject7);
  localStorage.setItem("NurseryCaTest7",NurseryCaTest7);
  localStorage.setItem("NurseryCaTest77",NurseryCaTest77);
  localStorage.setItem("NurseryExam7",NurseryExam7);

  localStorage.setItem("Subject8",Subject8);
  localStorage.setItem("NurseryCaTest8",NurseryCaTest8);
  localStorage.setItem("NurseryCaTest88",NurseryCaTest88);
  localStorage.setItem("NurseryExam8",NurseryExam8);

  localStorage.setItem("Subject9",Subject9);
  localStorage.setItem("NurseryCaTest9",NurseryCaTest9);
  localStorage.setItem("NurseryCaTest99",NurseryCaTest99);
  localStorage.setItem("NurseryExam9",NurseryExam9);
  

  calcultingTotal(35,7,45)
}

function calcultingTotal(test1,test2,exam){
  var result = test1 + test2 + exam;
  localStorage.setItem("result",result);
  return
}

function grading(a,b,c){
  var A = parseInt(a)
  var B =parseInt(b)
  var C =parseInt(c)
  var summing = A + B + C;
  return summing
}


