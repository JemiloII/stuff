'use strict'

function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.__getNodeAt = function(index) {
};

SinglyLinkedList.prototype.push = function(val) {
};

SinglyLinkedList.prototype.clear = function() {
};

SinglyLinkedList.prototype.pop = function() {
};

SinglyLinkedList.prototype.unshift = function(val) {
};

SinglyLinkedList.prototype.shift = function() {
};

SinglyLinkedList.prototype.get = function(index) {
};

SinglyLinkedList.prototype.set = function(index, val) {
};

SinglyLinkedList.prototype.remove = function(index) {
};

SinglyLinkedList.prototype.reverse = function () {
};

module.exports = SinglyLinkedList;
