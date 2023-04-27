<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from "@/components/notes/Form-notes.vue";
import List from "@/components/notes/List-notes.vue";

export default {
  components: {
    Form,
    List,
  },
  data() {
    return {
      notes: [
        {
          title: "Some work task",
          tags: ["work"],
        },
        {
          title: "Some home task",
          tags: ["home", "learn"],
        },
        {
          title: "Some task",
          tags: [],
        },
      ],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit(title) {
      const note = {
        title: title,
        tags: [],
      };
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>