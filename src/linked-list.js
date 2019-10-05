const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = new Node();
      this._tail = new Node();
      this.length = 0;
    }
    append(data) {
      if (this.length==0) {
        this._head =new Node(data, null, null);
        this._tail =new Node(data, null, null);
      }
      else {
        var count = this._head;
        while (count.next != null){
          count = count.next;
        }
          count.next = new Node(data, count, null);
          this._tail = count.next;
     }
    this.length++;
    return this;
  }
    head() {
      return this._head.data;
    }
    tail() {
      return this._tail.data;
    }
    at(index) {
      let result=this._head;
      for(var i=0;i<index;i++){
        result=result.next;
      }
      return result.data;
    }
    insertAt(index, data) {
      if (index == 0) {
        let temp=this._head;
            this._head = new Node(data, null, this._head)
            this._head = temp;
        }
        else
        {
            let temp = this._head
            let i = 0
            while (i != index) {
                temp = temp.next
                i++
            }

            temp.prev.next = new Node(data, temp.prev, temp.prev.next)
            temp.prev = temp.prev.next
        }

        this.length++
        return this

    }

    isEmpty() {
      if (this.length > 0){
        return false;
      }
      else{
        return true;
      }
    }
    clear() {
      this._head = new Node()
      this._tail = new Node()
      this.length=0;
      return this;
    }
    deleteAt(index){
      if (this.length <=1) return this.clear()
        else {
          let position = this._head;
          let i = 0;
          while (i != index) {;
            position = position.next;
            i++;
          }
          position.prev.next = position.next;
          position.next.prev = position.prev;
          this.length--;
      }
     return this;
   }


    reverse() {
      let temp = this._head
        this._tail = this._head
        for (let i = 0 ; i < this.length -1; i++) {
            temp = temp.next
            temp.prev.next = temp.prev.prev
            temp.prev.prev = temp
        }
        temp.next = temp.prev
        temp.prev = null
        this._head = temp
        return this
    }

    indexOf(data) {
        let position = this._head;
        let iter = 0;
        while (iter!=this.length) {
            if (position.data == data){
              return iter;
            }
            else {
                position = position.next;
                iter++;
            }
        }
        return -1
    }
}


module.exports = LinkedList;
