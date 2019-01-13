export const saveNote = ({commit, state}) => {
    commit('touchLastSaveNote')
    if (state.note.id == null) {
        commit('setCurrentNoTeId', Date.now())
        commit('prependCurrentNote', state.note)
    }
    commit('SaveNotes')
}

export const setNote = ({commit, dispatch}, payload) => {
    commit('setNote', payload)
}

export const deleteNote = ({commit, dispatch}, payload) => {
    commit('deleteNote', payload)
    commit('SaveNotes')
}