import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  BsLightningFill,
  FaRocket,
  FaTruckLoading,
  GoServer,
  HiUserGroup,
  ImMakeGroup,
  ImPower,
  TbFreeRights,
  TbGoGame,
  TbSdk
} from "react-icons/all";

const featureList = [
  {
    title: 'Easy to Use',
    icon: <FaRocket/>,
    description: (
      <>
        Download and start creating your dream game!
      </>
    ),
  },
  {
    title: 'Free',
    icon: <TbFreeRights/>,
    description: (
      <>
        Ragon server is completely free network solution, with open sourced code.
      </>
    ),
  },
  {
    title: 'Architecture',
    icon: <ImMakeGroup/>,
    description: (
      <>
        Room-based architecture with built-in lobby allows, you to forget about scaling, it just works.
      </>
    ),
  },
  {
    title: 'Lobby',
    icon: <HiUserGroup/>,
    description: (
      <>
        Built-in basic lobby!
      </>
    ),
  },
  {
    title: 'Perfomance',
    icon: <BsLightningFill/>,
    description: (
      <>
        The high-performance server on native sockets via ENet-Sharp battle-tested socket library.
      </>
    ),
  },
  {
    title: 'Unity Client SDK',
    icon: <TbSdk/>,
    description: (
      <>
        Ready to use Unity client SDK
      </>
    ),
  },
  {
    title: 'C# Client SDK',
    icon: <TbSdk/>,
    description: (
      <>
        Ready to use raw C# client SDK, for integration where you want
      </>
    ),
  },
  {
    title: '.NET Power',
    icon: <GoServer/>,
    description: (
      <>
        Runs on the new .NET performance and robust platform from Microsoft
      </>
    ),
  },
  {
    title: 'No CCU limitations',
    icon: <TbGoGame/>,
    description: (
      <>
        Ragon has no restriction on simultaneous connections, only technical due to the protocol that the
        ENet-Sharp library uses.
      </>
    ),
  },
  {
    title: 'Plugins',
    icon: <FaTruckLoading/>,
    description: (
      <>
        Coming soon...
      </>
    ),
  },
  {
    title: 'Matchmaking',
    icon: <FaTruckLoading/>,
    description: (
      <>
        Coming soon...
      </>
    ),
  },
];


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Network solution for unity">
      <HomepageHeader/>
      <main>
        <HomepageFeatures features={featureList}/>
      </main>
    </Layout>
  );
}
