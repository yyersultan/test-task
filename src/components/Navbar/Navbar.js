import { Button } from "@mui/material"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <header className="App-header">
             <Link to={'/'}> <Button variant="contained">Home</Button> </Link> 
             <Link to={'/loans'}> <Button variant="contained">Loans</Button> </Link> 
             <Link to={'/profile'}> <Button variant="contained">Profile</Button> </Link> 
      </header>
    )
}