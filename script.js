//your JS code here. If required.
function display() {
	var x = document.getElementById('fname').value;
	var y = document.getElementById('lname').value;
	var z = document.getElementById('phone').value;
	var p = document.getElementById('email').value;

	var X = "First Name: ";
	var Y = "Last Name: ";
	var Z = "Phone Number: ";
	var P = "Email ID: ";
	
alert(X+x  +"\n"+ Y+y  +"\n"+  Z+z   +"\n"+   P+p);
}