import RBN_Node from './RBN_Node'

class RBN_Network {
	nodes: Array<RBN_Node>
	nodeCount: number
	siblingCount: number
	sycles: number
	currentSycle: number

	constructor({nodes, steps, siblings}) {
		this.nodes = []
		this.nodeCount = nodes || 10
		this.siblingCount = siblings || 3
		this.sycles = steps || 20
		this.currentSycle = 0

		this.init()
	}

	init() {
		for(let i: number = 0; i < this.nodeCount; i++) {
			this.addNode()
		}
		this.assignSibling()
		this.sycle()
	}

	addNode() {
		console.log(":::AddNode")
		let rndBool: boolean = Math.random() > 0.5 ? true : false
		this.nodes.push(new RBN_Node({_id: this.nodes.length, status: rndBool}))
	}

	assignSibling() {
		console.log(":::AssignSibling")
		this.nodes.forEach((node) => {

			for(let i: number = 0; i < this.siblingCount; i++) {
				let rndNode = this.getRandomNode()

				console.log("\n:::Assigning", rndNode)

				if(node.siblings.indexOf(rndNode) === -1 && node != rndNode) {
					node.addSibling(rndNode)
				} else {
					if(i > 0) {
						i--
					}
				}
			}
		})
	}

	getRandomNode() {
		console.log(":::GetRandomNode")

		let rndIndex = Math.floor(Math.random() * this.nodes.length)
		return this.nodes[rndIndex]
	}

	step() {
		this.nodes.forEach((node) => node.step())
	}

	display() {
		let nodeString = this.nodes.map((node) => { return node.status ? "\u001b[42m\u001b[31m 1 " : "\u001b[41m\u001b[32m 0 "}).join("\u001b[m") + "\u001b[m"

		console.log(`\u001b[m Sycle: ${this.sycleString()} | ${nodeString}`)
	}

	sycleString() {
		let string: String = ""

		let sycleNumToString = this.currentSycle.toString()

		string += sycleNumToString

		let padding: number = 5 - sycleNumToString.length

		for(let i: number = 0; i < padding; i++) {
			string += " "
		}

		return string
	}

	sycle() {
		for(let i: number = 0; i < this.sycles; i++) {
			this.step()
			this.display()
			this.currentSycle++
		}
	}
}

export default RBN_Network