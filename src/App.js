import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/header";
import Table from "./components/table"
import API from "./utils/API";
import Search from "./components/search";
import Wrapper from "./components/Wrapper/wrapper";
import Container from "./components/container";



function App() {
  const [employees, setEmployees] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  useEffect(() => {
    API.getEmployees().then(res => {
      setEmployees(res.data.results)
      console.log(res.data.results)
    })
  }, [])

function handleInputChange(e) {
  setSearchValue(e.target.value)

}

function handleFormSubmit(e) {
  setNameFilter(searchValue)
  e.preventDefault()
}

  return (

    <div>
      <Header style={{justifyContent: 'center' }}/>
      <Search searchValue={searchValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
      <Container />
      <Table results={employees} nameFilter={nameFilter}
      />
      <Wrapper />
    </div>

  );
}

export default App;