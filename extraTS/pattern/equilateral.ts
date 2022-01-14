
let str: string = '';
const createEquilateral = (size: number): string => {
    for (let i: number = 1; i <= size; i++) {
        for (let s: number = size - 1; s >= i; s--) {
           str += ' ';
        }
        for (let j: number = 1; j <= i; j++) {
           str += '* ';
        }
        str += '\n';
     }
     return 'Triangle Printed!';
};
export default createEquilateral;