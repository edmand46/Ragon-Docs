import React from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";

export function Feature({ icon, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center" style={{ marginBottom: '-50px' }}>
                <i className={`las ${styles.featureIcon}`}>{icon}</i>
            </div>
            <div className="text--center padding--md">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}