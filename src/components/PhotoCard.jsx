import styled from "styled-components";
import { useRef, useEffect } from "react";

const PhotoCard = ({ photo, setDate }) => {
  const myRef = useRef();

  // This callback will get called any time the target element is intersecting the root element at the defined threshold
  const callback = (entries /* An array of the threshold entries */, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // // console.log(entry);
        // console.log(date);
        // console.log(entry.target.innerText);
        setDate(entry.target.innerText);
      }
    });
  };

  const options = {
    // Root is the element that the target is intersecting (the date box)
    root: null, // Leaving the root as null will observer the target element intersecting the entire viewport

    // TODO : FIX THE THRESHOLDS FOR SCREEN SIZES OR USE A DIFFERENT ROOT SO THAT THE OBSERVER IS TRIGGERED WHEN THE NEW ROOT ELEMENT IS INTERSECTED
    rootMargin: "0px 0px -800px 0px",
    // The percentage of intersection at which the callback is being called
    threshold: 0 // 0.1 is 10 percent. meaning that at least 10 perfect of our target is in view
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    // We're observing the target element (ie the image) here it's called section1 but in our app it will be the images we're scrolling
    observer.observe(myRef.current);
  }, []);

  return (
    <Wrapper>
      <h4 ref={myRef} id="year">
        {photo.year}
      </h4>
      <Img src={photo.imageSrc} alt={photo.alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid var(--primary-color);
  display: inline-block;
  padding: 20px;
`;

const Img = styled.img`
  width: 300px;
`;

export default PhotoCard;
