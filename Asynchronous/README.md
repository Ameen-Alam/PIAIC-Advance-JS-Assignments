#Asynchronous

JavaScript engine is single threaded so the language itself is synchronous and hence blocking in nature.

It means any task will run completely before another can run.

However, a feature called “event loop” is provided by the environment where javascript is running which provides capability for asynchronous execution providing non-blocking functionality. Environment here refers to Web browsers , NodeJS etc.

Event Loops are not a part of JavaScript language specifications but is an add on feature that is provided by the implementing environment just like DOM API in browser or any other web API

A great explanation of how event loops works :


Blocking
Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.

In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as blocking. Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. Native modules may also have blocking methods.

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.





What is Asynchronous?
Blocking vs Non-blocking
Multi-Threaded Programming
Event Driven Programming

Callbacks - Handling Errors
Callbacks - Callback Hell

Promises - Basics
Promises - Chaining

Promises - Returning Promises

Promises - Error Handling


Promises - Finally
Promises - All

Promises - Race


Async/Await - Basics
Async/Await - No Await

Async/Await - Async Iterators
Async/Await - Warning

Generators - Understanding Generators

Generators - Using yield to communicate
Generators - Async Generators


Node Event Loop

Node Event Loop Example
Chrome Event Loop   