$(document).ready(function(){
    $("#imagedesign").click(function(){
        $("imagedesign").slideDown('1500').hide('1000');
        $('#design').show('1500');
    });
    $('#design').click(function(){
        $('#design').slideUp('1500');
        $('#imagedesign').slideDown('1500');
    });
    });

$(document).ready(function(){
    $("#imagedevelopment").click(function(){
        $("imagedevelopment").slideDown('1500').hide('1000');
        $('#development').show('1500');
    });
    $('#development').click(function(){
        $('#development').slideUp('1500');
        $('#imagedevelopment').slideDown('1500');
    });
    });

$(document).ready(function(){
    $("#imageproduct").click(function(){
        $("imageproduct").slideDown('1500').hide('1000');
        $('#product').show('1500');
    });
    $('#product').click(function(){
        $('#product').slideUp('1500');
        $('#imageproduct').slideDown('1500');
    });
    });

