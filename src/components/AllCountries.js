import React, { useEffect, useState } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import CountryCard from './CountryCards';
import Table from './Table'


const AllCountries = () => {
    const [countries, setCountries] = useState([{}]);
    const [country, setCountry] = useState("WorldWide")
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData,setTableData]=useState([]);
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data)
            })

    }, []);
    useEffect(() => {
        const getCountriesData = async () => {
            let response = await fetch("https://disease.sh/v3/covid-19/countries");
            let data = await response.json();
            console.log(data)
            let countries = data.map((country) => (
                {
                    name: country.country,
                    value: country.countryInfo.iso2,

                }
            ));
            setTableData(data);
            setCountries(countries);
        }
        getCountriesData();
    }, []);

    const changeCountry = async (e) => {
        let countryCode = e.target.value;
        let url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCountry(countryCode);
                setCountryInfo(data)
            })

    }
    console.log("CountryInfo", countryInfo)


    return (
        <div className="main" >
            <div className="div_left">
                <div className="header">

                    <h1>Country Data Tracker</h1>
                    <FormControl>
                        <NativeSelect value={country} onChange={changeCountry}>
                            {
                                countries.map(country => (
                                    <option value={country.value}>
                                        {country.name}
                                    </option>
                                ))
                            }

                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="countryCards">
                    <CountryCard title="Corona Cases"
                        total={countryInfo.cases}
                        cases={countryInfo.todayCases}
                    />
                    <CountryCard title="Recovered"
                        total={countryInfo.recovered}
                        cases={countryInfo.todayRecovered}
                    />
                    <CountryCard title="Deaths"
                        total={countryInfo.deaths}
                        cases={countryInfo.todayDeaths}
                    />

                </div>
                  </div>
                  <div className="div_right">
                      <Table countries={tableData} />
                  </div>

        </div>
    )
}

export default AllCountries;

