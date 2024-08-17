/* eslint-disable react/prop-types */
import { useState } from "react";

const SortingDropdown = ({ onSortingChange }) => {
    const [sortOption, setSortOption] = useState('')

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOption(selectedSort)
        onSortingChange(selectedSort)
    }
    return (
        <div>
            <select className=" border-b-2 px-3 font-bold shadow-md" value={sortOption} onChange={handleSortChange}>
                <option value="">Sort by</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="date_desc">Date Added: Newest First</option>
            </select>
        </div>
    );
};

export default SortingDropdown;