class RBN_Node {
  _id: number
  status: boolean
  siblings: Array<RBN_Node>

  constructor({_id, status}) {
    this._id = _id
    this.status = status
    this.siblings = Array<RBN_Node>()
  }

  addSibling(sibling: RBN_Node) {
    console.log(":::AddSibling")

    this.siblings.push(sibling)
  }

  step() {

    this.status = this.siblings.reduce<boolean>((acc, curr) => {

      if(acc != curr.status) return true;

      return false
    }, this.status)
  }
}

export default RBN_Node