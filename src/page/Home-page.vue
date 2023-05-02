<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from "@/components/notes/Form-notes.vue";
import List from "@/components/notes/List-notes.vue";
import {setLocalNotes, getLocalNotes} from "@/utils.js";
export default {
  components: {
    Form,
    List,
  },
  mounted() {
    getLocalNotes();
  },
  methods: {
    handleSubmit(formValue) {
      this.$store.dispatch('submitNote', formValue);
      setLocalNotes();
    },
    handleRemove(index) {
      this.$store.dispatch('removeNote', index);
      setLocalNotes();
    },
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes;
    },
  },
};
</script>