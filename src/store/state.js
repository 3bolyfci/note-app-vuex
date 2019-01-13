export default {
    note: {
        id:null,
        title: null,
        body: null,
        lastSave:null
    },
    notes: JSON.parse(localStorage.getItem('notes')) || [],

}