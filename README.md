# Crypto Pulse

A modern cryptocurrency tracking and analysis application built with Next.js and React.

## Overview

Crypto Pulse is a real-time cryptocurrency data platform that provides market insights, coin tracking, trending analysis, and price conversion tools. It uses the CoinGecko API for fetching real-time cryptocurrency data.

## Features

- **Live Data**: Real-time cryptocurrency prices and market data
- **Coin Overview**: Comprehensive market statistics and trends
- **Trending Coins**: Track the most popular cryptocurrencies
- **Categories**: Browse coins by market categories
- **Candlestick Charts**: Technical analysis with interactive charts
- **Data Table**: Sortable and filterable coin listings
- **Exchange Listings**: View exchange information
- **Converter**: Convert between different cryptocurrencies
- **Search**: Quick search functionality for coins
- **Pagination**: Browse through large coin datasets

## Tech Stack

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Component Library**: Radix UI
- **Data Fetching**: SWR
- **Charts**: Lightweight Charts
- **Icons**: Lucide React
- **API**: CoinGecko API for cryptocurrency data

## Project Structure

```
app/                    # Next.js app directory
├── page.tsx           # Home page
├── coins/            # Coins listing page
└── [id]/            # Coin detail page

components/           # React components
├── home/            # Home page components
├── ui/              # UI component library
└── ...              # Feature components
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Documentation

- [CoinGecko API Documentation](https://www.coingecko.com/en/api/documentation)

### Build

```bash
npm run build
npm start
```

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
