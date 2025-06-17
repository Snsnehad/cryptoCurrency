'use client';

export default function NewsCard() {
  const newsItems = [
    "Federal Reserve Expected to Maintain Key Interest Rates Amid Economic Uncertainty",
    "BNB Chain Sees Significant Increase in Daily Transactions...",
    "Market Shows Moderate Buying Strength Amid MVRV Z..."
  ];

  return (
    <div className="bg-[#111214] p-4 rounded-lg text-white w-full max-w-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">News</h2>
        <button className="text-sm text-gray-400">View All News &gt;</button>
      </div>
      <ul className="text-sm space-y-3">
        {newsItems.map((news, idx) => (
          <li key={idx} className="hover:underline cursor-pointer text-gray-300">{news}</li>
        ))}
      </ul>
    </div>
  );
}
