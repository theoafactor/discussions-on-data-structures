function Node(value){
    this.value = value;
    this.next = null;
}

function LinkedList(){
    this.headNode = null;
    this.tailNode = null;

    this.toArray = function(){
        let nodes_array = [];
        if(this.headNode != null){
            let currentNode = this.headNode;

            while(currentNode != null){
                nodes_array.push(currentNode.value);
                currentNode = currentNode.next
            }

            return nodes_array;
        }
    }


    this.printList = function(){

        if(this.headNode != null){
            let currentNode = this.headNode;

            while(currentNode != null){
                console.log(currentNode.value);
                currentNode = currentNode.next
            }
        }
    }

    /**
     * Adds a new node to the end of the linked list
     */
    this.appendNode = function(value){
        let newNode = new Node(value)

        if(this.headNode == null){
            this.headNode = newNode
            this.tailNode = newNode;

            return this;
        }

        this.tailNode.next = newNode;
        this.tailNode = newNode;

        return this;

        
    }
}

let cars = new LinkedList();
let current_list;
cars.appendNode('benz');
cars.appendNode('toyota');
cars.appendNode('volvo');
cars.appendNode('passat');
cars.appendNode('camry');


cars.printList();

console.log(cars.toArray())


