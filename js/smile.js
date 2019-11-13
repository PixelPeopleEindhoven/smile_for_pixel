$(document).ready(function() {
    var cb = function(isSmile){
        if (isSmile){
            $("#smile").html("F66E")
        }
        else{
            $("#smile").html("");
        }
    };

    var sd = new SmileDetector("vid");
    sd.onSmile(cb);

    sd.start(300);
});
