



import React from 'react'

import { ItemBlock } from '../ItemBlock'
import { BackHome } from '../../BackHome'



class DogItemList extends React.Component{
    render(){
        return (
            <div class='item-list'>
                <BackHome />
                <div class='item-list-display'>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg' />
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/736x/87/8a/10/878a10f4f80acba3e37eb394692135db.jpg'/>
                    <ItemBlock name='name1' flavor='chicken' price='300' discount='2%' url='https://i.pinimg.com/originals/c5/f1/40/c5f140491dc2c1fb85458c3ef26080a0.jpg'/>
                </div>
            </div>
        )
    }
}

export { DogItemList }