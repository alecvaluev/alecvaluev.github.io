import{_ as e,o as t,c as o,f as i}from"./app.72bfee78.js";const r={},a=i('<h1 id="red-black-trees" tabindex="-1"><a class="header-anchor" href="#red-black-trees" aria-hidden="true">#</a> Red Black Trees</h1><blockquote><p>trees that are named after the way the nodes are coloured(red/black)</p><p>The height of a red black tree is at most 2 * log(n+1).</p></blockquote><p>Colouring rules:</p><ol><li>every node must have a colour either red or black.</li><li>The root node must be black</li><li>If a node is red, its children must be black (=&gt; red nodes cannot have red parents)</li><li>Every path from root to a null node must have exactly the same number of black nodes.</li></ol><h2 id="insertion" tabindex="-1"><a class="header-anchor" href="#insertion" aria-hidden="true">#</a> Insertion</h2><blockquote><p>bottom up insertion algorithm</p></blockquote><ol><li>find the correct empty tree (like bst) and insert new node as a red node.</li><li>working way up the tree back to parent fix the tree so that the red-black tree rules are maintained.</li></ol><h3 id="fixing-nodes" tabindex="-1"><a class="header-anchor" href="#fixing-nodes" aria-hidden="true">#</a> Fixing nodes:</h3><ul><li>If root becomes red, change it to black. <ul><li>This won&#39;t break any rules because you are just adding 1 black node to every branch of the tree, the number of black nodes increase by 1 everywhere. This can only happen as the root as it is the only node that is part of every path from root to nullleaf</li></ul></li><li>If there are two red nodes in a row: <ul><li>Identify the following nodes: <ul><li>upper red node as the Parent (P)</li><li>the lower red node as the Child (C)</li><li>parent of parent is Grandparent (G)</li><li>sibling of Parent as Parent&#39;s sibling (PS)</li></ul></li></ul></li><li>if the PS is black <ul><li>perform a rotation (look at G-&gt;P-&gt;C, if they form a straight line do a zig-zig(single) rotation, if there is a bend, do a zig-zag (double rotation)</li><li>after rotation exchange G&#39;s colour with the node that took over G&#39;s spot. In otherwords <ul><li>make which ever node (depends if it was zigzig or zigzag rotation... it will either be P or C) that took over G&#39;s node black</li><li>make G red</li></ul></li></ul></li><li>if the PS is red <ul><li>exchange the colour of the grand parent with its two children. In otherwords <ul><li>G becomes red</li><li>P and PS becomes black</li></ul></li></ul></li></ul><blockquote><p>Example: https://catherine-leung.gitbook.io/data-strutures-and-algorithms/red-black-trees</p></blockquote>',10),l=[a];function n(s,d){return t(),o("div",null,l)}const c=e(r,[["render",n],["__file","RedBlackTree.html.vue"]]);export{c as default};
