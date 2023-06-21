import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=ntXbvrTcFytBExTvlkJcbzxTohQajIk4lGlnpprHdzQ&query=",
  //   headers: {
  //     // Accept: "application/json",
  //     Authorization: "Client-ID ntXbvrTcFytBExTvlkJcbzxTohQajIk4lGlnpprHdzQ",
  //   },
});

export default customFetch;
