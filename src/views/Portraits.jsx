import React from "react";
import GalleryView from "../components/GalleryView";
import allImages from "../data/images";
import '../styles/Views.scss'

export const Portraits = () => {
    const portraitsImages = allImages.filter((image => image.category === 'portrait'));

    return (
        <div className="view-container portrait-view">
            <GalleryView images={portraitsImages}/>
        </div>
    );
};