function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
};
function alertWindow() {
    window.alert("Error")
};

function openBox() {
    var message = prompt("Please provide a post-it", "Reply to emails!");
    if (message != null) {
	document.getElementById("messages").innerHTML +=
	    '<span class="note">'+message+'</span>';
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
document.addEventListener("keydown", keypress, false);
