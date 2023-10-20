import "./style.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/useDispatch";
import { selectMarketData } from "../../store/market/slice";
import { getMarketDataThunk } from "../../store/market/thunks";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const mainMarketData = useAppSelector(selectMarketData);

  console.log(mainMarketData);

  useEffect(() => {
    dispatch(getMarketDataThunk());
  }, []);

  const marketData = useAppSelector(selectMarketData);
  return <div>hello</div>;
};

export default MainPage;
