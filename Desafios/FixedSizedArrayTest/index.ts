/*
Goal: to demonstrate low level computer science skills (e.g. pointers)

Description:
Efficiently manage a fixed-size first-in-first-out queue by inserting new elements at the front and removing elements from the back.
Avoid using built-in JavaScript array methods like reduce, foreach, push and pop,
and ensure that pushing occurs only when the queue is not full,
and popping happens only when the queue is not empty.

Note:
You can use global variables for state and create functions.
Just get something that works and do not worry about performance or coding style

Example:
Pop() - false - [ 🗌, 🗌, 🗌, 🗌, 🗌 ]
Push(1) -       [ 1, 🗌, 🗌, 🗌, 🗌 ]
Push(2) -       [ 2, 1, 🗌, 🗌, 🗌 ]
Push(3) -       [ 3, 2, 1, 🗌, 🗌 ]
Pop() - 1 -     [ 3, 2, 🗌, 🗌, 🗌 ]
Push(4) -       [ 4, 3, 2, 🗌, 🗌 ]
Push(5) -       [ 5, 4, 3, 2, 🗌 ]
Push(6) -       [ 6, 5, 4, 3, 2 ]
Pop() - 2 -     [ 6, 5, 4, 3, 🗌 ]
*/

import { RunTestSuite } from "./tests";

// create a fixed size queue e.g. fifo.length will always be 5
const fifo = new Array(5);
fifo.fill(null);

/**
 * Inserts a new element into the Fixed-size FIFO (First-In-First-Out) queue.
 *
 * @param {number} value - The value to be inserted into the queue.
 * @returns {boolean} - Returns `true` if the value was successfully inserted into the queue,
 *                      or `false` if the queue is already full.
 */
function Push(value: number): boolean {}

/**
 * Removes and returns the element at the back of the Fixed-size FIFO (First-In-First-Out) queue.
 *
 * @returns {number | false} - Returns the value that was removed from the queue if the queue is not empty,
 *                             or `false` if the queue is empty.
 */
function Pop(): number | false {}

RunTestSuite(fifo, Push, Pop);
