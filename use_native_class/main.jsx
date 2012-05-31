import "jquery-1.7.jsx";
class _Main {
    static function main(args : string[]) : void {
        var value : string = jQuery.as_func("p").get(0).innerHTML;
        log value + "---" + value;
        jQuery.as_func("p").get(1).innerHTML = "piyo";
    }
}
