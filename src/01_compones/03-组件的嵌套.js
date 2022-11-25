// import React from 'react'

// rcc快捷键
import React, { Component } from 'react'
// export {Component}

class Child extends Component{
    render(){
        return <div>Child</div>
    }
}
class Navbar extends Component{
    render(){
        return (
            <div>Navbar
                <div>child
                    <Child></Child>
                </div>
            </div>
        )
    }
}
function Swiper() {
    return <div>Swiper</div>
}

const Tabbar = ()=><div>Tabbar</div>
// const Tabbar = ()=>{
//     return (
//         <div>Tabbar</div>
//     )
// }
export default class app extends Component {
  render() {
    return (
      <div>
        <Navbar><div>conent</div></Navbar>
        {/* conent不会显示 */}
        <Swiper></Swiper>
        <Tabbar></Tabbar>
        app
      </div>
    )
  }

}
