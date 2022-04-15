import Box from "@mui/material/Box";
import "./About.css";

function About() {
  return (
    <Box className="about-container">
      <Box className="horizontal-grid-line-1" />
      <Box className="horizontal-grid-line-2" />
      <Box className="horizontal-grid-line-3" />
      <Box className="horizontal-grid-line-4" />
      <Box className="horizontal-grid-line-5" />
      <Box className="vertical-grid-line-1" />
      <Box className="vertical-grid-line-2" />
      <Box className="vertical-grid-line-3" />
      <Box className="vertical-grid-line-4" />
      <Box className="vertical-grid-line-5" />
      <Box className="vertical-grid-line-6" />
      <Box className="vertical-grid-line-7" />
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
      <Box className="cv-1" />
      <Box className="cv-2" />
      <Box className="cv-3" />
    </Box>
  );
}

export default About;
