import axios from "axios"

export const postEmployee = (inputs) => async () => {
  const user = localStorage.getItem('user')
  try{
    const response = await axios.post("/employees", {
      ...inputs, userName: user
    })

    return response
  }
  catch(err){
    return err
  }
}

export const postWage = (inputs) => async () => {
  const user = localStorage.getItem('user')
  try{
    const response = await axios.post("/wages", {
      ...inputs, userName: user
    })

    return response
  }
  catch(err){
    return err
  }
}

export const postUser = (inputs) => async () => {
  try{
    const response = await axios.post("/users", inputs)

    return response
  }
  catch(err){
    return err
  }
}

export const isLogin = (inputs) => async (dispatch) => {
  try{
    await axios.post("/users/login", inputs)

    localStorage.setItem("isLogin", true)
    localStorage.setItem("user", inputs?.userName)

    return dispatch({ type: "LOGIN" })
  }
  catch(err){
    return err
  }
}

export const getEmployees = () => async (dispatch) => {
  try{
    const user = localStorage.getItem('user')
    const response = await axios.get("/employees?userName=" + user)

    return dispatch({ type: "GET_EMPLOYEES", payload: response.data })
  }
  catch(err){
    return err
  }
}

export const getWages = () => async (dispatch) => {
  try{
    const user = localStorage.getItem('user')
    const response = await axios.get("/wages?userName=" + user)

    return dispatch({ type: "GET_WAGES", payload: response.data })
  }
  catch(err){
    return err
  }
}