import React from 'react';
import Houses from "./Houses/Houses";
import Map from "./Map/Map";

const MapAndHouses = () => {
    return (
        <div className={"container"}>
            <div className={"row justify-content-center"}>
                <Houses />
                <Map />
            </div>

        </div>
    );
};

export default MapAndHouses;