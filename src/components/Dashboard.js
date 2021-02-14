import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { NavigationBar } from './NavigationBar';
import Home from "./Home"
import Chat from "./Chat"
import Users from "./Users"
import Groups from "./Groups"
import Settings from "./Settings"
import NoMatch from "./NoMatch"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <React.Fragment>
      <Router>
         <NavigationBar />
         <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/chat" component={Chat} />
              <Route path="/users" component={Users} />
              <Route path="/groups" component={Groups} />
              <Route path="/settings" component={Settings} />
              <Route component={NoMatch} />
         </Switch>
      </Router>
      
    </React.Fragment>
  )
}
