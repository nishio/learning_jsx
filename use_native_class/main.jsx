import "jquery-1.7.jsx";
class _Main {
    static function main(args : string[]) : void {
        var jQ = jQuery.as_func;
        var value : string = jQ("p").get(0).innerHTML;
        log value + "---" + value;
        jQ("p").css("background", "red");
        jQ("p").get(1).innerHTML = "piyo";
    }
}
