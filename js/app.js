// Adds new item to bottom of new items list
function addNewItem(string) {
	$('.new-items-list').append("<div class='item'><p class='item-text'>" + string + "</p><button class='check'>Got it</button><input type='image' src='images/trash.svg' class='delete'></div>");
	$('.add-item').val(' ');
};

$(document).ready(function() {
	$('.add-item-submit').click(function() {
		var input = $('.add-item').val();
		addNewItem(input);
	});

	// When a user clicks the “Got it” button, that item gets checked and jumps to bottom of list, button switches
	$('.check').click(function() {
		$(this).html('Restore');
		$(this).toggleClass('check').toggleClass('uncheck');
		$(this).prev().removeClass('item-text').addClass('checked-item-text');
		$(this).parent().appendTo('.checked-items-list');
	});

	// When a user clicks the “Restore” button, item returns to list, button switches
	$('.uncheck').click(function() {
		$(this).html('Got it');
		$(this).toggleClass('check').toggleClass('uncheck');
		$(this).prev().removeClass('checked-item-text').addClass('item-text');
		$(this).parent().prependTo('.new-items-list');
	});

	// When a user clicks the trash icon item is deleted
	$('.delete').click(function() {
		$(this).parent().remove();
	});

	/*$('.item').on('click', function() {
		console.log('delegation');
	});*/
});