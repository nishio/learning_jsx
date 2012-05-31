/** jQuery */
import "js.jsx";
import "js/web.jsx";

final class jQuery { // entrypoint to jQuery
    static function as_func(arg : string) : jQueryResult {
        var jq = js.global["jQuery"] as function(:string):jQueryResult;
        var result = jq(arg);
	return new jQueryResult(result);
    }
}

class jQueryResult {
    var _v : variant;
    function constructor(v: variant) {
        this._v = v;
    }
    function get(arg : variant) : HTMLElement {
        var t = this._v as __noconvert__ Map.<HTMLElement>;
        return t[arg as string];
    }
}