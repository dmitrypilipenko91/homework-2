function calculateVowels(str) {
    const vowels = { А: true, И: true, О: true, У: true, Ы: true, Э: true, Е: true, Ё: true, Ю: true, Я: true };
    let count = 0;
    let letters = str.toUpperCase().split("");
    for ( let i = 0; i < letters.length; i++ ) {
     if (letters[i] in vowels)
      count ++;
    } 
   return count;
 }
 
 let userStr = prompt( "Напишите любую фразу или предложение (на русском)" );

 alert( "В данном выражении количество глаcных букв: " + calculateVowels(userStr) );

 