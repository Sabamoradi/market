import styles from "./style.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/useDispatch";
import {
  selectMarketData,
  selectMarketDataLoading,
} from "../../store/market/slice";
import { getMarketDataThunk } from "../../store/market/thunks";
import { getSocketConnection } from "../../store/socket/thunks";
import { Key, useEffect } from "react";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const mainMarketData = useAppSelector(selectMarketData);
  const loadingItem = useAppSelector(selectMarketDataLoading);

  console.log(mainMarketData);

  useEffect(() => {
    dispatch(getMarketDataThunk());
    dispatch(getSocketConnection());
  }, []);

  return (
    <div className="container">
      <div className={styles.main_page}>
        {!loadingItem &&
          mainMarketData.map(
            (visit: {
              price_info: any;
              code: string;
              currency1: any;
              id: number;
            }) => (
              <div className={styles.main_item} key={visit.id}>
                <div className={styles.main_wrapper}>
                  <div className={styles.left}>
                    <img
                      src={visit.currency1.image}
                      className={styles.img_top}
                      alt="img"
                    />
                    <div className={styles.left_text}>
                      <p>{visit.currency1.title_fa}</p>
                      <p className={styles.code}>{visit.code}</p>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <p className={styles.price}>{visit.price_info.price}</p>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default MainPage;
