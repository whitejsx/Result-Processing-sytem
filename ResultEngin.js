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
    window.localStorage.setItem("basic", JSON.stringify(basicCredital));
}
// /////////////////////


let newObject = window.localStorage.getItem("basic");
let bio = window.localStorage.getItem("studentBio");
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
     
    var student_info = {
      Pupiles_name,
      age,
      Academic_Session,
      gender,
    };
     window.localStorage.setItem("studentBio", JSON.stringify(student_info));
    // console.log(output)

// getting the student info


}
      
     