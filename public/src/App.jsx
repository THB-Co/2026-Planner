import React, { useState, useEffect } from 'react';
import { Plus, Star, Trash2, Sparkles, TrendingUp, Award, Zap } from 'lucide-react';

const YearPlanner = () => {
  const [currentView, setCurrentView] = useState('cover');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dailyColor, setDailyColor] = useState('#6366f1');
  const [goals, setGoals] = useState({
    yearly: [],
    quarterly: [],
    monthly: [],
    weekly: [],
    daily: []
  });
  const [habits, setHabits] = useState({ building: [], releasing: [] });
  const [coreValues, setCoreValues] = useState([]);
  const [points, setPoints] = useState(0);
  const [dailyReflection, setDailyReflection] = useState('');
  const [celebrationMode, setCelebrationMode] = useState(false);
  const [bonusGoals, setBonusGoals] = useState([]);
  const [magicalMoments, setMagicalMoments] = useState([]);
  const [kindnessGiven, setKindnessGiven] = useState([]);
  const [kindnessReceived, setKindnessReceived] = useState([]);
  const [randomPrompt, setRandomPrompt] = useState('');

  const randomPrompts = [
    "🎤 Sing your favorite song at the top of your lungs!",
    "🎵 Play your favorite song on full blast and dance!",
    "☀️ Step outside and feel the sun on your face for 2 minutes",
    "💃 Do a silly dance in your room",
    "📞 Text someone you love and tell them why they're special",
    "🍫 Treat yourself to your favorite snack guilt-free",
    "🎨 Doodle something fun for 5 minutes",
    "🌸 Compliment a stranger today",
    "📚 Read one page of a book you love",
    "🧘 Take 3 deep breaths and smile at yourself in the mirror",
    "💌 Write yourself a kind note",
    "🎮 Play a game you loved as a kid for 10 minutes",
    "🌈 Wear your favorite color today",
    "☕ Make your favorite drink and savor every sip",
    "🎪 Try a new walking route and notice something beautiful"
  ];

  useEffect(() => {
    if (currentView === 'magical') {
      const randomIndex = Math.floor(Math.random() * randomPrompts.length);
      setRandomPrompt(randomPrompts[randomIndex]);
    }
  }, [currentView]);

  const colors = [
    { color: '#ef4444', affirmation: 'I am powerful and capable of achieving anything I set my mind to.', emoji: '🔥' },
    { color: '#f59e0b', affirmation: 'Today, I choose joy and abundance in all that I do.', emoji: '☀️' },
    { color: '#10b981', affirmation: 'I am growing stronger and wiser with each passing day.', emoji: '🌱' },
    { color: '#3b82f6', affirmation: 'I trust the journey and embrace the process.', emoji: '🌊' },
    { color: '#8b5cf6', affirmation: 'My potential is limitless, and I am ready to shine.', emoji: '✨' },
    { color: '#ec4899', affirmation: 'I am worthy of all the good things coming my way.', emoji: '💖' }
  ];

  const currentColorData = colors.find(c => c.color === dailyColor) || colors[0];

  const handleGoalComplete = () => {
    setPoints(points + 10);
    setCelebrationMode(true);
    setTimeout(() => setCelebrationMode(false), 2000);
  };

  const renderCover = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="text-center text-white space-y-8 relative z-10">
        <div className="mb-6 animate-bounce">
          <Sparkles size={80} className="mx-auto" />
        </div>
        <h1 className="text-8xl font-bold mb-4 drop-shadow-lg">Your 2026 Journey</h1>
        <p className="text-3xl opacity-90 font-light">A Year of Intentional Growth & Transformation</p>
        <div className="flex gap-4 justify-center mt-12">
          <div className="text-center">
            <div className="text-5xl mb-2">🎯</div>
            <div className="text-sm">Set Goals</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2">🌟</div>
            <div className="text-sm">Track Progress</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2">🎉</div>
            <div className="text-sm">Celebrate Wins</div>
          </div>
        </div>
        <button 
          onClick={() => setCurrentView('values')}
          className="bg-white text-purple-600 px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transition-transform shadow-2xl mt-8"
        >
          ✨ Begin Your Journey ✨
        </button>
      </div>
    </div>
  );

  const renderValues = () => (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">💎</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Your Core Values & Objectives
        </h2>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 border-4 border-purple-200">
        <p className="text-gray-700 mb-8 text-lg text-center">
          ✨ Define what matters most to you. These values will guide your journey throughout the year. ✨
        </p>
        <div className="space-y-4">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform border-2 border-yellow-300">
              <div className="text-3xl">⭐</div>
              <span className="flex-1 text-lg font-medium">{value}</span>
              <Award className="text-purple-500" size={24} />
            </div>
          ))}
          <button 
            onClick={() => {
              const newValue = prompt('Enter a core value:');
              if (newValue) setCoreValues([...coreValues, newValue]);
            }}
            className="w-full p-6 border-4 border-dashed border-purple-300 rounded-2xl text-purple-600 font-semibold text-lg hover:border-purple-500 hover:bg-purple-50 transition"
          >
            <Plus className="inline mr-2" /> Add Core Value
          </button>
        </div>
        <button 
          onClick={() => setCurrentView('quarterly')}
          className="mt-10 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
        >
          Continue to Quarterly Goals →
        </button>
      </div>
    </div>
  );

  const renderQuarterly = () => (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Current Quarter's Goals
        </h2>
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-10 border-4 border-blue-200">
        <p className="text-gray-700 mb-8 text-lg text-center">
          🚀 Set your major objectives for this quarter. What do you want to accomplish in the next 3 months?
        </p>
        <div className="space-y-4">
          {goals.quarterly.map((goal, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-300">
              <div className="flex items-center gap-4 mb-3">
                <TrendingUp className="text-green-500" size={28} />
                <span className="flex-1 text-lg font-medium">{goal.text}</span>
                <span className="text-2xl font-bold text-blue-600">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{width: `${goal.progress}%`}}
                ></div>
              </div>
            </div>
          ))}
          <button 
            onClick={() => {
              const newGoal = prompt('Enter a quarterly goal:');
              if (newGoal) setGoals({...goals, quarterly: [...goals.quarterly, {text: newGoal, progress: 0}]});
            }}
            className="w-full p-6 border-4 border-dashed border-blue-300 rounded-2xl text-blue-600 font-semibold text-lg hover:border-blue-500 hover:bg-blue-50 transition"
          >
            <Plus className="inline mr-2" /> Add Quarterly Goal
          </button>
        </div>
        <button 
          onClick={() => setCurrentView('monthly')}
          className="mt-10 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
        >
          Continue to Monthly View →
        </button>
      </div>
    </div>
  );

  const renderMonthly = () => (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📅</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Monthly Goals & Planning
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-8 border-4 border-blue-300">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span> General Objectives
          </h3>
          <div className="space-y-4">
            {goals.monthly.map((goal, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow-md border-2 border-blue-200 hover:scale-105 transition-transform">
                {goal}
              </div>
            ))}
            <button 
              onClick={() => {
                const newGoal = prompt('Enter a monthly goal:');
                if (newGoal) setGoals({...goals, monthly: [...goals.monthly, newGoal]});
              }}
              className="w-full p-4 border-4 border-dashed border-blue-300 rounded-xl text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              <Plus className="inline mr-2" /> Add Goal
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl shadow-2xl p-8 border-4 border-emerald-300">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-4xl">🌈</span> Habit Transformation
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-green-300">
              <h4 className="font-bold text-green-600 mb-4 text-xl flex items-center gap-2">
                <Sparkles size={24} /> Growing & Building:
              </h4>
              {habits.building.map((habit, idx) => (
                <div key={idx} className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  <span className="flex-1">{habit}</span>
                </div>
              ))}
              <button 
                onClick={() => {
                  const newHabit = prompt('Habit to build:');
                  if (newHabit) setHabits({...habits, building: [...habits.building, newHabit]});
                }}
                className="text-green-600 hover:underline font-semibold mt-2"
              >
                + Add habit to build
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-600 mb-4 text-xl flex items-center gap-2">
                <Zap size={24} /> Releasing & Letting Go:
              </h4>
              <p className="text-sm text-gray-600 mb-3 italic">✨ Make space for what serves you ✨</p>
              {habits.releasing.map((habit, idx) => (
                <div key={idx} className="p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">🦋</span>
                  <span className="flex-1">{habit}</span>
                </div>
              ))}
              <button 
                onClick={() => {
                  const newHabit = prompt('Habit to release:');
                  if (newHabit) setHabits({...habits, releasing: [...habits.releasing, newHabit]});
                }}
                className="text-amber-600 hover:underline font-semibold mt-2"
              >
                + Add habit to release
              </button>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => setCurrentView('weekly')}
        className="mt-10 w-full max-w-2xl mx-auto block bg-gradient-to-r from-green-600 to-blue-600 text-white py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
      >
        Continue to Weekly View →
      </button>
    </div>
  );

  const renderWeekly = () => (
    <div className="max-w-5xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Weekly Goals & Planning
        </h2>
      </div>
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-10 border-4 border-indigo-300">
        <p className="text-gray-700 mb-8 text-lg text-center">
          📈 Break down your monthly goals into weekly objectives. What specific outcomes do you want this week?
        </p>
        
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <th className="border-2 border-indigo-400 p-4 text-left font-bold">Weekly Goal 🎯</th>
                <th className="border-2 border-indigo-400 p-4 text-left font-bold">3 Actionable Steps ✅</th>
                <th className="border-2 border-indigo-400 p-4 text-center font-bold">Goal Met? 🎉</th>
                <th className="border-2 border-indigo-400 p-4 text-left font-bold">In Progress 📊</th>
              </tr>
            </thead>
            <tbody>
              {goals.weekly.length === 0 ? (
                <tr>
                  <td colSpan="4" className="border-2 border-gray-200 p-8 text-center text-gray-500">
                    <div className="text-4xl mb-2">🚀</div>
                    No weekly goals yet. Add one below to get started!
                  </td>
                </tr>
              ) : (
                goals.weekly.map((goal, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50 transition-colors">
                    <td className="border-2 border-gray-200 p-4 font-medium">{goal.text}</td>
                    <td className="border-2 border-gray-200 p-4">
                      <ul className="space-y-2">
                        {goal.steps?.map((step, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-green-500">✓</span> {step}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="border-2 border-gray-200 p-4 text-center">
                      <input type="checkbox" className="w-6 h-6 cursor-pointer" />
                    </td>
                    <td className="border-2 border-gray-200 p-4">
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 h-4 rounded-full" style={{width: '40%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600 mt-1 block">40% Complete</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <button 
          onClick={() => {
            const goal = prompt('Enter weekly goal:');
            if (goal) {
              const steps = [];
              for (let i = 1; i <= 3; i++) {
                const step = prompt(`Step ${i}:`);
                if (step) steps.push(step);
              }
              setGoals({...goals, weekly: [...goals.weekly, {text: goal, steps}]});
            }
          }}
          className="mt-6 w-full p-5 border-4 border-dashed border-indigo-300 rounded-2xl text-indigo-600 font-bold text-lg hover:border-indigo-500 hover:bg-indigo-50 transition"
        >
          <Plus className="inline mr-2" size={24} /> Add Weekly Goal
        </button>

        <button 
          onClick={() => setCurrentView('daily')}
          className="mt-10 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
        >
          Continue to Daily View →
        </button>
      </div>
    </div>
  );

  const renderDaily = () => (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">☀️</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-3">
          Daily Planning
        </h2>
        <p className="text-2xl text-gray-600 font-medium">
          {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {celebrationMode && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="text-9xl animate-bounce">🎉</div>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl p-8 border-4 border-purple-300 transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <span className="text-3xl">🎨</span> Color of the Day
          </h3>
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            {colors.map(c => (
              <button
                key={c.color}
                onClick={() => setDailyColor(c.color)}
                className={`w-16 h-16 rounded-full shadow-lg transform hover:scale-110 transition-transform ${dailyColor === c.color ? 'ring-4 ring-white scale-110' : ''}`}
                style={{backgroundColor: c.color}}
                title={c.emoji}
              >
                <span className="text-2xl">{c.emoji}</span>
              </button>
            ))}
          </div>
          <div className="p-5 bg-white rounded-2xl italic text-gray-800 shadow-inner border-2 border-purple-200 text-center">
            <div className="text-4xl mb-3">{currentColorData.emoji}</div>
            <p className="font-medium">"{currentColorData.affirmation}"</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl shadow-2xl p-8 border-4 border-yellow-300 transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <span className="text-3xl">✨</span> Points & Progress
          </h3>
          <div className="text-center">
            <div className="text-7xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-3 animate-pulse">
              {points}
            </div>
            <p className="text-gray-700 font-semibold text-lg mb-6">Total Points Earned 🏆</p>
            <button 
              onClick={handleGoalComplete}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl font-bold hover:scale-110 transform transition shadow-lg text-lg"
            >
              🎯 Goal Completed! +10
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl shadow-2xl p-8 border-4 border-blue-300 transform hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <span className="text-3xl">📊</span> Quick Stats
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
              <span className="text-gray-700 flex items-center gap-2">
                <span className="text-2xl">✅</span> Daily Goals:
              </span>
              <span className="font-bold text-2xl text-blue-600">{goals.daily.length}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
              <span className="text-gray-700 flex items-center gap-2">
                <span className="text-2xl">🌱</span> Habits Building:
              </span>
              <span className="font-bold text-2xl text-green-600">{habits.building.length}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
              <span className="text-gray-700 flex items-center gap-2">
                <span className="text-2xl">🦋</span> Habits Releasing:
              </span>
              <span className="font-bold text-2xl text-amber-600">{habits.releasing.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl p-10 mb-8 border-4 border-indigo-300">
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-4xl">🎯</span> Today's Steps
        </h3>
        <div className="space-y-4">
          {goals.daily.map((goal, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform border-2 border-indigo-200">
              <input type="checkbox" className="w-7 h-7 cursor-pointer" />
              <span className="flex-1 text-lg">{goal}</span>
              <Trash2 
                size={22} 
                className="text-gray-400 hover:text-red-500 cursor-pointer transition"
                onClick={() => setGoals({...goals, daily: goals.daily.filter((_, i) => i !== idx)})}
              />
            </div>
          ))}
          <button 
            onClick={() => {
              const newGoal = prompt('Add a daily step:');
              if (newGoal) setGoals({...goals, daily: [...goals.daily, newGoal]});
            }}
            className="w-full p-6 border-4 border-dashed border-indigo-300 rounded-2xl text-indigo-600 font-bold text-lg hover:border-indigo-500 hover:bg-indigo-50 transition"
          >
            <Plus className="inline mr-2" size={24} /> Add Daily Step
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl shadow-2xl p-10 border-4 border-pink-300">
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-4xl">💭</span> Daily Reflection
        </h3>
        <textarea 
          value={dailyReflection}
          onChange={(e) => setDailyReflection(e.target.value)}
          placeholder="What went well today? 🌟 What did you learn? 📚 What are you grateful for? 💖"
          className="w-full h-40 p-6 border-2 border-pink-300 rounded-2xl resize-none focus:ring-4 focus:ring-pink-300 focus:border-pink-400 text-lg shadow-inner"
        />
      </div>
    </div>
  );

  const renderMagical = () => (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">✨</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-3">
          Today's Magic & Kindness
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          Celebrate the little moments that make life beautiful 🌈
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 rounded-3xl shadow-2xl p-10 mb-8 border-4 border-yellow-300 transform hover:scale-105 transition-transform">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-4xl">🎲</span> Your Random Joy Prompt
        </h3>
        <p className="text-gray-600 mb-6 text-lg">Try this today and see how it makes you feel!</p>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-yellow-400 text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">{randomPrompt}</p>
          <button 
            onClick={() => {
              const randomIndex = Math.floor(Math.random() * randomPrompts.length);
              setRandomPrompt(randomPrompts[randomIndex]);
            }}
            className="bg-gradient-className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:scale-110 transform transition shadow-lg"
          >
            🎲 Give me another prompt!
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl shadow-2xl p-8 border-4 border-green-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">🎁</span> Bonus Wins!
          </h3>
          <p className="text-gray-600 mb-6">
            Completed something that wasn't on your list? Celebrate it here and earn bonus points! 🌟
          </p>
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {bonusGoals.map((goal, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border-2 border-green-200">
                <span className="text-2xl">🏆</span>
                <span className="flex-1">{goal}</span>
                <span className="text-green-600 font-bold">+5</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              const bonus = prompt('What did you accomplish that wasn\'t on your list?');
              if (bonus) {
                setBonusGoals([...bonusGoals, bonus]);
                setPoints(points + 5);
                setCelebrationMode(true);
                setTimeout(() => setCelebrationMode(false), 2000);
              }
            }}
            className="w-full p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Plus className="inline mr-2" /> Add Bonus Win (+5 points)
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl p-8 border-4 border-purple-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">💫</span> Magical Moments
          </h3>
          <p className="text-gray-600 mb-6">
            Notice the small wonders! Catching all green lights, a stranger's smile, a perfect parking spot... ✨
          </p>
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {magicalMoments.map((moment, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow-md border-2 border-purple-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌟</span>
                  <p className="flex-1">{moment}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              const moment = prompt('What magical moment happened today?');
              if (moment) setMagicalMoments([...magicalMoments, moment]);
            }}
            className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Plus className="inline mr-2" /> Add Magical Moment
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-rose-100 to-red-100 rounded-3xl shadow-2xl p-8 border-4 border-rose-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">💝</span> Kindness I Gave
          </h3>
          <p className="text-gray-600 mb-4 text-sm italic">
            Kindness means: showing care, compassion, or thoughtfulness toward others. It can be as simple as holding a door, offering a genuine compliment, listening without judgment, or helping someone in need. 💕
          </p>
          <div className="space-y-3 mb-4 max-h-56 overflow-y-auto">
            {kindnessGiven.map((act, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow-md border-2 border-rose-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <p className="flex-1">{act}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              const act = prompt('What kind thing did you do today?');
              if (act) setKindnessGiven([...kindnessGiven, act]);
            }}
            className="w-full p-4 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Plus className="inline mr-2" /> Add Act of Kindness
          </button>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl shadow-2xl p-8 border-4 border-blue-300">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">💙</span> Kindness I Received
          </h3>
          <p className="text-gray-600 mb-6">
            Someone let you merge in traffic? A friend texted to check in? Acknowledge the good others brought to your day! 🌻
          </p>
          <div className="space-y-3 mb-4 max-h-56 overflow-y-auto">
            {kindnessReceived.map((act, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow-md border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🙏</span>
                  <p className="flex-1">{act}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              const act = prompt('What kind thing did someone do for you?');
              if (act) setKindnessReceived([...kindnessReceived, act]);
            }}
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Plus className="inline mr-2" /> Add Received Kindness
          </button>
        </div>
      </div>
    </div>
  );

  const renderNavigation = () => (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white p-5 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Sparkles size={32} /> 2026 Planner
        </h1>
        <nav className="flex gap-6 font-semibold text-lg">
          {currentView !== 'cover' && (
            <>
              <button onClick={() => setCurrentView('cover')} className="hover:scale-110 transition-transform">🏠 Home</button>
              <button onClick={() => setCurrentView('values')} className="hover:scale-110 transition-transform">💎 Values</button>
              <button onClick={() => setCurrentView('quarterly')} className="hover:scale-110 transition-transform">🎯 Quarterly</button>
              <button onClick={() => setCurrentView('monthly')} className="hover:scale-110 transition-transform">📅 Monthly</button>
              <button onClick={() => setCurrentView('weekly')} className="hover:scale-110 transition-transform">📊 Weekly</button>
              <button onClick={() => setCurrentView('daily')} className="hover:scale-110 transition-transform">☀️ Daily</button>
              <button onClick={() => setCurrentView('magical')} className="hover:scale-110 transition-transform">✨ Magic</button>
            </>
          )}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {currentView !== 'cover' && renderNavigation()}
      {currentView === 'cover' && renderCover()}
      {currentView === 'values' && renderValues()}
      {currentView === 'quarterly' && renderQuarterly()}
      {currentView === 'monthly' && renderMonthly()}
      {currentView === 'weekly' && renderWeekly()}
      {currentView === 'daily' && renderDaily()}
      {currentView === 'magical' && renderMagical()}
    </div>
  );
};

export default YearPlanner;
