$(document).ready(function(){

    var phrase = "var x = 42;"
    var normalSpeed = 150;
    var selectedSpeed = normalSpeed;

    $('#go').click(function(){
        $('p').text('')
        var i = 0;
        var t = setInterval(function(){
            $('p').text($('p').text() + phrase[i])
            i++;
            if(i >= phrase.length){
                clearInterval(t);
            }
        }, selectedSpeed)
    })

    $('[type=range]').change(function(){
        var newVal = 240 * ( Number($(this).val()) *.01 ); 
        selectedSpeed = 30 + newVal;
    })

    
})