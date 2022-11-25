// class Test {
//     constructor(){
//         this.a = 1;
//     }
//     testA(){
//         console.log("testA");
//     }
// }
// class childTest extends Test { //继承Test
   
//     testB(){
//         console.log("testB");

//     }
// }
// var obj = new childTest();
// obj.testA()
// obj.testB()
// console.log(obj.a);

//  类组件
import React from "react";
class App extends React.Component{
    render(){
        return (
        <div>hello react Component
            <ul>
                <li>
                    111
                </li>
                <li>
                    222
                </li>
            </ul>
        </div>
        )
    }
}
export default App