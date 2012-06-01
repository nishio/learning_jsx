import "jquery-1.7.jsx";
class _Main {
    static function main(args : string[]) : void {
        new jQuery("p").css("background", "red");
        log new jQuery("p").get(0).innerHTML;
    }
}
