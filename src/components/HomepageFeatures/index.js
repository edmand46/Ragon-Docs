import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    icon: '&#xf135;',
    description: (
        <>
          You can use built in components for prototyping your game, or build your own solution, solid and optimized for your game.
        </>
    ),
  },
  {
    title: 'Architecture',
    icon: '&#xf233;',
    description: (
        <>
          Room based architecture with matchmaking allows, you to forget about scaling, it just works.
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
    title: 'Perfomance',
    icon: '&#xf3fd;',
    description: (
        <>
          Multi-threaded server with small logic core and a balancing system between threads
        </>
    ),
  },
  {
    title: 'No CCU limitations',
    icon: '&#xf0c0;',
    description: (
        <>
          Ragon has no restriction on simultaneous connections, only technical due to the protocol that the ENet-Sharp library uses.
        </>
    ),
  },
  {
    title: 'Unity Integration',
    icon: '&#xf11b;',
    description: (
        <>
          Ragon has Unity SDK.
        </>
    ),
  },
  {
    title: 'Plugins',
    icon: '&#xf12e;',
    description: (
        <>
          You can add server side logic and intercept messages from the client using room plugins, as well as customize authorization.
        </>
    ),
  },
];

function Feature({icon, title, description}) {
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
