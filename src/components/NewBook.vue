<template>
  <div class="NewBook">
    <h4>Neues Buch</h4>
    <br/>

    <div class="col-md-8 col-md-offset-3">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="control-label col-sm-2" for="title">Titel:</label>
          <div class="col-sm-4">
            <input id="title" v-model="title" class="form-control" placeholder="Titel" type="text">
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="author">Author:</label>
          <div class="col-sm-4">
            <input id="author" v-model="author" class="form-control" placeholder="Author" type="text">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="publisher">Publisher:</label>
          <div class="col-sm-4">
            <input id="publisher" v-model="publisher" class="form-control" placeholder="Publisher" type="text">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="isbn">ISBN:</label>
          <div class="col-sm-4">
            <input id="isbn" v-model="isbn" class="form-control" placeholder="ISBN" type="text">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="publication">Erscheinungsdatum:</label>
          <div class="col-sm-4">
            <input id="publication" v-model="publication" class="form-control" placeholder="Erscheinungsdatum" type="text">
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-4">
            <button type="submit" @click="addBook" class="btn btn-default">Hinzufügen</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewBook',

    data() {
      return {
        title: null,
        author: null
      }
    },

    methods: {
      addBook: function () {
        alert(this.title + " hinzugefügt")
      }
    }
  }
</script>
