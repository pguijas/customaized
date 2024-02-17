/*
Copyright 2024 Pedro Guijas Bravo, Ángel Miguélez Millos, Elena Sánchez González, Héctor Padín Torrente 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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