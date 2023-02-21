// get all paramenetere from the application
// console.log("link is working")

//  basic credital from the entry.html
function proceed(){
    const className = document.getElementById("className").value;
    const teacherID = document.getElementById("teacherId").value;

    const basicCredital = {
        className,
        teacherID
    }
    sessionStorage.setItem("basic", JSON.stringify(basicCredital));
}
// /////////////////////


let newObject =  sessionStorage.getItem("basic");
let bio = sessionStorage.getItem("studentBio");
    console.log(JSON.parse(newObject));
    console.log(JSON.parse(bio));


// Pupiles_name
// gender
// AbstractRange
// Academic_Session
function finish(){

    Pupiles_name = document.querySelector("#Pupiles_name").value;
    age = document.querySelector("#age").value;
    Academic_Session = document.querySelector("#Academic_Session").value;
    gender = document.querySelector("#gender").value;


    // grading system here ///////////////////
    Subject = document.querySelector("#Subject").value;
    first_ca = document.querySelector("#test1").value;
    second_ca = document.querySelector("#test2").value;
    exam = document.querySelector("#exam").value;


    // end grading here
    // analysing the remar 
    
    //////////////////////////
    var student_info = {
      Pupiles_name,
      age,
      Academic_Session,
      gender,
      Subject,
      first_ca,
      second_ca,
      exam
    };
     window.sessionStorage.setItem("studentBio", JSON.stringify(student_info));
    // console.log(student_info);

// getting the student info



}
      
     