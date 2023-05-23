import axios from "axios"

export const postEmployee = (inputs) => async () => {
  try{
    const response = await axios.post("/employees", inputs)

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

    return dispatch({ type: "LOGIN" })
  }
  catch(err){
    return err
  }
}

export const getEmployees = () => async (dispatch) => {
  try{
    const response = await axios.get("/employees")

    return dispatch({ type: "GET_EMPLOYEES", payload: response.data })
  }
  catch(err){
    return err
  }
}