import React from 'react';
import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleChange, clearFilters } from '../features/alljobs/allJobsSlice';

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.alljobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    //is loading check later
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
