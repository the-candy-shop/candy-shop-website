import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import logo from "./logo.png";
import { useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width:915px)");

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        maxWidth="1470px"
        width="100%"
        height="68px"
        display="flex"
        alignItems="center"
        justifyContent={isMobile ? "center" : "flex-start"}
      >
        <img
          alt="logo"
          src={logo}
          style={{ borderRadius: "50%", width: "180px" }}
        />
      </Box>
      <Box display="flex" justifyContent="center" padding="32px">
        <Box maxWidth="671px">
          <Box
            marginTop="100px"
            fontSize="18px"
            lineHeight="27px"
            sx={{
              "& .MuiLink-root": {
                color: "rgb(0 190 227)",
              },
            }}
          >
            <h1>Introducing The Candy Shop</h1>
            <h2 style={{ marginTop: "32px" }}>
              A new, narrative-driven NFT lab that will push forward what's
              technically possible on-chain
            </h2>
            <Box sx={{ marginTop: "48px" }}>
              <p>
                Web3 and blockchain technologies are still in their infancy and
                most business cases are left to emerge. Naive optimism or
                technological utopianism are tempting but limited.
              </p>
              <p>
                A good first step is to recognize what’s wrong and we think{" "}
                <Link
                  href="https://moxie.org/2022/01/07/web3-first-impressions.html"
                  target="_blank"
                >
                  this article
                </Link>{" "}
                by{" "}
                <Link href="https://twitter.com/moxie" target="_blank">
                  @Moxie
                </Link>{" "}
                (founder of Signal) is substantial. Regarding NFT, we are still
                far from decentralization: Infura, Alchemy, Opensea, Metamask
                and cloud providers are gatekeepers.
              </p>
              <p>
                That being said, something is happening and ownership on
                distributed databases still feels right.
              </p>
              <p>
                How to move forward in this space full of uncertainty as an
                optimistic person eager to building in web3?
              </p>
              <p>
                Reading, investing and developing a critical thinking is
                necessary but no enough.
              </p>
              <p>
                We believe the best best way to move forward is by building
                stuff. A lot of stuff. With great vibes, great stories and fun.
              </p>
              <p>We will develop NFT collections following 3 golden rules:</p>
              <ul>
                <li>Innovation mechanism (tech & minting experience)</li>
                <li>Expanding what we consider the best NFT franchises</li>
                <li>Narrative-driven</li>
              </ul>
              <p>
                Each new innovation by the Candy Shop will be a new set of
                drugs.
              </p>
              <p>That’s why we are launching the Candy Shop.</p>
              <p>
                The Candy Shop is here to push to its edges what's possible
                on-chain.
              </p>
            </Box>
            <h2 style={{ marginTop: "48px" }}>Chain Dreamer</h2>
            <Box>
              <p>
                <Link href="https://chaindreamers.xyz/" target="_blank">
                  Chain Dreamer
                </Link>{" "}
                is our first project and vehicle for our first technical
                innovation: putting vector illustration on-chain with our own
                custom encoding system explained in{" "}
                <Link
                  href="https://chaindreamers.xyz/on-chain-storage"
                  target="_blank"
                >
                  this article
                </Link>
                .
              </p>
              <p>
                We determine who can mint based on specific NFT ownership. In
                this case, a Chain Runner is needed for early access. Then,
                we’ll open the mint to the public
              </p>
              <p>
                Of course, owning a Chain Dreamer will give you a special access
                to all our future collections and drugs.
              </p>
              <p>
                We chose{" "}
                <Link href="https://www.chainrunners.xyz/" target="_blank">
                  Chain Runner
                </Link>{" "}
                as our first partner project because they are on-chain, they
                have a great narrative and the community is creative.
              </p>
              <p>
                In the short term, our next improvement will be the Chain
                Dreamer rendering function. Today, while all information is
                stored on-chain, we didn't manage to keep the rendering function
                below the 50m gas limit for free rendering.
              </p>
              <p>We'll work on this right after the minting is done.</p>
              <p>
                We'll use a part of the money to build a beautiful 3D Metaverse
                version of the Candy Shop.
              </p>
              <p>
                To be part of the project, join our{" "}
                <Link href="https://discord.gg/ctCEshPB" target="_blank">
                  Discord
                </Link>{" "}
                and follow us on{" "}
                <Link href="https://twitter.com/chain_dreamers" target="_blank">
                  Twitter
                </Link>
              </p>
            </Box>
            <h2 style={{ marginTop: "48px" }}>Next project</h2>
            <Box>
              <p>
                There are high probabilities we'll stay for a while in Mega-City
                (Chain Runners Metaverse) but we'll eventually expand to any
                Metaverse.
              </p>
              <p>We will explore</p>
              <ul>
                <li>
                  on-chain AI (
                  <Link
                    href="https://twitter.com/ClementWalter"
                    target="_blank"
                  >
                    @ClementWalter
                  </Link>{" "}
                  is an expert in computer vision algorithms)
                </li>
                <li>composability innovation</li>
                <li>mixing physical identity (KYC) with minting experience</li>
              </ul>
              <p>
                There are many projects inspiring us and there is so much to do:
                Nouns, Loots, Blitmap...
              </p>
              <p>
                You are an artist, a developer or a UX designer and want to sell
                drugs with us? Feel free to{" "}
                <Link href="https://twitter.com/abbeyjazzy" target="_blank">
                  contact Jason on Twitter
                </Link>
              </p>
            </Box>
            <Box>
              <p style={{ marginTop: "32px" }}>
                <em>
                  <span style={{ color: "rgb(140, 140, 146)" }}>
                    —{" "}
                    <Link href="https://twitter.com/abbeyjazzy" target="_blank">
                      Jason
                    </Link>
                    ,{" "}
                    <Link
                      href="https://twitter.com/ClementWalter"
                      target="_blank"
                    >
                      Clément
                    </Link>{" "}
                    & and Candy Shop Team
                  </span>
                </em>
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
