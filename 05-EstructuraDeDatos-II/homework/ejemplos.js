function Node(data){
    this.data = data;
    this._head = null;
}
function List(){
    this._length = 0;
    this.next = null;
}
var list = new List();

List.prototype.add = function(data) {
    var node = new Node(data),
    current = this.head;
    // Si está vacia
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
};
list
// var node1 = new Node(1);
// var node2 = new Node(2);
// list.head = node1;
// list.head.next = node2;

list.add(1);
list.add(2);

console.log(list)


// console.log(node1);



console.log(8 % 4)
console.log()
console.log()
console.log()

