# Crypto Pulse

Production-grade cryptocurrency intelligence dashboard built with **Next.js**, **SWR**, and **Lightweight Charts**.

## 🎯 Problem & Real-World Value

Crypto markets move fast, but reliable data is often fragmented across multiple tools, delayed UIs, and noisy dashboards. **Crypto Pulse** solves this by delivering a single, performance-focused interface for live pricing, trend discovery, market context, and quick conversion workflows.

For users, this means faster decision support. For engineering teams and recruiters, it demonstrates the ability to build a modern, scalable frontend system that balances **real-time data access**, **UX clarity**, and **operational constraints** (API limits, caching strategy, and responsive rendering).

## 💡 Why I Built This

I built Crypto Pulse to apply production-level frontend architecture patterns to a high-throughput, real-time domain. The goal was to create more than a UI demo: a technically disciplined project that reflects how data-heavy applications are designed in real-world teams.

This project showcases:

- Strong component boundaries and reusable UI primitives
- Practical API-driven architecture with graceful fallbacks
- Performance-minded rendering and data-fetching decisions
- Clear tradeoff thinking around scale, responsiveness, and maintainability

## ✨ Core Features

- **Live Market Data**: Real-time coin prices and market metrics
- **Coin Detail Experience**: Rich coin pages with charting and metadata
- **Trending Discovery**: Quickly identify momentum assets
- **Category-Based Exploration**: Browse market segments efficiently
- **Interactive Candlestick Charts**: Visual technical analysis via Lightweight Charts
- **Search & Conversion Utilities**: Fast symbol lookup and value conversion
- **Paginated Coin Listings**: Stable navigation across large datasets
- **Exchange Listings & Market Context**: Broader ecosystem visibility

## 🧱 Architecture & Design Decisions

### Why Next.js

- **App Router + Server Components** provide a strong baseline for scalable page composition and rendering strategy.
- **Hybrid rendering options** allow balancing SSR/SSG/dynamic behavior by route and data volatility.
- **Production tooling** (routing, optimization, build pipeline) reduces infrastructure friction and keeps focus on product engineering.

### Why SWR

- **Stale-while-revalidate** behavior keeps UI responsive while background refresh maintains freshness.
- **Cache deduplication** avoids redundant requests across components requesting overlapping data.
- **Declarative data hooks** improve maintainability and make loading/error states predictable and reusable.

### Why Lightweight Charts

- Built for **high-performance financial visualization** with smooth interactions and low rendering overhead.
- Provides essential chart primitives without heavyweight abstractions, keeping bundle and runtime cost controlled.
- Good fit for iterative enhancement from basic trend lines to richer market analysis views.

## 🛡️ Engineering Challenges Solved

- **Handling API Rate Limits Under Load**: Implemented cache-first retrieval and request deduplication with SWR to prevent bursty duplicate calls, reducing pressure on CoinGecko while preserving data freshness.
- **Managing Real-Time Updates Without UI Instability**: Used stale-while-revalidate patterns so users always see immediately available data, with background refreshes that avoid blocking interactions or causing disruptive state churn.
- **Optimizing Financial Chart Rendering Performance**: Chose Lightweight Charts for low-overhead rendering and isolated chart-heavy UI paths to minimize unnecessary rerenders during frequent market data updates.
- **Maintaining Responsiveness on Large Market Datasets**: Combined pagination with modular table composition to keep memory usage and render cost predictable as the number of tracked assets scales.
- **Designing for Production Resilience**: Added progressive loading/fallback states and component-level boundaries to keep the interface stable during transient API latency, partial failures, or high-volatility traffic windows.

## ⚡ Performance Optimizations

- **SWR Caching Layer**: Reuses responses across views to reduce duplicate network traffic.
- **Stale-While-Revalidate Fetching**: Serves cached data instantly, then refreshes in background.
- **Pagination Strategy**: Limits dataset size per request and keeps table rendering cost bounded.
- **Granular Component Composition**: Isolates updates so expensive UI sections rerender less often.
- **Memoization Patterns**: Uses React memoization where beneficial for derived values and stable props.
- **Progressive UX States**: Fallback/loading components keep perceived performance high during fetches.

## 📈 Scalability Considerations

- **API Rate-Limit Awareness**: Request patterns are structured to avoid unnecessary bursts against CoinGecko.
- **Revalidation Strategy**: Data freshness is tuned by volatility and user relevance, not brute-force polling.
- **Modular Feature Layout**: Domain components (`home`, `charts`, `table`, `search`, `converter`) can evolve independently.
- **Reusable UI Foundation**: Shared UI primitives reduce duplication and speed up future feature delivery.
- **Extensible Data Layer**: SWR hook patterns can be expanded to support additional providers or aggregation APIs.

## 🗺️ Future Improvements

- [ ] Add authenticated watchlists and portfolio tracking
- [ ] Introduce historical backtesting overlays and indicator presets
- [ ] Add server-side aggregation/cache proxy to further reduce external API pressure
- [ ] Expand automated test coverage (unit + integration for critical data flows)
- [ ] Add observability hooks (error tracking + performance telemetry)
- [ ] Improve accessibility coverage (keyboard-first chart/table workflows)

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19, Tailwind CSS 4, Radix UI
- **Data Fetching**: SWR
- **Charts**: Lightweight Charts
- **Icons**: Lucide React
- **API Source**: CoinGecko API

## 📁 Project Structure

```text
app/
├── page.tsx                 # Home dashboard
├── coins/page.tsx           # Coin listing view
└── coins/[id]/page.tsx      # Coin detail view

components/
├── home/                    # Home-specific blocks
├── ui/                      # Shared design-system primitives
└── ...                      # Feature-level components

lib/
└── coingecko.actions.ts     # Data access layer for CoinGecko
```

## 🚀 Getting Started

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open http://localhost:3000

### Build for production

```bash
npm run build
npm start
```

## 📜 Scripts

- `npm run dev` — start development server
- `npm run build` — build production bundle
- `npm start` — start production server
- `npm run lint` — run ESLint

## 🔗 API Reference

- CoinGecko API Documentation: https://www.coingecko.com/en/api/documentation
