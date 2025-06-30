import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import './GalleryView.scss';

const GalleryView = ({ images, title }) => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    if (!images || images.length === 0) {
        return <p className="no-images-message">No images to show in this gallery</p>
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <div className="gallery-container">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image, index) => (
                    <motion.div
                        key={image.id}
                        className="gallery-item"
                        variants={itemVariants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={image.src} alt={image.alt} loading='lazy' />
                        <div className="image-overlay">
                            <p className="image-overlay-text">
                                {image.caption || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </Masonry>
        </div>
    );
};

export default GalleryView;