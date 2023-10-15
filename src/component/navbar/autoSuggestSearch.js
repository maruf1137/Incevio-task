import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const languages = [
  {
    name: "Html",
  },
  {
    name: "Css",
  },
  {
    name: "Javascript",
  },
  {
    name: "react",
  },
  {
    name: "Next",
  },
  {
    name: "Vue",
  },
  {
    name: "Nuxt",
  },
  {
    name: "Redux",
  },
  {
    name: "Python",
  },
  {
    name: "Php",
  },
  {
    name: "Java",
  },
  {
    name: "C",
  },
  {
    name: "C#",
  },
  {
    name: "C++",
  },
];

const AutoSuggestSearch = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(() => getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "search your data",
    value,
    onChange: onChange,
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div className="p-3  border border-1">{suggestion.name}</div>
  );

  return (
    <div className="autosuggest-search-box relative block w-full bg-white border border-gray-300 border-solid rounded-md py-0 px-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 sm:text-sm">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          container: "m-0 w-full ",
          input: "p-2 bg-transparent w-full",
        }}
      />
    </div>
  );
};

export default AutoSuggestSearch;
