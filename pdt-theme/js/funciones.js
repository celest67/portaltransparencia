$(document).ready(function () {
    $('#tableDataTable').addClass("stripe hover");
    $('#tableDataTable').dataTable({
        "oLanguage": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
    $(".ui-paginator").hide();
    $('#Logoz').click(function () {
        var href = $('.ui-menuitem-link.ui-corner-all.ui-icon.ui-icon-home').attr('href');
        window.location.href = href;
    });

    $jq("#menu-accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        icons: null,
        header: "h4"
    });
    
    $('#showLeft').click(function(e){
        $('#cbp-spmenu-s1').toggleClass('cbp-spmenu-open');
        $('body').toggleClass('cbp-spmenu-push-toright');
        e.preventDefault();
    });
});