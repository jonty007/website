import Box from "@mui/material/Box";
import "./Introduction.css";

function Introduction() {
  return (
    <Box className="GridBGFirst">
      {/* <Box className="horizontal-grid-line-1" />
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
      <Box className="vertical-grid-line-7" /> */}
      <Box className="TuringCompleteGraph1" />
      <Box className="features">Features</Box>
      <Box className="headline">
        A Turing complete smart contract system for Bitcoin.
      </Box>
      <Box className="subHeading">
        Build fungible and non-fungible tokens (NFTs), games, social networks,
        exchanges, auctions, voting, office applications, artificial
        intelligence, ... anything really.
      </Box>
    </Box>
  );
}

export default Introduction;
