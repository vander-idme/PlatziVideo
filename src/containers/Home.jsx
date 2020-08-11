import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'


const Home = () => {

  const initialState = useInitialState(API)

  return (
    <>
      <Search />

      {initialState.mylist !== undefined && initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist !== undefined && initialState.mylist.map(item => 
              <CarouselItem key={item.id} {...item}/>
            )}
          </Carousel>
        </Categories>
      )}

      {initialState.trends !== undefined && initialState.trends.length > 0 && (
        <Categories title="Tendencias">
        <Carousel>
          {initialState.trends !== undefined && initialState.trends.map(item => 
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>
      )}
      

      {initialState.originals !== undefined && initialState.originals.length > 0 && (
        <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals !== undefined && initialState.originals.map(item => 
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>
      )}
    </>
  )
}

export default Home