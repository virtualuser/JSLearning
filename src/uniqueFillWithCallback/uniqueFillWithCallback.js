// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

var uniqueFillWithCallback = function (maxLength, callback) {
    'use strict';

    var list = {};

    return function (key, value, noCall) {
        if (key) {
            if (key in list) {
                throw new Error('uniqueFill: duplicate key');
            } else if (maxLength !== 0) {
                list[key] = value;
                maxLength--;
            }
        }
        if (!maxLength && !noCall) {
            callback(list);
        }
        return list;
    };
};

function download(urls, callback)
{
    var fill = uniqueFillWithCallback(urls.length, callback);

    urls.forEach(function(url){
        $.ajax({
            type: 'get',
            url: url,
            success: function(data) {
                fill(url, data);
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

var Class1 = function () {}, Class2 = function () {}, proto = {}; Class1.prototype = Class2.prototype = proto; Class1.prototype.constructor = Class1; Class2.prototype.constructor = Class2; [((new Class1).prototype.constructor === Class1), ((new Class2).prototype.constructor === Class2)];