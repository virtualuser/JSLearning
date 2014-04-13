// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

/*
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var input1 = document.getElementById('input1');
    var output1 = document.getElementById('output1');
    var input2 = document.getElementById('input2');
    var output2 = document.getElementById('output2');
    var button2 = document.getElementById('button2');

    input1.addEventListener('input', function () {
        var i,
            val = input1.value,
            tempVal,
            len;

        if (val !== val.replace(/[^0-9,]/g, '')) {
            console.log('Invalid characters in input');
        }

        val = val.replace(/[^0-9]/g, '');
        len = val.length;

        for (i = len - 1, tempVal = ''; i >= 0; i--) {
            tempVal = (i === 0 || (len - i) % 3 ? '' : ',') + val[i] + tempVal;
        }

        input1.value = input1.value.split('').
            filter(function(v) { return '0123456789'.indexOf(v) >= 0 ? true : false }).
            join(',').split('').
            filter(function(x, i){return x==','?i%3==1:true }).
            join('');

        input1.value = Array.prototype.reduceRight.
            call('??' + input1.value.replace(/[^0-9]/g, ''), function(p,c,i,a){
                'use strict';

                if (a.length === 2) {
                    return '';
                } else if (c === '?') {
                    return p;
                }

                var cc = a.slice(i + 1).replace(/[^,]/g, '').length;

                return c + ((a.length - (i + cc + 1)) % 3 ? '' : ',') + p;
            });

        var sign = input1.value[0] === '-' ? '-' : '',
            val = input1.value.replace(/[^0-9.]/g, ''),
            dec = val.indexOf('.'),
            decStr = dec >= 0 ? '.' + val.slice(dec).replace(/[^0-9]/g, '') : '',
            result = {
                integer: ''
            };

        val = dec >= 0 ? val.slice(0, dec) : val;

        var format = function(v, i, a) {
                this.integer += v + (!(a.length - (i + 1)) || ((a.length - (i + 1)) % 3) ? '' : ',');
            };

        [].forEach.call(val, format, result);

        input1.value = sign + result.integer + decStr;
        output1.innerHTML = input1.value;
    }, false);


        input2.addEventListener('change', function () {
        output2.innerHTML = input2.value;
    }, false);

    button2.addEventListener('click', function () {
        output2.innerHTML = input2.value;
    }, false);
}, false);
*/

var uniqueFill = function (maxLength) {
    'use strict';

    var list = {};

    return function (key, value) {
        if (key) {
            if (key in list) {
                throw new Error('uniqueFill: duplicate key');
            } else if (maxLength !== 0) {
                list[key] = value;
                maxLength--;
            }
        }
        return maxLength === 0 ? list : null;
    };
};

var uniqueUrls = uniqueFill(3);

console.dir([uniqueUrls('url1', {x:1}), uniqueUrls('url2', {x:2}), uniqueUrls('url3', {x:3})]);

function download(urls, callback)
{
    var datas = uniqueFill(urls.length);

    urls.forEach(function(url){
        /*        if (datas(url, null)) {
         callback(datas());
         }
         */
        $.ajax({
            type: 'get',
            url: url,
            success: function(data) {
                if (datas(url, data)) {
                    callback(datas());
                }
            }
        });
    });
}

download([
    'http://domain.tld/fileA.txt',
    'http://domain.tld/fileB.txt'
],
    function(datas){
        console.log(datas);
    }
);