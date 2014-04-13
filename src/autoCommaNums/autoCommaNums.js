window.addEventListener('load', function () {
    var input = document.getElementById('input');
    var output = document.getElementById('output');

    input.addEventListener('input', function () {
        var sign = this.value[0] === '-' ? '-' : '',
            val = this.value.replace(/[^0-9.]/g, ''),
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

        this.value = sign + result.integer + decStr;
        output.innerHTML = this.value;
    }, false);
}, false);