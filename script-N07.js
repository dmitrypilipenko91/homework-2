function getVowels() {
    str = prompt( "Напишите любую фразу или предложение (на русском)" );
    const vowels = { А: true, И: true, О: true, У: true, Ы: true, Э: true, а: true, и: true, о: true, у: true, ы: true, э: true, е: true, ё: true, ю: true, я: true, Е: true, Ё: true, Ю: true, Я: true };
    let count = 0;
    for ( let i = 0; i < str.split("").length; i++ ) {
     if (str.split("")[i] in vowels)
      count ++;
    } 
   return alert( "В данном выражении количество глаcных букв: " + count );
 }
 