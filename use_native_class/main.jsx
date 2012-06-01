import "jquery-1.7.jsx";
class _Main {
    static function click_handler(e:jQueryEvent):void{
        e.target.innerHTML += "hoge";
    }
    static function main() : void {
        new jQuery("p").css("background", "#afa")
        .click(_Main.click_handler);
    }
}
