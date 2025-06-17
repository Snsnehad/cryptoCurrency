'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is a cryptocurrency exchange?',
    answer: [
      `Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.`,
    ],
  },
  {
    question: 'What products does Binance provide?',
    answer: [
      `Binance is the world's leading cryptocurrency exchange, catering to 235 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.`,
      `- Trade hundreds of cryptocurrencies on Spot, Margin, and Futures markets.`,
      `- Buy and sell cryptocurrencies with Binance P2P.`,
      `- Buy or earn new tokens on Binance Launchpad.`,
      `- Trade, stake, and loan NFTs on Binance NFT marketplace.`,
    ],
  },
  {
    question: 'How to buy Bitcoin and other cryptocurrencies on Binance',
    answer: [
      `There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to purchase crypto on Binance. Before getting started, please make sure you’ve completed Identity Verification for your Binance account.`,
    ],
  },
  {
    question: 'How to track cryptocurrency prices',
    answer: [`The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the Binance Cryptocurrency Directory. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like Bitcoin, Ethereum, BNB and others in real-time.`],
  },
  {
    question: 'How to trade cryptocurrencies on Binance',
    answer: [`You can trade hundreds of cryptocurrencies on Binance via the Spot, Margin, Futures, and Options markets. To begin trading, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.`],
  },
  {
    question: 'How to earn from crypto on Binance',
    answer: [`Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on Binance Earn. Our platform offers dozens of digital assets like Bitcoin, Ethereum, and stablecoins.`],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const highlightKeywords = (text) => {
    const keywords = ['Cryptocurrency', 'Bitcoin', 'Ethereum', 'Tether', 'Binance', 'Altcoins'];
    return text.split(' ').map((word, i) => {
      const clean = word.replace(/[\.,]/g, '');
      if (keywords.includes(clean)) {
        return (
          <span key={i} className="text-yellow-400 font-medium">
            {word}{' '}
          </span>
        );
      }
      return word + ' ';
    });
  };

  return (
    <section className="text-white px-6 md:px-12 py-20 max-w-[1248px] mx-auto">
      <h2 className="text-2xl md:text-5xl text-[#eaecef] font-semibold mb-12 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-gray-800 pb-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-start w-full text-left gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md border border-[#2B3139] text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-base md:text-lg font-semibold">
                    {faq.question}
                  </span>
                </div>
                <div className={`text-yellow-400 text-xl ${isOpen && 'rounded-full bg-yellow-400 p-1.5'}`}>
                  {isOpen ? <FiMinus className='text-gray-700' /> : <FiPlus />}
                </div>
              </button>

              {isOpen && faq.answer.length > 0 && (
                <div className="mt-4 px-12 text-[#848E9C] leading-relaxed">
                  {(() => {
                    const paragraphs = [];
                    let currentList = [];

                    faq.answer.forEach((line, i) => {
                      if (line.startsWith('-')) {
                        currentList.push(
                          <li key={i}>{highlightKeywords(line.replace('- ', ''))}</li>
                        );
                      } else {
                        if (currentList.length) {
                          paragraphs.push(<ul key={`ul-${i}`} className="list-disc ml-6">{currentList}</ul>);
                          currentList = [];
                        }
                        paragraphs.push(<p key={i} className="mb-2">{highlightKeywords(line)}</p>);
                      }
                    });

                    if (currentList.length) {
                      paragraphs.push(<ul key="ul-last" className="list-disc ml-6">{currentList}</ul>);
                    }

                    return paragraphs;
                  })()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
