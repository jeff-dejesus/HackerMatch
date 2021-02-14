import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <h2>Home page</h2>
            <div>edit your home profile here</div>
        </>
    )
}
