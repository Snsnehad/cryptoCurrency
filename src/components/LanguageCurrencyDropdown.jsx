'use client';

import React, { useState } from 'react';

const mockLanguages = Array.from({ length: 20 }, (_, i) => `Language ${i + 1}`);
const mockCurrencies = Array.from({ length: 20 }, (_, i) => `Currency ${i + 1}`);

export default function LanguageCurrencyDropdown() {
  const [langSearch, setLangSearch] = useState('');
  const [currSearch, setCurrSearch] = useState('');

  const filteredLangs = mockLanguages.filter(l =>
    l.toLowerCase().includes(langSearch.toLowerCase())
  );
  const filteredCurrencies = mockCurrencies.filter(c =>
    c.toLowerCase().includes(currSearch.toLowerCase())
  );

  return (
    <div className="absolute top-full right-0 mt-2 bg-[#181A20] text-white rounded-md shadow-md w-[500px] p-4 z-50">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <span className="text-sm font-medium mb-2 text-gray-400">Language</span>
          <input
            type="text"
            placeholder="Search"
            value={langSearch}
            onChange={(e) => setLangSearch(e.target.value)}
            className="bg-[#2A2D34] text-white text-sm rounded px-2 py-1 mb-2 placeholder-gray-400 focus:outline-none"
          />
          <div className="max-h-48 overflow-y-auto pr-1 custom-scroll">
            {filteredLangs.map((lang, i) => (
              <div
                key={i}
                className="px-2 py-[6px] text-sm rounded cursor-pointer hover:text-yellow-400"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium mb-2 text-gray-400">Currency</span>
          <input
            type="text"
            placeholder="Search"
            value={currSearch}
            onChange={(e) => setCurrSearch(e.target.value)}
            className="bg-[#2A2D34] text-white text-sm rounded px-2 py-1 mb-2 placeholder-gray-400 focus:outline-none"
          />
          <div className="max-h-48 overflow-y-auto pr-1 custom-scroll">
            {filteredCurrencies.map((curr, i) => (
              <div
                key={i}
                className="px-2 py-[6px] text-sm rounded cursor-pointer hover:text-yellow-400"
              >
                {curr}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
