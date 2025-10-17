$(document).ready(function() {
    $('#show-more-btn').on('click', function() {
        var textBlock = $('#restaurant-text');
        var card = $('#collapsed_card')
        card.toggleClass('expa')
        textBlock.toggleClass('expanded');

        if (textBlock.hasClass('expanded')) {
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать полностью');
        }
    });


function removeHighlight() {
    $('mark.search-highlight').each(function() {
        $(this).replaceWith($(this).text());
    });
}
$('#search-btn').on('click', function() {
    removeHighlight();
    var searchTerm = $('#search-input').val().trim();
        if (searchTerm) { 
            var regex = new RegExp(searchTerm, 'gi');
            $('body').find('*').contents().filter(function() {
                return this.nodeType === 3 && regex.test(this.nodeValue);
            }).each(function() {
                var newHtml = $(this).text().replace(regex, function(match) {
                    return '<mark class="search-highlight">' + match + '</mark>';
                });
                $(this).replaceWith(newHtml);
            });
        }
    });
});