import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../product-section/SingleProduct";
import { MdOutlineSearch } from "react-icons/md";
import SortingDropdown from "../Sorting/SortingDropdown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('created_at');
    const [order, setOrder] = useState('desc');

    const [brand, setBrand] = useState([]);
    const [selectBrand, setSelectBrand] = useState('')
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');


    // console.log(brand)

    // brands
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get('http://localhost:5000/brands');
                setBrand(response.data); // Set the brands data
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);


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

    console.log(brand)

    // Fetch products when the component mounts or the page changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products?page=${page}&limit=6&search=${encodeURIComponent(searchTerm)}&sort=${sort}&order=${order}&brand=${selectBrand}&category=${encodeURIComponent(selectedCategory)}&priceRange=${priceRange}`);
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [page, searchTerm, sort, order, brand, category, selectedCategory, priceRange, selectBrand]);

    // categorizetion
    const handleBrandChange = (e) => {
        setSelectBrand(e.target.value);
        setPage(1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setPage(1); // Reset to the first page when changing category
    };


    const handlePriceRangeChange = (e) => {
        setPriceRange(e.target.value);
        setPage(1); // Reset to the first page when changing price range
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
            <div className="flex lg:w-[900px] mx-auto mt-10">
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
            <div className="lg:flex  justify-center gap-5 mt-20">
                {/* Filter Options */}
                <select className="font-bold shadow-md border-b-2 px-3" value={brand} onChange={handleBrandChange}>
                    <option value="">All Brands</option>
                    {brand.map((b) => (
                        <option key={b} value={b}>{b}</option>
                    ))}
                </select>

                <select className="font-bold shadow-md border-b-2 px-3" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {category.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
                <div className="lg:flex gap-8 items-center justify-center ">
                    <SortingDropdown onSortingChange={handleSortChange}></SortingDropdown>
                    {/* price range */}
                    <select className="font-bold shadow-md border-b-2 px-3" value={priceRange} onChange={handlePriceRangeChange}>
                        <option value="">All Prices</option>
                        <option value="0-50">Up to $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200-500">$200 - $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="1000-">Above $1000</option>
                    </select>

                </div>
            </div>
            <div>
                {/* Search Input */}

                <div className="mt-28 lg:w-[1400px] mx-auto">
                    <h1 className="text-center text-3xl font-bold"></h1>
                    <div className="grid lg:grid-cols-3 gap-10 mt-8">
                        {
                            products?.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                        }
                    </div>
                </div>

                <div className="pagination text-center my-10">
                    <button className="border p-3" onClick={handlePreviousPage} disabled={page === 1}>
                    <FaArrowLeft />

                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                            <button
                                key={pageNum}
                                onClick={() => handlePageClick(pageNum)}
                                className={`px-4 py-2 lg:ml-5 rounded-md ${page === pageNum ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    <button className="lg:ml-5  border p-3" onClick={handleNextPage} disabled={page === totalPages}>
                    <FaArrowRight className=" " />

                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;