<template>
    <div class="pad">
        <input type="text" class="pad__title" placeholder="untitled note" v-model="note.title"
               @keyup="store">
        <textarea class="pad__text" placeholder="Start writing... "
                  v-model="note.body" @keydown="store">
        </textarea>
        <footer class="pad__footer">
            <ul class="pad__footer-items">
                <li class="pad__footer-item">Words:{{noteWordCount}}</li>
                <li class="pad__footer-item pad__footer-item-right">Last Save:{{lastSave}}</li>
            </ul>
        </footer>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapGetters(
                ['note', 'lastSave', 'noteWordCount']
            )
        },
        methods: {
            ...mapActions([
                'saveNote'
            ]),
            store() {
                if (!this.note.id) {
                    this.saveNote();
                    return
                }
               setTimeout(()=>{
                   this.saveNote();
               },3000)

            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/placehodler";

    .pad {
        flex: 4;
        display: flex;
        flex-direction: column;
        &__title {
            width: 100%;
            border: 0;
            font: inherit;
            font-size: 1.6em;
            outline: none;
            padding: 25px 20px 20px 30px;;
        }
        &__text {
            flex: 1;
            width: 100%;
            margin: 0;
            padding: 20px 30px;
            border: 0;
            font: inherit;
            outline: none;
            resize: none;
            line-height: 2;
            -webkit-mask-image: linear-gradient(
                            to bottom,
                            transparent 0%,
                            #fff 5%,
                            #fff 95%,
                            transparent 100%
            )
        }
        &__footer {
            padding: 20px 30px;
        }
    }

    .pad__footer-items {
        @extend %inline-list
    }

    .pad__footer-item {
        flex: 1;
        font-size: .9em;

        &__right {
            margin-left: auto;
            text-align: right;
        }
    }

</style>