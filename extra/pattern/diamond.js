const createDiamondShape = size => {
   for(var i=1;i<=size;i++){
      for(var s=size-1;s>=i;s--){
         process.stdout.write(" ");
      }
      for(var j=1;j<=i;j++){
         process.stdout.write("* ")
      }
      console.log();
   }
   if(i==size+1){
      for(var i=1;i<=size-1;i++){
         for(var s=1;s<=i;s++){
            process.stdout.write(" ");
         }
         for(j=i;j<=size-1;j++){
            process.stdout.write("* ");
         }
         console.log();
      }
   }
 }
 const size = process.argv.slice(2);
 let a = Number(size);
//  if (a<11 && a>1){
//     createDiamondShape(a);
// //  }
// //  else{
// //     console.log("Please enter number between 2 to 10")
// //  }
export default createDiamondShape;
