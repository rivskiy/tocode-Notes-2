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
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },

    removeNote(state, index) {
      state.notes.splice(index, 1)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },

    getLocalNotes(state) {
      const localNotes = localStorage.getItem('notes')
      if (JSON.parse(localNotes).length > 0) {
        state.notes = JSON.parse(localNotes)
      }
    }
  },
  actions: {
    submitNote({commit}, formValue) {
      commit('submitNote', formValue)
    },

    removeNote({commit}, index) {
      commit('removeNote', index)
    },

    getLocalNotes({commit}) {
      commit('getLocalNotes')
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})