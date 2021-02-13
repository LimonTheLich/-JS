var term = {
Belarus: 21,
Russia: 15,
Ukraine: 24,
Turkish: 30
}
var max = 0
var p = 0;
var s = 0;
for (key in term) {
	p = p + term[key]
	s = s + 1
	if (term[key] > max){
			max = term[key];
	}
}
alert("Средняя температура: " + (p / s));
alert("Максимальная температура: " + max);