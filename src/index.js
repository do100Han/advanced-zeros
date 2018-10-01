module.exports = function getZerosCount(number, base) {
   var int = 2;
   var index = 0;
   var arr = [];
   var count = 0;
   while (base > 1)
   {
       while (base % int == 0)
       {
           base = base / int;
           arr.push(int);
       }
       int++;
   }

   for(var i = 0; i < arr.length; ++i){
       if(arr[i] == arr[arr.length - 1])
           count++;
   }


   while(number > 0)
   {
       if(number>1){
           number /= int-1;
           index += Math.floor(number);
       }else{
           break;
       }
   }
   return Math.floor(index/count);
}