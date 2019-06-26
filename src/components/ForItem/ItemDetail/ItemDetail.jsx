

import React from 'react'


class ItemDetail extends React.Component{
    render(){
        return (
            <div class='item-detail'>
                <div>{ this.props.name }</div>
                <div>{ this.props.flavor }</div>
                <div>{this.props.price}</div>
                <div>{ this.props.discount }</div>
            </div>
        )
    }
}

export { ItemDetail }