var course1 = parseInt(prompt("Enter your English or course1 Marks"));
var course2 = parseInt(prompt("Enter your Science or course2 Marks"));
var course3 = parseInt(prompt("Enter your Maths or course3 Marks"));

var totalMarks = (course1 + course2 + course3);
var percentage = totalMarks * 100 / 300;
var Grade;
var Remarks;
if (percentage >= 80) {
    alert(Grade = "A-one" , Remarks = "Excellent.");
} else if (percentage >= 70) {
    alert(Grade = "A" , Remarks = "Good." );
} else if (percentage >= 60) {
    alert(Grade = "B" , Remarks = "You need to improve. ");
} else if (percentage < 60) {
    alert(Grade = "Fail" , Remarks = "Sorry.");
}
 document.write("Total marks: " + "300" + "<br>" + "Marks obtained: " + totalMarks + "<br>" + "Percentage:" + percentage + "%" + "<br>" ); 
 document.write("Grade: " + Grade +"<br>" + "Remarks: " + Remarks);