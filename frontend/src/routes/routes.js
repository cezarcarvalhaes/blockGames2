import axios from ("axios")

export default {
    // Gets all books
    getGames: function() {
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getGame: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteGame: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveGame: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };