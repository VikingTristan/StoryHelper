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

    let rapMarkov = new MarkovChain(rapText);
    let shakespeareMarkov = new MarkovChain(shakespeareText);
    let promptMarkov = new MarkovChain(promptText);

    let useUpperCase = function (wordList) {
        var tmpList = Object.keys(wordList).filter(function (word) {
            return word[0] >= 'A' && word[0] <= 'Z'
        })
        return tmpList[~~(Math.random() * tmpList.length)]
    }

    export default {
        data() {
            return {
                rap: rapMarkov.start(useUpperCase).end(100).process(),
                shakespeare: shakespeareMarkov.start(useUpperCase).end(100).process(),
                prompt: promptMarkov.start(useUpperCase).end(100).process()
            }
        },
        methods: {
            generateRap() {
                this.rap = rapMarkov.start(useUpperCase).end(100).process();
            },
            generateShakespeare() {
                this.shakespeare = shakespeareMarkov.start(useUpperCase).end(100).process()
            },
            generatePrompt() {
                this.prompt = promptMarkov.start(useUpperCase).end(100).process()
            }
        }
    }
</script>