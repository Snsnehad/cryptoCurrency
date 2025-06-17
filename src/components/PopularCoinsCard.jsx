'use client';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { RiRippleFill } from 'react-icons/ri';

export default function PopularCoinsCard() {
  const coins = [
  {
    icon: <img src="/b.png" alt="BTC" className="w-6 h-6" />,
    name: 'BTC',
    label: 'Bitcoin',
    price: '$106,687.38',
    change: '-0.39%',
  },
  {
    icon: <img src="/e.png" alt="ETH" className="w-6 h-6" />,
    name: 'ETH',
    label: 'Ethereum',
    price: '$2,583.24',
    change: '-1.65%',
  },
  {
    icon: <img src="/bnb.png" alt="BNB" className="w-6 h-6" />,
    name: 'BNB',
    label: 'BNB',
    price: '$658.47',
    change: '+0.37%',
  },
  {
    icon: <img src="/xrp.png" alt="XRP" className="w-6 h-6" />,
    name: 'XRP',
    label: 'XRP',
    price: '$2.23',
    change: '+1.51%',
  },
];

  return (
    <div className="bg-[#111214] p-4 rounded-lg text-white w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4 font-semibold">
          <span className="text-white border-b-2 border-yellow-400">Popular</span>
          <span className="text-gray-400">New Listing</span>
        </div>
        <button className="text-sm text-gray-400">View All 350+ Coins &gt;</button>
      </div>
      {coins.map((coin, index) => (
        <div key={index} className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-2">
            {coin.icon}
            <span className="font-medium">{coin.name}</span>
            <span className="text-gray-400">{coin.label}</span>
          </div>
          <div className="flex gap-4">
            <span>{coin.price}</span>
            <span className={coin.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
              {coin.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
