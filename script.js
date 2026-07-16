function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = "Student: " + name;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
    }
}