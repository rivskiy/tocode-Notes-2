<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Add new note" />
      <TagsList isActive @onItemClick="onHandleClick" :items="tags" />
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
      const note = {
        title: this.value,
        tags: this.onHandleClick(),
      };

      this.value = '';
      document
        .querySelectorAll('div.tag-item.isActive')
        .forEach((e) => e.classList.toggle('isActive'));

      this.$emit('onSubmit', note);
    },

    onHandleClick() {
      event.target.classList.toggle('isActive');

      let tags = [];
      document
        .querySelectorAll('div.tag-item.isActive')
        .forEach((e) => tags.push(e.textContent));
      return tags;
    },
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