document.addEventListener("keydown", keypress, false);

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
};
function alertWindow() {
    window.alert("Error")
};

function openBox() {
    var message = prompt("Please provide a post-it", "Reply to emails!");
    var pinCode = '<img id="pin" src="pin.png">';
    if (message != null) {
	document.getElementById("messages").innerHTML +=
	    '<span class="note"> <p>'+message+'</p>'+pinCode+'</span>';
	validate(message);
    }
}
	
function validate(m) {
    alert('Posted');
}

function keypress(event) {
    var x = event.keyCode;     
    var y = String.fromCharCode(x);
    if (x == 112) {
	openBox()
    }
}

