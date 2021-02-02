import axios from "axios"

export default {
  searchByName(query, limit) {
    return axios.get(`https://api.github.com/search/users?q=${query} in:name&sort=followers&per_page=${limit}`)
  }
}
