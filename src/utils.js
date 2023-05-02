import { store } from '@/store/index.js'

export function setLocalNotes() {
  const notes = store.state.notes
  localStorage.setItem('notes', JSON.stringify(notes))
}

export function getLocalNotes() {
  const localNotes = localStorage.getItem('notes')
  if (JSON.parse(localNotes).length > 0) {
    store.state.notes = JSON.parse(localNotes)
  }
}