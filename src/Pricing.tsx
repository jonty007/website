import Box from "@mui/material/Box";
import "./Pricing.css";

function Pricing() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#0046FF" }}></Box>
      <Box className="pricing-container" id="pricing">
        <Box className="horizontal-grid-line-1" />
        <Box className="horizontal-grid-line-2" />
        <Box className="horizontal-grid-line-3" />
        <Box className="horizontal-grid-line-4" />
        <Box className="vertical-grid-line-1" />
        <Box className="vertical-grid-line-2" />
        <Box className="vertical-grid-line-3" />
        <Box className="vertical-grid-line-4" />
        <Box className="vertical-grid-line-5" />
        <Box className="vertical-grid-line-6" />
        <Box className="vertical-grid-line-7" />
        <Box className="pricing-heading">Pricing</Box>
        <Box className="pricing-option-1">
          <b>Free</b> forever on Testnet
        </Box>
        <Box className="pricing-option-2">
          <b>0.1%</b> of amount sent
        </Box>
        <Box className="pricing-option-3">
          <b>1 cent</b> per smart object create or update
        </Box>
        <Box className="graph3" />
      </Box>
    </Box>
  );
}

export default Pricing;
