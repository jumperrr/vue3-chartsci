import http from "../http-common";

class ChartDataService {
  getAll() {
    return http.get("");
  }

}

export default new ChartDataService();