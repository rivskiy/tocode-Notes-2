import { createStore } from 'vuex';

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Some work task',
        tags: ['work'],
      },
      {
        title: 'Some home task',
        tags: ['home', 'learn'],
      },
      {
        title: 'Some task',
        tags: [],
      },
    ]
  },

  mutations: {
    submitNote(state, note) {
      state.notes.push(note)
    },

    removeNote(state, index) {
      state.notes.splice(index, 1)
    },
  },

  actions: {
    submitNote({ commit }, note) {
      commit('submitNote', note)
    },

    removeNote({ commit }, index) {
      commit('removeNote', index)
    },

    getLocalNotes({ commit }) {
      commit('getLocalNotes')
    }
  },

  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})