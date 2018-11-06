
$("body").on("click","#list>option", function() { 
	var val = $(this).val();
	var txt = $(this).html();

	var opt = `<option value="${val}">${txt}</option> `;
	$("#result").append(opt);
});

$("body").on("click","#result>option", function() { 
	$(this).remove();
});
