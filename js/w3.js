// 参数3
var window = new Object();

function U(e, t) {
    var r = t["slice"](-2),
        n = [];

    for (var i = 0; i < r["length"]; i++) {
        var o = r["charCodeAt"](i);
        n[i] = o > 57 ? o - 87 : o - 48;
    }

    r = n[0] * 36 + n[1];
    var a = Math["round"](e) + r;
    t = t["slice"](0, 32);
    var s = [[], [], [], [], []],
        u = {};

    var c = 0,
        _;

    i = 0;

    for (var f = t["length"]; i < f; i++) {
        _ = t["charAt"](i);

        if (!u[_]) {
            u[_] = 1;
            s[c]["push"](_);
            c++;
            c = c == 5 ? 0 : c;
        }
    }

    var l = a,
        h,
        v = 4;
    var d = "";
    var p = [1, 2, 5, 10, 50];

    while (l > 0) {
        if (l - p[v] >= 0) {
            h = parseInt(Math["random"]() * s[v]["length"], 10);
            d = d + s[v][h];
            l = l - p[v];
        } else {
            s["splice"](v, 1);
            p["splice"](v, 1);
            v = v - 1;
        }
    }

    return d;
}

function Q(e) {
    function IGbb(e, t) {
        return e << t | e >>> 32 - t;
    }

    function JbRw(e, t) {
        var r, n, i, o, a;
        i = e & 2147483648;
        o = t & 2147483648;
        r = e & 1073741824;
        n = t & 1073741824;
        a = (e & 1073741823) + (t & 1073741823);

        if (r & n) {
            return a ^ 2147483648 ^ i ^ o;
        }

        if (r | n) {
            if (a & 1073741824) {
                return a ^ 3221225472 ^ i ^ o;
            } else {
                return a ^ 1073741824 ^ i ^ o;
            }
        } else {
            return a ^ i ^ o;
        }
    }

    function F(e, t, r) {
        return e & t | ~e & r;
    }

    function G(e, t, r) {
        return e & r | t & ~r;
    }

    function H(e, t, r) {
        return e ^ t ^ r;
    }

    function I(e, t, r) {
        return t ^ (e | ~r);
    }

    function FF(e, t, r, n, i, o, a) {
        e = JbRw(e, JbRw(JbRw(F(t, r, n), i), a));
        return JbRw(IGbb(e, o), t);
    }

    function GG(e, t, r, n, i, o, a) {
        e = JbRw(e, JbRw(JbRw(G(t, r, n), i), a));
        return JbRw(IGbb(e, o), t);
    }

    function HH(e, t, r, n, i, o, a) {
        e = JbRw(e, JbRw(JbRw(H(t, r, n), i), a));
        return JbRw(IGbb(e, o), t);
    }

    function II(e, t, r, n, i, o, a) {
        e = JbRw(e, JbRw(JbRw(I(t, r, n), i), a));
        return JbRw(IGbb(e, o), t);
    }

    function Kkrs(e) {
        var t;
        var r = e["length"];
        var n = r + 8;
        var i = (n - n % 64) / 64;
        var o = (i + 1) * 16;
        var a = Array(o - 1);
        var s = 0;
        var u = 0;

        while (u < r) {
            t = (u - u % 4) / 4;
            s = u % 4 * 8;
            a[t] = a[t] | e["charCodeAt"](u) << s;
            u++;
        }

        t = (u - u % 4) / 4;
        s = u % 4 * 8;
        a[t] = a[t] | 128 << s;
        a[o - 2] = r << 3;
        a[o - 1] = r >>> 29;
        return a;
    }

    function LvRm(e) {
        var t = "",
            r = "",
            n,
            i;

        for (i = 0; i <= 3; i++) {
            n = e >>> i * 8 & 255;
            r = "0" + n["toString"](16);
            t = t + r["substr"](r["length"] - 2, 2);
        }

        return t;
    }

    function MPOm(e) {
        e = e["replace"](/\r\n/g, "\n");
        var t = "";

        for (var r = 0; r < e["length"]; r++) {
            var n = e["charCodeAt"](r);

            if (n < 128) {
                t += String["fromCharCode"](n);
            } else if (n > 127 && n < 2048) {
                t += String["fromCharCode"](n >> 6 | 192);
                t += String["fromCharCode"](n & 63 | 128);
            } else {
                t += String["fromCharCode"](n >> 12 | 224);
                t += String["fromCharCode"](n >> 6 & 63 | 128);
                t += String["fromCharCode"](n & 63 | 128);
            }
        }

        return t;
    }

    var t = [];

    var r, n, i, o, a, s, u, c, _;

    var f = 7,
        l = 12,
        h = 17,
        v = 22;
    var d = 5,
        p = 9,
        g = 14,
        m = 20;
    var b = 4,
        y = 11,
        w = 16,
        x = 23;
    var E = 6,
        S = 10,
        C = 15,
        T = 21;
    e = MPOm(e);
    t = Kkrs(e);
    s = 1732584193;
    u = 4023233417;
    c = 2562383102;
    _ = 271733878;

    for (r = 0; r < t["length"]; r += 16) {
        n = s;
        i = u;
        o = c;
        a = _;
        s = FF(s, u, c, _, t[r + 0], f, 3614090360);
        _ = FF(_, s, u, c, t[r + 1], l, 3905402710);
        c = FF(c, _, s, u, t[r + 2], h, 606105819);
        u = FF(u, c, _, s, t[r + 3], v, 3250441966);
        s = FF(s, u, c, _, t[r + 4], f, 4118548399);
        _ = FF(_, s, u, c, t[r + 5], l, 1200080426);
        c = FF(c, _, s, u, t[r + 6], h, 2821735955);
        u = FF(u, c, _, s, t[r + 7], v, 4249261313);
        s = FF(s, u, c, _, t[r + 8], f, 1770035416);
        _ = FF(_, s, u, c, t[r + 9], l, 2336552879);
        c = FF(c, _, s, u, t[r + 10], h, 4294925233);
        u = FF(u, c, _, s, t[r + 11], v, 2304563134);
        s = FF(s, u, c, _, t[r + 12], f, 1804603682);
        _ = FF(_, s, u, c, t[r + 13], l, 4254626195);
        c = FF(c, _, s, u, t[r + 14], h, 2792965006);
        u = FF(u, c, _, s, t[r + 15], v, 1236535329);
        s = GG(s, u, c, _, t[r + 1], d, 4129170786);
        _ = GG(_, s, u, c, t[r + 6], p, 3225465664);
        c = GG(c, _, s, u, t[r + 11], g, 643717713);
        u = GG(u, c, _, s, t[r + 0], m, 3921069994);
        s = GG(s, u, c, _, t[r + 5], d, 3593408605);
        _ = GG(_, s, u, c, t[r + 10], p, 38016083);
        c = GG(c, _, s, u, t[r + 15], g, 3634488961);
        u = GG(u, c, _, s, t[r + 4], m, 3889429448);
        s = GG(s, u, c, _, t[r + 9], d, 568446438);
        _ = GG(_, s, u, c, t[r + 14], p, 3275163606);
        c = GG(c, _, s, u, t[r + 3], g, 4107603335);
        u = GG(u, c, _, s, t[r + 8], m, 1163531501);
        s = GG(s, u, c, _, t[r + 13], d, 2850285829);
        _ = GG(_, s, u, c, t[r + 2], p, 4243563512);
        c = GG(c, _, s, u, t[r + 7], g, 1735328473);
        u = GG(u, c, _, s, t[r + 12], m, 2368359562);
        s = HH(s, u, c, _, t[r + 5], b, 4294588738);
        _ = HH(_, s, u, c, t[r + 8], y, 2272392833);
        c = HH(c, _, s, u, t[r + 11], w, 1839030562);
        u = HH(u, c, _, s, t[r + 14], x, 4259657740);
        s = HH(s, u, c, _, t[r + 1], b, 2763975236);
        _ = HH(_, s, u, c, t[r + 4], y, 1272893353);
        c = HH(c, _, s, u, t[r + 7], w, 4139469664);
        u = HH(u, c, _, s, t[r + 10], x, 3200236656);
        s = HH(s, u, c, _, t[r + 13], b, 681279174);
        _ = HH(_, s, u, c, t[r + 0], y, 3936430074);
        c = HH(c, _, s, u, t[r + 3], w, 3572445317);
        u = HH(u, c, _, s, t[r + 6], x, 76029189);
        s = HH(s, u, c, _, t[r + 9], b, 3654602809);
        _ = HH(_, s, u, c, t[r + 12], y, 3873151461);
        c = HH(c, _, s, u, t[r + 15], w, 530742520);
        u = HH(u, c, _, s, t[r + 2], x, 3299628645);
        s = II(s, u, c, _, t[r + 0], E, 4096336452);
        _ = II(_, s, u, c, t[r + 7], S, 1126891415);
        c = II(c, _, s, u, t[r + 14], C, 2878612391);
        u = II(u, c, _, s, t[r + 5], T, 4237533241);
        s = II(s, u, c, _, t[r + 12], E, 1700485571);
        _ = II(_, s, u, c, t[r + 3], S, 2399980690);
        c = II(c, _, s, u, t[r + 10], C, 4293915773);
        u = II(u, c, _, s, t[r + 1], T, 2240044497);
        s = II(s, u, c, _, t[r + 8], E, 1873313359);
        _ = II(_, s, u, c, t[r + 15], S, 4264355552);
        c = II(c, _, s, u, t[r + 6], C, 2734768916);
        u = II(u, c, _, s, t[r + 13], T, 1309151649);
        s = II(s, u, c, _, t[r + 4], E, 4149444226);
        _ = II(_, s, u, c, t[r + 11], S, 3174756917);
        c = II(c, _, s, u, t[r + 2], C, 718787259);
        u = II(u, c, _, s, t[r + 9], T, 3951481745);
        s = JbRw(s, n);
        u = JbRw(u, i);
        c = JbRw(c, o);
        _ = JbRw(_, a);
    }

    var A = LvRm(s) + LvRm(u) + LvRm(c) + LvRm(_);
    return A["toLowerCase"]();
}

var ue = function () {
    function S4() {
        return ((1 + Math["random"]()) * 65536 | 0)["toString"](16)["substring"](1);
    }

    return function () {
        return S4() + S4() + S4() + S4();
    };
}();
var K = function () {
    function NjBW() {
        this["i"] = 0;
        this["j"] = 0;
        this["S"] = [];
    }

    function OdXV(e) {
        var t, r, n;

        for (t = 0; t < 256; ++t) this["S"][t] = t;

        r = 0;

        for (t = 0; t < 256; ++t) {
            r = r + this["S"][t] + e[t % e["length"]] & 255;
            n = this["S"][t];
            this["S"][t] = this["S"][r];
            this["S"][r] = n;
        }

        this["i"] = 0;
        this["j"] = 0;
    }

    function PYfp() {
        var e;
        this["i"] = this["i"] + 1 & 255;
        this["j"] = this["j"] + this["S"][this["i"]] & 255;
        e = this["S"][this["i"]];
        this["S"][this["i"]] = this["S"][this["j"]];
        this["S"][this["j"]] = e;
        return this["S"][e + this["S"][this["i"]] & 255];
    }

    NjBW["prototype"]["init"] = OdXV;
    NjBW["prototype"]["next"] = PYfp;

    function QYPE() {
        return new NjBW();
    }

    var r = 256;
    var t;
    var n;
    var i;

    if (n == null) {
        n = [];
        i = 0;
        var e;

        try {
            if (window["crypto"] && window["crypto"]["getRandomValues"]) {
                var o = new Uint32Array(256);
                window["crypto"]["getRandomValues"](o);

                for (e = 0; e < o["length"]; ++e) n[i++] = o[e] & 255;
            }
        } catch (p) {
        }

        var a = 0;

        function s(e) {
            a = a || 0;

            if (a >= 256 || i >= r) {
                if (window["removeEventListener"]) {
                    a = 0;
                    window["removeEventListener"]("mousemove", s, false);
                } else if (window["detachEvent"]) {
                    a = 0;
                    window["detachEvent"]("onmousemove", s);
                }

                return;
            }

            try {
                var t = e["x"] + e["y"];
                n[i++] = t & 255;
                a += 1;
            } catch (p) {
            }
        }

        if (window["addEventListener"]) window["addEventListener"]("mousemove", s, false); else if (window["attachEvent"]) window["attachEvent"]("onmousemove", s);
    }

    function RizQ() {
        if (t == null) {
            t = QYPE();

            while (i < r) {
                var e = Math["floor"](65536 * Math["random"]());
                n[i++] = e & 255;
            }

            t["init"](n);

            for (i = 0; i < n["length"]; ++i) n[i] = 0;

            i = 0;
        }

        return t["next"]();
    }

    function SS_A(e) {
        var t;

        for (t = 0; t < e["length"]; ++t) e[t] = RizQ();
    }

    function TMfm() {
    }

    TMfm["prototype"]["nextBytes"] = SS_A;
    var u;
    var c = 0xdeadbeefcafe;

    var _ = (c & 16777215) == 15715070;

    function Ugbw(e, t, r) {
        if (e != null) if ("number" == typeof e) this["fromNumber"](e, t, r); else if (t == null && "string" != typeof e) this["fromString"](e, 256); else this["fromString"](e, t);
    }

    function VFUC() {
        return new Ugbw(null);
    }

    function WUTn(e, t, r, n, i, o) {
        while (--o >= 0) {
            var a = t * this[e++] + r[n] + i;
            i = Math["floor"](a / 67108864);
            r[n++] = a & 67108863;
        }

        return i;
    }

    function XdOf(e, t, r, n, i, o) {
        var a = t & 32767,
            s = t >> 15;

        while (--o >= 0) {
            var u = this[e] & 32767;
            var c = this[e++] >> 15;

            var _ = s * u + c * a;

            u = a * u + ((_ & 32767) << 15) + r[n] + (i & 1073741823);
            i = (u >>> 30) + (_ >>> 15) + s * c + (i >>> 30);
            r[n++] = u & 1073741823;
        }

        return i;
    }

    function YfsS(e, t, r, n, i, o) {
        var a = t & 16383,
            s = t >> 14;

        while (--o >= 0) {
            var u = this[e] & 16383;
            var c = this[e++] >> 14;

            var _ = s * u + c * a;

            u = a * u + ((_ & 16383) << 14) + r[n] + i;
            i = (u >> 28) + (_ >> 14) + s * c;
            r[n++] = u & 268435455;
        }

        return i;
    }

    if (_ && "Netscape" == "Microsoft Internet Explorer") {
        Ugbw["prototype"]["am"] = XdOf;
        u = 30;
    } else if (_ && "Netscape" != "Netscape") {
        Ugbw["prototype"]["am"] = WUTn;
        u = 26;
    } else {
        Ugbw["prototype"]["am"] = YfsS;
        u = 28;
    }

    Ugbw["prototype"]["DB"] = u;
    Ugbw["prototype"]["DM"] = (1 << u) - 1;
    Ugbw["prototype"]["DV"] = 1 << u;
    var f = 52;
    Ugbw["prototype"]["FV"] = Math["pow"](2, f);
    Ugbw["prototype"]["F1"] = f - u;
    Ugbw["prototype"]["F2"] = 2 * u - f;
    var l = "0123456789abcdefghijklmnopqrstuvwxyz";
    var h = [];
    var v, d;
    v = "0"["charCodeAt"](0);

    for (d = 0; d <= 9; ++d) h[v++] = d;

    v = "a"["charCodeAt"](0);

    for (d = 10; d < 36; ++d) h[v++] = d;

    v = "A"["charCodeAt"](0);

    for (d = 10; d < 36; ++d) h[v++] = d;

    function ZQgf(e) {
        return l["charAt"](e);
    }

    function aLPN(e, t) {
        var r = h[e["charCodeAt"](t)];
        return r == null ? -1 : r;
    }

    function bDRS(e) {
        for (var t = this["t"] - 1; t >= 0; --t) e[t] = this[t];

        e["t"] = this["t"];
        e["s"] = this["s"];
    }

    function cEPF(e) {
        this["t"] = 1;
        this["s"] = e < 0 ? -1 : 0;
        if (e > 0) this[0] = e; else if (e < -1) this[0] = e + this["DV"]; else this["t"] = 0;
    }

    function dGXo(e) {
        var t = VFUC();
        t["fromInt"](e);
        return t;
    }

    function eUGb(e, t) {
        var r;
        if (t == 16) r = 4; else if (t == 8) r = 3; else if (t == 256) r = 8; else if (t == 2) r = 1; else if (t == 32) r = 5; else if (t == 4) r = 2; else {
            this["fromRadix"](e, t);
            return;
        }
        this["t"] = 0;
        this["s"] = 0;
        var n = e["length"],
            i = false,
            o = 0;

        while (--n >= 0) {
            var a = r == 8 ? e[n] & 255 : aLPN(e, n);

            if (a < 0) {
                if (e["charAt"](n) == "-") i = true;
                continue;
            }

            i = false;
            if (o == 0) this[this["t"]++] = a; else if (o + r > this["DB"]) {
                this[this["t"] - 1] |= (a & (1 << this["DB"] - o) - 1) << o;
                this[this["t"]++] = a >> this["DB"] - o;
            } else this[this["t"] - 1] |= a << o;
            o += r;
            if (o >= this["DB"]) o -= this["DB"];
        }

        if (r == 8 && (e[0] & 128) != 0) {
            this["s"] = -1;
            if (o > 0) this[this["t"] - 1] |= (1 << this["DB"] - o) - 1 << o;
        }

        this["clamp"]();
        if (i) Ugbw["ZERO"]["subTo"](this, this);
    }

    function flZc() {
        var e = this["s"] & this["DM"];

        while (this["t"] > 0 && this[this["t"] - 1] == e) --this["t"];
    }

    function gdaR(e) {
        if (this["s"] < 0) return "-" + this["negate"]()["toString"](e);
        var t;
        if (e == 16) t = 4; else if (e == 8) t = 3; else if (e == 2) t = 1; else if (e == 32) t = 5; else if (e == 4) t = 2; else return this["toRadix"](e);
        var r = (1 << t) - 1,
            n,
            i = false,
            o = "",
            a = this["t"];
        var s = this["DB"] - a * this["DB"] % t;

        if (a-- > 0) {
            if (s < this["DB"] && (n = this[a] >> s) > 0) {
                i = true;
                o = ZQgf(n);
            }

            while (a >= 0) {
                if (s < t) {
                    n = (this[a] & (1 << s) - 1) << t - s;
                    n |= this[--a] >> (s += this["DB"] - t);
                } else {
                    n = this[a] >> (s -= t) & r;

                    if (s <= 0) {
                        s += this["DB"];
                        --a;
                    }
                }

                if (n > 0) i = true;
                if (i) o += ZQgf(n);
            }
        }

        return i ? o : "0";
    }

    function hxJr() {
        var e = VFUC();
        Ugbw["ZERO"]["subTo"](this, e);
        return e;
    }

    function iTKq() {
        return this["s"] < 0 ? this["negate"]() : this;
    }

    function jnfx(e) {
        var t = this["s"] - e["s"];
        if (t != 0) return t;
        var r = this["t"];
        t = r - e["t"];
        if (t != 0) return this["s"] < 0 ? -t : t;

        while (--r >= 0) if ((t = this[r] - e[r]) != 0) return t;

        return 0;
    }

    function khLH(e) {
        var t = 1,
            r;

        if ((r = e >>> 16) != 0) {
            e = r;
            t += 16;
        }

        if ((r = e >> 8) != 0) {
            e = r;
            t += 8;
        }

        if ((r = e >> 4) != 0) {
            e = r;
            t += 4;
        }

        if ((r = e >> 2) != 0) {
            e = r;
            t += 2;
        }

        if ((r = e >> 1) != 0) {
            e = r;
            t += 1;
        }

        return t;
    }

    function lDcS() {
        if (this["t"] <= 0) return 0;
        return this["DB"] * (this["t"] - 1) + khLH(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }

    function mLoA(e, t) {
        var r;

        for (r = this["t"] - 1; r >= 0; --r) t[r + e] = this[r];

        for (r = e - 1; r >= 0; --r) t[r] = 0;

        t["t"] = this["t"] + e;
        t["s"] = this["s"];
    }

    function nbFk(e, t) {
        for (var r = e; r < this["t"]; ++r) t[r - e] = this[r];

        t["t"] = Math["max"](this["t"] - e, 0);
        t["s"] = this["s"];
    }

    function onjU(e, t) {
        var r = e % this["DB"];
        var n = this["DB"] - r;
        var i = (1 << n) - 1;
        var o = Math["floor"](e / this["DB"]),
            a = this["s"] << r & this["DM"],
            s;

        for (s = this["t"] - 1; s >= 0; --s) {
            t[s + o + 1] = this[s] >> n | a;
            a = (this[s] & i) << r;
        }

        for (s = o - 1; s >= 0; --s) t[s] = 0;

        t[o] = a;
        t["t"] = this["t"] + o + 1;
        t["s"] = this["s"];
        t["clamp"]();
    }

    function pEbE(e, t) {
        t["s"] = this["s"];
        var r = Math["floor"](e / this["DB"]);

        if (r >= this["t"]) {
            t["t"] = 0;
            return;
        }

        var n = e % this["DB"];
        var i = this["DB"] - n;
        var o = (1 << n) - 1;
        t[0] = this[r] >> n;

        for (var a = r + 1; a < this["t"]; ++a) {
            t[a - r - 1] |= (this[a] & o) << i;
            t[a - r] = this[a] >> n;
        }

        if (n > 0) t[this["t"] - r - 1] |= (this["s"] & o) << i;
        t["t"] = this["t"] - r;
        t["clamp"]();
    }

    function qK_T(e, t) {
        var r = 0,
            n = 0,
            i = Math["min"](e["t"], this["t"]);

        while (r < i) {
            n += this[r] - e[r];
            t[r++] = n & this["DM"];
            n >>= this["DB"];
        }

        if (e["t"] < this["t"]) {
            n -= e["s"];

            while (r < this["t"]) {
                n += this[r];
                t[r++] = n & this["DM"];
                n >>= this["DB"];
            }

            n += this["s"];
        } else {
            n += this["s"];

            while (r < e["t"]) {
                n -= e[r];
                t[r++] = n & this["DM"];
                n >>= this["DB"];
            }

            n -= e["s"];
        }

        t["s"] = n < 0 ? -1 : 0;
        if (n < -1) t[r++] = this["DV"] + n; else if (n > 0) t[r++] = n;
        t["t"] = r;
        t["clamp"]();
    }

    function rqmp(e, t) {
        var r = this["abs"](),
            n = e["abs"]();
        var i = r["t"];
        t["t"] = i + n["t"];

        while (--i >= 0) t[i] = 0;

        for (i = 0; i < n["t"]; ++i) t[i + r["t"]] = r["am"](0, n[i], t, i, 0, r["t"]);

        t["s"] = 0;
        t["clamp"]();
        if (this["s"] != e["s"]) Ugbw["ZERO"]["subTo"](t, t);
    }

    function ssNB(e) {
        var t = this["abs"]();
        var r = e["t"] = 2 * t["t"];

        while (--r >= 0) e[r] = 0;

        for (r = 0; r < t["t"] - 1; ++r) {
            var n = t["am"](r, t[r], e, 2 * r, 0, 1);

            if ((e[r + t["t"]] += t["am"](r + 1, 2 * t[r], e, 2 * r + 1, n, t["t"] - r - 1)) >= t["DV"]) {
                e[r + t["t"]] -= t["DV"];
                e[r + t["t"] + 1] = 1;
            }
        }

        if (e["t"] > 0) e[e["t"] - 1] += t["am"](r, t[r], e, 2 * r, 0, 1);
        e["s"] = 0;
        e["clamp"]();
    }

    function tMMa(e, t, r) {
        var n = e["abs"]();
        if (n["t"] <= 0) return;
        var i = this["abs"]();

        if (i["t"] < n["t"]) {
            if (t != null) t["fromInt"](0);
            if (r != null) this["copyTo"](r);
            return;
        }

        if (r == null) r = VFUC();
        var o = VFUC(),
            a = this["s"],
            s = e["s"];
        var u = this["DB"] - khLH(n[n["t"] - 1]);

        if (u > 0) {
            n["lShiftTo"](u, o);
            i["lShiftTo"](u, r);
        } else {
            n["copyTo"](o);
            i["copyTo"](r);
        }

        var c = o["t"];
        var _ = o[c - 1];
        if (_ == 0) return;
        var f = _ * (1 << this["F1"]) + (c > 1 ? o[c - 2] >> this["F2"] : 0);
        var l = this["FV"] / f,
            h = (1 << this["F1"]) / f,
            v = 1 << this["F2"];
        var d = r["t"],
            p = d - c,
            g = t == null ? VFUC() : t;
        o["dlShiftTo"](p, g);

        if (r["compareTo"](g) >= 0) {
            r[r["t"]++] = 1;
            r["subTo"](g, r);
        }

        Ugbw["ONE"]["dlShiftTo"](c, g);
        g["subTo"](o, o);

        while (o["t"] < c) o[o["t"]++] = 0;

        while (--p >= 0) {
            var m = r[--d] == _ ? this["DM"] : Math["floor"](r[d] * l + (r[d - 1] + v) * h);

            if ((r[d] += o["am"](0, m, r, p, 0, c)) < m) {
                o["dlShiftTo"](p, g);
                r["subTo"](g, r);

                while (r[d] < --m) r["subTo"](g, r);
            }
        }

        if (t != null) {
            r["drShiftTo"](c, t);
            if (a != s) Ugbw["ZERO"]["subTo"](t, t);
        }

        r["t"] = c;
        r["clamp"]();
        if (u > 0) r["rShiftTo"](u, r);
        if (a < 0) Ugbw["ZERO"]["subTo"](r, r);
    }

    function uTIu(e) {
        var t = VFUC();
        this["abs"]()["divRemTo"](e, null, t);
        if (this["s"] < 0 && t["compareTo"](Ugbw["ZERO"]) > 0) e["subTo"](t, t);
        return t;
    }

    function vJwp(e) {
        this["m"] = e;
    }

    function wIES(e) {
        if (e["s"] < 0 || e["compareTo"](this["m"]) >= 0) return e["mod"](this["m"]); else return e;
    }

    function xclK(e) {
        return e;
    }

    function yiTA(e) {
        e["divRemTo"](this["m"], null, e);
    }

    function Ahhq(e, t, r) {
        e["multiplyTo"](t, r);
        this["reduce"](r);
    }

    function BcSf(e, t) {
        e["squareTo"](t);
        this["reduce"](t);
    }

    vJwp["prototype"]["convert"] = wIES;
    vJwp["prototype"]["revert"] = xclK;
    vJwp["prototype"]["reduce"] = yiTA;
    vJwp["prototype"]["mulTo"] = Ahhq;
    vJwp["prototype"]["sqrTo"] = BcSf;

    function Conh() {
        if (this["t"] < 1) return 0;
        var e = this[0];
        if ((e & 1) == 0) return 0;
        var t = e & 3;
        t = t * (2 - (e & 15) * t) & 15;
        t = t * (2 - (e & 255) * t) & 255;
        t = t * (2 - ((e & 65535) * t & 65535)) & 65535;
        t = t * (2 - e * t % this["DV"]) % this["DV"];
        return t > 0 ? this["DV"] - t : -t;
    }

    function DkeY(e) {
        this["m"] = e;
        this["mp"] = e["invDigit"]();
        this["mpl"] = this["mp"] & 32767;
        this["mph"] = this["mp"] >> 15;
        this["um"] = (1 << e["DB"] - 15) - 1;
        this["mt2"] = 2 * e["t"];
    }

    function EQbR(e) {
        var t = VFUC();
        e["abs"]()["dlShiftTo"](this["m"]["t"], t);
        t["divRemTo"](this["m"], null, t);
        if (e["s"] < 0 && t["compareTo"](Ugbw["ZERO"]) > 0) this["m"]["subTo"](t, t);
        return t;
    }

    function FNxe(e) {
        var t = VFUC();
        e["copyTo"](t);
        this["reduce"](t);
        return t;
    }

    function GVel(e) {
        while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;

        for (var t = 0; t < this["m"]["t"]; ++t) {
            var r = e[t] & 32767;
            var n = r * this["mpl"] + ((r * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
            r = t + this["m"]["t"];
            e[r] += this["m"]["am"](0, n, e, t, 0, this["m"]["t"]);

            while (e[r] >= e["DV"]) {
                e[r] -= e["DV"];
                e[++r]++;
            }
        }

        e["clamp"]();
        e["drShiftTo"](this["m"]["t"], e);
        if (e["compareTo"](this["m"]) >= 0) e["subTo"](this["m"], e);
    }

    function HBEU(e, t) {
        e["squareTo"](t);
        this["reduce"](t);
    }

    function IioU(e, t, r) {
        e["multiplyTo"](t, r);
        this["reduce"](r);
    }

    DkeY["prototype"]["convert"] = EQbR;
    DkeY["prototype"]["revert"] = FNxe;
    DkeY["prototype"]["reduce"] = GVel;
    DkeY["prototype"]["mulTo"] = IioU;
    DkeY["prototype"]["sqrTo"] = HBEU;

    function JmNB() {
        return (this["t"] > 0 ? this[0] & 1 : this["s"]) == 0;
    }

    function KNEQ(e, t) {
        if (e > 4294967295 || e < 1) return Ugbw["ONE"];
        var r = VFUC(),
            n = VFUC(),
            i = t["convert"](this),
            o = khLH(e) - 1;
        i["copyTo"](r);

        while (--o >= 0) {
            t["sqrTo"](r, n);
            if ((e & 1 << o) > 0) t["mulTo"](n, i, r); else {
                var a = r;
                r = n;
                n = a;
            }
        }

        return t["revert"](r);
    }

    function LcOA(e, t) {
        var r;
        if (e < 256 || t["isEven"]()) r = new vJwp(t); else r = new DkeY(t);
        return this["exp"](e, r);
    }

    Ugbw["prototype"]["copyTo"] = bDRS;
    Ugbw["prototype"]["fromInt"] = cEPF;
    Ugbw["prototype"]["fromString"] = eUGb;
    Ugbw["prototype"]["clamp"] = flZc;
    Ugbw["prototype"]["dlShiftTo"] = mLoA;
    Ugbw["prototype"]["drShiftTo"] = nbFk;
    Ugbw["prototype"]["lShiftTo"] = onjU;
    Ugbw["prototype"]["rShiftTo"] = pEbE;
    Ugbw["prototype"]["subTo"] = qK_T;
    Ugbw["prototype"]["multiplyTo"] = rqmp;
    Ugbw["prototype"]["squareTo"] = ssNB;
    Ugbw["prototype"]["divRemTo"] = tMMa;
    Ugbw["prototype"]["invDigit"] = Conh;
    Ugbw["prototype"]["isEven"] = JmNB;
    Ugbw["prototype"]["exp"] = KNEQ;
    Ugbw["prototype"]["toString"] = gdaR;
    Ugbw["prototype"]["negate"] = hxJr;
    Ugbw["prototype"]["abs"] = iTKq;
    Ugbw["prototype"]["compareTo"] = jnfx;
    Ugbw["prototype"]["bitLength"] = lDcS;
    Ugbw["prototype"]["mod"] = uTIu;
    Ugbw["prototype"]["modPowInt"] = LcOA;
    Ugbw["ZERO"] = dGXo(0);
    Ugbw["ONE"] = dGXo(1);

    function MJil(e, t) {
        return new Ugbw(e, t);
    }

    function NBGb(e, t) {
        if (t < e["length"] + 11) {
            console && console["error"] && console["error"]("Message too long for RSA");
            return null;
        }

        var r = [];
        var n = e["length"] - 1;

        while (n >= 0 && t > 0) {
            var i = e["charCodeAt"](n--);

            if (i < 128) {
                r[--t] = i;
            } else if (i > 127 && i < 2048) {
                r[--t] = i & 63 | 128;
                r[--t] = i >> 6 | 192;
            } else {
                r[--t] = i & 63 | 128;
                r[--t] = i >> 6 & 63 | 128;
                r[--t] = i >> 12 | 224;
            }
        }

        r[--t] = 0;
        var o = new TMfm();
        var a = [];

        while (t > 2) {
            a[0] = 0;

            while (a[0] == 0) o["nextBytes"](a);

            r[--t] = a[0];
        }

        r[--t] = 2;
        r[--t] = 0;
        return new Ugbw(r);
    }

    function OwFc() {
        this["n"] = null;
        this["e"] = 0;
        this["d"] = null;
        this["p"] = null;
        this["q"] = null;
        this["dmp1"] = null;
        this["dmq1"] = null;
        this["coeff"] = null;
        var e = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81";
        var t = "10001";
        this["setPublic"](e, t);
    }

    function PrOR(e, t) {
        if (e != null && t != null && e["length"] > 0 && t["length"] > 0) {
            this["n"] = MJil(e, 16);
            this["e"] = parseInt(t, 16);
        } else console && console["error"] && console["error"]("Invalid RSA public key");
    }

    function QWUU(e) {
        return e["modPowInt"](this["e"], this["n"]);
    }

    function RQUJ(e) {
        var t = NBGb(e, this["n"]["bitLength"]() + 7 >> 3);
        if (t == null) return null;
        var r = this["doPublic"](t);
        if (r == null) return null;
        var n = r["toString"](16);
        if ((n["length"] & 1) == 0) return n; else return "0" + n;
    }

    OwFc["prototype"]["doPublic"] = QWUU;
    OwFc["prototype"]["setPublic"] = PrOR;
    OwFc["prototype"]["encrypt"] = RQUJ;
    return OwFc;
}();
var ee = function () {
    var r = Object["create"] || function () {
        function F() {
        }

        return function (e) {
            var t;
            F["prototype"] = e;
            t = new F();
            F["prototype"] = null;
            return t;
        };
    }();

    var e = {};
    var t = e["lib"] = {};

    var n = t["Base"] = function () {
        return {
            "extend": function (e) {
                var t = r(this);

                if (e) {
                    t["mixIn"](e);
                }

                if (!t["hasOwnProperty"]("init") || this["init"] === t["init"]) {
                    t["init"] = function () {
                        t["$super"]["init"]["apply"](this, arguments);
                    };
                }

                t["init"]["prototype"] = t;
                t["$super"] = this;
                return t;
            },
            "create": function () {
                var e = this["extend"]();
                e["init"]["apply"](e, arguments);
                return e;
            },
            "init": function () {
            },
            "mixIn": function (e) {
                for (var t in e) {
                    if (e["hasOwnProperty"](t)) {
                        this[t] = e[t];
                    }
                }

                if (e["hasOwnProperty"]("toString")) {
                    this["toString"] = e["toString"];
                }
            }
        };
    }();

    var f = t["WordArray"] = n["extend"]({
        "init": function (e, t) {
            e = this["words"] = e || [];

            if (t != undefined) {
                this["sigBytes"] = t;
            } else {
                this["sigBytes"] = e["length"] * 4;
            }
        },
        "concat": function (e) {
            var t = this["words"];
            var r = e["words"];
            var n = this["sigBytes"];
            var i = e["sigBytes"];
            this["clamp"]();

            if (n % 4) {
                for (var o = 0; o < i; o++) {
                    var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    t[n + o >>> 2] |= a << 24 - (n + o) % 4 * 8;
                }
            } else {
                for (var o = 0; o < i; o += 4) {
                    t[n + o >>> 2] = r[o >>> 2];
                }
            }

            this["sigBytes"] += i;
            return this;
        },
        "clamp": function () {
            var e = this["words"];
            var t = this["sigBytes"];
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8;
            e["length"] = Math["ceil"](t / 4);
        }
    });
    var i = e["enc"] = {};

    var _ = i["Latin1"] = {
        "parse": function (e) {
            var t = e["length"];
            var r = [];

            for (var n = 0; n < t; n++) {
                r[n >>> 2] |= (e["charCodeAt"](n) & 255) << 24 - n % 4 * 8;
            }

            return new f["init"](r, t);
        }
    };

    var o = i["Utf8"] = {
        "parse": function (e) {
            return _["parse"](unescape(encodeURIComponent(e)));
        }
    };
    var a = t["BufferedBlockAlgorithm"] = n["extend"]({
        "reset": function () {
            this["wRvS"] = new f["init"]();
            this["xOnN"] = 0;
        },
        "yvan": function (e) {
            if (typeof e == "string") {
                e = o["parse"](e);
            }

            this["wRvS"]["concat"](e);
            this["xOnN"] += e["sigBytes"];
        },
        "AEuH": function (e) {
            var t = this["wRvS"];
            var r = t["words"];
            var n = t["sigBytes"];
            var i = this["blockSize"];
            var o = i * 4;
            var a = n / o;

            if (e) {
                a = Math["ceil"](a);
            } else {
                a = Math["max"]((a | 0) - this["BpdU"], 0);
            }

            var s = a * i;
            var u = Math["min"](s * 4, n);

            if (s) {
                for (var c = 0; c < s; c += i) {
                    this["ClyZ"](r, c);
                }

                var _ = r["splice"](0, s);

                t["sigBytes"] -= u;
            }

            return new f["init"](_, u);
        },
        "BpdU": 0
    });
    var s = e["algo"] = {};
    var u = t["Cipher"] = a["extend"]({
        "cfg": n["extend"](),
        "createEncryptor": function (e, t) {
            return this["create"](this["DJVF"], e, t);
        },
        "init": function (e, t, r) {
            this["cfg"] = this["cfg"]["extend"](r);
            this["EXVM"] = e;
            this["FRXH"] = t;
            this["reset"]();
        },
        "reset": function () {
            a["reset"]["call"](this);
            this["GMqe"]();
        },
        "process": function (e) {
            this["yvan"](e);
            return this["AEuH"]();
        },
        "finalize": function (e) {
            if (e) {
                this["yvan"](e);
            }

            var t = this["HFAX"]();
            return t;
        },
        "keySize": 128 / 32,
        "ivSize": 128 / 32,
        "DJVF": 1,
        "IVtn": 2,
        "JcuQ": function () {
            return function (c) {
                return {
                    "encrypt": function (e, t, r) {
                        var t = _["parse"](t);

                        if (!r || !r["iv"]) {
                            r = r || {};
                            r["iv"] = _["parse"]("0000000000000000");
                        }

                        var n = m["encrypt"](c, e, t, r);
                        var i = n["ciphertext"]["words"];
                        var o = n["ciphertext"]["sigBytes"];
                        var a = [];

                        for (var s = 0; s < o; s++) {
                            var u = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            a["push"](u);
                        }

                        return a;
                    }
                };
            };
        }()
    });
    var c = e["mode"] = {};
    var l = t["BlockCipherMode"] = n["extend"]({
        "createEncryptor": function (e, t) {
            return this["Encryptor"]["create"](e, t);
        },
        "init": function (e, t) {
            this["Kk_Q"] = e;
            this["LdqI"] = t;
        }
    });

    var h = c["CBC"] = function () {
        var e = l["extend"]();
        e["Encryptor"] = e["extend"]({
            "processBlock": function (e, t) {
                var r = this["Kk_Q"];
                var n = r["blockSize"];
                SPNv["call"](this, e, t, n);
                r["encryptBlock"](e, t);
                this["MPTk"] = e["slice"](t, t + n);
            }
        });

        function SPNv(e, t, r) {
            var n = this["LdqI"];

            if (n) {
                var i = n;
                this["LdqI"] = undefined;
            } else {
                var i = this["MPTk"];
            }

            for (var o = 0; o < r; o++) {
                e[t + o] ^= i[o];
            }
        }

        return e;
    }();

    var v = e["pad"] = {};
    var d = v["Pkcs7"] = {
        "pad": function (e, t) {
            var r = t * 4;
            var n = r - e["sigBytes"] % r;
            var i = n << 24 | n << 16 | n << 8 | n;
            var o = [];

            for (var a = 0; a < n; a += 4) {
                o["push"](i);
            }

            var s = f["create"](o, n);
            e["concat"](s);
        }
    };
    var p = t["BlockCipher"] = u["extend"]({
        "cfg": u["cfg"]["extend"]({
            "mode": h,
            "padding": d
        }),
        "reset": function () {
            u["reset"]["call"](this);
            var e = this["cfg"];
            var t = e["iv"];
            var r = e["mode"];

            if (this["EXVM"] == this["DJVF"]) {
                var n = r["createEncryptor"];
            }

            if (this["NGty"] && this["NGty"]["OJpw"] == n) {
                this["NGty"]["init"](this, t && t["words"]);
            } else {
                this["NGty"] = n["call"](r, this, t && t["words"]);
                this["NGty"]["OJpw"] = n;
            }
        },
        "ClyZ": function (e, t) {
            this["NGty"]["processBlock"](e, t);
        },
        "HFAX": function () {
            var e = this["cfg"]["padding"];

            if (this["EXVM"] == this["DJVF"]) {
                e["pad"](this["wRvS"], this["blockSize"]);
                var t = this["AEuH"](!!"flush");
            }

            return t;
        },
        "blockSize": 128 / 32
    });
    var g = t["CipherParams"] = n["extend"]({
        "init": function (e) {
            this["mixIn"](e);
        }
    });
    var m = t["SerializableCipher"] = n["extend"]({
        "cfg": n["extend"](),
        "encrypt": function (e, t, r, n) {
            n = this["cfg"]["extend"](n);
            var i = e["createEncryptor"](r, n);
            var o = i["finalize"](t);
            var a = i["cfg"];
            return g["create"]({
                "ciphertext": o,
                "key": r,
                "iv": a["iv"],
                "algorithm": e,
                "mode": a["mode"],
                "padding": a["padding"],
                "blockSize": e["blockSize"],
                "formatter": n["format"]
            });
        }
    });
    var b = [];
    var y = [];
    var w = [];
    var x = [];
    var E = [];
    var S = [];
    var C = [];
    var T = [];
    var A = [];
    var k = [];

    (function () {
        var e = [];

        for (var t = 0; t < 256; t++) {
            if (t < 128) {
                e[t] = t << 1;
            } else {
                e[t] = t << 1 ^ 283;
            }
        }

        var r = 0;
        var n = 0;

        for (var t = 0; t < 256; t++) {
            var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
            i = i >>> 8 ^ i & 255 ^ 99;
            b[r] = i;
            y[i] = r;
            var o = e[r];
            var a = e[o];
            var s = e[a];
            var u = e[i] * 257 ^ i * 16843008;
            w[r] = u << 24 | u >>> 8;
            x[r] = u << 16 | u >>> 16;
            E[r] = u << 8 | u >>> 24;
            S[r] = u;
            var u = s * 16843009 ^ a * 65537 ^ o * 257 ^ r * 16843008;
            C[i] = u << 24 | u >>> 8;
            T[i] = u << 16 | u >>> 16;
            A[i] = u << 8 | u >>> 24;
            k[i] = u;

            if (!r) {
                r = n = 1;
            } else {
                r = o ^ e[e[e[s ^ o]]];
                n ^= e[e[n]];
            }
        }
    })();

    var I = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var D = s["AES"] = p["extend"]({
        "GMqe": function () {
            if (this["PQlC"] && this["Qelw"] === this["FRXH"]) {
                return;
            }

            var e = this["Qelw"] = this["FRXH"];
            var t = e["words"];
            var r = e["sigBytes"] / 4;
            var n = this["PQlC"] = r + 6;
            var i = (n + 1) * 4;
            var o = this["RqaM"] = [];

            for (var a = 0; a < i; a++) {
                if (a < r) {
                    o[a] = t[a];
                } else {
                    var s = o[a - 1];

                    if (!(a % r)) {
                        s = s << 8 | s >>> 24;
                        s = b[s >>> 24] << 24 | b[s >>> 16 & 255] << 16 | b[s >>> 8 & 255] << 8 | b[s & 255];
                        s ^= I[a / r | 0] << 24;
                    } else if (r > 6 && a % r == 4) {
                        s = b[s >>> 24] << 24 | b[s >>> 16 & 255] << 16 | b[s >>> 8 & 255] << 8 | b[s & 255];
                    }

                    o[a] = o[a - r] ^ s;
                }
            }

            var u = this["SEHY"] = [];

            for (var c = 0; c < i; c++) {
                var a = i - c;

                if (c % 4) {
                    var s = o[a];
                } else {
                    var s = o[a - 4];
                }

                if (c < 4 || a <= 4) {
                    u[c] = s;
                } else {
                    u[c] = C[b[s >>> 24]] ^ T[b[s >>> 16 & 255]] ^ A[b[s >>> 8 & 255]] ^ k[b[s & 255]];
                }
            }
        },
        "encryptBlock": function (e, t) {
            this["TmVM"](e, t, this["RqaM"], w, x, E, S, b);
        },
        "TmVM": function (e, t, r, n, i, o, a, s) {
            var u = this["PQlC"];
            var c = e[t] ^ r[0];

            var _ = e[t + 1] ^ r[1];

            var f = e[t + 2] ^ r[2];
            var l = e[t + 3] ^ r[3];
            var h = 4;

            for (var v = 1; v < u; v++) {
                var d = n[c >>> 24] ^ i[_ >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[l & 255] ^ r[h++];
                var p = n[_ >>> 24] ^ i[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[c & 255] ^ r[h++];
                var g = n[f >>> 24] ^ i[l >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[_ & 255] ^ r[h++];
                var m = n[l >>> 24] ^ i[c >>> 16 & 255] ^ o[_ >>> 8 & 255] ^ a[f & 255] ^ r[h++];
                c = d;
                _ = p;
                f = g;
                l = m;
            }

            var d = (s[c >>> 24] << 24 | s[_ >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[l & 255]) ^ r[h++];
            var p = (s[_ >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[c & 255]) ^ r[h++];
            var g = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[_ & 255]) ^ r[h++];
            var m = (s[l >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[_ >>> 8 & 255] << 8 | s[f & 255]) ^ r[h++];
            e[t] = d;
            e[t + 1] = p;
            e[t + 2] = g;
            e[t + 3] = m;
        },
        "keySize": 256 / 32
    });
    e["AES"] = p["JcuQ"](D);
    return e["AES"];
}();
var ve = function () {
    "use strict";

    var e = {};
    var t = /^[\],:{}\s]*$/;
    var r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var n = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var i = /(?:^|:|,)(?:\s*\[)+/g;
    var o = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var a = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(e) {
        return e < 10 ? "0" + e : e;
    }

    function fTOn() {
        return this["valueOf"]();
    }

    if (typeof Date["prototype"]["toJSON"] !== "function") {
        Date["prototype"]["toJSON"] = function () {
            return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + f(this["getUTCMonth"]() + 1) + "-" + f(this["getUTCDate"]()) + "T" + f(this["getUTCHours"]()) + ":" + f(this["getUTCMinutes"]()) + ":" + f(this["getUTCSeconds"]()) + "Z" : null;
        };

        Boolean["prototype"]["toJSON"] = fTOn;
        Number["prototype"]["toJSON"] = fTOn;
        String["prototype"]["toJSON"] = fTOn;
    }

    var c;

    var _;

    var s;
    var l;

    function gyrs(e) {
        o["lastIndex"] = 0;
        return o["test"](e) ? "\"" + e["replace"](o, function (e) {
            var t = s[e];
            return typeof t === "string" ? t : "\\u" + ("0000" + e["charCodeAt"](0)["toString"](16))["slice"](-4);
        }) + "\"" : "\"" + e + "\"";
    }

    function hQxF(e, t) {
        var r;
        var n;
        var i;
        var o;
        var a = c;
        var s;
        var u = t[e];

        if (u && typeof u === "object" && typeof u["toJSON"] === "function") {
            u = u["toJSON"](e);
        }

        if (typeof l === "function") {
            u = l["call"](t, e, u);
        }

        switch (typeof u) {
            case "string":
                return gyrs(u);

            case "number":
                return isFinite(u) ? String(u) : "null";

            case "boolean":
            case "null":
                return String(u);

            case "object":
                if (!u) {
                    return "null";
                }

                c += _;
                s = [];

                if (Object["prototype"]["toString"]["apply"](u) === "[object Array]") {
                    o = u["length"];

                    for (r = 0; r < o; r += 1) {
                        s[r] = hQxF(r, u) || "null";
                    }

                    i = s["length"] === 0 ? "[]" : c ? "[\n" + c + s["join"](",\n" + c) + "\n" + a + "]" : "[" + s["join"](",") + "]";
                    c = a;
                    return i;
                }

                if (l && typeof l === "object") {
                    o = l["length"];

                    for (r = 0; r < o; r += 1) {
                        if (typeof l[r] === "string") {
                            n = l[r];
                            i = hQxF(n, u);

                            if (i) {
                                s["push"](gyrs(n) + (c ? ": " : ":") + i);
                            }
                        }
                    }
                } else {
                    for (n in u) {
                        if (Object["prototype"]["hasOwnProperty"]["call"](u, n)) {
                            i = hQxF(n, u);

                            if (i) {
                                s["push"](gyrs(n) + (c ? ": " : ":") + i);
                            }
                        }
                    }
                }

                i = s["length"] === 0 ? "{}" : c ? "{\n" + c + s["join"](",\n" + c) + "\n" + a + "}" : "{" + s["join"](",") + "}";
                c = a;
                return i;
        }
    }

    s = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\"": "\\\"",
        "\\": "\\\\"
    };

    e["stringify"] = function (e, t, r) {
        var n;
        c = "";
        _ = "";

        if (typeof r === "number") {
            for (n = 0; n < r; n += 1) {
                _ += " ";
            }
        } else if (typeof r === "string") {
            _ = r;
        }

        l = t;

        if (t && typeof t !== "function" && (typeof t !== "object" || typeof t["length"] !== "number")) {
            throw new Error("JSON.stringify");
        }

        return hQxF("", {
            "": e
        });
    };

    return e;
}();
var l = {
    "EGzJ": {
        "FhVs": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
        "GWAZ": ".",
        "HTRX": 7274496,
        "IWVl": 9483264,
        "Jlmu": 19220,
        "KNoL": 235,
        "LdsG": 24
    },
    "FhVs": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
    "GWAZ": ".",
    "HTRX": 7274496,
    "IWVl": 9483264,
    "Jlmu": 19220,
    "KNoL": 235,
    "LdsG": 24,
    "MgUk": function (e) {
        var t = [];

        for (var r = 0, n = e["length"]; r < n; r += 1) {
            t["push"](e["charCodeAt"](r));
        }

        return t;
    },
    "Nbiw": function (e) {
        var t = "";

        for (var r = 0, n = e["length"]; r < n; r += 1) {
            t += String["fromCharCode"](e[r]);
        }

        return t;
    },
    "OEoX": function (e) {
        var t = this["FhVs"];

        if (e < 0 || e >= t["length"]) {
            return ".";
        }

        return t["charAt"](e);
    },
    "Pong": function (e) {
        var t = this["FhVs"];
        return t["indexOf"](e);
    },
    "QnOz": function (e, t) {
        return e >> t & 1;
    },
    "RlNz": function (e, i) {
        var o = this;

        if (!i) {
            i = o;
        }

        function t(e, t) {
            var r = 0;

            for (var n = i["LdsG"] - 1; n >= 0; n -= 1) {
                if (o["QnOz"](t, n) === 1) {
                    r = (r << 1) + o["QnOz"](e, n);
                }
            }

            return r;
        }

        var r = "",
            n = "";
        var a = e["length"];

        for (var s = 0; s < a; s += 3) {
            var u;

            if (s + 2 < a) {
                u = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2];
                r += o["OEoX"](t(u, i["HTRX"])) + o["OEoX"](t(u, i["IWVl"])) + o["OEoX"](t(u, i["Jlmu"])) + o["OEoX"](t(u, i["KNoL"]));
            } else {
                var c = a % 3;

                if (c === 2) {
                    u = (e[s] << 16) + (e[s + 1] << 8);
                    r += o["OEoX"](t(u, i["HTRX"])) + o["OEoX"](t(u, i["IWVl"])) + o["OEoX"](t(u, i["Jlmu"]));
                    n = i["GWAZ"];
                } else if (c === 1) {
                    u = e[s] << 16;
                    r += o["OEoX"](t(u, i["HTRX"])) + o["OEoX"](t(u, i["IWVl"]));
                    n = i["GWAZ"] + i["GWAZ"];
                }
            }
        }

        return {
            "res": r,
            "end": n
        };
    },
    "SlaL": function (e) {
        var t = this;
        var r = t["RlNz"](t["MgUk"](e));
        return r["res"] + r["end"];
    },
    "TajP": function (e) {
        var t = this;
        var r = t["RlNz"](e);
        return r["res"] + r["end"];
    },
    "Uumz": function (e, o) {
        var a = this;

        if (!o) {
            o = a;
        }

        function t(e, t) {
            if (e < 0) {
                return 0;
            }

            var r = 5;
            var n = 0;

            for (var i = o["LdsG"] - 1; i >= 0; i -= 1) {
                if (a["QnOz"](t, i) === 1) {
                    n += a["QnOz"](e, r) << i;
                    r -= 1;
                }
            }

            return n;
        }

        var r = e["length"];
        var n = "";

        for (var i = 0; i < r; i += 4) {
            var s = t(a["Pong"](e["charAt"](i)), o["HTRX"]) + t(a["Pong"](e["charAt"](i + 1)), o["IWVl"]) + t(a["Pong"](e["charAt"](i + 2)), o["Jlmu"]) + t(a["Pong"](e["charAt"](i + 3)), o["KNoL"]);
            var u = s >> 16 & 255;
            n += String["fromCharCode"](u);

            if (e["charAt"](i + 2) !== o["GWAZ"]) {
                var c = s >> 8 & 255;
                n += String["fromCharCode"](c);

                if (e["charAt"](i + 3) !== o["GWAZ"]) {
                    var _ = s & 255;

                    n += String["fromCharCode"](_);
                }
            }
        }

        return n;
    },
    "Vgn_": function (e) {
        var t = this;
        var r = 4 - e["length"] % 4;

        if (r < 4) {
            for (var n = 0; n < r; n += 1) {
                e += t["GWAZ"];
            }
        }

        return t["Uumz"](e);
    },
    "WGbt": function (e) {
        var t = this;
        return t["Vgn_"](e);
    }
};

function aqBm(e) {
    this["uiEi"] = e || [];
}

aqBm["prototype"] = {
    "sEnR": function (e) {
        return this["uiEi"][e];
    },
    "vuCx": function () {
        return this["uiEi"]["length"];
    },
    "wjgW": function (e, t) {
        var r = this;
        var n;

        if (ne(t)) {
            n = r["uiEi"]["slice"](e, t);
        } else {
            n = r["uiEi"]["slice"](e);
        }

        return new aqBm(n);
    },
    "xeeE": function (e) {
        var t = this;
        t["uiEi"]["push"](e);
        return t;
    },
    "yyeH": function (e, t) {
        return this["uiEi"]["splice"](e, t || 1);
    },
    "ACba": function (e) {
        return this["uiEi"]["join"](e);
    },
    "BtoF": function (e) {
        var t = this["uiEi"]["concat"](e);
        return new aqBm(t);
    },
    "muPg": function (e) {
        var t = this;
        var r = t["uiEi"];

        if (r["map"]) {
            return new aqBm(r["map"](e));
        }

        var n = [];

        for (var i = 0, o = r["length"]; i < o; i = i + 1) {
            n[i] = e(r[i], i, t);
        }

        return new aqBm(n);
    },
    "CLAV": function (e) {
        var t = this;
        var r = t["uiEi"];

        if (r["filter"]) {
            return new aqBm(r["filter"](e));
        }

        var n = [];

        for (var i = 0, o = r["length"]; i < o; i = i + 1) {
            if (e(r[i], i, t)) {
                n["push"](r[i]);
            }
        }

        return new aqBm(n);
    },
    "Dkju": function (e) {
        var t = this;
        var r = t["uiEi"];

        if (!r["indexOf"]) {
            for (var n = 0, i = r["length"]; n < i; n = n + 1) {
                if (r[n] === e) {
                    return n;
                }
            }

            return -1;
        }

        return r["indexOf"](e);
    },
    "Ebvw": function (e) {
        var t = this;
        var r = t["uiEi"];

        if (!r["forEach"]) {
            var n = arguments[1];

            for (var i = 0; i < r["length"]; i++) {
                if (i in r) {
                    e["call"](n, r[i], i, t);
                }
            }
        }

        return r["forEach"](e);
    }
};

aqBm["tsAL"] = function (e) {
    if (Array["isArray"]) {
        return Array["isArray"](e);
    }

    return Object["prototype"]["toString"]["call"](e) === "[object Array]";
};

function get_w(arr, key_c, key_s, gt, challenge, encryptKey, lastPoint, passtime) {
    var nDVz = function (e, t, r) {
        if (!t || !r) {
            return e;
        }

        var n = 0;
        var i = 2;
        var o;
        var a = e;
        var s = t[0],
            u = t[2],
            c = t[4];

        while (o = r["substr"](n, i)) {
            n += i;

            var _ = parseInt(o, 16);

            var f = String["fromCharCode"](_);
            var l = (s * _ * _ + u * _ + c) % e["length"];
            a = a["substr"](0, l) + f + a["substr"](l);
        }

        return a;
    }
    var SlaL = function () {
        function e(e) {
            var t = [];
            var r = 0;
            var n, i, o;

            for (var a = 0, s = e["length"] - 1; a < s; a++) {
                n = Math["round"](e[a + 1][0] - e[a][0]);
                i = Math["round"](e[a + 1][1] - e[a][1]);
                o = Math["round"](e[a + 1][2] - e[a][2]);

                if (n == 0 && i == 0 && o == 0) {
                    continue;
                }

                if (n == 0 && i == 0) {
                    r += o;
                } else {
                    t["push"]([n, i, o + r]);
                    r = 0;
                }
            }

            if (r !== 0) {
                t["push"]([n, i, r]);
            }

            return t;
        }

        function r(e) {
            var t = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr";
            var r = t["length"];
            var n = "";
            var i = Math["abs"](e);
            var o = parseInt(i / r);

            if (o >= r) {
                o = r - 1;
            }

            if (o) {
                n = t["charAt"](o);
            }

            i = i % r;
            var a = "";

            if (e < 0) {
                a += "!";
            }

            if (n) {
                a += "$";
            }

            return a + n + t["charAt"](i);
        }

        function n(e) {
            var t = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]];
            var r = "stuvwxyz~";

            for (var n = 0, i = t["length"]; n < i; n++) {
                if (e[0] == t[n][0] && e[1] == t[n][1]) {
                    return r[n];
                }
            }

            return 0;
        }

        var t = e(arr);
        var i = [],
            o = [],
            a = [];
        new aqBm(t)["muPg"](function (e) {
            var t = n(e);

            if (!t) {
                i["push"](r(e[0]));
                o["push"](r(e[1]));
            } else {
                o["push"](t);
            }

            a["push"](r(e[2]));
        });
        return i["join"]("") + "!!" + o["join"]("") + "!!" + a["join"]("");
    }
    var t = nDVz(SlaL(), key_c, key_s);
    var n = this;
    var o = {
        "lang": "zh-cn",
        "userresponse": U(lastPoint, challenge), // e 为落点距离
        "passtime": passtime,
        "imgload": 70,
        "aa": t,// 滑动轨迹的加密字符
        "ep": {
            "v": "7.8.1",
            "te": false,
            "me": true,
            "tm": {
                "a": 1622093669906,
                "b": 1622093670176,
                "c": 1622093670176,
                "d": 0,
                "e": 0,
                "f": 1622093669908,
                "g": 1622093669922,
                "h": 1622093669936,
                "i": 1622093669936,
                "j": 1622093669954,
                "k": 1622093669944,
                "l": 1622093669954,
                "m": 1622093670155,
                "n": 1622093670158,
                "o": 1622093670180,
                "p": 1622093670385,
                "q": 1622093670385,
                "r": 1622093670387,
                "s": 1622093670688,
                "t": 1622093670689,
                "u": 1622093670689
            },
            "td": -1
        } //基础信息 window["performance"] && window["performance"]["timing"] && e["vZxe"]() || -1
    };

    o["rp"] = Q(gt + challenge["slice"](0, 32) + o["passtime"]);

    var s = new K()["encrypt"](encryptKey);
    var u = ee["encrypt"](ve["stringify"](o), encryptKey);
    var c = l["TajP"](u);
    return c + s
}


var arr = [
    [
        -39,
        -24,
        0
    ],
    [
        0,
        0,
        0
    ],
    [
        2,
        0,
        46
    ],
    [
        5,
        0,
        54
    ],
    [
        10,
        0,
        62
    ],
    [
        14,
        0,
        70
    ],
    [
        20,
        0,
        78
    ],
    [
        26,
        0,
        86
    ],
    [
        32,
        0,
        94
    ],
    [
        39,
        2,
        102
    ],
    [
        48,
        2,
        110
    ],
    [
        56,
        3,
        118
    ],
    [
        66,
        4,
        126
    ],
    [
        73,
        5,
        134
    ],
    [
        78,
        5,
        142
    ],
    [
        84,
        7,
        150
    ],
    [
        88,
        8,
        158
    ],
    [
        92,
        8,
        166
    ],
    [
        97,
        9,
        174
    ],
    [
        101,
        9,
        182
    ],
    [
        105,
        9,
        190
    ],
    [
        107,
        9,
        198
    ],
    [
        109,
        10,
        206
    ],
    [
        110,
        10,
        230
    ],
    [
        111,
        10,
        254
    ],
    [
        112,
        10,
        262
    ],
    [
        116,
        10,
        270
    ],
    [
        119,
        10,
        278
    ],
    [
        123,
        10,
        286
    ],
    [
        126,
        10,
        294
    ],
    [
        129,
        10,
        302
    ],
    [
        130,
        10,
        318
    ],
    [
        131,
        10,
        414
    ],
    [
        133,
        10,
        422
    ],
    [
        134,
        10,
        430
    ],
    [
        137,
        11,
        438
    ],
    [
        138,
        12,
        454
    ],
    [
        140,
        12,
        542
    ],
    [
        142,
        12,
        550
    ],
    [
        144,
        12,
        558
    ],
    [
        146,
        12,
        566
    ],
    [
        147,
        13,
        574
    ],
    [
        148,
        13,
        590
    ],
    [
        149,
        13,
        702
    ],
    [
        150,
        13,
        806
    ],
    [
        150,
        14,
        814
    ],
    [
        151,
        14,
        830
    ],
    [
        152,
        14,
        878
    ],
    [
        153,
        14,
        1374
    ],
    [
        154,
        14,
        1382
    ],
    [
        155,
        14,
        1390
    ],
    [
        156,
        14,
        1446
    ],
    [
        156,
        14,
        19955
    ]
]
var key_c = [12, 58, 98, 36, 43, 95, 62, 15, 12]
var key_s = "61564962"
var e = 206
var passtime = 918
var gt = "afb55317868a27591e984c714e11f512"
var challenge = "6cb09fc64a93140e5462f4c2e5e726179h"
var encryptKey = ue()

console.log(get_w(arr, key_c, key_s, gt, challenge, encryptKey, e, passtime))
