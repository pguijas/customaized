import React, { useState } from 'react';

interface SearchProps {
    onSumbit?: () => void; 
  }
  
const SearchComponent: React.FC<SearchProps> = ({ onSumbit }) => {

  return (
    <form onSubmit={onSumbit} className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="Write your prompt here"
        className="px-40 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-align-left"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Generate
      </button>
    </form>
  );
};

export default SearchComponent;