

import React from 'react'

class Cart extends React.Component{

    showSelection(){
        document.getElementById('show_selection_block').style.right = '0'
    }

    render(){
        return (
            <div class='cart' onClick={this.showSelection}>
               <i class="fas fa-shopping-cart"></i>
            </div>
        )
    }
}

export {Cart}