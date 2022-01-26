import React from 'react';
import newYork from "../../../images/PopularCities/new-york.jpg"
import rome from "../../../images/PopularCities/rome.jpg"
import sanFrancisco from "../../../images/PopularCities/san-francisco.jpg"
import telAviv from "../../../images/PopularCities/tel-aviv.jpg"

import PopularCitiesTemp from "./PopularCitiesTemp";
import styled from "styled-components";

const citiesAndNames = [
    {city: newYork, name: "New York"},
    {city: rome, name: "Rome"},
    {city: sanFrancisco, name: "San Francisco"},
    {city: telAviv, name: "Tel Aviv"}
]

const PopularCities = () => {
    return (
        <>

            <Cities>Popular Cities</Cities>
            <Div>
                {
                    citiesAndNames.map(item => {
                        return <div key={item.name}>
                            <Image src={item.city} />
                            <Names>{item.name}</Names>
                        </div>
                    })
                }
            </Div>
        </>
    );
};

export default PopularCities;

const Image = styled.img`
  width: 218px;
  height: 145px;
  
  padding: 15px;
  
    `
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    `
const Names = styled.p`
  position: relative;
  top: -39px;
  left: 27px;
  color: white;
  font-weight: bold;
    `
const Cities = styled.h1`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #004152;
  font-weight: bold;
`