$('[lang="en"]').hide();
$('[lang="ast"]').hide();

$('input:radio[name=btnradio]').change(function(e) {
    //Inglés
    switch (e.target.id) {
        case "ESPradio":
            $('[lang="es"]').toggle();
            $('[lang="en"]').hide();
            $('[lang="ast"]').hide();
            break;
        case "ASTradio":
            $('[lang="ast"]').toggle();
            $('[lang="es"]').hide();
            $('[lang="en"]').hide();
            break;
        case "ENGradio":
            $('[lang="en"]').toggle();
            $('[lang="es"]').hide();
            $('[lang="ast"]').hide();
            break;
    }
    /* if (e.target.checked) {
         $('[lang="en"]').toggle();
         $('[lang="es"]').hide();
         //Español
     } else {
        
     }*/
});