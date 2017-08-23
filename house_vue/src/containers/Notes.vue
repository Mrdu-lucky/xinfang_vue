<template>
  <div id="notes">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from '../components/notes/Toolbar.vue'
import NotesList from '../components/notes/NotesList.vue'
import Editor from '../components/notes/Editor.vue'
export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>
<style scoped>
  #notes{
    height:600px;
  }

</style>
