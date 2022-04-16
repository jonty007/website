import Box from "@mui/material/Box";
import Feature from "./Feature";
import "./Features.css";

function Features() {
  return (
    <Box className="featuresContainer">
      <Box className="feature1">
        <Feature
          heading="Easy to Use"
          text="Smart contracts are written in Javascript. If you know Javascript you can write smart contracts."
        />
      </Box>
      <Box className="feature2">
        <Feature
          heading="Free computation"
          text="On other blockchains almost all algorithms are prohibitively expensive. On Bitcoin all algorithms have the same cost: the cost of a payment. 
          This makes it possible, for the first time, to run compute intense algorithms as smart contracts."
        />
      </Box>
      <Box className="feature3">
        <Feature
          heading="Pure Bitcoin"
          text="The Bitcoin Computer does not depend on a side-chain and will soon depend only on Bitcoin. 
          This means that smart contracts will continue to work as long as Bitcoin is available."
        />
      </Box>
      <Box className="feature4">
        <Feature
          heading="Off-Chain storage"
          text="Which data needs to be stored on-chain vs securely hashed and off-chain is application dependent. 
          We make it easy for the programmer to store data off-chain."
        />
      </Box>
      <Box className="feature5">
        <Feature
          heading="Encryption"
          text="Built to balance privacy with compliance: all smart contract data can be encrypted but flows of money are un-encrypted to enable AML."
        />
      </Box>
      <Box className="feature6">
        <Feature
          heading="Cross-Chain"
          text="We want the Bitcoin Computer to work on all Bitcoin-like currencies. We are launching on Litecoin and will add support for other currencies over time."
        />
      </Box>
      <Box className="feature7">
        <Feature
          heading="Trustless"
          text="You can run your own Bitcoin Computer Node to gain trustless access to the blockchain. 
          You can deploy a node locally with one line of code thanks to Docker and we have instructions for how to deploy to AWS Fargate."
        />
      </Box>
      <Box className="graph2" />
    </Box>
  );
}

export default Features;
