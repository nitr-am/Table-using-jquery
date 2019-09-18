  
$(document).ready(function() {
    $("tr:odd").addClass("odd")
    $('tr:even').addClass('even')
    
    $('th').click(function() {
        $('tr').children().removeClass('highlight')
        $(this).siblings().addClass('highlight');
    })
});