import React from 'react';
import styled from "styled-components";
import MapImg from "../../../images/Map/Map.png"

console.log(MapImg)
const Map = () => {
    return (
        <div className="col-sm-12 col-md-6">
                <MapImage src={MapImg} alt="Map"/>
        </div>
    );
};

export default Map;

const MapImage = styled.img `
  width: 610px;
  height: 711px;
`