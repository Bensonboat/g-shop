

import React from 'react'

import { ItemImage } from '../ItemImage'

class ToCartItem extends React.Component{
    render(){
        return(
            <div class='item-block'>
                <div>Select</div>
                <ItemImage url={this.props.url}/>
                <div>{this.props.name}</div>
                <div>{this.props.flavor}</div>
                <div>{this.props.price}</div>
            </div>
        )
    }
}

export { ToCartItem }