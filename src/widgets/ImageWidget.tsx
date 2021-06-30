import React, {RefObject, useEffect, useRef, useState} from "react";
import styled, { ServerStyleSheet } from 'styled-components'

const placeHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";


const Image = styled.img`
  display: block;
  aspect-ratio: 354/256;
  //height: 100px;
  //width: 100px;
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    // fallback to placeholder image on error
    content: url(${placeHolder});
  }
`


export const ImageWidget = ({ src, alt }:{src:string,alt:string}) => {
    const [imageSrc, setImageSrc] = useState(placeHolder);
    const imageRef= useRef(null);

    // const imageRef = React.useRef<HTMLImageElement>(null);

    const onLoad = (event:any) => {
        event.target.classList.add("loaded");
    };

    const onError = (event:any) => {
        event.target.classList.add("has-error");
    };

    useEffect(
        () => {
            let observer:any;
            let didCancel = false;

            if (imageRef && imageSrc !== src) {
                if (IntersectionObserver) {
                    observer = new IntersectionObserver(
                        entries => {
                            entries.forEach(entry => {
                                if (
                                    !didCancel &&
                                    (entry.intersectionRatio > 0 || entry.isIntersecting)
                                ) {
                                    setImageSrc(src);
                                    observer.unobserve(imageRef.current);
                                }
                            });
                        },
                        {
                            threshold: 0.01,
                            rootMargin: "75%"
                        }
                    );
                    observer.observe(imageRef.current);
                } else {
                    // Old browsers fallback
                    setImageSrc(src);
                }
            }


            return () => {
                didCancel = true;
                // on component cleanup, we remove the listner
                if (observer && observer.unobserve) {
                    observer.unobserve(imageRef.current);
                }
            };
        },
        [src, imageSrc, imageRef]
    );

    return (
        <Image
            ref={imageRef}
            src={imageSrc}
            alt={alt}
            onLoad={onLoad}
            onError={onError}
        />
    );
};