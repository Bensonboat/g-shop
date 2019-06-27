import React from 'react'

import { HashRouter, Route, Link } from 'react-router-dom'
import { HomeSelect } from '../HomeSelect'

// import { ItemBlock } from '../ForItem/ItemBlock'
import { ItemList } from '../ForItem/ItemList'
import { DogItemList } from '../ForItem/DogItemList'

class Main extends React.Component{

    hideBlock(){
        document.getElementById('hide_block').style.right = 'none'
        document.getElementById('pet-block').style.display = ''
    }

    render(){
        return(
            <div>
                <HashRouter>
                    <div id='hide_block'>
                        <div>1234</div>
                        <Link to='dog' >
                            <HomeSelect type='dog' hide={this.hideBlock}></HomeSelect>
                        </Link>
                        <Link to='cat'>
                            <HomeSelect type='cat' hide={this.hideBlock}></HomeSelect>
                        </Link>
                    </div>
                    <div id='pet-block' style={{display: 'none'}}>
                        <Route exact path='/dog' component={ DogItemList } />
                        <Route path='/cat' component={ ItemList }/>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export { Main }