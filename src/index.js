// console.log("hello world");
import React from 'react'
import ReactDOM from 'react-dom'
// 导入自定义进来的‘ App ’首字母必须大写
// import  App from './01_compones/01-class组件'
import  App from './01_compones/03-组件的嵌套'


// ReactDOM.render(<div>aaa<b>bbb</b></div>,document.getElementById('root'))

// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"111111"),document.getElementById('root'))

ReactDOM.render(<App/>,document.getElementById('root'))