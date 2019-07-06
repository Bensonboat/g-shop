

import React from 'react'

class BackHome extends React.Component{
    showBlock(){
        document.getElementById('hide_block').style.display = '';
        document.getElementById('pet-block').style.display = 'none'
    }

    render(){
        return (
            <div>
                <button class='back' onClick={this.showBlock}>
                    <i class="fas fa-arrow-circle-left"></i>
                    Back
                </button>
            </div>
        )
    }
}

export { BackHome }

// push test
