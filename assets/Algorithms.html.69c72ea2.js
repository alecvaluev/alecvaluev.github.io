import{_ as n,o as s,c as a,f as t}from"./app.61fc4490.js";const e="/images/cs/linkedlist.png",o="/images/cs/sentinelempty.png",p={},i=t('<h1 id="algorithms-and-data-structures" tabindex="-1"><a class="header-anchor" href="#algorithms-and-data-structures" aria-hidden="true">#</a> Algorithms and Data Structures</h1><p>Data structures and algorithms looks at how data for computer programs can best be represented and processed.</p><h2 id="algorithms-analysis" tabindex="-1"><a class="header-anchor" href="#algorithms-analysis" aria-hidden="true">#</a> Algorithms Analysis</h2><p>The two main resources to consider are <code>time</code> and <code>memory</code>. The resource to optimize for depends on the application and the computing system.</p><p>what we really care about is the growth rate of resource consumption with respect to the data size.</p><h3 id="time-resource" tabindex="-1"><a class="header-anchor" href="#time-resource" aria-hidden="true">#</a> Time Resource</h3><p>One way that we can measure the amount of time required by an algorithm is to measure how many operations it performs.<br> When doing this, we make the assumption that every operation has the same time cost.</p><h3 id="memory-resource" tabindex="-1"><a class="header-anchor" href="#memory-resource" aria-hidden="true">#</a> Memory Resource</h3><p>This is not calculated by operation count, but we can still make a calculation on this based on variable declarations, dynamically allocated memory etc.</p><h3 id="growth-rates" tabindex="-1"><a class="header-anchor" href="#growth-rates" aria-hidden="true">#</a> Growth Rates</h3><p>It is about understanding the growth in resource consumption as the amount of data increases</p><p>From most efficient to least efficient:</p><ol><li>Constant (y = 1)</li><li>Logarithmic (y = logn)</li><li>Linear (y = n)</li><li>Loglinear (y = nlogn)</li><li>Quadratic (y = n^2)</li><li>Cubic (y = n^3)</li><li>Exponential (y = 2^n)</li></ol><h3 id="asymptotic-notation" tabindex="-1"><a class="header-anchor" href="#asymptotic-notation" aria-hidden="true">#</a> Asymptotic notation</h3><ul><li>are formal notational methods for stating the upper and lower bounds of a function.</li></ul><blockquote><p>These are:<br> O(f(n)) - Big-O</p><p>o(f(n)) - Little-O</p><p>\u03A9(f(n)) - Omega</p><p>\u0398(f(n)) - Theta</p></blockquote><p>&quot;T(n) is O(f(n))&quot; iff for some constants c and n0, T(n) &lt;= cf(n) for all n &gt;= n0 =&gt; f(n) describes the <strong>upper bound</strong> for T(n)<br> &quot;T(n) is \u03A9(f(n))&quot; iff for some constants c and n0, T(n) &lt;= cf(n) for all n &lt;= n0 =&gt; f(n) describes the <strong>lower bound</strong> for T(n)<br> &quot;T(n) is \u0398(f(n))&quot; f(n) describes the <strong>exact bound</strong> for T(n)<br> &quot;T(n) is o(f(n))&quot; f(n) describes the <strong>upper bound</strong> for T(n) where T(n) will <strong>never actually be reached</strong></p><h2 id="recursion" tabindex="-1"><a class="header-anchor" href="#recursion" aria-hidden="true">#</a> Recursion</h2><div class="custom-container warning"><p class="custom-container-title">Runtime Stack</p><p>The runtime stack is a structure that keeps track of function calls and local variables as the program runs. Each time a function is called, it gets added to the top of the runtime stack along with variables and parameters local to that function. Variables below it become inaccessible. When a function returns, the function along with it&#39;s local variables are popped off the stack allowing access to its caller and its callers variables.</p></div><h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2><p>A list is an sequence of values. It may have properties such as being sorted/unsorted, having duplicate values or being unique.</p><p>Typically have a subset of the following operations: initialize add an item to the list remove an item from the list search sort iterate through all items and more...</p><p>2 ways to implement a list, using as data structure:</p><ol><li>an array <ul><li>items are stored in consecutively</li><li>direct access to any particular item</li><li>grow can be expensive</li><li>insertion/removal anywhere except the end requires shifting</li></ul></li><li>a linked list <ul><li>stores data in nodes</li><li>easy to grow and shrink</li><li>contiguous memory is not required</li><li>cannot be searched using binary search</li><li>insertion/removal is efficient and runs in constant time.</li></ul></li></ol><h3 id="linked-list" tabindex="-1"><a class="header-anchor" href="#linked-list" aria-hidden="true">#</a> Linked List</h3><p>Data structure that stores a collection of objects in a <strong>sequential</strong> manner. Each item is stored in a node. Each node consists of a single piece of data and at least one pointer to another node.</p><p><img src="'+e+`" alt="singly-linked-list"></p><h3 id="typical-operations" tabindex="-1"><a class="header-anchor" href="#typical-operations" aria-hidden="true">#</a> Typical Operations</h3><ul><li>push_front - add an item to the front of the linked list</li><li>push_back - add an item to the back of the linked list</li><li>pop_front - remove the frontmost item from the linked list</li><li>pop_back - remove the backmost item from the linked list</li><li>insert - given a point within the list insert an item just before that point</li><li>erase - remove a node at a specific point within the list</li><li>erase(a,b) - erases all nodes between a and b</li><li>traversals - some operation that applies to every node in the list</li></ul><h3 id="iterators" tabindex="-1"><a class="header-anchor" href="#iterators" aria-hidden="true">#</a> Iterators</h3><ul><li>allow you to traverse a container class without actually knowing what the underlying container actually is or how that container may be implemented.</li></ul><p>Iterators should support the following functionalities at minimum:</p><ul><li>first - set iterator to refer to the first item in a container</li><li>next - sets iterator to the next item in the container</li><li>isDone - returns true if iterator is not refering to anything</li><li>currentItem - returns the current piece of data</li></ul><div class="custom-container danger"><p class="custom-container-title">Be Cautious</p><p>An iterator is NOT a Node pointer. An iterator essentially hides the fact that there are even nodes within our linked list. It simply provides access to a set of data stored within a container in a uniform manner.</p></div><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><ul><li>Nodes &amp; Contructor</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">DList</span><span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
        T data_<span class="token punctuation">;</span>
        Node<span class="token operator">*</span> prev_<span class="token punctuation">;</span>
        Node<span class="token operator">*</span> next_<span class="token punctuation">;</span>
        <span class="token function">Node</span><span class="token punctuation">(</span><span class="token keyword">const</span> T<span class="token operator">&amp;</span> data<span class="token operator">=</span>T<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Node<span class="token operator">*</span> prev<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">,</span> Node<span class="token operator">*</span> next<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            data_<span class="token operator">=</span>data<span class="token punctuation">;</span>
            prev_<span class="token operator">=</span>prev<span class="token punctuation">;</span>
            next_<span class="token operator">=</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    Node<span class="token operator">*</span> front_<span class="token punctuation">;</span>
    Node<span class="token operator">*</span> back_<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span><span class="token operator">:</span>
      <span class="token function">DList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          front_<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">;</span>
          back_<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>push_front</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">push_front</span><span class="token punctuation">(</span><span class="token keyword">const</span> T<span class="token operator">&amp;</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node<span class="token operator">*</span> nn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Node</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token keyword">nullptr</span><span class="token punctuation">,</span>front_<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>front_<span class="token punctuation">)</span><span class="token punctuation">{</span>
        front_<span class="token operator">-&gt;</span>prev_<span class="token operator">=</span>nn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        back_<span class="token operator">=</span>nn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    front_<span class="token operator">=</span>nn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pop_front()</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">pop_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>front_<span class="token punctuation">)</span><span class="token punctuation">{</span>
        Node<span class="token operator">*</span> rm <span class="token operator">=</span> front_<span class="token punctuation">;</span>
        front_<span class="token operator">=</span>front_<span class="token operator">-&gt;</span>next_<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>front_<span class="token operator">==</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//if only one node exists</span>
            back_<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            front_<span class="token operator">-&gt;</span>prev_<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">delete</span> rm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Iterators</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">DList</span><span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">public</span><span class="token operator">:</span>
   <span class="token keyword">class</span> <span class="token class-name">const_iterator</span><span class="token punctuation">{</span>
       <span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">DList</span><span class="token punctuation">;</span>
   <span class="token keyword">protected</span><span class="token operator">:</span>
       <span class="token keyword">const</span> DList<span class="token operator">*</span> myList_<span class="token punctuation">;</span>
       Node<span class="token operator">*</span> curr_<span class="token punctuation">;</span>
       <span class="token function">const_iterator</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> curr<span class="token punctuation">,</span> <span class="token keyword">const</span> DList<span class="token operator">*</span> theList<span class="token punctuation">)</span><span class="token punctuation">{</span> 
           curr_ <span class="token operator">=</span> curr<span class="token punctuation">;</span>
           myList_<span class="token operator">=</span>theList<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
       <span class="token function">const_iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           myList_<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">;</span>
           curr_<span class="token operator">=</span><span class="token keyword">nullptr</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token comment">//prefix</span>
       const_iterator <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
           curr_<span class="token operator">=</span>curr_<span class="token operator">-&gt;</span>next_<span class="token punctuation">;</span>
           <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span> 
       <span class="token comment">//postfix</span>
       const_iterator <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           const_iterator old<span class="token operator">=</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
           curr_<span class="token operator">=</span>curr_<span class="token operator">-&gt;</span>next_<span class="token punctuation">;</span>
           <span class="token keyword">return</span> old<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token comment">//prefix</span>
       const_iterator <span class="token keyword">operator</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>curr_<span class="token punctuation">)</span><span class="token punctuation">{</span>
               curr_<span class="token operator">=</span>curr_<span class="token operator">-&gt;</span>prev_<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">else</span><span class="token punctuation">{</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>myList_<span class="token punctuation">)</span><span class="token punctuation">{</span>
                   curr_<span class="token operator">=</span>myList<span class="token operator">-&gt;</span>back_<span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span> 
        <span class="token comment">//postfix            </span>
       const_iterator <span class="token keyword">operator</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           const_iterator old<span class="token operator">=</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>curr_<span class="token punctuation">)</span><span class="token punctuation">{</span>
               curr_<span class="token operator">=</span>curr_<span class="token operator">-&gt;</span>prev_<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">else</span><span class="token punctuation">{</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>myList_<span class="token punctuation">)</span><span class="token punctuation">{</span>
                   curr_<span class="token operator">=</span>myList<span class="token operator">-&gt;</span>back_<span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">return</span> old<span class="token punctuation">;</span>        
       <span class="token punctuation">}</span> 
       <span class="token keyword">const</span> T<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span><span class="token keyword">return</span> curr_<span class="token operator">-&gt;</span>data_<span class="token punctuation">;</span><span class="token punctuation">}</span>
       <span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">==</span><span class="token punctuation">(</span>const_iterator rhs<span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span>
           <span class="token keyword">bool</span> rc<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>myList_<span class="token operator">==</span>rhs<span class="token punctuation">.</span>myList_ <span class="token operator">&amp;&amp;</span> curr_<span class="token operator">==</span>rhs<span class="token punctuation">.</span>curr_<span class="token punctuation">)</span>
               rc<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
           <span class="token keyword">return</span> rc<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   	<span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">!=</span><span class="token punctuation">(</span>const_iterator rhs<span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span>
   	    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token operator">==</span>rhs<span class="token punctuation">)</span><span class="token punctuation">;</span>
   	<span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token keyword">class</span> <span class="token class-name">iterator</span><span class="token operator">:</span><span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">const_iterator</span></span><span class="token punctuation">{</span>
       <span class="token comment">//NOTE: the LACK OF data members here. </span>
       <span class="token comment">//the curr_ data member is inherited from const_iterator class</span>
       <span class="token comment">//DO NOT redeclare or the two pointers will be out of sync and</span>
       <span class="token comment">//potentially cause conflict.</span>
       <span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">DList</span><span class="token punctuation">;</span>
       <span class="token function">iterator</span><span class="token punctuation">(</span>Node<span class="token operator">*</span> curr<span class="token punctuation">,</span>DList<span class="token operator">*</span> theList<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">const_iterator</span><span class="token punctuation">(</span>curr<span class="token punctuation">,</span>theList<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
       <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">const_iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
       iterator <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token comment">//Some compilers will complain if you try to </span>
           <span class="token comment">//to access curr_ the same way as const_iterator version</span>
           <span class="token comment">//of the code.  It will say curr_ is undeclared</span>
           <span class="token comment">//To get pass this use this-&gt; to access the members of</span>
           <span class="token comment">//base class:   </span>
           <span class="token keyword">this</span><span class="token operator">-&gt;</span>curr_<span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>curr_<span class="token operator">-&gt;</span>next_<span class="token punctuation">;</span>
           <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>            
       <span class="token punctuation">}</span> 
       iterator <span class="token keyword">operator</span><span class="token operator">++</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>  <span class="token comment">//postfix</span>
       iterator <span class="token keyword">operator</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>     <span class="token comment">//prefix</span>
       iterator <span class="token keyword">operator</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>  <span class="token comment">//postfix</span>
       T<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
       <span class="token keyword">const</span> T<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>    
   
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
   const_iterator <span class="token function">cbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">const_iterator</span><span class="token punctuation">(</span>front_<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
   const_iterator <span class="token function">cend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">const_iterator</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
   iterator <span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">iterator</span><span class="token punctuation">(</span>front_<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
   iterator <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sentinels" tabindex="-1"><a class="header-anchor" href="#sentinels" aria-hidden="true">#</a> Sentinels</h3><p>Sentinel nodes are nodes that exist at the front and back of a linked list. These nodes always exist from the time the linked list is created to the time it is destroyed. They do not hold any data. The purpose for their existence is to eliminate most of the special cases when writing functions.</p><p><img src="`+o+'" alt="sentinesl"></p><h2 id="stacks-and-queues" tabindex="-1"><a class="header-anchor" href="#stacks-and-queues" aria-hidden="true">#</a> Stacks and Queues</h2><p>A <code>stack</code> is a kind of list where items are always added to the front and removed from the front. Thus, a stack is a First In, Last Out (FILO) structure.</p><p><code>Queues</code> like stacks are a special kind of list. In the case of a queue, items are added to the back and removed from the front. In other words a queue is a First In First Out (FIFO) structure. A queue is essentially a line up.</p><h3 id="operations" tabindex="-1"><a class="header-anchor" href="#operations" aria-hidden="true">#</a> Operations</h3><p>Stacks and queues have the ability to do the following:</p><table><thead><tr><th>Operation</th><th>Stack</th><th>Queue</th></tr></thead><tbody><tr><td>add an item</td><td>push</td><td>enqueue</td></tr><tr><td>remove an item</td><td>pop</td><td>dequeue</td></tr><tr><td>access the &quot;next&quot; item to be removed</td><td>top</td><td>front</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Stacks and Queues are NOT for general storage. They are used to track ordering. Any other features other than the 3 above must be secondary.</p></div><p>Applications of stacks and queues typically involve tracking the ordering of a set of values.<br> Some examples:</p><ul><li>bracket checking (stack)</li><li>breadthfirst tree traversals (queue)</li><li>infix to postfix expression (stack)</li><li>postfix expression calculation (stack)</li></ul><h3 id="implementaiton" tabindex="-1"><a class="header-anchor" href="#implementaiton" aria-hidden="true">#</a> Implementaiton</h3><blockquote><p>As a stack is essentially a list with a restriction on the operations of a list</p></blockquote><p>2 general ways to implement a stack:</p><ol><li>an array</li><li>a linked list</li></ol><h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><h2 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting" aria-hidden="true">#</a> Sorting</h2><h2 id="trees" tabindex="-1"><a class="header-anchor" href="#trees" aria-hidden="true">#</a> Trees</h2><h2 id="graphs" tabindex="-1"><a class="header-anchor" href="#graphs" aria-hidden="true">#</a> Graphs</h2>',63),c=[i];function l(r,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","Algorithms.html.vue"]]);export{k as default};