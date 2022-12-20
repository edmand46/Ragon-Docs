import React from 'react';
import styles from './styles.module.css';
import {Feature} from "./Feature";

export default function HomepageFeatures({ features }) {

    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
