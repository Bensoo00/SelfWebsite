import React, { useState, useEffect } from 'react';
import { Play, Square, Settings, Code, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const API_BASE_URL = 'https://mock-trading-api.onrender.com/api';

export default function BotControlPage() {
  const [botStatus, setBotStatus] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [activeTab, setActiveTab] = useState('control');
  const [config, setConfig] = useState({
    model_path: 'models/ppo_trading_model',
    alpaca_key: '',
    alpaca_secret: '',
    ticker: 'AAPL',
    check_interval: 300,
    initial_value: 1000
  });

  useEffect(() => {
    fetchBotStatus();
    const interval = setInterval(fetchBotStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchBotStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bot/status`);
      if (response.ok) {
        const data = await response.json();
        setBotStatus(data);
        if (data.status !== 'stopped') {
          setIsInitialized(true);
        }
      }
    } catch (error) {
      console.error('Error fetching bot status:', error);
    }
  };

  const initializeBot = async () => {
    if (!config.alpaca_key || !config.alpaca_secret) {
      alert('Please enter your Alpaca API credentials');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/bot/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      const data = await response.json();
      if (data.success) {
        setIsInitialized(true);
        fetchBotStatus();
        alert('Bot initialized successfully!');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert(`Error initializing bot: ${error.message}`);
    }
  };

  const startBot = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bot/start`, { method: 'POST' });
      const data = await response.json();
      if (data.success) {
        fetchBotStatus();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert(`Error starting bot: ${error.message}`);
    }
  };

  const stopBot = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bot/stop`, { method: 'POST' });
      const data = await response.json();
      if (data.success) {
        fetchBotStatus();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert(`Error stopping bot: ${error.message}`);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value || 0);
  };

  return (
    <div className="min-h-screen p-8" style={{
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #a8edea 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8 border"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
            borderColor: 'rgba(255,255,255,0.9)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
          }}>
          <h1 className="text-4xl font-bold mb-2" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Trading Bot Control Center
          </h1>
          <p className="text-gray-600">Manage, monitor, and configure your AI trading bot</p>
        </div>

        {/* Tab Navigation */}
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl mb-8 border overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
            borderColor: 'rgba(255,255,255,0.9)'
          }}>
          <div className="flex border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
            {[
              { id: 'control', label: 'Control Panel', icon: Settings },
              { id: 'code', label: 'Code & Scripts', icon: Code },
              { id: 'docs', label: 'Documentation', icon: FileText }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={activeTab === tab.id ? {
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                } : {}}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* CONTROL PANEL TAB */}
            {activeTab === 'control' && (
              <div className="space-y-6">
                {/* Status Cards */}
                {botStatus && (
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="p-5 rounded-2xl border shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(135,206,250,0.25) 0%, rgba(173,216,230,0.15) 100%)',
                        borderColor: 'rgba(255,255,255,0.7)'
                      }}>
                      <p className="text-xs text-gray-600 font-semibold mb-2">Status</p>
                      <p className="text-lg font-bold text-gray-800 capitalize">{botStatus.status}</p>
                    </div>
                    <div className="p-5 rounded-2xl border shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(144,238,144,0.25) 0%, rgba(152,251,152,0.15) 100%)',
                        borderColor: 'rgba(255,255,255,0.7)'
                      }}>
                      <p className="text-xs text-gray-600 font-semibold mb-2">Portfolio</p>
                      <p className="text-lg font-bold text-gray-800">{formatCurrency(botStatus.portfolio_value)}</p>
                    </div>
                    <div className="p-5 rounded-2xl border shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,218,185,0.3) 0%, rgba(255,228,196,0.2) 100%)',
                        borderColor: 'rgba(255,255,255,0.7)'
                      }}>
                      <p className="text-xs text-gray-600 font-semibold mb-2">Cash</p>
                      <p className="text-lg font-bold text-gray-800">{formatCurrency(botStatus.cash)}</p>
                    </div>
                    <div className="p-5 rounded-2xl border shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${
                          botStatus.total_pl >= 0 
                            ? 'rgba(144,238,144,0.3) 0%, rgba(152,251,152,0.2) 100%'
                            : 'rgba(255,182,193,0.3) 0%, rgba(255,192,203,0.2) 100%'
                        })`,
                        borderColor: 'rgba(255,255,255,0.7)'
                      }}>
                      <p className="text-xs text-gray-600 font-semibold mb-2">Total P/L</p>
                      <p className={`text-lg font-bold ${botStatus.total_pl >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                        {formatCurrency(botStatus.total_pl)}
                      </p>
                    </div>
                  </div>
                )}

                {/* Configuration Form */}
                {!isInitialized && (
                  <div className="p-6 rounded-2xl border shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                      borderColor: 'rgba(255,255,255,0.8)'
                    }}>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Settings className="w-6 h-6" />
                      Initialize Bot Configuration
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Alpaca API Key"
                        value={config.alpaca_key}
                        onChange={(e) => setConfig({...config, alpaca_key: e.target.value})}
                        className="px-4 py-3 rounded-xl border-2 focus:border-purple-500 focus:outline-none"
                        style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                      />
                      <input
                        type="password"
                        placeholder="Alpaca Secret Key"
                        value={config.alpaca_secret}
                        onChange={(e) => setConfig({...config, alpaca_secret: e.target.value})}
                        className="px-4 py-3 rounded-xl border-2 focus:border-purple-500 focus:outline-none"
                        style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                      />
                      <input
                        type="text"
                        placeholder="Ticker (e.g., AAPL)"
                        value={config.ticker}
                        onChange={(e) => setConfig({...config, ticker: e.target.value})}
                        className="px-4 py-3 rounded-xl border-2 focus:border-purple-500 focus:outline-none"
                        style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                      />
                      <input
                        type="number"
                        placeholder="Check Interval (seconds)"
                        value={config.check_interval}
                        onChange={(e) => setConfig({...config, check_interval: parseInt(e.target.value)})}
                        className="px-4 py-3 rounded-xl border-2 focus:border-purple-500 focus:outline-none"
                        style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                      />
                    </div>
                    <button
                      onClick={initializeBot}
                      className="w-full py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                    >
                      Initialize Bot
                    </button>
                  </div>
                )}

                {/* Control Buttons */}
                {isInitialized && (
                  <div className="flex gap-4">
                    <button
                      onClick={startBot}
                      disabled={botStatus?.status === 'active'}
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}
                    >
                      <Play className="w-6 h-6" />
                      Start Trading Bot
                    </button>
                    <button
                      onClick={stopBot}
                      disabled={botStatus?.status === 'stopped'}
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)' }}
                    >
                      <Square className="w-6 h-6" />
                      Stop Trading Bot
                    </button>
                  </div>
                )}

                {/* Warning Banner */}
                <div className="p-5 rounded-2xl border flex items-start gap-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.1) 100%)',
                    borderColor: 'rgba(255,193,7,0.3)'
                  }}>
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-orange-800 mb-1">Paper Trading Mode - Sample Script</h4>
                    <p className="text-sm text-gray-700">
                      This is simply a sample script that runs a dummy instance of my project. You can enter 'test123' and 'test456' for
                        the API and secret key, respectively.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CODE & SCRIPTS TAB */}
            {activeTab === 'code' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    borderColor: 'rgba(255,255,255,0.8)'
                  }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Structure</h3>
                  
                  <div className="space-y-4">
                    {/* Backend Files */}
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">Backend (Python)</h4>
                      <div className="space-y-2 ml-4">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="font-mono text-sm font-bold text-purple-700 mb-1">trading_api.py</p>
                          <p className="text-sm text-gray-600">Flask REST API server that manages the trading bot lifecycle</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Flask</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Alpaca API</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Threading</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="font-mono text-sm font-bold text-purple-700 mb-1">train_model.py</p>
                          <p className="text-sm text-gray-600">Trains PPO reinforcement learning model on historical stock data</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Stable-Baselines3</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">PPO</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">PyTorch</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="font-mono text-sm font-bold text-purple-700 mb-1">env/tradingEnv.py</p>
                          <p className="text-sm text-gray-600">Custom Gymnasium environment for stock trading simulation</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Gymnasium</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">NumPy</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="font-mono text-sm font-bold text-purple-700 mb-1">fetchData.py</p>
                          <p className="text-sm text-gray-600">Fetches stock data and calculates technical indicators (RSI, MACD, SMA)</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">yfinance</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Pandas</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">TextBlob NLP</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Frontend Files */}
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">Frontend (React)</h4>
                      <div className="space-y-2 ml-4">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="font-mono text-sm font-bold text-purple-700 mb-1">IntegratedTradingBot.jsx</p>
                          <p className="text-sm text-gray-600">Real-time dashboard component with live feed and performance charts</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React Hooks</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Recharts</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">REST API</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <p className="font-mono text-sm font-bold text-purple-700 mb-1">BotControlPage.jsx</p>
                          <p className="text-sm text-gray-600">Full control panel for managing bot configuration and execution</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React State</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Fetch API</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Code Snippets */}
                <div className="p-6 rounded-2xl border shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    borderColor: 'rgba(255,255,255,0.8)'
                  }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Algorithms</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Reinforcement Learning (PPO)</h4>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-xs font-mono">
{`model = PPO(
    "MlpPolicy",
    env,
    learning_rate=0.0003,
    n_steps=2048,
    batch_size=64,
    n_epochs=10,
    gamma=0.99,          # Discount factor
    gae_lambda=0.95,     # Generalized Advantage Estimation
    clip_range=0.2       # PPO clip range
)`}</pre>
                      <p className="text-sm text-gray-600 mt-2">
                        Uses Proximal Policy Optimization to learn optimal trading strategies from historical data
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technical Indicators</h4>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-xs font-mono">
{`# RSI Calculation
delta = data.diff()
gain = delta.where(delta > 0, 0).rolling(window=14).mean()
loss = -delta.where(delta < 0, 0).rolling(window=14).mean()
rs = gain / loss
rsi = 100 - (100 / (1 + rs))

# MACD Calculation
exp1 = data.ewm(span=12, adjust=False).mean()
exp2 = data.ewm(span=26, adjust=False).mean()
macd = exp1 - exp2`}</pre>
                      <p className="text-sm text-gray-600 mt-2">
                        Calculates momentum indicators to inform trading decisions
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Market Hours Detection</h4>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-xs font-mono">
{`def is_market_open(self):
    ny_tz = pytz.timezone('America/New_York')
    now = datetime.now(ny_tz)
    
    # Check if weekday (0=Monday, 6=Sunday)
    if now.weekday() >= 5:
        return False
    
    # Market hours: 9:30 AM - 4:00 PM ET
    market_open = time(9, 30)
    market_close = time(16, 0)
    
    return market_open <= now.time() <= market_close`}</pre>
                      <p className="text-sm text-gray-600 mt-2">
                        Ensures bot only trades during official market hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENTATION TAB */}
            {activeTab === 'docs' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    borderColor: 'rgba(255,255,255,0.8)'
                  }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Data Collection
                      </h4>
                      <p className="text-gray-700 ml-7">
                        The bot fetches historical stock data from Yahoo Finance and calculates technical indicators 
                        including Simple Moving Averages (SMA), Relative Strength Index (RSI), and Moving Average 
                        Convergence Divergence (MACD). It also uses NLP to analyze news sentiment.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Model Training
                      </h4>
                      <p className="text-gray-700 ml-7">
                        Uses Proximal Policy Optimization (PPO), a reinforcement learning algorithm, to train on 
                        historical data. The model learns to maximize returns by deciding when to buy, sell, or hold 
                        based on market conditions and technical indicators.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Live Trading
                      </h4>
                      <p className="text-gray-700 ml-7">
                        During market hours (9:30 AM - 4:00 PM ET), the bot monitors real-time prices and makes 
                        trading decisions using the trained model. All trades are executed through Alpaca's paper 
                        trading API with no real money involved.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Safety Features
                      </h4>
                      <ul className="text-gray-700 ml-7 space-y-1">
                        <li>• Emergency stop at 20% total loss</li>
                        <li>• Maximum 95% position sizing</li>
                        <li>• Market hours enforcement</li>
                        <li>• Comprehensive logging and monitoring</li>
                        <li>• Paper trading only (no real money)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                    borderColor: 'rgba(255,255,255,0.8)'
                  }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">API Endpoints</h3>
                  
                  <div className="space-y-3">
                    {[
                      { method: 'POST', endpoint: '/api/bot/initialize', desc: 'Initialize bot with config' },
                      { method: 'POST', endpoint: '/api/bot/start', desc: 'Start the trading bot' },
                      { method: 'POST', endpoint: '/api/bot/stop', desc: 'Stop the trading bot' },
                      { method: 'GET', endpoint: '/api/bot/status', desc: 'Get current bot status' },
                      { method: 'GET', endpoint: '/api/bot/trades', desc: 'Get trade history' },
                      { method: 'GET', endpoint: '/api/bot/performance', desc: 'Get performance metrics' },
                      { method: 'GET', endpoint: '/api/market/status', desc: 'Check market hours' }
                    ].map((api, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-200">
                        <span className={`px-3 py-1 rounded font-bold text-xs ${
                          api.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {api.method}
                        </span>
                        <code className="font-mono text-sm text-purple-700 flex-1">{api.endpoint}</code>
                        <span className="text-sm text-gray-600">{api.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}