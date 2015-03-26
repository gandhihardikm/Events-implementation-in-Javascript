/**
 * 
 */

function tokenGenerator()
{
	var table = document.getElementById("Table");
	var input=document.getElementById("inputbox1").value;
	if(input.toString() != null && input.toString() != "")
	{
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = input;
		cell2.innerHTML = Math.round(Math.random()*50+1);	
		document.getElementById("inputbox1").value="";
	}
}

function login()
{
	document.getElementById("inputbox1").disabled = true;
	var username = prompt("Enter Username : ");
	if(username.toString() == "sjsu")
	{
		var password = prompt("Enter password : ");
		if(password.toString() == "sjsu")
		{
			alert("logged in");
			document.getElementById("inputbox1").disabled = false;
		}
	}
}

function logout()
{
	document.getElementById("inputbox1").disabled = true;
	alert("logged out.");
}