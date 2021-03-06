import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header/header";
import Table from "./components/Table/table"
import API from "./utils/API";
import Search from "./components/Search/search";
import Wrapper from "./components/Wrapper/wrapper";
import Container from "./components/Container/container";




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
      <Header />
      <Wrapper />
      <Search searchValue={searchValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
      <Container>
      <Table results={employees} nameFilter={nameFilter}
      />
      </Container>
    </div>

  );
}

export default App;