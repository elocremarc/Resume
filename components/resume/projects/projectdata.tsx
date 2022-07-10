import ReactPlayer from "react-player";
import { Image } from "@chakra-ui/image";
import { Timeline, Tweet } from "react-twitter-widgets";
import { Grid, Box, Icon } from "@chakra-ui/react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

interface projectData {
  project: string;
  info: string;
  content: any;
}

export const projectData = [
  {
    project: "Badger DAO Web3 Chain Analysis",
    info: "Analyzed the harvest events back in time to figure out how much the strategies were making for the DAO and the depositors over time.",
    content: (
      <ReactPlayer
        muted
        playing
        loop
        width="100%"
        height="100%"
        url={
          "https://eloc.mypinata.cloud/ipfs/QmRdx6YE4D5ZtSDgWmTGoEpqQCbDGsWRBEPR5SFpb7RPyA"
        }
      />
    ),
  },
  {
    project: "Birthdays Onchain NFT Gift Giving",
    info: "Full onchain birthdays where the birthday holder can receive a present in ETH which will render the NFT as a birthday cellebration.",
    content: (
      <>
        <Grid
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Box>
            <iframe
              width="100%"
              height="500px"
              src="https://testnets.opensea.io/collection/birthday3"
            />
          </Box>
          <Box>
            <iframe
              width="100%"
              height="500px"
              src="https://birthdays.surge.sh/"
            />
          </Box>
        </Grid>
      </>
    ),
  },
  {
    project: "Royalty Free NFT",
    info: "Eth global hackathon project, project was a NFT licensing platform. Similar to premium beat or shutter stock but you get an NFT of the item your licensing to prove ownership and rights to use it.",
    content: (
      <iframe
        width="100%"
        height="500px"
        src="https://showcase.ethglobal.com/hackfs2021/royalty-free-nft"
      />
    ),
  },
  {
    project: "SNX Stats Twitter Bot",
    info: "Winner of the Open Defi Hackathon synthetix network SNX tweet bot.",
    content: (
      <>
        <Grid
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Tweet tweetId="1405586162731732994" />
          <Tweet tweetId="1398347410980618245" />
        </Grid>
      </>
    ),
  },
  {
    project: "Market Cap Stats Twitter Bot",
    info: "Twitter bot to track the marketcap of major sectors of crypto",
    content: (
      <>
        <Grid
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Tweet tweetId="1544301979626881024" />
          <Tweet tweetId="1544141395186704384" />
        </Grid>
      </>
    ),
  },
  {
    project: "MeMeta",
    info: "Finalist in Web3 Weekend hackathon. Top place in sponsor prize",
    content: (
      <>
        <Grid
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Tweet tweetId="1399364639012659201" />
        </Grid>
      </>
    ),
  },

  {
    project: "CNC Conversion",
    info: "Converted a conventional mill into a 3 axis CNC. The project included the proper sizing of stepper motors, ball screws as well as designing and wiring a custom NC controller.",
    content: (
      <Image src="https://ipfs.fleek.co/ipfs/bafybeiek6gba3kixrc5zazq54bdhh546dzpicx36rzy275yndbff5a2vx4" />
    ),
  },
  // {
  //   project: "6-axis Film Robot",
  //   info: "100% custom built with unique CNC and 3D printed parts as well motor control and electronics.",
  //   content: (
  //     <ReactPlayer
  //       muted
  //       playing
  //       loop
  //       width="100%"
  //       height="100%"
  //       url={
  //         "https://bafybeiborkm62dviribo6pocxmp3y6cylaznrh3mmo4iut53psyt6ehtkq.ipfs.dweb.link/"
  //       }
  //     />
  //   ),
  // },
  // {
  //   project: "Thinksats.com",
  //   info: "React website to display the price of common expenses in satoshis.",
  //   content: <iframe width="100%" height="500px" src="https://thinksats.com" />,
  // },

  // {
  //   project: "Bioshield",
  //   info: ` Manufactured, promoted, sold and fulfilled a brand new
  //       "bio-safety" product in just one day during the start of
  //       COVID-19 lockdown.`,
  //   content: (
  //     <Image src="https://pbs.twimg.com/media/EqdXIwwUcAELRof?format=jpg&name=large" />
  //   ),
  // },
  {
    project: "Plant Timelapse",
    info: "Raspberry Pi IoT web app controlled studio to film the growth of plants.",
    content: (
      <ReactPlayer
        muted
        playing
        loop
        width="100%"
        height="100%"
        url={
          "https://bafybeibizux4d5rx47cxbntwz5u6ogiwevcbzqtbfcyebdjcy7rtdz6ywu.ipfs.dweb.link/"
        }
      />
    ),
  },
];
