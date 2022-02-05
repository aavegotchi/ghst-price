import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import PriceCalculator from "../components/PriceCalculator";
import { setPrice } from "../store/reducers/priceSlice";
import { RootState } from "../store/store";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const currentPrice = useSelector((state: RootState) => state.price.price);
  const currentSupply = useSelector(
    (state: RootState) => state.price.supplyNoVirtual
  );
  const totalSupply = useSelector((state: RootState) => state.price.supply);
  const dispatch = useDispatch();

  function numberWithCommas(x?: number | string): string {
    return Number(x).toLocaleString("en");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>GHST Price</title>
        <meta name="GHST Price" content="GHST Price Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          <strong>Current Price: </strong>
          {currentPrice.toFixed(3)} DAI / GHST
        </h2>

        <h2 className={styles.title}>
          <strong>Current Supply (w/ Virtual Supply):</strong>{" "}
          {numberWithCommas(totalSupply)} GHST
        </h2>

        <h2 className={styles.title}>
          <strong>Current Supply:</strong> {numberWithCommas(currentSupply)}{" "}
          GHST
        </h2>

        <button className={styles.button} onClick={() => dispatch(setPrice(0))}>
          Refresh
        </button>

        <PriceCalculator />
      </main>

      <footer className={styles.footer}></footer>

      <style jsx>
        {`
          h2 {
            font-size: 48px;
            text-align: left;
          }
          strong {
            color: #f300d3;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
