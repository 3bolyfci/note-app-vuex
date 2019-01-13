export const setCurrentNoTeId = (state, id) => {
    state.note.id = id;
}
export const prependCurrentNote = (state, note) => {
    state.notes.unshift(note)
}
export const touchLastSaveNote = (state) => {
    state.note.lastSave = Date.now()
}
export const SaveNotes = (state) => {
    localStorage.setItem('notes', JSON.stringify(state.notes))
}
export const setNote = (state, payload) => {
    if (payload === null) {
        state.note = {
            id: null,
            title: null,
            body: null,
            lastSave: null
        }
        return
    }
    state.note = payload
}
export const deleteNote = (state, id) => {
    state.notes = state.notes.filter((note) => {
        return note.id !== id;
    })
}
