import Vue from 'vue'
import VueGtag from 'vue-gtag'

if (process.client) {
    Vue.use(VueGtag, {
      config: { id: 'UA-39482219-1' },
    })
}