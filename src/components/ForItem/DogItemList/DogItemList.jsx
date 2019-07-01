



import React from 'react'

import { ItemBlock } from '../ItemBlock'
import { TopBlock } from '../../TopBlock'


import { ToCartItem } from '../ToCartItem'


let arrDog = []
let AddToCartList = ''
class DogItemList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fromChild: ''
        }
        this.dataFromChild = this.dataFromChild.bind(this)
        this.AddToCart = this.AddToCart.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
        // this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }

    dataFromChild(data){
        this.setState({
            fromChild: data,
            sendnull: ''
        }

        , () => { 
            console.log('state', this.state)
            arrDog = [...arrDog, this.state]
            // console.log(arrDog)
            }
        )    

        console.log(this.state)

    }

    // componentDidMount(data){
    //     this.setState({
    //         fromChild: data
    //     }
    //     , () => { 
    //         // console.log(this.state)
    //         arrDog = [...arrDog, this.state]
    //         console.log(arrDog)
    //     }
    //     )
    // }

    // componentWillReceiveProps(data) {
    //     this.setState({
    //         fromChild: data
    //     }, () => { 
    //         console.log('state', this.state)
    //         arrDog = [...arrDog, this.state]
    //         // console.log(arrDog)
    //     })    
    // }




    hideSelectionList(){
        document.getElementById('add_to_cart').style.right = '-100%'
    }

    showSelectionList(){
        document.getElementById('add_to_cart').style.right = '0'
        console.log('2')
    }

    hideCart(){
        document.getElementById('add_to_cart_list').style.right = '-100%'
        console.log('hide')
    }

    AddToCart(){
        arrDog = [...arrDog, this.state]
        console.log(arrDog)
        this.setState({
            sendnull: ''
        })

        document.getElementById('add_to_cart').style.right= '-100%'
    }

    render(){

        AddToCartList = arrDog.map((item) => {
            // console.log('from map', item)
            
            return <ToCartItem name={item.fromChild.name1} flavor={item.fromChild.flavor} price={item.fromChild.price} url={item.fromChild.url}/>
            }
        )
        
        return (
            <div class='item-list'>
                <TopBlock/>
                <div class='item-list-display'>
                    {/* <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' getData={this.componentWillReceiveProps}/> */}
                    <ItemBlock name='name2' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'getData={this.dataFromChild} AddToCart={this.AddToCart} showSelectionList={this.showSelectionList}/>
                    <ItemBlock name='name3' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'getData={this.dataFromChild} AddToCart={this.AddToCart} showSelectionList={this.showSelectionList}/>
                    <ItemBlock name='name4' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' getData={this.dataFromChild} AddToCart={this.AddToCart} showSelectionList={this.showSelectionList}/>
                    <ItemBlock name='name5' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'getData={this.dataFromChild} AddToCart={this.AddToCart} showSelectionList={this.showSelectionList}/>
                    <ItemBlock name='name6' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'getData={this.dataFromChild} AddToCart={this.AddToCart} showSelectionList={this.showSelectionList}/>
                    <ItemBlock name='name7' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' getData={this.dataFromChild} AddToCart={this.AddToCart} showSelectionList={this.showSelectionList}/>
                    {/* <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/> */}
                </div>
                <div class='dog-add-to-cart' id='add_to_cart' style={{right:'-100%'}}>
                    <div class='x-icon' onClick={this.hideSelectionList}>x</div>
                    <ItemBlock name={this.state.fromChild.name1} flavor={this.state.fromChild.flavor} price={this.state.fromChild.price} url={this.state.fromChild.url} detail='傳論上示而行包亮車於；期業習了者滿爸推確山！
的性示物來腦相器；路法一認總實但各到兒如、調步是中賽防即不他長無一年上中排法的及感參思代？業往的毒選師然，不安知甚……並種臺庭交少活認理是告苦就書種！易大位不賣健詩落人生無同英。黑們約變找過他不管預酒金。'/>
                </div>
                <div class='add-to-cart-list' id='add_to_cart_list' style={{right:'-100%'}}>
                    <span onClick={this.hideCart}>x</span>
                    {AddToCartList}
                </div>
            </div>
        )
    }
}

export { DogItemList }