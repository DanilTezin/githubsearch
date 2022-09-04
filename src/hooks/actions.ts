import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { githubActions } from '../store/github/github.slice';
import { fakeapiActions } from '../store/fakeapijs/fakeapijs.slice';


const actions ={
    ...githubActions,
    ...fakeapiActions
}

export const useAction = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}