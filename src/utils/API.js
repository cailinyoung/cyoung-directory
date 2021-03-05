import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=us";

const API = {
    getEmployees: function () {
        return axios.get(BASEURL);
    },
};

export default API;