
let str: string = '';
const  createDiamondShape = (n: number): string => {
   let space: number = n - 1;
   for (let i: number = 0; i < n; i++) {
      for (let j: number = 0; j < space; j++) {
         str += (' ');
      }
      for (let j: number = 0; j <= i; j++) {
         str += ('* ' );
      }
      str += '\n';
      space--;
   }

   space = 0;
   for (let i: number = n; i > 0; i--) {
      for (let j: number = 0; j < space; j++) {
           str += (' ');
      }
      for (let j: number = 0; j < i; j++) {
            str += ('* ');
      }
      str += '\n';
      space++;
   }
return 'Diamond Printed!';
};


export default createDiamondShape;