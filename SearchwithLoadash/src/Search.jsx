import classNames from "classnames";
import lodash from "lodash";
import axios from "axios";
import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const DEBOUNCE_DELAY = 1000;

export default function Search() {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncedTextValue = useDebounce(textValue, DEBOUNCE_DELAY);

  const fetchData = (text) => {
    if (text === "") return;

    setIsLoading(true);

    axios
      .get(`https://restcountries.com/v3.1/name/${text}`)
      .then((res) => {
        const countryList = res.data
          .map((country) => country.name.common)
          .filter((country) => country.name.common === text);
        setData(countryList);
        console.log(countryList);
        setIsLoading(false);
      })
      .catch(() => {
        setData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (debouncedTextValue) {
      fetchData(debouncedTextValue);
    } else {
      setData([]);
    }
  }, [debouncedTextValue]);

  const handleInputChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="control">
        <input
          onChange={handleInputChange}
          value={textValue}
          type="text"
          className="input"
          placeholder="Search for countries"
        />
      </div>

      {isLoading && (
        <div className={classNames({ loading: isLoading })}>Loading...</div>
      )}

      {textValue && !isLoading && data.length > 0 && (
        <div className={classNames("list", "is-hoverable")}>
          {data.map((country, index) => (
            <div
              key={index}
              onClick={(e) => setTextValue(country)}
              className="list-item"
            >
              {country}
            </div>
          ))}
        </div>
      )}

      {textValue && !isLoading && data.length === 0 && (
        <div>No countries found</div>
      )}
    </div>
  );
}
