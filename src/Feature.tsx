import Box from "@mui/material/Box";
import "./Feature.css";

export interface FeatureProps {
  heading: string;
  text: string;
}

function Feature(props: FeatureProps) {
  return (
    <Box>
      <Box className="featureDot" />
      <Box className="featureHeading">{props.heading}</Box>
      <Box className="featureText">{props.text}</Box>
    </Box>
  );
}

export default Feature;
