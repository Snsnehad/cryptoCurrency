import React from "react";

const Dropdown = () => {
  return (
    <div className="absolute left-0 top-full mt-3 w-[600px] bg-[#181A20] text-white shadow-lg rounded-md p-6 z-50">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm text-[#5e6673] mb-2">Basic</h3>
          <ul className="space-y-2 text-[14px] leading-[22px]">
            <li>🔧 Spot<br /><span className="text-gray-400 text-xs">Buy and sell on the Spot market</span></li>
            <li>📈 Margin<br /><span className="text-gray-400 text-xs">Increase your profits with leverage</span></li>
            <li>💳 P2P<br /><span className="text-gray-400 text-xs">Buy & sell using 800+ options</span></li>
            <li>🔄 Convert & Block Trade<br /><span className="text-gray-400 text-xs">Trade at all sizes</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm text-[#5e6673] mb-2">Advanced</h3>
          <ul className="space-y-2 text-[14px] leading-[22px]">
            <li>⚡ Alpha <span className="bg-yellow-400 text-black text-[10px] px-1 rounded ml-1">new</span><br /><span className="text-gray-400 text-xs">Web3 via Alpha Trading</span></li>
            <li>🤖 Trading Bots<br /><span className="text-gray-400 text-xs">Automated strategies</span></li>
            <li>📊 Copy Trading<br /><span className="text-gray-400 text-xs">Follow top traders</span></li>
            <li>🛠️ APIs<br /><span className="text-gray-400 text-xs">Unlimited opportunities</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
