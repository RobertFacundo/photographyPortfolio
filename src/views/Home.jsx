import React from "react";
import GalleryView from "../components/GalleryView";
import allImages from "../data/images";
import '../styles/Views.scss';

export const Home = () => {
    return (
        <div className="view-container home-view">
            <GalleryView images={allImages}/>
        </div>
    )
}