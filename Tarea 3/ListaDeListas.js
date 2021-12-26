class Nodo1 {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
        this.anterior = null
        this.lista2 = new Lista2()
    }
}

class Lista1 {
    constructor() {
        this.primero = null
    }

    insertar(dato) {
        let nuevo = new Nodo1(dato)
        if (this.primero == null) {
            this.primero = nuevo
        } else {
            let aux = this.primero
            while (aux.siguiente != null) {
                aux = aux.siguiente
            }
            aux.siguiente = nuevo
            nuevo.anterior = aux
        }
    }

    mostrar() {
        let aux = this.primero
        while (aux != null) {
            console.log("-> " + aux.dato)
            aux.lista2.mostrar()
            aux = aux.siguiente
        }
    }

    insertarLista2(nombre, dato) {
        let aux = this.primero
        while (aux != null) {
            if (nombre == aux.dato) {
                aux.lista2.insertar(dato)
                return
            } else {
                aux = aux.siguiente
            }
        }
        console.log("No se encontro el dato en la lista")
        return null
    }
}

class Lista2 {
    constructor() {
        this.primero = null
    }

    insertar(dato) {
        let nuevo = new Nodo1(dato)
        if (this.primero == null) {
            this.primero = nuevo
        } else {
            let aux = this.primero
            while (aux.siguiente != null) {
                aux = aux.siguiente
            }
            aux.siguiente = nuevo
            nuevo.anterior = aux
        }
    }

    mostrar() {
        let aux = this.primero
        while (aux != null) {
            console.log("           -> " + aux.dato)
            aux = aux.siguiente
        }
    }
}

let lista = new Lista1()

lista.insertar("Jeremias")
lista.insertar("Mario")
lista.insertar("Denzel")
lista.insertar("Matias")

lista.insertarLista2("Jeremias",1)
lista.insertarLista2("Jeremias",101)
lista.insertarLista2("Mario",2)
lista.insertarLista2("Mario",102)
lista.insertarLista2("Denzel",3)
lista.insertarLista2("Denzel",103)
lista.insertarLista2("Matias",4)
lista.insertarLista2("Matias",104)

lista.mostrar()