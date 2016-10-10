 //zoom    
//ao recarregar a pagina continuar com as classes adicionadas
    var zoom = detectZoom.zoom();
    var device = detectZoom.device();

    if (zoom >= 1.50) {
        $('html').addClass('mudarCor');
        $('h1').addClass('aumentarFont');
    } else {
       $('html').removeClass('mudarCor');
        $('h1').removeClass('aumentarFont');
    }


//atualiazar o zoom assim que o usuario o aumentar
    $(window).resize(function () {
        var zoom = detectZoom.zoom();
        var device = detectZoom.device();
    
        if (zoom >= 1.50) {
            $('h1').addClass('aumentarFont');
            $('html').addClass('mudarCor');
        } else {
            $('html').removeClass('mudarCor');
            $('h1').removeClass('aumentarFont');
        }
    });