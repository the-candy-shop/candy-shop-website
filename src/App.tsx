import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import logo from "./logo.png";
import { useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width:915px)");

  return (
    <Box display="flex" justifyContent="center" padding="32px">
      <Box maxWidth="895px">
        <Box textAlign="center">
          <img
            alt="logo"
            src={logo}
            style={{ borderRadius: "50%", width: "150px" }}
          />
        </Box>
        <Box
          marginTop="64px"
          fontSize={isMobile ? "20px" : "24px"}
          lineHeight="36px"
          sx={{
            "& .MuiLink-root": {
              color: "rgb(68, 223, 253)",
            },
          }}
        >
          <h1>Our vision</h1>
          <p>
            We are here to push forward what's possible on-chain with The Candy
            Shop, our NFT innovation lab.
          </p>
          <p>
            <Link href="https://chaindreamers.xyz/" target="_blank">
              Chain Dreamer
            </Link>{" "}
            is the vehicle for what we consider our first innovation: putting
            vector illustration on-chain with our own custom encoding system
            explained in{" "}
            <Link
              href="https://chaindreamers.xyz/on-chain-storage"
              target="_blank"
            >
              this article
            </Link>
            .
          </p>
          <p>
            Each new innovation by the Candy Shop will be a new set of drugs.
          </p>
          <p>
            We'll never do any whitelist. Instead, we'll determine who can mint
            based on specific NFT ownership. Of course, owning a Chain Dreamer
            will give you a special access to all our future collections and
            drugs.
          </p>
          <p>
            We chose{" "}
            <Link href="https://www.chainrunners.xyz/" target="_blank">
              Chain Runner
            </Link>{" "}
            as our first partner project for obvious reasons: on-chain, great
            narrative, builder community...
          </p>
          <p>We will develop new projects following 3 golden rules:</p>
          <ul>
            <li>Innovation mechanism (tech & minting experience)</li>
            <li>Expanding what we consider the best NFT franchises</li>
            <li>Narrative-driven</li>
          </ul>
          <h2>Next steps</h2>
          <p>
            In the short term, our next improvement will be the Chain Dreamer
            rendering function. Today, while all information is stored on-chain,
            we didn't manage to keep the rendering function below the 50m gas
            limit for free rendering.
          </p>
          <p>We'll work on this right after the minting is done.</p>
          <p>
            We'll use a part of the money to build a beautiful 3D Metaverse
            version of the Candy Shop.
          </p>
          <h2>Next project</h2>
          <p>
            There are high probabilities we'll stay for a while in Mega-City but
            we'll eventually expand to any Metaverse world.
          </p>
          <p>
            We are exploring
            <ul>
              <li>
                on-chain AI (
                <Link href="https://twitter.com/ClementWalter" target="_blank">
                  @ClementWalter
                </Link>{" "}
                is an expert in computer vision algorithms)
              </li>
              <li>composability innovation</li>
              <li>mixing physical identity (KYC) with minting experience</li>
            </ul>
          </p>
          <p>
            There are many projects inspiring us and there is so much to do:
            Nouns, Loot...
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
