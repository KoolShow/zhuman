const lhhd = ['😅', '😡', '😄', '🤗', '🧐', '😋', '😇', '😨', '🤔', '🤬', '👏', '🐴', '🤤', '💧', '🌹', '😁'];

let config = { level: 9 };

function setLevel(level) {
    config.level = level;
};

function cartesian(arr) {
    if (arr.length < 2) return arr[0] || [];
    return [].reduce.call(arr,
        function(col, set) {
            let res = [];
            col.forEach(c => {
                set.forEach(s => {
                    let t = [].concat(Array.isArray(c) ? c : [c]);
                    t.push(s);
                    res.push(t.join(''));
                })
            });
            return res;
        });
};

const p = cartesian([lhhd, lhhd]);

function Jia(str, level) {
    sz = [];
    pako.deflate(str, {
        level: level
    }).forEach(function(item, index, arr) {
        sz.push(p[item]);
    });
    return '瀚曰：' + sz.join('')
};

function Jie(str) {
    if (str.indexOf("瀚曰：") != 0) {
        return "不是注满捏😰";
    };
    var result = [];
    for (var i = 0; i < str.slice(3).length; i += 4) {
        result.push(p.indexOf(str.slice(i + 3, i + 7)));
    };
    return pako.inflate(result, {
        to: 'string'
    });
};

function cleanTextAreaHeight(a) {
    var d = a.getAttribute("id"),
        c = "auto";
    "jia" == d ? c = "198px" : "jie" == d && (c = "324px");
    a.style.height = c;
    d = a.scrollHeight;
    0 == isTouchDevice() && (d = a.scrollHeight - 20);
    0 > d && (d = 0);
    a.style.height = d + "px"
}

function isTouchDevice() {
    return "ontouchstart" in document.documentElement
};

function Decode() {
    var jia = document.getElementById("jia"),
        jie = document.getElementById("jie");
    jia.value = Jie(jie.value), cleanTextAreaHeight(jia)

};

function Encode() {
    var jia = document.getElementById("jia"),
        jie = document.getElementById("jie");
    jie.value = Jia(jia.value, config.level), cleanTextAreaHeight(jie)

};