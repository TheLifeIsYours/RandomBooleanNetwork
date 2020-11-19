"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RBN_Node {
    constructor({ _id, status }) {
        this._id = _id;
        this.status = status;
        this.siblings = Array();
    }
    addSibling(sibling) {
        this.siblings.push(sibling);
    }
    step() {
        this.status = this.siblings.reduce((acc, curr) => {
            if (acc != curr.status)
                return true;
            return false;
        }, this.status);
    }
}
exports.default = RBN_Node;
//# sourceMappingURL=RBN_Node.js.map