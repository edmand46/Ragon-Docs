import React from 'react';
import styles from './styles.module.css';
import {Feature} from "./Feature";


export default function HomepageFeatures({ featureList }) {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {featureList .map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>s
            </div>
        </section>
    );
}
