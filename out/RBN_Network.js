"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RBN_Node_1 = require("./RBN_Node");
class RBN_Network {
    constructor() {
        this.nodes = [];
        this.nodeCount = 10;
        this.siblingCount = 3;
        this.sycles = 10;
        this.currentSycle = 0;
        this.init();
    }
    init() {
        for (let i; i < this.nodeCount; i++) {
            this.addNode();
        }
        this.assignSibling();
        this.step();
        this.display();
    }
    addNode() {
        let rndBool = Math.random() > 0.5 ? true : false;
        this.nodes.push(new RBN_Node_1.default({ _id: this.nodes.length, status: rndBool }));
    }
    assignSibling() {
        this.nodes.forEach((node) => {
            let rndNode = this.getRandomNode();
            if (node.siblings.indexOf(rndNode) === -1) {
                node.addSibling(rndNode);
            }
        });
    }
    getRandomNode() {
        let rndIndex = Math.random() * (this.nodes.length - 1) + 1;
        return this.nodes[rndIndex];
    }
    step() {
        this.nodes.forEach((node) => node.step);
    }
    display() {
        let nodeString = this.nodes.map((node) => { return node.status; }).join(' ');
        console.log(`Sycle: ${this.currentSycle} ${nodeString}`);
    }
}
exports.default = RBN_Network;
//# sourceMappingURL=RBN_Network.js.map