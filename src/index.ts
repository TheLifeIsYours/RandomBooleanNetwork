import {default as RBN} from './RBN_Network'

console.clear()
console.log("Started project")

const network = new RBN({nodes: 20, siblings: 3, steps: 100})