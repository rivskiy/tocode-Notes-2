<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from "@/components/notes/Form-notes.vue";
import List from "@/components/notes/List-notes.vue";
import utils from "@/utils.js";

export default {
  components: {
    Form,
    List,
  },
  mounted() {
    utils.getLocalNotes();
  },
  methods: {
    handleSubmit(formValue) {
      this.$store.dispatch('submitNote', formValue);

      utils.setLocalNotes();
    },

    handleRemove(index) {
      this.$store.dispatch('removeNote', index);

      utils.setLocalNotes();
    },
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes;
    },
  },
};
</script>