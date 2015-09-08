
var message = '';
var gallonsLeft;

function print(message) {
  var outputDiv = document.getElementById('calculatorOutput');
  outputDiv.innerHTML = message;
}
$(document).ready(function(){	
	$('#clickButton').on("click", function(event) {
		var inches = $('#inches');
		var tankSize = $('#tank');
		event.preventDefault();
		inches = inches.val();
		tankSize = tankSize.val();
		gallonsLeft = gallonsInTank [tankSize][inches];

			if (gallonsLeft === "FULL") {
				var message = "<span>Your tank is:&nbsp&nbsp&nbsp&nbsp</span><h4>FULL</h4>";
			} else {
				var message = "<span>Your tank has: &nbsp</span><h4>" + gallonsLeft + " gallons</h4>";
			}
		print(message);

	})
})