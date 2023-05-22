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