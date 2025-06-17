'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';
import { FiDownloadCloud } from 'react-icons/fi';

const TABS = ['Desktop', 'Lite', 'Pro'];

const tabImages = {
  Desktop: '/Desktop.png',
  Lite: '/lite.svg',
  Pro: '/pro.svg',
};

const tabHeights = {
  Desktop: 'h-[400px]',
  Lite: 'h-[400px]',
  Pro: 'h-[400px]',
};

export default function DownloadSection() {
  const [activeTab, setActiveTab] = useState('Pro');

  return (
    <section className="text-white md:px-20 py-16 flex flex-col md:flex-row justify-between items-center gap-12"> 
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className={`relative w-full max-w-md rounded-xl overflow-hidden px-6 ${tabHeights[activeTab]}`}>
          <Image
            src={tabImages[activeTab]}
            alt={`${activeTab} Image`}
            fill
            className="rounded-xl object-contain"
          />
        </div>

        <div className="mt-8 flex gap-8 text-gray-400 text-sm md:text-base font-medium border-b border-gray-700 w-full max-w-md justify-center max-md:hidden">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? 'text-white border-b-2 border-yellow-400'
                  : 'hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-4 justify-between mt-6 w-full px-6">
          <button className="w-auto bg-[#333B47] text-[#EAECEF] py-2 px-3 rounded-md font-semibold">
            iOS Download
          </button>
          <button className="w-auto bg-[#333B47] text-[#EAECEF] py-2 px-3 rounded-md font-semibold">
            Android Download
          </button>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-center md:text-left">
          Trade on the go. Anywhere, <br />anytime.
        </h2>

        <div className="mt-6 flex items-center gap-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <Image
              src="/qrcode.png"
              alt="QR Code"
              width={150}
              height={150}
            />
          </div>

          <div>
            <p className="text-md text-gray-400">Scan to Download App</p>
            <p className="text-lg font-semibold text-white">iOS and Android</p>
          </div>
        </div>

        <div className="flex gap-28 mt-8 text-gray-300 text-center">
          <div className="flex flex-col items-center gap-1">
            <FaApple size={32} />
            <span className="text-sm">MacOS</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaWindows size={32} />
            <span className="text-sm">Windows</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaLinux size={32} />
            <span className="text-sm">Linux</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer">
          <FiDownloadCloud size={18} />
          <span>More Download Options</span>
        </div>
      </div>
    </section>
  );
}
