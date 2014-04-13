// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

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

function download(urls, callback)
{
    var datas = uniqueFill(urls.length);

    urls.forEach(function(url){
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
    'fileA.txt',
    'fileB.txt'
],
    function(datas){
        console.log(datas);
    }
);