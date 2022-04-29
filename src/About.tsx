import Box from "@mui/material/Box";
import "./About.css";
import Profile from "./Profile";

function About() {
  return (
    <Box className="about-container" id="about">
      <Box className="horizontal-about-grid-line-1 grid-opacity" />
      <Box className="horizontal-about-grid-line-2 grid-opacity" />
      <Box className="horizontal-about-grid-line-3 grid-opacity" />
      <Box className="horizontal-about-grid-line-4 grid-opacity" />
      <Box className="horizontal-about-grid-line-5 grid-opacity" />
      <Box className="vertical-grid-line-1 grid-opacity" />
      <Box className="vertical-grid-line-2 grid-opacity" />
      <Box className="vertical-grid-line-3 grid-opacity" />
      <Box className="vertical-grid-line-4 grid-opacity" />
      <Box className="vertical-grid-line-5 grid-opacity" />
      <Box className="vertical-grid-line-6 grid-opacity" />
      <Box className="vertical-grid-line-7 grid-opacity" />
      <Box className="about-heading">About</Box>
      <Box className="text-1">
        A chat is an object with a property messages, that is initially empty.
      </Box>
      <Box className="text-2">
        A chat is an object with a property messages, that is initially empty.
        It has a function invite that adds another user to the owners array
        thereby giving them write access (only the creator has write access
        initially). Once invited a user can call post to send a message to the
        chat and invite other users.
      </Box>
      <Box className="cv-1">
        <Profile
          name="Clemens Ley"
          text="We are launching on Litecoin. In the future we want to support all currencies in the Bitcoin family. 
          Between these blockchains, the Bitcoin Computer will have a maximum throughput of over 300 transactions per second. "
        />
      </Box>
      <Box className="cv-2">
        <Profile
          name="Clemens Ley"
          text="We are launching on Litecoin. In the future we want to support all currencies in the Bitcoin family. 
          Between these blockchains, the Bitcoin Computer will have a maximum throughput of over 300 transactions per second. "
        />
      </Box>
      <Box className="cv-3">
        <Profile
          name="Clemens Ley"
          text="We are launching on Litecoin. In the future we want to support all currencies in the Bitcoin family. 
          Between these blockchains, the Bitcoin Computer will have a maximum throughput of over 300 transactions per second. "
        />
      </Box>
    </Box>
  );
}

export default About;
