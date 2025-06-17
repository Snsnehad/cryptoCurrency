import React from 'react';
import {
  FaDiscord, FaTelegram, FaTiktok, FaFacebookF, FaXTwitter, FaRedditAlien,
  FaInstagram, FaYoutube, FaWhatsapp, FaCoins, FaGlobe
} from 'react-icons/fa6';
import { PiMoonFill } from 'react-icons/pi';
import { SiCoinmarketcap } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#181A20] text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

        <div className="order-2 lg:order-1 w-full lg:w-1/5">
          <h2 className="font-bold mb-4 text-base">Community</h2>
          <div className="flex flex-wrap gap-4 text-xl mb-6">
            <FaDiscord className="hover:text-gray-700 cursor-pointer" />
            <FaTelegram className="hover:text-gray-700 cursor-pointer" />
            <FaTiktok className="hover:text-gray-700 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-700 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-700 cursor-pointer" />
            <FaRedditAlien className="hover:text-gray-700 cursor-pointer" />
            <FaInstagram className="hover:text-gray-700 cursor-pointer" />
            <SiCoinmarketcap className="hover:text-gray-700 cursor-pointer" />
            <FaYoutube className="hover:text-gray-700 cursor-pointer" />
            <FaWhatsapp className="hover:text-gray-700 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaGlobe />
              <span>English (India)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCoins />
              <span>USD-$</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Theme</span>
              <div className="bg-gray-600 rounded-full px-2 py-1 flex items-center">
                <PiMoonFill />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full lg:w-4/5 order-1 lg:order-2">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            <div>
              <h2 className="font-bold mb-4 text-base">About Us</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'About',
                  'Careers',
                  'Announcements',
                  'News',
                  'Press',
                  'Legal',
                  'Terms',
                  'Privacy',
                  'Building Trust',
                  'Blog',
                  'Community',
                  'Risk Warning',
                  'Notices',
                  'Downloads',
                  'Desktop Application',
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4 text-base">Products</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'Exchange',
                  'Buy Crypto',
                  'Pay',
                  'Academy',
                  'Live',
                  'Tax',
                  'Gift Card',
                  'Launchpool',
                  'Auto-Invest',
                  'ETH Staking',
                  'NFT',
                  'BABT',
                  'Research',
                  'Charity',
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4 text-base">Business</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'P2P Merchant Application',
                  'P2Pro Merchant Application',
                  'Listing Application',
                  'Institutional & VIP Services',
                  'Labs',
                  'Binance Connect',
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>

              <h2 className="font-bold mt-6 mb-4 text-base">Learn</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'Learn & Earn',
                  'Browse Crypto Prices',
                  'Bitcoin Price',
                  'Ethereum Price',
                  'Crypto Price Predictions',
                  'Bitcoin Price Prediction',
                  'Ethereum Price Prediction',
                  'Ethereum Upgrade (Pectra)',
                  'Buy Bitcoin',
                  'Buy BNB',
                  'Buy XRP',
                  'Buy Dogecoin',
                  'Buy Ethereum',
                  'Buy Tradable Altcoins',
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4 text-base">Service</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Affiliate</li>
                {[
                  'Affiliate',
                  'Referral',
                  'BNB',
                  'OTC Trading',
                  'Historical Market Data',
                  'Trading Insight',
                  'Proof of Reserves',
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>

              <h2 className="font-bold mt-6 mb-4 text-base">Support</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  '24/7 Chat Support',
                  'Support Center',
                  'Product Feedback & Suggestions',
                  'Fees',
                  'APIs',
                  'Binance Verify',
                  'Trading Rules',
                  'Binance Airdrop Portal',
                  'Law Enforcement Requests',
                ].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 mt-10 w-10/12 mx-auto" />

      <div className="text-sm text-gray-400 mt-10 text-center">

        Binance© 2025 &nbsp; | &nbsp; Cookie Preferences
      </div>
    </footer>
  );
};

export default Footer;
