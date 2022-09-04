import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootStates} from '../store'


export const useAppSelector: TypedUseSelectorHook<RootStates> = useSelector