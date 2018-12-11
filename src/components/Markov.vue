<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex xs12 mt-4>
                <h1>
                    <v-btn outline @click="generatePrompt()">Generate a writing prompt</v-btn>
                </h1>
                <h3>
                    "{{prompt}}"
                </h3>
            </v-flex>
            <v-flex xs12 mt-4>
                <h1>
                    <v-btn outline @click="generateShakespeare()">Generate a shakespearan</v-btn>
                </h1>
                <h3>
                    "{{shakespeare}}"
                </h3>
            </v-flex>
            <v-flex xs12 mt-4>
                <h1>
                    <v-btn outline @click="generateWergeland()">Generate a Wergeland poem</v-btn>
                </h1>
                <h3>
                    <span v-for="(str, i) in wergeland" :key="i">
                        {{str}} <br>
                    </span>
                </h3>
            </v-flex>
            <v-flex xs12 mt-4>
                <h1>
                    <v-btn outline @click="generateRap()">Generate a rap</v-btn>
                </h1>
                <h3>
                    "{{rap}}"
                </h3>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import MarkovChain from "markovchain";

    import shakespeareText from "../assets/shakespeare.txt";
    import rapText from "../assets/raps.txt";
    import promptText from "../assets/writing_prompts.txt";
    import wergelandText from "../assets/wergeland.txt";

    let rapMarkov = new MarkovChain(rapText);
    let shakespeareMarkov = new MarkovChain(shakespeareText);
    let promptMarkov = new MarkovChain(promptText);
    let wergelandMarkov = new MarkovChain(wergelandText);

    let useUpperCase = function (wordList) {
        var tmpList = Object.keys(wordList).filter(function (word) {
            return word[0] >= 'A' && word[0] <= 'Z'
        })
        return tmpList[~~(Math.random() * tmpList.length)]
    }

    export default {
        data() {
            return {
                rap: rapMarkov.start(useUpperCase).end().process(),
                shakespeare: shakespeareMarkov.start(useUpperCase).end().process(),
                prompt: promptMarkov.start(useUpperCase).end().process(),
                wergeland: []
            }
        },
        mounted() {
            this.generateWergeland();
        },
        methods: {
            generateRap() {
                this.rap = rapMarkov.start(useUpperCase).end().process();
            },
            generateShakespeare() {
                this.shakespeare = shakespeareMarkov.start(useUpperCase).end().process()
            },
            generatePrompt() {
                this.prompt = promptMarkov.start(useUpperCase).end().process()
            },
            generateWergeland() {
                this.wergeland = [];
                for (let i = 0; i <= 5; i++) {
                    let str = wergelandMarkov.start(useUpperCase).end().process();
                    this.wergeland.push(str);
                }
            }
        }
    }
</script>