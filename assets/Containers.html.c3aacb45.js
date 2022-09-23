import{_ as t,o as d,c as e,f as r}from"./app.0249873a.js";const n={},a=r('<h1 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h1><h2 id="sequencial-containers" tabindex="-1"><a class="header-anchor" href="#sequencial-containers" aria-hidden="true">#</a> Sequencial Containers</h2><blockquote><p>Elems ordered in a strict linear sequence. Individual elements are accessed by their position in this sequence.</p></blockquote><h3 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> Vector</h3><p>&lt; vector&gt;</p><blockquote><p>representing arrays that can change in size</p></blockquote><ul><li>contiguous storage</li><li>access using offsets</li><li>storage handled automatically</li></ul><p>Compare to other seq.cont.</p><ul><li>efficient access</li><li>relatively efficient adding or removing (end)</li><li>inserting or removing (other pos.) - worse</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>vector may allocate extra storage to accommodate for possible growth.</p><p>it may need to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new array and moving all elements to it.</p><ul><li>amortized constant time complexity</li></ul></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><p>&lt; array&gt;</p><ul><li>fixed-size</li><li>contiguous storage</li><li>access using offsets</li><li>does not keep any data other than the elem</li><li>can be treated as tuple objects</li></ul><h3 id="deque-double-ended-queue" tabindex="-1"><a class="header-anchor" href="#deque-double-ended-queue" aria-hidden="true">#</a> Deque (Double ended queue)</h3><p>&lt; deque&gt;</p><ul><li>dynamic size</li><li>not guaranteed to store all its elements in contiguous storage</li><li>iterators</li></ul><div class="custom-container danger"><p class="custom-container-title">Note</p><p>access by offset can cause undefined behavious</p></div><ul><li>efficient insertion and deletion (not only at its end)</li><li>worse insertion and deletion at other pos.</li></ul><h3 id="forward-list" tabindex="-1"><a class="header-anchor" href="#forward-list" aria-hidden="true">#</a> Forward List</h3><p>&lt; forward_list&gt;</p><ul><li>impl. singly-linked lists</li><li>constant time insert and erase (anywhere)</li><li>more efficient than list</li></ul><p>Compare to other cont.</p><ul><li>better in inserting, extracting and moving elem(anywhere)</li><li>lack direct access</li></ul><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h3><p>&lt; list&gt;</p><ul><li>impl. doubly-linked lists</li><li>constant time insert and erase(anywhere)</li></ul><p>Compare to other cont.</p><ul><li>better in inserting, extracting and moving elem(anywhere)</li><li>lack direct access</li></ul><h2 id="container-adaptors" tabindex="-1"><a class="header-anchor" href="#container-adaptors" aria-hidden="true">#</a> Container Adaptors</h2><blockquote><p>classes that use an encapsulated object of a specific container class as its underlying container, providing a specific set of member functions to access its elements.</p></blockquote><p>Support operations:</p><ul><li>empty()</li><li>size()</li><li>front()</li><li>push_back()</li><li>pop_back()</li></ul><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h3><p>&lt; queue&gt;</p><blockquote><p>designed to operate in a FIFO</p></blockquote><div class="custom-container tip"><p class="custom-container-title">Underlying Container</p><p><strong>deque</strong> | list</p></div><h3 id="priority-queue" tabindex="-1"><a class="header-anchor" href="#priority-queue" aria-hidden="true">#</a> Priority Queue</h3><p>&lt; queue&gt;</p><blockquote><p>designed such that its first element is always the greatest of the elements it contains, according to some strict weak ordering criterion.</p></blockquote><ul><li>random access iters.</li></ul><div class="custom-container tip"><p class="custom-container-title">Underlying Container</p><p><strong>vector</strong> | deque</p></div><h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h3><p>&lt; stack&gt;</p><blockquote><p>designed to operate in a LIFO</p></blockquote><ul><li>inserted/extracted only from one end</li></ul><div class="custom-container tip"><p class="custom-container-title">Underlying Container</p><p><strong>deque</strong> | vector | list</p></div><h2 id="associative-containers" tabindex="-1"><a class="header-anchor" href="#associative-containers" aria-hidden="true">#</a> Associative Containers</h2><blockquote><p>store elements formed by a combination of a key value and a mapped value, following a specific order</p></blockquote><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>&lt; map&gt;</p><blockquote><p>key values are generally used to sort and uniquely identify the elem</p></blockquote><p>grouped together in member type value_type, which is a pair type combining both:</p><p>typedef pair&lt;const Key, T&gt; value_type;</p><ul><li>impl. as binary search trees</li><li>unique keys</li><li>sorted</li><li>slower than unordered_map</li><li>direct access by key using []</li></ul><h2 id="mutlimap" tabindex="-1"><a class="header-anchor" href="#mutlimap" aria-hidden="true">#</a> Mutlimap</h2><p>&lt; map&gt;</p><div class="custom-container danger"><p class="custom-container-title">Note</p><p>Same as MAP but elements in the container can have equivalent keys</p></div><h2 id="unordered-map" tabindex="-1"><a class="header-anchor" href="#unordered-map" aria-hidden="true">#</a> Unordered Map</h2><p>&lt; unordered_map&gt;</p><ul><li>not sorted</li><li>unique keys</li><li>organized into buckets depending on their hash values</li><li>faster than map</li><li>less efficient for range iteration through a subset of their elem</li></ul><h2 id="unordered-mutlimap" tabindex="-1"><a class="header-anchor" href="#unordered-mutlimap" aria-hidden="true">#</a> Unordered Mutlimap</h2><p>&lt; unordered_map&gt;</p><p>Elements with equivalent keys are grouped together in the same bucket and in such a way that an iterator (see equal_range) can iterate through all of them.</p><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2><p>&lt; set&gt;</p><blockquote><p>store unique elements following a specific order</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Note</p><p>the value is itself the key, of type T ::</p><ul><li>each value is unique</li><li>value cannot be modified once inside</li><li>sorted</li><li>slower than unordered_set</li></ul><h2 id="multiset" tabindex="-1"><a class="header-anchor" href="#multiset" aria-hidden="true">#</a> Multiset</h2><p>&lt; set&gt;</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>the value is itself the key, of type T ::</p><ul><li>value cannot be modified once inside</li><li>sorted</li><li>impl. as binary search trees</li><li>can have equivalent keys</li><li>slower than unordered_multiset</li></ul><h2 id="sequence-containers" tabindex="-1"><a class="header-anchor" href="#sequence-containers" aria-hidden="true">#</a> Sequence containers</h2><table><thead><tr><th>Headers</th><th>&lt; array&gt;</th><th>&lt; vector&gt;</th><th>&lt; deque&gt;</th><th>&lt;forward_list&gt;</th><th>&lt; list&gt;</th></tr></thead><tbody><tr><td><strong>Members</strong></td><td>array</td><td>vector</td><td>deque</td><td>forward_list</td><td>list</td></tr><tr><td><strong>constructor</strong></td><td>implicit</td><td>vector</td><td>deque</td><td>forward_list</td><td>list</td></tr><tr><td><strong>destructor</strong></td><td>implicit</td><td>~vector</td><td>~deque</td><td>~forward_list</td><td>~list</td></tr><tr><td><strong>operator=</strong></td><td>implicit</td><td>operator=</td><td>operator=</td><td>operator=</td><td>operator=</td></tr><tr><td><strong>begin</strong></td><td>begin</td><td>begin</td><td>begin</td><td>begin/before_begin</td><td>begin</td></tr><tr><td><strong>end</strong></td><td>end</td><td>end</td><td>end</td><td>end</td><td>end</td></tr><tr><td><strong>rbegin</strong></td><td>rbegin</td><td>rbegin</td><td>rbegin</td><td></td><td>rbegin</td></tr><tr><td><strong>rend</strong></td><td>rend</td><td>rend</td><td>rend</td><td></td><td>rend</td></tr><tr><td><strong>cbegin</strong></td><td>cbegin</td><td>cbegin</td><td>cbegin</td><td>cbegin/cbefore_begin</td><td>cbegin</td></tr><tr><td><strong>cend</strong></td><td>cend</td><td>cend</td><td>cend</td><td>cend</td><td>cend</td></tr><tr><td><strong>crbegin</strong></td><td>crbegin</td><td>crbegin</td><td>crbegin</td><td></td><td>crbegin</td></tr><tr><td><strong>crend</strong></td><td>crend</td><td>crend</td><td>crend</td><td></td><td>crend</td></tr><tr><td><strong>capacity</strong></td><td>size</td><td>size</td><td>size</td><td>size</td><td></td></tr><tr><td><strong>max_size</strong></td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td></tr><tr><td><strong>empty</strong></td><td>empty</td><td>empty</td><td>empty</td><td>empty</td><td>empty</td></tr><tr><td><strong>resize</strong></td><td></td><td>resize</td><td>resize</td><td>resize</td><td>resize</td></tr><tr><td><strong>shrink_to_fit</strong></td><td></td><td>shrink_to_fit</td><td>shrink_to_fit</td><td></td><td></td></tr><tr><td><strong>capacity</strong></td><td></td><td>capacity</td><td></td><td></td><td></td></tr><tr><td><strong>reserve</strong></td><td></td><td>reserve</td><td></td><td></td><td></td></tr><tr><td><strong>element access</strong></td><td>front</td><td>front</td><td>front</td><td>front</td><td>front</td></tr><tr><td><strong>back</strong></td><td>back</td><td>back</td><td>back</td><td></td><td>back</td></tr><tr><td><strong>operator[]</strong></td><td>operator[]</td><td>operator[]</td><td>operator[]</td><td></td><td></td></tr><tr><td><strong>at</strong></td><td>at</td><td>at</td><td>at</td><td></td><td></td></tr><tr><td><strong>assign</strong></td><td></td><td></td><td>assign</td><td>assign</td><td>assign</td></tr><tr><td><strong>emplace</strong></td><td></td><td></td><td>emplace</td><td>emplace</td><td>emplace_after</td></tr><tr><td><strong>insert</strong></td><td></td><td></td><td>insert</td><td>insert</td><td>insert_after</td></tr><tr><td><strong>erase</strong></td><td></td><td></td><td>erase erase</td><td>erase_after</td><td>erase</td></tr><tr><td><strong>emplace_back</strong></td><td></td><td>emplace_back</td><td>emplace_back</td><td></td><td>emplace_back</td></tr><tr><td><strong>push_back</strong></td><td></td><td>push_back</td><td>push_back</td><td></td><td>push_back</td></tr><tr><td><strong>pop_back</strong></td><td></td><td>pop_back</td><td>pop_back</td><td></td><td>pop_back</td></tr><tr><td><strong>emplace_front</strong></td><td></td><td></td><td>emplace_front</td><td>emplace_front</td><td>emplace_front</td></tr><tr><td><strong>push_front</strong></td><td></td><td></td><td>push_front</td><td>push_front</td><td>push_front</td></tr><tr><td><strong>pop_front</strong></td><td></td><td></td><td>pop_front</td><td>pop_front</td><td>pop_front</td></tr><tr><td><strong>clear</strong></td><td></td><td>clear</td><td>clear</td><td>clear</td><td>clear</td></tr><tr><td><strong>swap</strong></td><td>swap</td><td>swap</td><td>swap</td><td>swap</td><td>swap</td></tr><tr><td><strong>splice</strong></td><td></td><td></td><td></td><td>splice_after</td><td>splice</td></tr><tr><td><strong>remove</strong></td><td></td><td></td><td></td><td>remove</td><td>remove</td></tr><tr><td><strong>remove_if</strong></td><td></td><td></td><td></td><td>remove_if</td><td>remove_if</td></tr><tr><td><strong>unique</strong></td><td></td><td></td><td></td><td>unique</td><td>unique</td></tr><tr><td><strong>merge</strong></td><td></td><td></td><td></td><td>merge</td><td>merge</td></tr><tr><td><strong>sort</strong></td><td></td><td></td><td></td><td>sort</td><td>sort</td></tr><tr><td><strong>reverse</strong></td><td></td><td></td><td></td><td>reverse</td><td>reverse</td></tr><tr><td><strong>get_allocator</strong></td><td></td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td></tr><tr><td><strong>data</strong></td><td>data</td><td>data</td><td></td><td></td><td></td></tr></tbody></table><h2 id="associative-containers-1" tabindex="-1"><a class="header-anchor" href="#associative-containers-1" aria-hidden="true">#</a> Associative containers</h2><table><thead><tr><th>Headers</th><th>&lt; set&gt;</th><th></th><th>&lt; map&gt;</th><th></th><th>&lt;unordered_set&gt;</th><th></th><th>&lt;unordered_map&gt;</th><th></th></tr></thead><tbody><tr><td><strong>Members</strong></td><td>set</td><td>multiset</td><td>map</td><td>multimap</td><td>unordered_set</td><td>unordered_multiset</td><td>unordered_map</td><td>unordered_multimap</td></tr><tr><td><strong>constructor</strong></td><td>set</td><td>multiset</td><td>map multimap</td><td>unordered_set</td><td>unordered_multiset</td><td>unordered_map</td><td>unordered_multimap</td><td></td></tr><tr><td><strong>destructor</strong></td><td>~set</td><td>~multiset</td><td>~map</td><td>~multimap</td><td>~unordered_set</td><td>~unordered_multiset</td><td>~unordered_map</td><td>~unordered_multimap</td></tr><tr><td><strong>assignment</strong></td><td>operator=</td><td>operator=</td><td>operator=</td><td>operator=</td><td>operator=</td><td>operator=</td><td>operator=</td><td>operator=</td></tr><tr><td><strong>begin</strong></td><td>begin</td><td>begin</td><td>begin</td><td>begin</td><td>begin</td><td>begin</td><td>begin</td><td>begin</td></tr><tr><td><strong>end</strong></td><td>end</td><td>end</td><td>end</td><td>end</td><td>end</td><td>end</td><td>end</td><td>end</td></tr><tr><td><strong>rbegin</strong></td><td>rbegin</td><td>rbegin</td><td>rbegin</td><td>rbegin</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>rend</strong></td><td>rend</td><td>rend</td><td>rend</td><td>rend</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>cbegin</strong></td><td>cbegin</td><td>cbegin</td><td>cbegin</td><td>cbegin</td><td>cbegin</td><td>cbegin</td><td>cbegin</td><td>cbegin</td></tr><tr><td><strong>cend</strong></td><td>cend</td><td>cend</td><td>cend</td><td>cend</td><td>cend</td><td>cend</td><td>cend</td><td>cend</td></tr><tr><td><strong>crbegin</strong></td><td>crbegin</td><td>crbegin</td><td>crbegin</td><td>crbegin</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>crend</strong></td><td>crend</td><td>crend</td><td>crend</td><td>crend</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>capacity</strong></td><td>size</td><td>size</td><td>size</td><td>size</td><td>size</td><td>size</td><td>size</td><td>size</td></tr><tr><td><strong>max_size</strong></td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td><td>max_size</td></tr><tr><td><strong>empty</strong></td><td>empty</td><td>empty</td><td>empty</td><td>empty</td><td>empty</td><td>empty</td><td>empty</td><td>empty</td></tr><tr><td><strong>reserve</strong></td><td></td><td></td><td></td><td></td><td>reserve</td><td>reserve</td><td>reserve</td><td>reserve</td></tr><tr><td><strong>at</strong></td><td></td><td></td><td>at</td><td></td><td></td><td></td><td>at</td><td></td></tr><tr><td><strong>operator[]</strong></td><td></td><td></td><td>operator[]</td><td></td><td></td><td></td><td>operator[]</td><td></td></tr><tr><td><strong>emplace</strong></td><td>emplace</td><td>emplace</td><td>emplace</td><td>emplace</td><td>emplace</td><td>emplace</td><td>emplace</td><td>emplace</td></tr><tr><td><strong>emplace_hint</strong></td><td>emplace_hint</td><td>emplace_hint</td><td>emplace_hint</td><td>emplace_hint</td><td>emplace_hint</td><td>emplace_hint</td><td>emplace_hint</td><td>emplace_hint</td></tr><tr><td><strong>insert</strong></td><td>insert</td><td>insert</td><td>insert</td><td>insert</td><td>insert</td><td>insert</td><td>insert</td><td>insert</td></tr><tr><td><strong>erase</strong></td><td>erase</td><td>erase</td><td>erase</td><td>erase</td><td>erase</td><td>erase</td><td>erase</td><td>erase</td></tr><tr><td><strong>clear</strong></td><td>clear</td><td>clear</td><td>clear</td><td>clear</td><td>clear</td><td>clear</td><td>clear</td><td>clear</td></tr><tr><td><strong>swap</strong></td><td>swap</td><td>swap</td><td>swap</td><td>swap</td><td>swap</td><td>swap</td><td>swap</td><td>swap</td></tr><tr><td><strong>count</strong></td><td>count</td><td>count</td><td>count</td><td>count</td><td>count</td><td>count</td><td>count</td><td>count</td></tr><tr><td><strong>find</strong></td><td>find</td><td>find</td><td>find</td><td>find</td><td>find</td><td>find</td><td>find</td><td>find</td></tr><tr><td><strong>equal_range</strong></td><td>equal_range</td><td>equal_range</td><td>equal_range</td><td>equal_range</td><td>equal_range</td><td>equal_range</td><td>equal_range</td><td>equal_range</td></tr><tr><td><strong>lower_bound</strong></td><td>lower_bound</td><td>lower_bound</td><td>lower_bound</td><td>lower_bound</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>upper_bound</strong></td><td>upper_bound</td><td>upper_bound</td><td>upper_bound</td><td>upper_bound</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>get_allocator</strong></td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td><td>get_allocator</td></tr><tr><td><strong>key_comp</strong></td><td>key_comp</td><td>key_comp</td><td>key_comp</td><td>key_comp</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>value_comp</strong></td><td>value_comp</td><td>value_comp</td><td>value_comp</td><td>value_comp</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>key_eq</strong></td><td></td><td></td><td></td><td></td><td>key_eq</td><td>key_eq</td><td>key_eq</td><td>key_eq</td></tr><tr><td><strong>hash_function</strong></td><td></td><td></td><td></td><td></td><td>hash_function</td><td>hash_function</td><td>hash_function</td><td>hash_function</td></tr><tr><td><strong>buckets bucket</strong></td><td></td><td></td><td></td><td></td><td>bucket</td><td>bucket</td><td>bucket</td><td>bucket</td></tr><tr><td><strong>bucket_count</strong></td><td></td><td></td><td></td><td></td><td>bucket_count</td><td>bucket_count</td><td>bucket_count</td><td>bucket_count</td></tr><tr><td><strong>bucket_size</strong></td><td></td><td></td><td></td><td></td><td>bucket_size</td><td>bucket_size</td><td>bucket_size</td><td>bucket_size</td></tr><tr><td><strong>max_bucket_count</strong></td><td></td><td></td><td></td><td></td><td>max_bucket_count</td><td>max_bucket_count</td><td>max_bucket_count</td><td>max_bucket_count</td></tr><tr><td><strong>rehash</strong></td><td></td><td></td><td></td><td></td><td>rehash</td><td>rehash</td><td>rehash</td><td>rehash</td></tr><tr><td><strong>load_factor</strong></td><td></td><td></td><td></td><td></td><td>load_factor</td><td>load_factor</td><td>load_factor</td><td>load_factor</td></tr><tr><td><strong>max_load_factor</strong></td><td></td><td></td><td></td><td></td><td>max_load_factor</td><td>max_load_factor</td><td>max_load_factor</td><td>max_load_factor</td></tr></tbody></table></div></div>',67),o=[a];function s(i,l){return d(),e("div",null,o)}const g=t(n,[["render",s],["__file","Containers.html.vue"]]);export{g as default};
