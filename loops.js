// Do your work here

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

	for (var i=0; i<presidents.length; i++){
		console.log(presidents[i]);
		console.log("The value of i is: " + i);
		console.log("The value at Index is: " + presidents[i]);
	}
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

	function printContent(n1, n2) {
		for (var i=0; i<presidents.length; i++){
		console.log(presidents[i]);
		console.log(n1("The value of i is: " + i));
		console.log(n2 ("The value at Index is: " + presidents[i]));
	}
}