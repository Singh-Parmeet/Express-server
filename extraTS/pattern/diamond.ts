
let str: string = '';
const  createDiamondShape = (n: number) => {
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
   console.log(str);

};



// const size:string = process.argv.slice(2);
// let a:number = Number(size);
export default createDiamondShape;