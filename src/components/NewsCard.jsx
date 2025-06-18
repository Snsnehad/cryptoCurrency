'use client';

export default function NewsCard() {
  const newsItems = [
    "SEC Delays Approval of Franklin XRP and Solana Spot ETFs",
    "Bitcoin Price Movements Could Trigger Significant Liquidations",
    "Bitcoin(BTC) Drops Below 104,000 USDT with a 3.41% Decrease in 24 Hours",
    "U.S. Supreme Court to Hold Hearing on Trump's Global Tariff Policy"
  ];

  return (
    <div className="bg-[#111214] p-4 rounded-lg text-white w-full max-w-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">News</h2>
        <button className="text-sm text-gray-400">View All News &gt;</button>
      </div>
      <ul className="text-sm space-y-3">
        {newsItems.map((news, idx) => (
          <li key={idx} className="hover:text-gray-400 cursor-pointer text-gray-300">{news}</li>
        ))}
      </ul>
    </div>
  );
}
