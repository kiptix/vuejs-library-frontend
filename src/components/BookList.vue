<template>
  <div class="BookList">
    <h2>Bibliotheksverwaltung</h2>
    <br/>

    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Title</th>
          <th>Autor</th>
          <th>Verlag</th>
          <th>ISBN</th>
          <th>Erscheinungsdatum</th>
          <th>Verliehen</th>
          <th>Ausleihen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books">
          <td>{{ index + 1 }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.publisher }}</td>
          <td>{{ book.isbn }}</td>
          <td>{{ book.publication }}</td>
          <td>{{ book.user }}</td>
          <td>
            <button class="btn btn-info" v-if="canBorrow(book)" @click="borrow(book)">ausleihen</button>
            <button class="btn btn-warning" v-else-if="canReturn(book)" @click="returnBook(book)">zurück</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'BookList',

    data() {
      return {
        username: null,
        books: [{
          title: "Schönes Buch",
          author: "ich",
          publisher: "Schöne Bücher Verlag",
          isbn: "q3e908q43r908",
          publication: "Mai 2014",
          user: null,
          _links: []
        }]
      }
    },

//    created: function () {
//      this.fetchData()
//    },

    methods: {
//      fetchData: function () {
//        var self = this;
//
//        this.$http.get('http://localhost:8080/books')
//          .then(function (response) {
//            self.books = response.body._embedded.books
//          }, function (response) {
//            alert("error")
//          });
//      },

      borrow: function (book) {
        var self = this;
        this.$http.post(book._links.borrow.href, self.username)
          .then(function (response) {
              self.fetchData();
            }, function (response) {
              alert("error")
            }
          );
      },

      returnBook: function (book) {
        var self = this;
        this.$http.post(book._links.return.href, {})
          .then(function (response) {
              self.fetchData();
            }, function (response) {
              alert("error")
            }
          );
      },

      canBorrow: function (book) {
        return book._links.hasOwnProperty('borrow');
      },

      canReturn: function (book) {
        return book._links.hasOwnProperty('return');
      }
    }

  }
</script>
