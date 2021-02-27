//This is the API I am calling to get my data from
// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 3000
})

//This is the user API I am going to store my TODO info in (not localhost)
// @ts-ignore
export const todosApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/Aaron/todos",
    timeout: 3000
})