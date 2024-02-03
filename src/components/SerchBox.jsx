import { MdOutlineSearch } from "react-icons/md";
import styles from "./SerchBox.module.css";

const SerchBox = ({ search, setSearch, setSearcHandler }) => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Search title" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            <button onClick={setSearcHandler}>
                <MdOutlineSearch />
            </button>
        </div>
    );
};

export default SerchBox;