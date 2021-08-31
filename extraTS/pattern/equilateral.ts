
let str: string = '';
const createEquilateral = (size: number) => {
    for (let i: number = 1; i <= size; i++) {
        for (let s: number = size - 1; s >= i; s--) {
           str += ' ';
        }
        for (let j: number = 1; j <= i; j++) {
           str += '* ';
        }
        str += '\n';
     }
     console.log(str);
};
// const size = process.argv.slice(2);
// let a = Number(size);
// createEquilateral(a);
export default createEquilateral;