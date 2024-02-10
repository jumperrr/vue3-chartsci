import axios from "axios";

export default axios.create({
  baseURL: "https://rest.statica.pl/rest/stockquotes/gpw:PLKGHM000017?type=trades&dt_from=2010-01-01&limit=10000",
  headers: {
    "Content-type": "application/json"
  },
  auth: {
    username: 'frontend2024',
    password: 'test'
  }
});