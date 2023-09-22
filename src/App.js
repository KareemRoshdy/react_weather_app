import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main-content/MainContent";
import Loading from "./components/loading/Loading";

function App() {
  const api_key = "a84a2544d4d741fcb5d192514232608";

  const [data, setData] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  const [country, setCountry] = useState(null);

  // ================================= //
  const [open, setOpen] = useState(false);

  const openSearchInput = () => {
    setOpen(true);
  };
  const closeSearchInput = () => {
    setOpen(false);
  };

  const [openSearch, setOpenSearch] = useState(false);

  const openSearchView = () => {
    setOpenSearch(true);
  };
  const closeSearchView = () => {
    setOpenSearch(false);
  };

  // ============================= //

  // Search Validation
  const handelSearch = async (val) => {
    setSearchVal(val);
    if (val) {
      try {
        const res = await axios(
          `http://api.weatherapi.com/v1/search.json?key=${api_key}&aqi=yes&q=${searchVal}&days=5`
        );
        setCountry(res?.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setCountry(null);
      forecast();
    }
  };

  // handelClick
  const handelClick = async (val) => {
    setSearchVal(val);
    setData(null);

    if (searchVal) {
      try {
        const res = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&aqi=yes&q=${searchVal}&days=5`
        );
        setData(res.data);

        setSearchVal("");
        setCountry(null);
        setOpen(false);
        setOpenSearch(false);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const forecast = async () => {
    try {
      const res = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=cairo&aqi=yes&days=5`
      );

      setData(res?.data);
    } catch (error) {
      console.log(error.message);
      setData(undefined);
    }
  };

  useEffect(() => {
    forecast();
  }, []);

  // Get Current Location
  const getLocation = () => {
    setData(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const res = await axios(
            `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${latitude},${longitude}&aqi=yes&days=5`
          );
          setData(res.data);
        },
        (error) => {
          console.error("error getting user location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="app">
      <Header
        handelClick={handelClick}
        handelSearch={handelSearch}
        searchVal={searchVal}
        country={country}
        open={open}
        openSearchInput={openSearchInput}
        closeSearchInput={closeSearchInput}
        openSearch={openSearch}
        openSearchView={openSearchView}
        closeSearchView={closeSearchView}
        getLocation={getLocation}
      />

      {data ? (
        <MainContent data={data} />
      ) : data === undefined ? (
        <div className="no-data title-1">No data</div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
