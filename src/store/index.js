import {createStore} from 'vuex';

export const store = createStore({
  state: {
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
    ]
  },
  mutations: {
    submitNote(state, formValue) {
      const note = {
        title: formValue.value,
        tags: formValue.tags
      }
      state.notes.push(note)
    },

    removeNote(state, index) {
      state.notes.splice(index, 1)
      
    }
  },
  actions: {
    submitNote({commit}, formValue) {
      commit('submitNote', formValue)
    },

    removeNote({commit}, index) {
      commit('removeNote', index)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})