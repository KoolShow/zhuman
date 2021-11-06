lhhd = ['😅', '😡', '😄', '🤗', '🧐', '😋', '😇', '😨', '🤔', '🤬', '👏', '🐴', '🤤', '💧', '🌹', '😁'];
function cartesian(arr) {
	if (arr.length < 2) return arr[0] || [];
	return [].reduce.call(arr,
	function(col, set) {
		let res = [];
		col.forEach(c =>{
			set.forEach(s =>{
				let t = [].concat(Array.isArray(c) ? c: [c]);
				t.push(s);
				res.push(t.join(''));
			})
		});
		return res;
	});
};
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1] || true;}
       }
       return(false);
};
p = cartesian([lhhd, lhhd]);
function Jia(str, level){
	sz = [];
	pako.deflate(str, {
		level: level
	}).forEach(function(item, index, arr) {
		sz.push(p[item]);
	});
	return '瀚曰：' + sz.join('')
};

function Jie (str){
	if (str.indexOf("瀚曰：") != 0) {
		throw "不是瀚语";
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
    "jia" == d ? c = "198px": "jie" == d && (c = "324px");
    a.style.height = c;
    d = a.scrollHeight;
    0 == isTouchDevice() && (d = a.scrollHeight - 20);
    0 > d && (d = 0);
    a.style.height = d + "px"
}
function isTouchDevice() {
    return "ontouchstart" in document.documentElement
};
var level=9;
function Encode() {
    var jia = document.getElementById("jia"),
    jie = document.getElementById("jie");
    jia.value = Jie(jie.value), cleanTextAreaHeight(jia)

};
function Decode() {
    var jia = document.getElementById("jia"),
    jie = document.getElementById("jie");
    jie.value = Jia(jia.value,level), cleanTextAreaHeight(jie)

};
if(getQueryVariable("zrjj")){document.write("<script type="text/javascript" src="./notzhuman.js"></script>")}
