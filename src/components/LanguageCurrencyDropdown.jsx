'use client'

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
    <div className="absolute top-full right-0 mt-2 bg-white text-black shadow-lg rounded-lg z-50 p-4 w-[420px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Language</label>
          <input
            type="text"
            placeholder="Search..."
            value={langSearch}
            onChange={(e) => setLangSearch(e.target.value)}
            className="px-2 py-1 border rounded text-sm mb-2"
          />
          <div className="max-h-48 overflow-y-auto custom-scroll">
            {filteredLangs.map((lang, i) => (
              <div key={i} className="py-1 px-2 text-sm hover:bg-gray-100 cursor-pointer rounded">
                {lang}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2">Currency</label>
          <input
            type="text"
            placeholder="Search..."
            value={currSearch}
            onChange={(e) => setCurrSearch(e.target.value)}
            className="px-2 py-1 border rounded text-sm mb-2"
          />
          <div className="max-h-48 overflow-y-auto custom-scroll">
            {filteredCurrencies.map((curr, i) => (
              <div key={i} className="py-1 px-2 text-sm hover:bg-gray-100 cursor-pointer rounded">
                {curr}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
