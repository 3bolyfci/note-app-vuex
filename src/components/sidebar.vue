<template>
    <div class="sidebar">

        <div v-if="notes.length">
            <note v-for="note in notes" :note="note"></note>
        </div>
        <div class="sidebar__content" v-else>
            <a href="#"> bolyFci</a>
            Boo,no notes .Go writing!
        </div>
        <div class="sidebar__content">
            <a href="#" @click.prevent="setNotePad"> star a new note </a>
        </div>

    </div>
</template>

<script>
    import Note from './Note'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        components: {
            Note
        },
        computed: {
            ...mapGetters([
                    'notes'
                ]
            )
        },
        methods: {
            ...mapActions([
                'setNote'
            ]),
            setNotePad() {
                this.setNote(null)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sidebar {
        background-color: #f2f2f2;
        height: 100%;
        flex: 1;
        min-width: 28%;
        border-right: 2px solid #eee;
        overflow-y: scroll;
        &__content {
            padding: 30px;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    }
</style>