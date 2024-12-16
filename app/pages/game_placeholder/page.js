import React from 'react'
import Footer from '@/app/components/footer/page'
import CardList from '@/app/components/placeholder_card/page'
import Header from '@/app/components/header/page'

const GamePage = () => {
    return(
        <div>
            <Header></Header>
            <CardList></CardList>
            <Footer></Footer>
             {/*This is a comment*/}
        </div>
    )
}

export default GamePage