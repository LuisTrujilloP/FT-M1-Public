function BinarioADecimal(num) {
   // input "1010"
   // outpit Number

   // 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0 =  10
   //  8   +   0    +   2   +   0   =  10

   //                        Codigo del profe 

   var result = 0;
   var indice = num.length - 1;
   for(i=0; i < num.length; i++){
      result += result + num[i] ** 2 ** indice;
      indice--;
   }
   return result

   //                   Mi codigo YT video explanation 

   // const input = String(num);
   // const binary = String(num)
   //    .split('')
   //    .filter(i => i == '1' || i === '0');
   // if(input.length !== binary.length){
   //    return 'Invalid input';
   // }

   // let result = 0

   // for (let i = 0; i<binary.length; i++){

   //    result += Number(binary[i] * Math.pow(2, binary.length - 1 - i))
   
   // }
   // return result;   

}

   // mi codigo explanation



function DecimalABinario(num) {

   // input "1010"
   // outpit Number
   // 9 / 2 -> 4 resto 1
   // 4 / 2 -> 2 resto 0 
   // 2 / 2 -> 1 resto 0
   // 1 / 2 -> 0 resto 1


   var result = "";
   while (num > 0){
      result = (num % 2) + result;
      num = Math.floor(num / 2); 
   }

   return result



   //                   Codigo despues de ver respuesta de un compa
   
   // let curr = ''
   // do{
   //    var count = num %2;
   //    num = Math.trunc(num/2);
   //    curr += String(count)
   // }while(num >= 1)

   // curr = curr.split('');
   // curr = curr.reverse();
   // curr = curr.join("");
   // return curr
}
DecimalABinario(4)

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
