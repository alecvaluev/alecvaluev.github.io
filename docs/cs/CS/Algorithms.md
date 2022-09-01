# Algorithms and Data Structures

Data structures and algorithms looks at how data for computer programs can best be represented and processed.

## Algorithms Analysis

The two main resources to consider are `time` and `memory`. The resource to optimize for depends on the application and the computing system.

what we really care about is the growth rate of resource consumption with respect to the data size.

### Time Resource
One way that we can measure the amount of time required by an algorithm is to measure how many operations it performs.  
When doing this, we make the assumption that every operation has the same time cost. 

### Memory Resource
This is not calculated by operation count, but we can still make a calculation on this based on variable declarations, dynamically allocated memory etc.  

### Growth Rates
It is about understanding the growth in resource consumption as the amount of data increases

From most efficient to least efficient:
1. Constant (y = 1) 
2. Logarithmic (y = logn)
3. Linear (y = n)
4. Loglinear (y = nlogn)
5. Quadratic (y = n^2)
6. Cubic (y = n^3)
7. Exponential (y = 2^n)

### Asymptotic notation
 - are formal notational methods for stating the upper and lower bounds of a function.
 
> These are:  
> O(f(n)) - Big-O 
>
> o(f(n)) - Little-O 
>
> Ω(f(n)) - Omega
>
> Θ(f(n)) - Theta

"T(n) is O(f(n))" iff for some constants c and n0, T(n) <= cf(n) for all n >= n0 =>  f(n) describes the **upper bound** for T(n)  
"T(n) is Ω(f(n))" iff for some constants c and n0, T(n) <= cf(n) for all n <= n0 =>  f(n) describes the **lower bound** for T(n)   
"T(n) is Θ(f(n))" f(n) describes the **exact bound** for T(n)  
"T(n) is o(f(n))" f(n) describes the **upper bound** for T(n) where T(n) will **never actually be reached**

## Recursion
::: warning Runtime Stack
The runtime stack is a structure that keeps track of function calls and local variables as the program runs. Each time a function is called, it gets added to the top of the runtime stack along with variables and parameters local to that function.  Variables below it become inaccessible.  When a function returns, the function along with it's local variables are popped off the stack allowing access to its caller and its callers variables.
:::


## Lists

A list is an sequence of values. It may have properties such as being sorted/unsorted, having duplicate values or being unique.

Typically have a subset of the following operations:
initialize
add an item to the list
remove an item from the list
search
sort
iterate through all items
and more...

2 ways to implement a list, using as data structure:
1. an array 
   -  items are stored in consecutively
   - direct access to any particular item 
   - grow can be expensive
   - insertion/removal anywhere except the end requires shifting
2. a linked list 
   - stores data in nodes
   - easy to grow and shrink
   - contiguous memory is not required
   -  cannot be searched using binary search
   -  insertion/removal is efficient and runs in constant time.

### Linked List
Data structure that stores a collection of objects in a **sequential** manner.  Each item is stored in a node.  Each node consists of a single piece of data and at least one pointer to another node. 

![singly-linked-list](/images/cs/linkedlist.png)
## Stacks and Queues



## Tables



## Sorting



## Trees



## Graphs

