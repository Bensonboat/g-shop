
import React from 'react'

import {Cart} from '../Cart'
import {BackHome} from '../BackHome'


let TopBlock = props => {
    return (
        <div class='top-block'>
            <BackHome />
            <Cart />
        </div>
    )
}

export { TopBlock }