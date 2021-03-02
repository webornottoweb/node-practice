function cl() {
    console.log(...arguments);
}

let var1 = 123_123;

cl(var1);
cl('1' == 1);
cl('1' === 1);
cl(undefined == null);
cl(undefined);
cl(null);
cl(typeof undefined);
cl(typeof null);
cl(typeof NaN);
cl(Number('23asd'));
cl(typeof 1000);

cl(true + false);
cl(12 / "6");
cl("number" + 15 + 3);
cl([1] > null);
cl("foo" + + "bar");
cl('true' == true);
cl(false == 'false');
cl(null == '');
cl(!!"false" == !!"true");
cl(['x'] == 'x');
cl([] + null + 1);
cl(0 || "0" && {});
cl([1,2,3] == [1,2,3]);
cl({}+[]+{}+[1]);
cl(!+[]+[]+![]);
cl(new Date(0) - 0);
cl(new Date(0) + 0);

const test = {};
cl(test.__proto__);

cl(String(123), 123 + '');
cl(String(-12.3), -12.3 + '');
cl(String(null), null + '');
cl(String(undefined), undefined + '');
cl(String(true), true + '');
cl(String(false), false + '');
cl(String(Symbol('test'))); // implicit Symbol to string conversion is not possible

cl(Boolean(2), !!2, 2 || 'hello');
cl('hello' && 123);
cl('hello' || 123);
cl(Boolean(''));
cl(Boolean(0));
cl(Boolean(-0));
cl(Boolean(NaN));
cl(Boolean(null));
cl(Boolean(undefined));
cl(Boolean(false));
cl(Boolean([]));

cl(Number('123'));
cl(+'123');
cl(123 != '456');
cl(4 > '5');
cl(5 / null);
cl(true | 0);
cl(Number(null));
cl(Number(undefined));
cl(Number(true));
cl(Number(false));
cl(Number("  12  "));
cl(Number("-12.34\n"));
cl(Number(''));
cl(Number("\n"));
cl(Number(" 12s "));
cl(Number(123));

// Symbol couldn't be represented as number - nor implicit nor explicit

cl(null == 0);
cl(null == null);
cl(null == undefined);
cl(undefined == undefined);
cl(undefined == null);
cl(NaN == NaN);

let d = new Date();
let str = d.toString();
let num = d.valueOf();
cl(d == str)
cl(d == num)
cl(d + d);
cl(d - d);

var obj = {
    prop: 101,
    toString() {
        return 'Prop: ' + this.prop;
    },
    valueOf() {
        return this.prop;
    }
};

cl(String(obj));
cl(obj + '');
cl(+obj);
cl(obj > 100);

cl([]+[]);
cl([]["filter"]);
cl(+!+[]);
cl(!+[]+!+[]);
cl();
cl();
cl();
cl();