import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showStats } from '../../features/alljobs/allJobsSlice';
export const Stats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return <div>Stats</div>;
};
