import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const featureList = [
    {
        title: 'Easy to Use',
        icon: '&#xf135;',
        description: (
            <>
                Download and start creating your dream game!
            </>
        ),
    },
    {
        title: 'Free',
        icon: '&#xf06b;',
        description: (
            <>
                Ragon server is completely free network solution, with open sourced code.
            </>
        ),
    },
    {
        title: 'Architecture',
        icon: '&#xf233;',
        description: (
            <>
                Room-based architecture with built-in lobby allows, you to forget about scaling, it just works.
            </>
        ),
    },
    {
        title: 'Lobby',
        icon: '&#xf11b;',
        description: (
            <>
                Built-in basic lobby!
            </>
        ),
    },
    {
        title: 'Perfomance',
        icon: '&#xf0e7;',
        description: (
            <>
                The high-performance server on native sockets via ENet-Sharp battle-tested socket library.
            </>
        ),
    },
    {
        title: '.NET Power',
        icon: '&#xf3fd;',
        description: (
            <>
                Runs on the new .NET performance and robust platform from Microsoft
            </>
        ),
    },
    {
        title: 'No CCU limitations',
        icon: '&#xf0c0;',
        description: (
            <>
                Ragon has no restriction on simultaneous connections, only technical due to the protocol that the
                ENet-Sharp library uses.
            </>
        ),
    },
    {
        title: 'Plugins',
        icon: '&#xf12e;',
        description: (
            <>
                Coming soon...
            </>
        ),
    },
    {
        title: 'Matchmaking',
        icon: '&#xf12e;',
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
