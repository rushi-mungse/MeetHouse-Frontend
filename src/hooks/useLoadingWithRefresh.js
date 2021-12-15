import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/slice/authSlice";

function useLodingWithRefresh() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/refresh', {
                    withCredentials: true,
                });
                dispatch(setAuth({ data }))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }

        })()
        // reactHook();
    },[]);

    return { loading }
}

export default useLodingWithRefresh