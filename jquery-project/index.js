$('h1').css('color', 'red');

$('h2').addClass('big-title margin-50');

$('h2').removeClass('big-title');

console.log($('h2').hasClass('big-title'));

$('button').html('<em>Olá</em>');

// $('img').attr('src'); This give us the attribute value. It works with classes.

// Changing attributes

$('a').attr('href', 'https://www.yahoo.com');

// Using methods

$('h1').click(function() {
    $('h1').css('color', 'purple');
});

$('button').click(function() {
    $('h1').hide(); // Opposite of $('h1').show();
    // We can also use fadeOut or fadeIn
    // fadeToggle will allow the button to do both
    // We can also use slideToggle
    // There is the animate method, to slowly change the css. It must have a numeric value
    $('h2').slideUp().slideDown().animate({opacity: 0.5})
});

$('input').keypress((event) => {
    $('h1').text(event.key);
});

$('h2').on('mouseover', () => {
    $('h2').css('color', 'white');
});

// Creating elements

$('h1').before('<button>Future bye</button>');

$('h1').after('<button>Future welcome</button>');

/*The prepend and append methods,
the new element will be inserted inside the the pointed HTML element.*/

$('h1').prepend('<button>Before Hello</button>');

$('h1').append('<button>Before Hello</button>');

// To remove elements: $(elements).remove();
