import axios from "axios";

const api = {

    searchNYT: function(topic, startYear, endYear) {
        const authKey = "488fcba0d75b49fba9d5619b5fbf40c2";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryURL);
    },
    getArticle: function() {
        return axios.get("/api/saved");
    },
    saveArticle: function(articleObject) {
        return axios.post("/api/saved", articleObject);
    },
    deleteArticle: function(id) {
        return axios.delete(`/api/saved/${id}`)
    }
};

export default api;