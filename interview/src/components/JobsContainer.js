import React from 'react';
import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/alljobs/allJobsSlice';
import { PageBtnContainer } from './PageBtnContainer';
export const JobsContainer = () => {
  const { jobs, isLoading, page, totalJobs, numOfPages } = useSelector(
    (store) => store.alljobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  //kaç tane job bulursa onun bilgilerini aşağıda ki komut göstericek.
  return (
    <Wrapper>
      <h5>
        {totalJobs} Job {jobs.length > 1 && 's'}
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job.id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
