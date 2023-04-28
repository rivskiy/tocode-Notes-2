<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Add new note" />
      <TagsList isActive @onItemClick="onHandleClick" :items="tags"/>
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
      activeTags: [], // массив для активных тегов
    };
  },
  methods: {
        onSubmit() {
      const value = this.value
      const tags = this.activeTags

      this.$emit('onSubmit', {value, tags});
      this.value = '';
      
      this.activeTags = []
      console.log(this.activeTags)
    },
    onHandleClick(tag) {
      const item = this.activeTags.find((el) => el === tag)

      if (item !== tag) {               // проверка, чтобы теги не повторялись
        this.activeTags.push(tag)
        console.log(this.activeTags) // чтобы видеть выбранные теги, пока не разобрался как добавлять активный класс 
      }
    },

    // onHandleClick(tag) {      // метод принимает 2 параметра: item и isActive
    //   const item = this.activeTags.find((el) => el === tag)

    //   if (item !== tag.item) { // проверка, что такой тег еще не добавлен
    //     tag.isActive = true   // делаем тег активным
    //     this.activeTags.push(tag.item) // добавляем тег в массив активных тегов
    //   }
    // },
    // onSubmit() {
    //   const value = this.value
    //   const tags = this.activeTags

    //   this.$emit('onSubmit', {value, tags});  // отпраляем значение заметку и теги
    //   this.value = '';      // сбрасываем textarea и активные теги
    //   this.activeTags = []
    // },
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