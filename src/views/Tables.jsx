import { Fragment, useState } from "react";
import { CardBody, Col, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import tableData from "@/data/tableData";
import styles from "@/assets/scss/Tables.module.scss";

const Tables = () => {
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState(10);

    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col sm={12}>
                    <Card title="Basic Table">
                        <CardBody>
                            <div
                                className={`table-responsive  ${styles.table_wrapper}`}
                            >
                                <table className={`table ${styles.table}`}>
                                    <thead
                                        className={`text-primary thead ${styles.thead}`}
                                    >
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>City</td>
                                            <td className="text-center">
                                                Score
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className={`tbody ${styles.tbody}`}>
                                        {tableData
                                            .slice(0, 10)
                                            .map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td className="text-center">
                                                        {item.score}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card title="Colors, Icons, Labels">
                        <CardBody>
                            <div
                                className={`table-responsive  ${styles.table_wrapper}`}
                            >
                                <table className={`table ${styles.table}`}>
                                    <thead
                                        className={`text-primary thead ${styles.thead}`}
                                    >
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>City</td>
                                            <td className="text-center">
                                                Score
                                            </td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody className={`tbody ${styles.tbody}`}>
                                        {tableData
                                            ?.slice(0, 10)
                                            .map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={item.tableBg}
                                                >
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td className="text-center">
                                                        {item.score}
                                                    </td>
                                                    <td>
                                                        <i
                                                            className={`${item?.statusIcon} text-${item?.badge?.status}`}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card title="Search & Pagination">
                        <CardBody>
                            <div
                                className={`table-responsive  ${styles.table_wrapper}`}
                            >
                                <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                                    <div
                                        className={`d-flex align-items-center ${styles.search_wrapper}`}
                                    >
                                        <input
                                            className="form-control"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                        />
                                        <button className="btn" type="submit">
                                            <i className="fa fa fa-search"></i>
                                        </button>
                                    </div>
                                    <div className={styles.show_entries}>
                                        <select
                                            value={select}
                                            className="btn btn-primary"
                                            onChange={(e) =>
                                                setSelect(e.target.value)
                                            }
                                        >
                                            <option value={10}>
                                                Show 10 entries
                                            </option>
                                            <option value={25}>
                                                Show 25 entries
                                            </option>
                                            <option value={50}>
                                                Show 50 entries
                                            </option>
                                            <option value={100}>
                                                Show 100 entries
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <table className={`table ${styles.table}`}>
                                    <thead
                                        className={`text-primary thead ${styles.thead}`}
                                    >
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>City</td>
                                            <td className="text-center">
                                                Score
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className={`tbody ${styles.tbody}`}>
                                        {tableData
                                            ?.slice(0, select)
                                            .filter((item) => {
                                                return search === ""
                                                    ? item
                                                    : item.name.includes(
                                                          search
                                                      ) ||
                                                          item.email.includes(
                                                              search
                                                          ) ||
                                                          item.city.includes(
                                                              search
                                                          );
                                            })
                                            .map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td className="text-center">
                                                        {item.score}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                                <div className={styles.pagination}>
                                    <span className={styles.showing}>
                                        Showing 1 to 10 entries
                                    </span>
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    tabIndex="-1"
                                                >
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    1
                                                </a>
                                            </li>
                                            <li
                                                className={`page-item ${styles.active}`}
                                            >
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    2
                                                    <span className="sr-only">
                                                        (current)
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    4
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    5
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                >
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Tables;

