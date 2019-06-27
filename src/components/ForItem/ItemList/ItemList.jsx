

import React from 'react'

import { ItemBlock } from '../ItemBlock'
import { BackHome } from '../../BackHome'
import { Cart } from '../../Cart'
import { throws } from 'assert';


class ItemList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fromChild: ''
        }
        // this.handleData = this.handleData.bind(this)
    }


    // handleData(data){
    //     this.setState({ fromChild: data })

    //     console.log('ListData',this.state)
    // }


    closeShowSelection(){
        document.getElementById('show_selection_block').style.right = '-100%'
    }

    render(){
        return (
            <div class='item-list'>
                <div class='back_and_selection'>
                    <BackHome />
                    <Cart />
                    <div id='show_selection_block'>
                        <div class='x-icon' onClick={this.closeShowSelection}>x</div>
                        <div id='show_selection' >Not Select yet</div>
                    </div>  
                </div>
                <div class='item-list-display'>
                    {/* <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg' getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/>
                    <ItemBlock name='name2' flavor='cat' price='600' discount='2%' url='https://i.pinimg.com/originals/c9/98/91/c99891a3feaa4d2419dfc005aeb52b00.jpg'getData={this.handleData}/>
                    <ItemBlock name='name4' flavor='lamb' price='800' discount='2%' url='https://i.pinimg.com/originals/b7/98/34/b79834557a644c3c13dac839590e643f.jpg'getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/>
                    <ItemBlock name='name2' flavor='cat' price='600' discount='2%' url='https://i.pinimg.com/originals/c9/98/91/c99891a3feaa4d2419dfc005aeb52b00.jpg'getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/>
                    <ItemBlock name='name2' flavor='cat' price='600' discount='2%' url='https://i.pinimg.com/originals/c9/98/91/c99891a3feaa4d2419dfc005aeb52b00.jpg'getData={this.handleData}/>
                    <ItemBlock name='name4' flavor='lamb' price='800' discount='2%' url='https://i.pinimg.com/originals/b7/98/34/b79834557a644c3c13dac839590e643f.jpg'getData={this.handleData}/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'getData={this.handleData}/> */}
                    <ItemBlock name='name2' flavor='cat' price='600' discount='2%' url='https://i.pinimg.com/originals/c9/98/91/c99891a3feaa4d2419dfc005aeb52b00.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'/>
                    <ItemBlock name='name2' flavor='cat' price='600' discount='2%' url='https://i.pinimg.com/originals/c9/98/91/c99891a3feaa4d2419dfc005aeb52b00.jpg'/>
                    <ItemBlock name='name4' flavor='lamb' price='800' discount='2%' url='https://i.pinimg.com/originals/b7/98/34/b79834557a644c3c13dac839590e643f.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/2f/bc/ca/2fbccae8153d2b74537e3706ebe4cff5.jpg'/>
                    <ItemBlock name='name2' flavor='cat' price='600' discount='2%' url='https://i.pinimg.com/originals/c9/98/91/c99891a3feaa4d2419dfc005aeb52b00.jpg'/>
                </div>
            </div>
        )
    }
}

export { ItemList }