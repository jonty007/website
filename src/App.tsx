import logo from './logo.svg';
import * as React from 'react';

import './App.css';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { ReactComponent as Twitter } from './social/twitter.svg';
import { ReactComponent as Telegram } from './social/telegram.svg';
import { ReactComponent as YouTube } from './social/youtube.svg';
import { ReactComponent as Discord } from './social/discord.svg';
import { ReactComponent as GitHub } from './social/github.svg';
import { ReactComponent as LinkedIn } from './social/linkedin.svg';
import { ReactComponent as Instagram } from './social/insta.svg';
import { ReactComponent as Medium } from './social/medium.svg';
import BasicTabs from './tabs';

function App() {

  return (
    <div className="App">
      <header>
        <Grid container>
          <Grid item xs={3} sx={{padding: '20px', textAlign: 'left'}}>
            <img src="logo/BitcoinComputer-Logo.png" height="40px"/>

          </Grid>
          <Grid item xs={9} className="navigation">
            <nav>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#examples">Examples</a>
              <a href="https://docs.bitcoincomputer.io" target="_blank">Docs</a>
              <a href="#about">About</a>
            </nav>
          </Grid>
        </Grid>
      </header>
      <Box className="GridBG">

      </Box>
      <Box>
        <Box id="features" className='WrapperBox'>
          <p>Features</p>
        </Box>
        <Box id="pricing" className='WrapperBox PricingBox'>
          <Grid container>
            <Grid item xs={4}>
              <h1>Pricing</h1>
            </Grid>
            <Grid item xs={8}>
              <p>Choose from three pricing</p>
              <p>options, switch anytime:</p>
            </Grid>
            <Grid item xs={4} className='TextAlignRight'>
              <h2>Free forever
                on Testnet</h2>
            </Grid>
            <Grid item xs={2}>
              <h2>0.1% of
                amount sent</h2>
            </Grid>
            <Grid item xs={6}>
              <h2>1 cent per
                smart object
                create or
                update</h2>
            </Grid>
          </Grid>
        </Box>
        <Box id="examples" className='WrapperBox ExamplesBox'>
          <Grid container>
            <Grid item xs={12} className='ExamplesBoxContent'>
              <h1>Examples</h1>
            </Grid>
            <Grid item xs={12}>
              <BasicTabs />
            </Grid>
          </Grid>
        </Box>
        <Box id="about" className='WrapperBox AboutBox'>
          <Grid container >
            <Grid item xs={12} className='AboutBoxContent'>
              <h1>About</h1>
              <h3>A chat is an object with a property messages, that is initially empty.</h3>
              <p>A chat is an object with a property messages, that is initially empty. It has a function invite that adds
                another user to the owners array thereby giving them write access (only the creator has write access
                initially). Once invited a user can call post to send a message to the chat and invite other users.</p>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <img src="portrait.png" />
              </Grid>
              <Grid item xs={12}>
                <GitHub></GitHub>
                <Instagram></Instagram>
                <LinkedIn></LinkedIn>
                <Medium></Medium>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <img src="portrait.png" />
              </Grid>
              <Grid item xs={12}>
                <GitHub></GitHub>
                <Instagram></Instagram>
                <LinkedIn></LinkedIn>
                <Medium></Medium>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <img src="portrait.png" />
              </Grid>
              <Grid item xs={12}>
                <GitHub></GitHub>
                <Instagram></Instagram>
                <LinkedIn></LinkedIn>
                <Medium></Medium>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ backgroundColor: '#0046ff', minHeight: '200px' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} className='ContentBox ColorWhite'>
            <Grid item xs={4}>
              Get in touch hello@bitcoincomputer.io
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Twitter height="50px" width="50px" viewBox="0 0 26 26"></Twitter>
                <Telegram height="50px" width="50px" viewBox="0 0 26 26"></Telegram>
                <YouTube height="50px" width="50px" viewBox="0 0 26 26"></YouTube>
                <Discord height="50px" width="50px" viewBox="0 0 26 26"></Discord>
                <GitHub height="50px" width="50px" viewBox="0 0 26 26"></GitHub>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Grid item xs={4} className="ColorWhite">
              Copyright © 2022 Bitcoin Computer. All rights reserved.
            </Grid>

          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default App;
