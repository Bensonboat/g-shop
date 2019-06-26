

import React from 'react'

// let ItemImage = props => {
//     return (
//         <div class='item-img'>
//             <img src={this.props.url} alt=""/>
//         </div>
//     )
// }

class ItemImage extends React.Component{
    render(){
        return (
            <div class='item-img'>
                <img src={this.props.url} alt=""/>
            </div>            
        )
    }
}

export { ItemImage }