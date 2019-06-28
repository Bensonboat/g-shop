
import React from 'react'

import {Cart} from '../Cart'
import {BackHome} from '../BackHome'


class TopBlock extends React.Component{
    render(){
        return (
            <div class='top-block'>
                <BackHome />
                <Cart/>
            </div>
        )
    }
}

export { TopBlock }