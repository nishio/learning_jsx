//import "js/web.jsx";
import "js.jsx";
class _Main {
    static function main(args : string[]) : void {
        var jQuery = js.global["$"]
            as function(:string):variant;
        var value : string = (((
            jQuery("p") as Map.<variant>)
            ["0"] as Map.<variant>)
            ["innerText"] as string);

        log value + "---" + value;
    }
}
