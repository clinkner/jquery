$(document).ready(function(){ 
	$("#useBilling").click(function(){
	if ($("#useBilling").is(":checked")) {
		$("#home").val($("#billing").val());
		$("#home").attr("disabled", "disabled");
	} 
	else {
		$("#home").removeAttr("disabled");
  	}
	})
})