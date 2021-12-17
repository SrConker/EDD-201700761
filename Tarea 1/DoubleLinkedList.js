class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.previous = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.first = null
        this.last = null
    }

    add(data) {
        let newNode = new Node(data)
        if (this.first == null) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.first.previous = newNode
            newNode.previous = this.last
            newNode.next = this.first
            this.last = newNode
        }

        this.size++
    }

    search(data) {
        if (this.first) {
            let aux = this.first

            do {
                if (data == aux.data) {
                    return true
                }
                aux = aux.next
            } while (aux != this.first)
        }

        return false
    }

    delete(data) {
        if (this.search(data)) {
            if (this.first == this.last) {
                this.first = null
                this.last = null
            } else if (this.first.data == data) {
                this.first = this.first.next
                this.first.previous = this.last
                this.last.next = this.first
            } else if (this.last.data == data) {
                this.last = this.last.previous
                this.last.next = this.first
                this.first.previous = this.last
            } else {
                let aux = this.first

                while (aux.data != data) {
                    aux = aux.next
                }

                aux.next.previous = aux.previous
                aux.previous.next = aux.next
            }

            this.size--
        }
    }

    show() {
        if (this.first) {
            let aux = this.first
            console.log("///Mostrando Lista///")

            do {
                console.log(aux.data)
                aux = aux.next
            } while (aux != this.first)
        }
    }
}

let list = new DoubleLinkedList()
list.add(4)
list.add(8)
list.add(12)
list.add(16)
list.add(1)
list.add(100)

list.show()

list.delete(12)
list.delete(100)

list.show()