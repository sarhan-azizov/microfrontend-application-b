import React from "react";

import { SarhanButton, SarhanIcon } from 'microfrontend-common-ui';

import styles from './page-a.scss';

const PageA = () => (
    <div className={styles.root}>
        MS B, Page A
        <SarhanButton>SarhanButton</SarhanButton>
        <SarhanIcon>SarhanIcon</SarhanIcon>
    </div>
);

export default PageA;