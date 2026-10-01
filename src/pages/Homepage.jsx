import { useEffect } from "react";
import axios from 'axios';

export const Homepage = () => {
useEffect(() => {
    console.log('movie index effect')
    axios.get('htpp://localhost:3000/movies')
    .then(res => console.log('movie index', res.data))
    .catch(err => console.error('movie index' ,err));
 }, []);

return(
    <div className="Homepage">
        Homepage
    </div>
)};