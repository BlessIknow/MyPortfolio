(function ($) {
	"use strict";

    /*----------------------------
        form validation
    ------------------------------ */
    $('.contact_form .input_fild').blur(function () {
        if ($(this).val().trim() == '') {
            $(this).addClass('inputEmpty').removeClass('inputNotEmpty');
        } else {
            $(this).removeClass('inputEmpty').addClass('inputNotEmpty');
        }
    });
    $('input[type="text"].input_fild.contact_name').blur(function () {
        if ($(this).val().trim() == '') {
            $(this).attr('placeholder', 'Name is Required!');
        }
    });
    $('input[type="email"].input_fild.contact_email').blur(function () {
        if ($(this).val().trim() == '') {
            $(this).attr('placeholder', 'Email is Required!');
        }
    });
    $('textarea.input_fild.contact_message').blur(function () {
        if ($(this).val().trim() == '') {
            $(this).attr('placeholder', 'Meaasge is Required!');
        }
    });

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
})(jQuery);