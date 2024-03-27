import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NewsTicker from './News'; // Import the News components
import {
  toEther,
  toWei,
  useAddress,
  useBalance,
  useContract,
  useContractMetadata,
  useContractRead,
  useContractWrite,
  useNetworkMismatch,
  useSDK,
  useSwitchChain,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { ethers } from 'ethers';


function CoinDetails({ coin, history }) {
  // Prepare the data for the line chart
  const address = useAddress();
  const chartData = history.map(dataPoint => ({ date: new Date(dataPoint[0]), price: dataPoint[1] }));
  const priceChangeColor = coin.price_change_24h < 0 ? 'red' : 'lightgreen';

  return (
    <div className="coin-details">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'auto' }} >
        <span style={{ color: priceChangeColor, fontSize: '0.8em' }}>
          {coin.price_change_24h > 0 && '+'}{coin.price_change_24h?.toFixed(2)}%
        </span>
        <h1 style={{ margin: 0 }}>
          ${coin.current_price?.toFixed(2)}
        </h1>
      </div>
      <h2>Historical Data</h2>
      <AreaChart width={500} height={300} data={chartData}  fill="rgba(200, 200, 0, 0.5)" >   
        <Area type="monotone" dataKey="price"  />
      </AreaChart>
    </div>
  );
}



function App() {
  const [coins, setCoins] = useState([]);
  const { data: nativeBalance } = useBalance();
  const balance = Number(nativeBalance?.displayValue)?.toFixed(2)
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  
  const [endDate, setEndDate] = useState(Date.now());
  const api_key = 'CG-iVtYL8LoXP5TEycWWNaVtBdG';
  // replace this with your own API key
  const holdingsData = [
    { id: 'coredaoorg', symbol: 'core', amount: [balance], cost_basis: [balance] },
    { id: 'bitcoin', symbol: 'btc', amount: [], cost_basis: [balance] },
    // replace with actual data
    // add more coins here...
  ];


  const COLORS = ['rgba(200, 150, 0, 0.7)', 'rgba(50, 100, 0, 0.5)', '#FFBB28', '#FF8042']; // add more colors if you have more coins

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${holdings.map(holding => holding.id).join(',')}`, {
      headers: {
        'X-CoinAPI-Key': api_key
      }
    })
      .then(response => {
        const updatedHoldings = holdings.map(holding => {
          const coin = response.data.find(coin => coin.id === holding.id);
          return {
            ...holding,
            name: coin.name,
            current_price: coin.current_price,
            price_change_24h: coin.price_change_24h,
            price_change_percentage_24h: coin.price_change_percentage_24h
          };
        });
        setCoins(updatedHoldings);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, [holdings]);

  const handleCoinSelect = (id) => {
    setLoading(true);
  const selected = coins.find(coin => coin.id === id);
    setSelectedCoin(selected);
  
    // Fetch historical data for the selected date range
    const promises = [];
    const date = new Date(startDate);
    while (date <= endDate) {
      const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  
      const promise = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/history?date=${formattedDate}`, {
        headers: {
          'X-CoinAPI-Key': api_key
        }
      })
        .then(response => {
          const price = response.data.market_data.current_price.usd;
          return [Date.parse(formattedDate), price];
        })
        .catch(error => {
          console.error('Error fetching historical data', error);
          return [Date.parse(formattedDate), 0]; // Return a default value
        });
  
      promises.push(promise);
      date.setDate(date.getDate() + 1); // Increment the date
    }
  
    Promise.all(promises)
      .then(history => {
        setHistory(history);
        setLoading(false);
      });
  };

  // Calculate total portfolio value
  const totalValue = coins.reduce((total, coin) => total + (coin.current_price * coin.amount), 0);

  // Calculate ROI and P&L
  const totalInvested = coins.reduce((total, coin) => total + coin.cost_basis, 0);
  const roi = ((totalValue - totalInvested) / totalInvested) * 100;
  const pnl = totalValue - totalInvested;

  return (
    <div className="App">
      <header className="App-header">
      {loading ? (
       <div className='spinn' />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 'auto', height: '500px', borderRadius: "16px" }} >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
              <div style={{ flex: 1, padding: '10px', borderRadius: '10px', boxSizing: 'border-box' }}>
              <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={coins}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="rgba(200, 100, 0, 0.5)"
                      dataKey="amount"
                    >
                      {
                        coins.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                      }
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <table>
                  <thead>
                    <tr>
                      <th>Chain</th>
                      <th>Owned</th>
                      <th>Value</th>
                      <th>USD Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coins.map((coin, index) => (
                      <tr key={index}>
                        <td>{coin.name}</td>
                        <td>{coin.amount}</td>
                        <td>${(coin.current_price * coin.amount).toFixed(2)}</td>
                        <td>${coin.price_change_24h?.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            
            
            </div>
          </div>
         )}
      </header>
    </div>
  );
}

export default App;