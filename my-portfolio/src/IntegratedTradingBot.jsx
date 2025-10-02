import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, TrendingUp, DollarSign, Play, Square, Settings } from 'lucide-react';

const API_BASE_URL = 'https://mock-trading-api.onrender.com';

export default function IntegratedTradingBot() {
  const [botStatus, setBotStatus] = useState(null);
  const [trades, setTrades] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [liveMessages, setLiveMessages] = useState([
    { time: '09:30:15', message: '🤖 Trading Bot Initializing...', type: 'system' }
  ]);
  
  const tradingChatRef = useRef(null);

  // Fetch bot data every 5 seconds
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bot status
        const statusRes = await fetch(`${API_BASE_URL}/bot/status`);
        if (statusRes.ok) {
          const statusData = await statusRes.json();
          setBotStatus(statusData);
          
          // Add status message to live feed
          if (statusData.last_action && statusData.last_action !== 'HOLD') {
            const now = new Date();
            const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            setLiveMessages(prev => [...prev.slice(-20), {
              time,
              message: `${statusData.last_action} executed`,
              type: statusData.last_action === 'BUY' ? 'buy' : 'sell'
            }]);
          }
        }

        // Fetch trades
        const tradesRes = await fetch(`${API_BASE_URL}/bot/trades?limit=10`);
        if (tradesRes.ok) {
          const tradesData = await tradesRes.json();
          setTrades(tradesData.trades || []);
        }

        // Fetch performance
        const perfRes = await fetch(`${API_BASE_URL}/bot/performance?limit=50`);
        if (perfRes.ok) {
          const perfData = await perfRes.json();
          setPerformance(perfData.performance || []);
        }
      } catch (error) {
        console.error('Error fetching bot data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (tradingChatRef.current) {
      tradingChatRef.current.scrollTop = tradingChatRef.current.scrollHeight;
    }
  }, [liveMessages]);

  // Prepare chart data
  const chartData = performance.map(p => ({
    time: new Date(p.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    value: p.portfolio_value,
    cash: p.cash,
    position: p.position_value
  }));

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value || 0);
  };

  const formatPercent = (value) => {
    return `${value >= 0 ? '+' : ''}${(value || 0).toFixed(2)}%`;
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* LEFT COLUMN: Live Feed + Mini Stats */}
      <div className="space-y-6">
        {/* Live Trading Feed */}
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
            borderColor: 'rgba(255,255,255,0.9)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
          }}>
          <div className="px-6 py-4 flex items-center justify-between border-b"
            style={{
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">AI Trading Bot - Live Feed</h2>
            </div>
            {botStatus && (
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                botStatus.status === 'active' ? 'bg-green-400/30 text-green-900' : 'bg-gray-400/30 text-gray-900'
              }`}>
                {botStatus.status === 'active' ? '● ACTIVE' : '○ IDLE'}
              </div>
            )}
          </div>
          
          <div 
            ref={tradingChatRef}
            className="p-6 h-80 overflow-y-auto space-y-3"
          >
            {liveMessages.map((entry, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-xs text-gray-500 font-mono flex-shrink-0">{entry.time}</span>
                <div className={`flex-1 px-4 py-2 rounded-2xl text-sm shadow-md border ${
                  entry.type === 'system' ? 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 border-blue-200' :
                  entry.type === 'buy' ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-900 font-semibold border-green-200' :
                  entry.type === 'sell' ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-900 font-semibold border-red-200' :
                  'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 border-gray-200'
                }`}>
                  {entry.message}
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-6 pb-4 text-xs text-gray-600 py-3 border-t"
            style={{
              background: 'linear-gradient(180deg, rgba(240,240,240,0.8) 0%, rgba(255,255,255,0.6) 100%)',
              borderTop: '1px solid rgba(0,0,0,0.08)'
            }}>
            <p className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-500 animate-pulse" />
              {botStatus && botStatus.market_open 
                ? 'Market Open | Trading Active' 
                : 'Market Closed | Monitoring Only'}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        {botStatus && (
          <div className="grid grid-cols-2 gap-4">
            <div className="backdrop-blur-xl rounded-2xl p-5 border shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(135,206,250,0.3) 0%, rgba(173,216,230,0.2) 100%)',
                borderColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
              }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">Portfolio Value</p>
                  <p className="text-2xl font-bold text-gray-800">{formatCurrency(botStatus.portfolio_value)}</p>
                </div>
                <DollarSign className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <div className="backdrop-blur-xl rounded-2xl p-5 border shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${
                  botStatus.total_pl >= 0 
                    ? 'rgba(144,238,144,0.3) 0%, rgba(152,251,152,0.2) 100%'
                    : 'rgba(255,182,193,0.3) 0%, rgba(255,192,203,0.2) 100%'
                })`,
                borderColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
              }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">Total P/L</p>
                  <p className={`text-2xl font-bold ${botStatus.total_pl >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {formatCurrency(botStatus.total_pl)}
                  </p>
                  <p className={`text-xs font-semibold ${botStatus.total_pl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPercent(botStatus.total_pl_pct)}
                  </p>
                </div>
                <TrendingUp className={`w-8 h-8 ${botStatus.total_pl >= 0 ? 'text-green-500' : 'text-red-500'}`} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Performance Chart */}
      <div className="backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
          borderColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
        }}>
        <div className="px-6 py-4 border-b"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.3)'
          }}>
          <h2 className="text-xl font-bold text-white">Real-Time Performance</h2>
          <p className="text-xs text-white/80 mt-1">Live portfolio tracking</p>
        </div>

        <div className="p-6">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#667eea" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#667eea" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="time" 
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `$${value.toFixed(0)}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.95)', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#667eea" 
                  strokeWidth={3}
                  fill="url(#colorValue)"
                  name="Portfolio Value"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-gray-400">
              <Activity className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-lg font-semibold">No performance data yet</p>
              <p className="text-sm mt-2">Start the bot to see real-time charts</p>
            </div>
          )}

          {/* Recent Trades Summary */}
          {trades.length > 0 && (
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <h3 className="text-sm font-bold text-gray-700 mb-3">Recent Trades</h3>
              <div className="space-y-2">
                {trades.slice(0, 3).map((trade, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl"
                    style={{
                      background: trade.action === 'BUY' 
                        ? 'linear-gradient(135deg, rgba(144,238,144,0.15) 0%, rgba(152,251,152,0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(255,182,193,0.15) 0%, rgba(255,192,203,0.1) 100%)'
                    }}>
                    <div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        trade.action === 'BUY' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}>
                        {trade.action}
                      </span>
                      <span className="text-sm text-gray-700 ml-3">{trade.shares} shares @ {formatCurrency(trade.price)}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(trade.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}