import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const RoughAnnotation = ({ text, type = "underline", color = "green" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      // Create the annotation
      const annotation = annotate(elementRef.current, {
        type, // Type of annotation (underline, box, circle, etc.)
        color, // Color of the annotation
        animate: true, // Enable animation
      });

      // Show the annotation
      annotation.show();

      // Cleanup function to remove the annotation when the component unmounts
      return () => annotation.remove();
    }
  }, [text, type, color]);

  return (
    <span className="text-white" ref={elementRef}>
      {text}
    </span>
  );
};

export default RoughAnnotation;
