

import React, {useState} from 'react'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

import {Gents, Ladies} from '../data.js'
import WomanCollection from '../components/WomanCollection.jsx'

const MainPage = () => {

    const [gentsFashion, setGentsFashion] = useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);
    console.log(Gents);
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion = {gentsFashion}/>
        <WomanCollection ladiesFashion = {ladiesFashion}/>
        <Footer />

    </div>
  )
}

export default MainPage