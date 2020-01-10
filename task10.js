var password = "piaic2019";
var newPassword = prompt("Enter you password: ");
if(newPassword === "" )
{   alert("Please enter your password"); }
else if(newPassword === password)
{   alert("Correct! The password you entered matches the original password");   }
else
{   alert("Incorrect password");    }