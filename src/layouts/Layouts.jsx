import { Outlet } from "react-router-dom";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import Navbar from "../components/Navbars/Navbar";

const Layouts = () => {
    const { navbarFixed } = useDashboardDataContext();

    return (
        <div className={styles.layout}>
            <Navbar />
            <div
                className="p-4"
                style={{
                    marginTop: `${navbarFixed ? "80px" : "0"}`,
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Layouts;

