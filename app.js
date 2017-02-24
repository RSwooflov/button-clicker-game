var x;

x=8;

console.log(typeof x);

console.log (x);

function modify_qty(val) {
	var qty = document.getElementById('qty').value;
	var new_qty = parseInt(qty,10) + val;

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('qty').value = new_qty;
	return new_qty;

}
var clicks = 0;
function onClick(){
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
};

