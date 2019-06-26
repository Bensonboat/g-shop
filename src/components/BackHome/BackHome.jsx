

import React from 'react'

class BackHome extends React.Component{
    showBlock(){
        document.getElementById('hide_block').style.display = '';
        document.getElementById('pet-block').style.display = 'none'
    }

    render(){
        return (
            <button class='back' onClick={this.showBlock}> (~~~ Back </button>
        )
    }
}

export { BackHome }