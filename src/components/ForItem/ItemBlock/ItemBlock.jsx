

import React from 'react'

import { ItemImage } from '../ItemImage'
import { ItemDetail } from '../ItemDetail'


class ItemBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name1 : this.props.name,
            flavor: this.props.flavor,
            price: this.props.price,
            url: this.props.url
        }
        // this.HHH = this.HHH.bind(this)
        this.seeC = this.seeC.bind(this)
    }


    // HHH(e){
    //     e.preventDefault();
    //     document.getElementById('show_selection').innerText = '' 
    //     document.getElementById('show_selection_block').style.right = '0' 

    //     arr = [...arr, this.state]
    //     console.log(arr);
    //     arr.map(function(value, index){
    //         console.log(value);
    //         let div = document.createElement('div')

    //         div.setAttribute("class","show_selection")

    //         div.innerHTML += '<div>Name: ' + value.name1 + '</div>' + '<div>Flavor: ' + value.flavor + '</div>' + '<br/>'
    //         document.getElementById('show_selection').append(div)
    //     });


    // }

    seeC(){
        // console.log(this.state);
        this.props.getData(this.state);
        console.log('nonnonono')
    }

    render(){
        return (
            <div class='item-block' onClick={this.seeC}>
                <div onClick={(e) => { this.props.showSelectionList(e)} }>
                    <ItemImage url={this.props.url}/>
                    <ItemDetail name={this.props.name} flavor={this.props.flavor} price={this.props.price} discount={this.props.discount} detail={this.props.detail} />
                </div>
                <div onClick={this.props.AddToCart} >+</div>
            </div>
        )
    }
}

export { ItemBlock }