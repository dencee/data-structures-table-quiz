const fs = require('fs')
const cp = require('child_process');

function testJava(expressionToTest) {
    const testFile = `./Test.java`;
    const testCode = `public class Test {
        public static void main(String[] args) {
            ${expressionToTest}
        }
    }`

    fs.writeFileSync(testFile, testCode, 'utf8');  
    try {
        let options = {stdio : 'pipe' };
        cp.execSync(`javac ${testFile}`, options);
        return {pass: true, error: null};
    } catch (err) {
        return {pass: false, error: err.stderr.toString().split('error: ')[1]};
    }
}


let expressions = [
    'int y = 999;',
    'int[10] x = new int[];',
    'blablabla',
    'Integer[] a = new int[10];',
    'Integer[] a = new Integer[10];'
];

console.log('------------------------------------')
expressions.forEach( expression => {
    let result = testJava(expression);
    if (result.pass) {
        console.log(`'${expression}' is good Java!`)
    } else {
        console.log(`'${expression}' is bad Java: ${result.error}`)
    }
    console.log('------------------------------------')
})