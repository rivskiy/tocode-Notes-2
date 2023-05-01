<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from "@/components/notes/Form-notes.vue";
import List from "@/components/notes/List-notes.vue";

export default {
  components: {
    Form,
    List,
  },
  mounted() {
    this.getLocalNotes()
  },
  methods: {
    getLocalNotes() {
      this.$store.dispatch('getLocalNotes')
    },

    handleSubmit(formValue) {
      this.$store.dispatch('submitNote', formValue)
    },

    handleRemove(index) {
      this.$store.dispatch('removeNote', index)
    },
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes
    }
  }
};
</script>