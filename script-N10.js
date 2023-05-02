function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
let used = {};
console.log( 'цветов: ' + colorsCount );

let i = 1;
while ( i <= colorsCount ) {
    const n=randomDiap(1,7);
    const colorName=colors[n];

  if ( colorName in used )
    continue;
  else
    used[colorName] = true;
    
  console.log( colorName );
  i++;
}
}