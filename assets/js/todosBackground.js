$("#todoList").on("click", "li", function()
{
	$(this).toggleClass("completedItem")
});

$("#todoList").on("click", "span", function(event)
{
	$(this).parent().fadeOut(700, function()
	{
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
	if(event.which === 13)
	{
		var newTodo = $(this).val();
		$(this).val("");
		$("#todoList").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>")
	}
});

$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle();
});