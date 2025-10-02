import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import TableView from './pages/TableView'
import ListView from './pages/ListView'
import AddNewEntry from './components/AddNewEntry'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/tableView' element={<TableView/>} />
        <Route path='/listView' element={<ListView/>} />
        <Route path='/addNewEntery' element={<AddNewEntry/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
