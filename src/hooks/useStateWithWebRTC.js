import { useRef } from "react";
import { useCallback, useState,useEffect } from "react"

export const useStateWithWebRTC = (initialState) => {
    const [state, setState] = useState(initialState);
    const cbRef = useRef();
    const updateState = useCallback((newState, cb) => {
        cbRef.current = cb;
        setState((prev) => {
            return typeof newState === 'function' ? newState(prev) : newState;
        })
    }, [])
    useEffect(() => {
        if(cbRef.current){
            cbRef.current(state);
            cbRef.current=null;
        }
    }, [state])
    return [state, updateState];
}