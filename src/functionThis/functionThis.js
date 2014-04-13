var obj = {name: 'Joe',
           sex: 'Male',
           divElem: document.getElementById('idOutput'),
           click: function () {
               output.call(obj, this.divElem);
               this.divElem.innerHTML += '<br>Sex: ' + this.sex;
           }
          };

function output (divElem) {
    divElem.innerHTML += "Name: " + this.name;
}

window.addEventListener('DOMContentLoaded',
    function () {
        var name = 'Jane';
        document.getElementById('idButton').addEventListener('click', function () {
            document.getElementById('idOutput').innerHTML = 'Name: ' + name + "<br>";
            obj.click();
        }, false);
    }, false);