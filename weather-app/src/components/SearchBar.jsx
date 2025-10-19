import "./SearchBar.css";

function SearchBar({ city, setCity, onSearch, onClear }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter the city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
            <button className="clear-btn" onClick={onClear}>
                Clear
            </button>
        </div>
    );
}

export default SearchBar;
