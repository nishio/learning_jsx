/** jQuery */
import "js.jsx";
//import "js/web.jsx"; // too slow
native class Element {
    var innerHTML : string;
}

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

    function get(arg : variant) : Element {
        var t = this._v as __noconvert__ Map.<Element>;
        return t[arg as string];
    }

    function css(a1 : string, a2 : string) : jQueryResult {
        var t = this._v as __noconvert__ jQueryNative;
        t.css(a1, a2);
        return this;
    }
}

native __fake__ class jQueryNative {
    function css(a1:string, a2:string) : void;
}