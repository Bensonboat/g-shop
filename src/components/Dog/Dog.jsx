

import React from 'react'
import { BackHome } from '../BackHome'



let Dog = props => {
    return (
        <div>
            <div class='dog-page'>
                <BackHome />
                <div>dog</div>
            </div>
        </div>
    )
}

// class LastPage extends React.Component{
//     render(){
//         return (
//             <div onClick={this.props.none}>123</div>
//         )
//     }
// }

export { Dog }