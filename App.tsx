import React, { useState } from 'react';
import { FilterSection } from './components/FilterSection';
import { SummarySection } from './components/SummarySection';
import { DataTable } from './components/DataTable';
import { analyzeDashboardData } from './services/geminiService';
import { LOB_DATA, TABLE_DATA } from './constants';
import { Cloud, RotateCcw, Share2, Code, Zap } from 'lucide-react';

const App = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiReport, setAiReport] = useState<string | null>(null);

  const handleAiAnalysis = async () => {
    setIsAnalyzing(true);
    // Mock the data payload
    const dashboardData = {
      lobSummary: LOB_DATA,
      recentPolicies: TABLE_DATA.slice(0, 5)
    };
    
    // In a real scenario with API_KEY, this would call the API.
    // For this demo, if no key is present, we might get an error or mock response.
    if (!process.env.API_KEY) {
       // Simulate delay for effect
       await new Promise(resolve => setTimeout(resolve, 1500));
       setAiReport("Analysis (Demo Mode): \n• 'Life' policies dominate the portfolio (41% of total).\n• 'Health' and 'Medical' show significant recent activity.\n• Policy #229185-1 is the only active 'Lopend' status in the recent batch.");
    } else {
       const result = await analyzeDashboardData(dashboardData);
       setAiReport(result);
    }
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-gray-900 font-sans">
      {/* Top Header Bar */}
      <header className="bg-gray-900 text-gray-300 px-4 py-2 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-semibold text-sm tracking-wide">Dashboard Design</h1>
          <div className="flex items-center gap-2 text-gray-400">
             <Cloud className="w-4 h-4 hover:text-white cursor-pointer" />
             <RotateCcw className="w-4 h-4 hover:text-white cursor-pointer" />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={handleAiAnalysis}
            className="flex items-center gap-2 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded transition-colors"
            title="Generate Insights with Gemini"
          >
            <Zap className="w-3 h-3" />
            {isAnalyzing ? 'Analyzing...' : 'AI Insights'}
          </button>

          <div className="h-6 w-[1px] bg-gray-700 mx-1"></div>
          
          <div className="flex bg-gray-800 rounded p-0.5">
             <button className="px-3 py-1 bg-gray-700 text-white text-xs rounded-sm font-medium">Code</button>
             <button className="px-3 py-1 text-gray-400 text-xs hover:text-white transition-colors">Preview</button>
          </div>
          <button className="flex items-center gap-1 text-gray-400 hover:text-white text-xs">
            <Share2 className="w-3 h-3" />
            Share
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-4 md:p-6 max-w-[1600px] mx-auto">
        
        {/* AI Report Modal/Banner (Conditional) */}
        {aiReport && (
          <div className="bg-indigo-50 border border-indigo-200 p-4 mb-4 rounded-md flex justify-between items-start animate-fade-in">
             <div>
               <h3 className="text-indigo-900 font-bold text-sm mb-1 flex items-center gap-2">
                 <Zap className="w-4 h-4 fill-indigo-600 text-indigo-600"/> Gemini Analysis
               </h3>
               <div className="text-indigo-800 text-sm whitespace-pre-line leading-relaxed">
                 {aiReport}
               </div>
             </div>
             <button onClick={() => setAiReport(null)} className="text-indigo-400 hover:text-indigo-700 text-xs">Close</button>
          </div>
        )}

        <FilterSection />
        <SummarySection />
        <DataTable />
      </main>
    </div>
  );
};

export default App;