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
        <div className="px-4">
            <select className=" border p-3 rounded-md font-bold " value={sortOption} onChange={handleSortChange}>
                <option className="" value="">Sort by</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="date_desc">Date Added: Newest First</option>
            </select>
        </div>
    );
};

export default SortingDropdown;