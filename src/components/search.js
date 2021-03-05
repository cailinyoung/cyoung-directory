import React from "react";

function Search(props) {
    console.log(props.searchValue)
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.searchValue}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Enter search term here"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
        </button>
            </div>
        </form>
    );
}

export default Search;