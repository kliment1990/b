import React from 'react';
import styled from "styled-components";
import PopularCities from "./PopularCities/PopularCities";
import Search from "./Search/Search";
import MapAndHouses from "./MapAndHouses";


const Body = () => {
    return (
        <div className="container">
            <PopularCities />
            <Search />
            <MapAndHouses />
            hello
        </div>

    );
};

export default Body;

// const MapHouses = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//
// `

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
`