import Box from "@mui/material/Box";
import "./Introduction.css";

function Introduction() {
  return (
    <Box className="GridBGFirst">
      <Box className="horizontal-grid-line-1" />
      <Box className="horizontal-grid-line-2" />
      <Box className="horizontal-grid-line-3" />
      <Box className="horizontal-grid-line-4" />
      <Box className="horizontal-grid-line-5" />
      <Box className="horizontal-grid-line-7" />
      <Box className="vertical-grid-line-1" />
      <Box className="vertical-grid-line-2" />
      <Box className="vertical-grid-line-3" />
      <Box className="vertical-grid-line-4" />
      <Box className="vertical-grid-line-5" />
      <Box className="vertical-grid-line-6" />
      <Box className="vertical-grid-line-7" />
      <Box className="TuringCompleteGraph1" />
      <Box className="features" id="features">Features</Box>
      <Box className="headingWrapper">
        <Box className="headline">
          <p>A Turing complete smart contract</p>
          <p>system for Bitcoin.</p>
        </Box>
        <Box className="subHeading">
          <p>Build fungible and non-fungible tokens (NFTs), games, social</p>
          <p>networks, exchanges, auctions, voting, office applications,</p>
          <p>artificial intelligence, ... anything really.</p>
        </Box>
      </Box>
    </Box>
  );
}

export default Introduction;
