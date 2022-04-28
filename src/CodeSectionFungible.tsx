import Box from "@mui/material/Box";

import "./CodeSection.css";

function CodeSectionFungible() {
  return (
    <Box className="code-section-container">
      <Box>
        <pre className="code-block">
          <code> 1 </code>
          <code className="code-yellow">class</code>{" "}
          <code className="code-dark-yellow">Coin</code>
          <code className="code-gray">{` {`}</code>
          <br />
          <code> 2 </code>
          <code className="code-dark-blue">{`   constructor`}</code>
          <code>(</code>
          <code className="code-light-blue">supply, to</code>
          <code>)</code> <code>{`{`}</code>
          <br />
          <code> 3 </code>
          <code className="code-blue">{`      this`}</code>
          <code>.</code>
          <code className="code-dark-blue">tokens</code> <code>=</code>{" "}
          <code className="code-dark-blue">supply</code>
          <br />
          <code> 4 </code>
          <code className="code-blue">{`      this`}</code>
          <code>.</code>
          <code className="code-dark-blue">owners</code> <code>= [</code>{" "}
          <code className="code-dark-blue">to</code>
          <code>]</code>
          <br />
          <code> 5 </code>
          <code>{`   }`}</code>
          <br />
          <code> 6 </code>
          <br />
          <code> 7 </code>
          <code className="code-dark-blue">{`   send`}</code>
          <code>(</code>
          <code className="code-light-blue">amount, to</code>
          <code>)</code> <code>{`{`}</code>
          <br />
          <code> 8 </code>
          <code className="code-blue">{`      if`}</code>
          <code>(</code>
          <code className="code-blue">this</code>
          <code>.</code>
          <code className="code-dark-blue">tokens</code> <code>&#60;</code>{" "}
          <code className="code-dark-blue">amount</code>
          <code>{`) `}</code>
          <code className="code-dark-blue">throw new </code>
          <code className="code-light-blue">Error</code><code>()</code>
          <br />
          <code> 9 </code>
          <code className="code-blue">{`      this`}</code>
          <code>.</code>
          <code className="code-dark-blue">amount</code> <code>-=</code>{" "}
          <code className="code-dark-blue">amount</code>
          <br />
          <code>10 </code>
          <code className="code-blue">{`      return new `}</code>
          <code className="code-dark-yellow">Coin</code>
          <code>(</code>
          <code className="code-light-blue">amount, to</code>
          <code>)</code>
          <br />
          <code>11 </code>
          <code>{`   }`}</code>
          <br />
          <code>12 </code>
          <code>{`}`}</code>
        </pre>
      </Box>
    </Box>
  );
}

export default CodeSectionFungible;
