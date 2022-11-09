function Node(value){
    this.value = value
    this.next = null;
}

function Queue(){
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

    this.peek = function(){
        if(this.headNode !== null){
            return this.headNode;
        }

        return null;
    }


    /**
     * Adding a node value to the end of queue
     * @param {*} value 
     */
    this.enqueue = function(value){
        let newNode = new Node(value);
        if(this.headNode == null){
            //there is no node in the queue
            this.headNode = newNode
            this.tailNode = newNode;

            return this;
        }

        this.tailNode.next = newNode;
        this.tailNode = newNode;

        return this;
    }

    this.dequeue = function(){
       if(this.headNode !== null){
         this.headNode = this.headNode.next

         return this;
       }

       return null;

    }



}

const messages_list = new Queue();


messages_list.enqueue("James");

console.log(messages_list.peek());

console.log(" ------------------------- \n");
messages_list.enqueue("Jerry");

console.log(messages_list.peek());

console.log(" ------------------------- \n");
messages_list.enqueue("Mary");

console.log(messages_list.peek());

console.log(" ------------------------- \n");

messages_list.dequeue()

console.log(messages_list.peek());

console.log(" ------------------------- \n");

// console.log(messages_list.toArray());