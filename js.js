$('[lang="en"]').hide();

$('#navCheck').on('change.bootstrapSwitch', function(e) {
    //Inglés
    if (e.target.checked) {
        $('[lang="en"]').toggle();
        $('[lang="es"]').hide();
        //Español
    } else {
        $('[lang="es"]').toggle();
        $('[lang="en"]').hide();
    }
});