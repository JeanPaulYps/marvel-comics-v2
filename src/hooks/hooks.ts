import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from "../store/configureStore"; 

/** 
 * Configuration indicated in the official documentation to type dispatch 
 * and useSelector through all app
 * */ 
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector