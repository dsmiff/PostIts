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
    }
}
	
   
