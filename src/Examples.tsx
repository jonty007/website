import Box from "@mui/material/Box";
import "./Examples.css";

function Examples() {
  return (
    <Box className="examples-container">
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
      <Box className="example-rectangle" />
      <Box className="code-section" />
      <Box className="information-text">
        View the Bitcoin Computer Docs for More Examples and Tutorials:
        docs.bitcoincomputer.io
      </Box>
      <Box className="line4" />
      <Box className="example-heading-3">Chat</Box>
      <Box className="example-heading-2">Fungible Token</Box>
      <Box className="example-1-subtext">
        A non-fungible token is an object that has some state. In the example
        below the entire state is stored in a single property state. The token
        has a function setState to update the state and a function send to
        assign a new owner.
      </Box>
      <Box className="example-1-text">
        How to create Non-Fungible tokens NFTs) on Bitcoin Computer
      </Box>
      <Box className="example-1-heading">Non-Fungible tokens </Box>
      <Box className="examples-heading">Examples</Box>
    </Box>
  );
}

export default Examples;
