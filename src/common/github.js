import axios from "axios"

export default {
  searchByName(query, limit, page) {
    page = page || 0;
    return axios.get(`https://api.github.com/search/users?q=${query} in:name&sort=followers&per_page=${limit}&page=${page}`)
  }
}
