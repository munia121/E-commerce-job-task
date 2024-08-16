import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../product-section/SingleProduct";
import { MdOutlineSearch } from "react-icons/md";
import SortingDropdown from "../Sorting/SortingDropdown";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('');

    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    console.log(brand)
    // {
    //     item?.map(product =>{
    //         setProduct(product)
    //     })
    // }
    // console.log(product)


    // useEffect(() => {
    //     // Fetch filter options
    //     const fetchFilterOptions = async () => {
    //         try {
    //             // const brandResponse = await axios.get('http://localhost:5000/brands');
    //             // setBrand(brandResponse.data);
    //             const categoryResponse = await axios.get('http://localhost:5000/categories');
    //             setCategory(categoryResponse.data);
    //         } catch (error) {
    //             console.error('Error fetching filter options:', error);
    //         }
    //     };

    //     fetchFilterOptions();
    // }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                if (Array.isArray(response.data)) {
                    setCategory(response.data);
                } else {
                    console.error('Expected array, but received:', response.data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    console.log(category)

    // Fetch products when the component mounts or the page changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products?page=${page}&limit=6&search=${encodeURIComponent(searchTerm)}&sort=${sort}&order=${order}&brand=${brand}&category=${encodeURIComponent(selectedCategory)}`);
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [page, searchTerm, sort, order, brand,category,selectedCategory]);

    // categorizetion
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
        setPage(1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setPage(1); // Reset to the first page when changing category
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
        setPage(1);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
        setPage(1);
    };


    // sorting
    const handleSortChange = (selectedSort) => {
        const [sortField, sortOrder] = selectedSort.split('_');
        setSort(sortField);
        setOrder(sortOrder);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1); // Reset to first page when searching
    };

    const handleSearchClick = () => {
        setPage(1); // Reset to first page when searching
        // Trigger search by changing searchTerm
    };


    // Handle pagination buttons
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handlePageClick = (pageNum) => {
        setPage(pageNum);
    };

    return (
        <div>
            {/* Filter Options */}
            {/* <select value={brand} onChange={handleBrandChange}>
                <option value="">All Brands</option>
                {brand.map((b) => (
                    <option key={b} value={b}>{b}</option>
                ))}
            </select> */}

            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                {category.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
            <div>
                {/* Search Input */}
                <div className="flex gap-8 items-center justify-center mt-10">
                    <SortingDropdown onSortingChange={handleSortChange}></SortingDropdown>
                    <div className="flex lg:w-[900px]">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search for products"
                            className="mb-4 px-4 py-3 border rounded-md w-full"
                        />
                        <button
                            onClick={handleSearchClick}
                            className="px-4  btn bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Search
                            <MdOutlineSearch size={20} />

                        </button>
                    </div>
                </div>
                <div className="mt-28 lg:w-[1400px] mx-auto">
                    <h1 className="text-center text-3xl font-bold"></h1>
                    <div className="grid lg:grid-cols-3 gap-10 mt-8">
                        {
                            products?.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                        }
                    </div>
                </div>

                <div className="pagination text-center my-10">
                    <button className="" onClick={handlePreviousPage} disabled={page === 1}>
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => handlePageClick(pageNum)}
                                className={`px-4 py-2 ml-5 rounded-md ${page === pageNum ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    <button className="ml-5" onClick={handleNextPage} disabled={page === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;