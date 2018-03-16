import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/wp-json/wp/v2/"
});
