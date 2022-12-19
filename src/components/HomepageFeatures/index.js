import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
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
                Room-based architecture with matchmaking allows, you to forget about scaling, it just works.
            </>
        ),
    },
    {
        title: 'Matchmaking',
        icon: '&#xf11b;',
        description: (
            <>
               Built-in basic matchmaking!
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
        title: 'Custom matchmaking',
        icon: '&#xf12e;',
        description: (
            <>
                Coming soon...
            </>
        ),
    },
];

function Feature({ icon, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {}
                <i className={`las ${styles.featureIcon}`} dangerouslySetInnerHTML={{ __html: icon }}></i>
            </div>
            <div className="text--center padding--md">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
