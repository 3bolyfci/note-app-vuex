import moment from 'moment'

export const note = (state) => state.note
export const notes = state => {
    return state.notes.sort((a, b) => (a.lastSave > b.lastSave) ? 1 : ((b.lastSave > a.lastSave) ? -1 : 0));
}
export const noteWordCount = state => {

    if (state.note.body === null) {
        return 0
    } else {
        return state.note.body.trim().split(/\s+/).length;
    }
}
export const lastSave = (state) => {
    if (!state.note.lastSave) {
        return 'never';
    }
    return moment(state.note.lastSave).calendar();
}