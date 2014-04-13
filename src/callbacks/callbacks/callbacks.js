/**
 * Created by Scott on 3/8/14.
 */
//======================== Begin Library Code ====================

function ComplexString () {
    'use strict';

    var LOAD_MS = 1000,
        ERR_MS = 2000,
        self = this,
        str = null;

    this.loadedStr = null;
    this.onload = null;
    this.onerror = null;

    Object.defineProperty(this, 'str', {
        get: function () { return str; },
        set: function (value) {
            str = value;
            self.loadedStr = null;
            var loadID = setTimeout(function () {
                    self.loadedStr = 'Loaded: ' + self.str;
                    clearTimeout(errID);
                    self.onload.call(self);
                }, LOAD_MS),
                errID = setTimeout(function () {
                    self.loadedStr = null;
                    clearTimeout(loadID);
                    self.onerr.call(self);
                }, ERR_MS);
        }
    });
}

//======================== End Library Code ====================

function loadStrings (strings) {
    'use strict';

    var TIMEOUT_MS = 3000,
        complexStrings = [],
        fired = false,
        count = 0;

    function doSomething (msg) {
        if (!fired) {
            fired = true;
            console.log(msg);
            if (msg === 'success') {
                complexStrings.forEach(function (c) {
                    console.log(c.loadedStr);
                });
            }
        }
    }

    function onErr () {
        console.log('in onErr');
        doSomething('error');
    }

    function onLoad () {

        console.log(count);

        if (--count === 0) {
            doSomething('success');
        }
    }

    function onTimeout () {
        doSomething('timeout');
    }

    count = strings.length;

    strings.forEach(function (c, i) {
        complexStrings.push(new ComplexString());
        complexStrings[i].onload = onLoad;
        complexStrings[i].onerr = onErr;
        complexStrings[i].str = c;
    });

    setTimeout(onTimeout, TIMEOUT_MS);
}

loadStrings(['A', 'B', 'C', 'D']);