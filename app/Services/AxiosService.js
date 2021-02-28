// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 3000
})

// @ts-ignore
export const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/gorder/todo/",
    timeout: 3000
})