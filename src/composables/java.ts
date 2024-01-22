import * as fs from "fs";
import cp from "child_process";

export default function useJava() {

  function testJava(expressionToTest: string): object {
    
    const testFile: string = `../../Test.java`;
    // const testCode: string = `public class Test {
    //     public static void main(String[] args) {
    //         ${expressionToTest}
    //     }
    // }`;

    // fs.writeFileSync(testFile, testCode, "utf8");
    try {
      const options: object = { stdio: "pipe" };
      cp.execSync(`javac ${testFile}`, options);
      return { pass: true, error: null };
    } catch (err) {
      console.log('err');
      //return { pass: false, error: err.stderr.toString().split("error: ")[1] };
    }
  }

  return { testJava };
}
