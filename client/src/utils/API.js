import axios from "axios";

export default {
  // Gets all books
  getResults: function() {
    return axios.get("/api/results");
  },
  // Gets the book with the given id
  getResult: function(id) {
    return axios.get("/api/results/" + id);
  },
  // Deletes the book with the given id
  deleteResult: function(id) {
    return axios.delete("/api/results/" + id);
  },
  // Saves a book to the database
  saveResult: function(bookData) {
    return axios.post("/api/results", bookData);
  }
};
