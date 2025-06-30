import React from "react";
import GalleryView from "../components/GalleryView";
import allImages from "../data/images";
import '../styles/Views.scss'

export const Places = () => {
    const placeImages = allImages.filter(image => image.category === 'place')

    return (
        <div className="view-container places-view">
            <GalleryView images={placeImages}/>
        </div>
    )
}