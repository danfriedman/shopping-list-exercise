// Adds new item to bottom of new items list
function addNewItem(string) {
	$('.new-items-list').prepend("<div class='item'><p  contenteditable='true' class='item-text'>" + string + "</p><input type='image' src='images/trash.svg' class='delete'><button class='check'>Got it</button></div>");
	$('.add-item').val('');
};

function checkInput(input) {
	if (/\S/.test(input)) {
		addNewItem(input);
	} else {
		alert('Please enter an item');
	}
};

$(document).ready(function() {
	$('.add-item').keypress(function(e) {
		if(e.which == 13) {
    	var input = $('.add-item').val();
    	checkInput(input);
		}
	});

	$('.add-item-submit').click(function(event) {
		var input = $('.add-item').val();
		checkInput(input);
	});

	// When a user clicks "Got it", that item gets checked, jumps to bottom of list, button switches
	$('.new-items-list').on('click', '.check', function(event) {
		var target = $(event.target);
		target.html('Restore');
		target.toggleClass('check').toggleClass('uncheck');
		target.prev().prev().removeClass('item-text').addClass('checked-item-text');
		target.parent().appendTo('.checked-items-list');
	});

	// When a user clicks “Restore”, item returns to list, button switches
	$('.checked-items-list').on('click', '.uncheck', function(event) {
		var target = $(event.target);
		target.html('Got it');
		target.toggleClass('check').toggleClass('uncheck');
		target.prev().prev().removeClass('checked-item-text').addClass('item-text');
		target.parent().prependTo('.new-items-list');
	});

	// When a user clicks trash icon, item is deleted
	$('.checked-items-list, .new-items-list').on('click', '.delete', function(event) {
		$(event.target).parent().remove();
	});
});