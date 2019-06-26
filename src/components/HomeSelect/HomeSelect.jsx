import React from 'react'


// let HomeSelect = props => <div>{ props.type }</div>


class HomeSelect extends React.Component{
    render(){
        return (
            <div>
                <div onClick={this.props.hide}>{this.props.type}</div>
            </div>
        )
    }
}

export { HomeSelect }