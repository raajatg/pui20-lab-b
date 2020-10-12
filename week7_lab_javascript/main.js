function addNewList() {
	alert("hello world alert!");
	console.log("printed");
}

function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
    console.log(item)
    console.log(item.parentNode)
	document.getElementById("btn-eggs-remove").parentNode.removeChild(item)
}
