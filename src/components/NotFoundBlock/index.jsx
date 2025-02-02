import React from "react";
import styles from "./NotFoundBlock.module.scss";
const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено</h1>
            <p className={styles.description}>Страница с таким адресом не существует </p>
        </div>
    );
};

export default NotFoundBlock;
