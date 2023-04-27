<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Add new note" />
      <TagsList isPreview @onItemClick="onHandleClick" :items="tags"/>
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList-ui.vue';
export default {
  components: {
    TagsList,
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'learn'],
    };
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value);
      this.value = '';
    },
    onHandleClick(tag) {
      console.log(tag)
    }
  },
};
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  textarea {
    margin-bottom: 0;
  }
}
</style>