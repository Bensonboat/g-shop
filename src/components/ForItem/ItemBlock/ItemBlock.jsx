

import React from 'react'

import { ItemImage } from '../ItemImage'
import { ItemDetail } from '../ItemDetail'


let arr = []

class ItemBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name1 : this.props.name,
            flavor: this.props.flavor
        }
        this.HHH = this.HHH.bind(this)
    }

    HHH(e){
        e.preventDefault();
        document.getElementById('show_selection').innerText = '' ;


        console.log(this.state)
        arr = [...arr, this.state]
        console.log(arr);
        arr.map(function(value, index){
            console.log(value);
            let div = document.createElement('div')

            div.setAttribute("class","show_selection")
            div.innerHTML += value.flavor + '<br>'

            document.getElementById('show_selection').append(div)

            // document.getElementById('show_selection').innerText += ' ' + value.flavor;
        });

        this.props.getData(this.state);
    }


    render(){
        return (
            <div class='item-block'>
                <div onClick={this.HHH}>
                    <ItemImage url={this.props.url}/>
                    <ItemDetail name={this.props.name} flavor={this.props.flavor} price={this.props.price} discount={this.props.discount}/>
                </div>
            </div>
        )
    }
}

export { ItemBlock }