import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/slice/authSlice";

function useLodingWithRefresh() {
    const [loading, setLoading] = useState(true)
    const [unMounted,setUnMounted]=useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/refresh', {
                    withCredentials: true,
                });
                if(!unMounted){
                    dispatch(setAuth({ data }))
                    setLoading(false)
                    setUnMounted(true)
                }
            } catch (error) {
                setLoading(false)
            }

        })()
    });

    return { loading }
}

export default useLodingWithRefresh