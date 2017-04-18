var a = prompt('Podaj pierwszą liczbę: '),
  b = prompt('Podaj drugą liczbę: '),
  value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
  alert('Wynik dodatni: ' + value);
  console.log('Wynik dodatni:');
} else if (value < 0) {
  alert('Wynik ujemny: ' + value);
  console.log('Wynik ujemny:');
} else {
  alert('Wynik zerowy');
  console.log('Wynik zerowy')
}


