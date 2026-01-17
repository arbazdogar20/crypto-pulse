import Categories from "@/components/categories";
import CoinOverview from "@/components/home/coinOverview";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/fallback";
import TrendingCoins from "@/components/home/trendingCoins";
import { Suspense } from "react";

const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <Suspense fallback={<TrendingCoinsFallback />}>
          <Categories />
        </Suspense>
      </section>
    </main>
  );
};

export default Page;
