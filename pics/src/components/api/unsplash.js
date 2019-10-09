import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c8b4eed2aa15874a131664d22274ba0b9e0b24d4ff35c48de64279e588021954"
  }
});
