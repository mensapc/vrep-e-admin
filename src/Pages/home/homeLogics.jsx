import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDatacount } from './datacountSlice';
import { fetchGraphData } from './graphDataSlice';

const HomeLogics = () => {
  const dispatch = useDispatch();
  const datacount = useSelector((state) => state.datacount);
  const graphdata = useSelector((state) => state.graphdata);
  useEffect(() => {
    dispatch(fetchDatacount());
    dispatch(fetchGraphData());
  }, []);
  return [datacount, graphdata];
};

export default HomeLogics;
