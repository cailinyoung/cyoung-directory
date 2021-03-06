import React, { useState } from "react";
import TableBody from "../TableBody/tablebody";
import "./table.css";

function Table({ results, nameFilter = "" }) {
    const [sortDirection, setSortDirection] = useState(0);

    nameFilter = new RegExp(nameFilter, "i")
    results = results?.filter((result, index) => nameFilter.test(result.name.first))

    if (sortDirection) {
        results.sort((a, b) => {
            if (a.name.first < b.name.first) return -sortDirection;
            if (b.name.first < a.name.first) return sortDirection;
            return 0;
        })
    }

    return (
        <table className="table">
            <thead className="">
                <tr>
                    <th scope="col">
                        <h3 type="button">Profile Picture</h3>
                    </th>
                    <th scope="col">
                        <button type="button" class="btn btn-success" onClick={() => {
                            if (sortDirection) {
                                setSortDirection(-sortDirection)
                            } else {
                                setSortDirection(1);
                            }
                        }}>Name</button>
                    </th>
                    <th scope="col">
                        <h3 type="button">Date of Birth</h3>
                    </th>
                    <th scope="col">
                        <h3 type="button">Email</h3>
                    </th>
                    <th scope="col">
                        <h3 type="button">Phone</h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <TableBody key={index} result={result} index={index} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;