/** jQuery wrapper for JSX
by NISHIO Hirokazu
*/

import "js.jsx";

//import "js/web.jsx"; // too slow
native class Element { // come from js/web.jsx
    var innerHTML : string;
}

final class jQuery { // wrapper of jQuery object
    var _t : variant; // true jQuery object

    function constructor(arg1 : variant, arg2 : variant){
        var jq = js.global["jQuery"] as function(:variant, :variant):jQuery;
        this._t = jq(arg1, arg2);
    }

    function constructor(arg1 : variant){
        var jq = js.global["jQuery"] as function(:variant):jQuery;
        this._t = jq(arg1);
    }

    function constructor(){}

    function set_jQuery(jq : jQueryNative): jQuery{
        this._t = jq;
        return this;
    }

    static function wrap(jq : jQueryNative) : jQuery{
        return new jQuery().set_jQuery(jq);
    }

    function css(a1 : string, a2 : string) : jQuery {
        var t = this._t as __noconvert__ jQueryNative;
        return jQuery.wrap(t.css(a1, a2));
    }

    function click(handler : function(:jQueryEvent):void) : jQuery {
        var t = this._t as __noconvert__ jQueryNative;
        return jQuery.wrap(t.click(handler));
    }

    function get(i : number) : Element {
        var t = this._t as __noconvert__ Map.<Element>;
        return t[i as string];
    }
}

native __fake__ class jQueryNative {
    function css(a1 : string, a2 : string) : jQueryNative;
    function click(handler : function(:jQueryEvent):void) : jQueryNative;
}

native __fake__ class jQueryEvent {
    var target : Element;
}
