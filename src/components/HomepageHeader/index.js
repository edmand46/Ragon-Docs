import clsx from "clsx";
import styles from "../../pages/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className={styles.logo_block}>
                    <img src='img/ragon-logo.png' className={styles.logo}/>
                    <h1 className={styles.logo_text}>{siteConfig.title}</h1>
                    <p className="hero__subtitle">Beta</p>
                </div>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/installation">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}