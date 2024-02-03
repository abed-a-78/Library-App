//Style
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p><a href="https://react.com">Librari</a> | React.js task course</p>
            </header>
            {children}
            <footer className={styles.footer}><p>Developed by hosein with ❤️</p></footer>
        </>
    );
};

export default Layout;