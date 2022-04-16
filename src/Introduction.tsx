import Box from "@mui/material/Box";
import "./Introduction.css";

function Introduction() {
  return (
    <Box className="GridBGFirst">
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
