import logo from "./logo.svg";
import * as React from "react";

import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ReactComponent as BitcoinHeader } from "./social/header.svg";
import { ReactComponent as Telegram } from "./social/telegram.svg";
import { ReactComponent as YouTube } from "./social/youtube.svg";
import { ReactComponent as Discord } from "./social/discord.svg";
import { ReactComponent as GitHub } from "./social/github.svg";
import { ReactComponent as LinkedIn } from "./social/linkedin.svg";
import { ReactComponent as Instagram } from "./social/insta.svg";
import { ReactComponent as Medium } from "./social/medium.svg";
import BasicTabs from "./tabs";
import Features from "./Features";
import Pricing from "./Pricing";
import Examples from "./Examples";
import About from "./About";
import Footer from "./Footer";
import Introduction from "./Introduction";
import { ReactComponent as ArrowLink } from './social/arrow.svg'

function App() {
  return (
    <div className="App">
      <header className="header" >
        <Grid container>
          <Grid item xs={3} sx={{ padding: "20px", textAlign: "left" }}>
            <img src="logo/BitcoinComputer-Logo.png" height="40px" />
          </Grid>
          <Grid item xs={9} className="navigation">
            <nav>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#examples">Examples</a>
              <a href="https://docs.bitcoincomputer.io" target="_blank">
                Docs
                <ArrowLink/>
              </a>
              <a href="#about">About</a>
            </nav>
          </Grid>
        </Grid>
      </header>
      {/* <BitcoinHeader className="header" /> */}
      <Introduction />
      <Features />
      <Pricing />
      <Examples />
      <About />
      <Footer />
    </div>
  );
}

export default App;
