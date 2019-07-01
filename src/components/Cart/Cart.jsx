

import React from 'react'

class Cart extends React.Component{

    showSelection(){
        document.getElementById('add_to_cart').style.right = '0'
    }

    showAddToCartList(){
        document.getElementById('add_to_cart_list').style.right = '0'
    }

    render(){
        return (
            <div class='cart' onClick={this.showAddToCartList}>
               <i class="fas fa-shopping-cart"></i>
            </div>
        )
    }
}

export {Cart}