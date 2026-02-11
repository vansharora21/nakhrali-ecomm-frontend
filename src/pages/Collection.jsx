import React, { useState, useEffect } from 'react';
import { products } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (searchQuery) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const clearAllFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setSearchQuery('');
    setSortType('relevant');
  };

  const activeFiltersCount = category.length + subCategory.length;

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, searchQuery]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options - Desktop & Mobile */}
      <div className='min-w-60'>
        {/* Mobile Filter Toggle */}
        <div className='sm:hidden mb-4'>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className='w-full flex items-center justify-between bg-white border-2 border-gray-300 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow'
          >
            <span className='flex items-center gap-2 font-medium text-gray-700'>
              <Filter size={20} />
              Filters
              {activeFiltersCount > 0 && (
                <span className='bg-black text-white text-xs rounded-full px-2 py-0.5'>
                  {activeFiltersCount}
                </span>
              )}
            </span>
            <ChevronDown 
              size={20} 
              className={`transform transition-transform ${showFilter ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Filter Panel */}
        <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
          showFilter ? 'block' : 'hidden'
        } sm:block`}>
          
          {/* Filter Header */}
          <div className='px-5 py-4 border-b border-gray-200 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
              <Filter size={20} />
              FILTERS
            </h2>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className='text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1'
              >
                <X size={16} />
                Clear All
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className='py-4 px-5 border-b border-gray-200'>
            <p className='mb-3 text-sm font-semibold text-gray-700 uppercase tracking-wide'>
              Categories
            </p>
            <div className='flex flex-col gap-2.5 text-sm'>
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label
                  key={cat}
                  className='flex items-center gap-2.5 cursor-pointer group'
                >
                  <input
                    className='w-4 h-4 cursor-pointer accent-black'
                    type='checkbox'
                    value={cat}
                    onChange={toggleCategory}
                    checked={category.includes(cat)}
                  />
                  <span className='text-gray-700 group-hover:text-black transition-colors'>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className='py-4 px-5'>
            <p className='mb-3 text-sm font-semibold text-gray-700 uppercase tracking-wide'>
              Type
            </p>
            <div className='flex flex-col gap-2.5 text-sm'>
              {['Topwear', 'Bottomwear', 'Winterwear'].map((subCat) => (
                <label
                  key={subCat}
                  className='flex items-center gap-2.5 cursor-pointer group'
                >
                  <input
                    className='w-4 h-4 cursor-pointer accent-black'
                    type='checkbox'
                    value={subCat}
                    onChange={toggleSubCategory}
                    checked={subCategory.includes(subCat)}
                  />
                  <span className='text-gray-700 group-hover:text-black transition-colors'>
                    {subCat}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className='flex-1'>
        {/* Header with Search and Sort */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
          <div className='w-full sm:w-auto'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>
              All Collections
            </h1>
            <p className='text-sm text-gray-500 mt-1'>
              {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
            {/* Search Bar */}
            <div className='relative flex-1 sm:flex-initial'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
              <input
                type='text'
                placeholder='Search products...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full sm:w-64 pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors'
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              value={sortType}
              className='px-4 py-2.5 border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white cursor-pointer focus:outline-none focus:border-black transition-colors appearance-none bg-no-repeat bg-right pr-10'
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem'
              }}
            >
              <option value='relevant'>Sort: Relevant</option>
              <option value='low-high'>Price: Low to High</option>
              <option value='high-low'>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filters Tags */}
        {activeFiltersCount > 0 && (
          <div className='flex flex-wrap gap-2 mb-6'>
            {category.map((cat) => (
              <span
                key={cat}
                className='inline-flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-full text-sm font-medium'
              >
                {cat}
                <button
                  onClick={() => setCategory(prev => prev.filter(item => item !== cat))}
                  className='hover:bg-white/20 rounded-full p-0.5 transition-colors'
                >
                  <X size={14} />
                </button>
              </span>
            ))}
            {subCategory.map((subCat) => (
              <span
                key={subCat}
                className='inline-flex items-center gap-1.5 bg-gray-700 text-white px-3 py-1.5 rounded-full text-sm font-medium'
              >
                {subCat}
                <button
                  onClick={() => setSubCategory(prev => prev.filter(item => item !== subCat))}
                  className='hover:bg-white/20 rounded-full p-0.5 transition-colors'
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {filterProducts.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <div className='text-gray-400 mb-4'>
              <Search size={64} className='mx-auto' />
            </div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No products found</h3>
            <p className='text-gray-500 mb-6'>
              Try adjusting your filters or search query
            </p>
            <button
              onClick={clearAllFilters}
              className='bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors'
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;