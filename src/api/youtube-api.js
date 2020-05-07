import axios from "axios";

const KEY = "AIzaSyBp9GGvNcPNQzPbwQ7rGmnIqMDxWNere8s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 25,
  },
});
