import{_ as e,o as t,c as a,f as i}from"./app.abc91adb.js";const o={},n=i('<h1 id="relational-database-design" tabindex="-1"><a class="header-anchor" href="#relational-database-design" aria-hidden="true">#</a> Relational Database Design</h1><p>High-level conceptual data models provide concepts for presenting data in ways that are close to the way people perceive data. A typical example is the entity relationship model, which uses main concepts like entities, attributes and relationships.</p><h2 id="record-based-logical-data-models" tabindex="-1"><a class="header-anchor" href="#record-based-logical-data-models" aria-hidden="true">#</a> Record-based Logical Data Models</h2><p>Three well-known data models of this type:</p><ul><li>relational model</li></ul><p>represents data as relations, or tables</p><ul><li>network model</li></ul><p>represents data as record types. This model also represents a limited type of one to many relationship called a set type</p><ul><li>hierarchical model</li></ul><p>represents data as a hierarchical tree structure. Each branch of the hierarchy represents a number of related records.</p><h2 id="relational-models" tabindex="-1"><a class="header-anchor" href="#relational-models" aria-hidden="true">#</a> Relational Models</h2><p>It was introduced by E. F. Codd in 1970. Currently, it is the most widely used data model.</p><p><code>Data Modeling</code> is simple a method of describing data or information which includes:</p><ul><li>the structure and format of data storage</li><li>operations performed on data (SQL)</li><li>constraints/enforced rules</li></ul><p>It further extends the data model by defining relationships between various data points</p><div class="custom-container tip"><p class="custom-container-title">Meaning</p><p>The relational data model describes the world as \u201Ca collection of inter-related relations (or tables).\u201D</p></div><h3 id="basics-of-the-relational-model" tabindex="-1"><a class="header-anchor" href="#basics-of-the-relational-model" aria-hidden="true">#</a> Basics of the Relational Model</h3><p>A database is composed of multiple tables and each table holds the data.</p><ul><li>data is represented by a series of two dimensional tables(<code>realtions/tables/files</code>)</li><li><code>row/record/tuple</code> in a table represents a <code>single instance</code> of the entity</li><li><code>column/field</code> represents an <code>attribute/property</code> of that entity</li></ul><blockquote><p>Each column, for each row, can only have one value in it (i.e. the values must be <code>atomic</code>).</p></blockquote><p><code>A domain</code> is the original sets of atomic values used to model data.</p><p>In summary, a domain is a set of acceptable values that a column is allowed to contain.</p><blockquote><p>domain of Shift has the set of all possible days: {Mon, Tue, Wed\u2026})</p><p>domain of Marital Status has a set of possibilities: Married, Single, Divorced</p></blockquote><p>The <code>degree</code> is the number of attributes in a table</p><p>Properties of a Table:</p><ul><li>has a distinct name</li><li>each row is distinct</li><li>entries in columns are atomic</li><li>entries in columns are from the same domain based on their data type</li><li>operations combining different data types are disallowed.</li><li>each attribute has a distinct name.</li><li>sequence of columns is insignificant.</li><li>sequence of rows is insignificant.</li></ul><div class="custom-container danger"><p class="custom-container-title">Terminology Key</p><table><thead><tr><th>Formal Terms (Codd)</th><th>Alternative 1</th><th>Alternative 2</th></tr></thead><tbody><tr><td>Relation</td><td>Table</td><td>File</td></tr><tr><td>Tuple</td><td>Row</td><td>Record</td></tr><tr><td>Attribute</td><td>Column</td><td>Field</td></tr></tbody></table></div><h3 id="schema-notation" tabindex="-1"><a class="header-anchor" href="#schema-notation" aria-hidden="true">#</a> Schema Notation</h3><p><code>A Schema</code> represents the name of a relation (table) and its&#39; attributes and can be written as follows:</p><blockquote><p>DEPARTMENT ( department_id, department_name, manager_id, location_id )</p></blockquote><h2 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> Keys</h2><p><code>A key</code> is a single attribute or a combination of attributes that will uniquely identify a specific instance, or row, in a table.</p><table><thead><tr><th>Type</th><th>Desc</th></tr></thead><tbody><tr><td>Candidate Key</td><td>an attr or combination of attr that could potentially be used to uniquely identify an single instance, or row, in a table</td></tr><tr><td>Primary Key</td><td>an attr or combination of attr that has been chosen to uniquely identify a single instance, or row, in a table.</td></tr><tr><td>Composite Key</td><td>A composite key is the case where multiple attributes make up a candidate or primary key. The uniqueness comes from the unique combination of values. Each single attribute can have repeat values, but there can be no repeats in the combination of values from all attributes that are part of the composite key.</td></tr><tr><td>Surrogate Key</td><td>Is an artificially added field, or attribute, that is added to replace the existing fields from being the primary key. This occurs most often in 2 cases: 1) when multiple composite fields are chosen, in order to simplify the interaction with the database and 2) when there is not a field, or attribute, available to be a Primary Key</td></tr><tr><td>Foreign Key</td><td>A foreign key is a constraint applied to a table defining the relationship between two tables (see next section).</td></tr></tbody></table><div class="custom-container danger"><p class="custom-container-title">Fundamental Rule</p><p>table must have one, and only one, primary key. Remember that a composite key is a single key made up of more than one field.</p></div><h2 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> Relationships</h2><p>When multiple tables, or entities, are being used, there is often attributes in each table the relates the two tables together</p><h3 id="relationship-types" tabindex="-1"><a class="header-anchor" href="#relationship-types" aria-hidden="true">#</a> Relationship Types</h3><table><thead><tr><th>Type</th><th>Ex</th></tr></thead><tbody><tr><td>1-to-many (1-\u221E)</td><td>These relationships are the most common type of relationship and means that in one direction, there can be only one value per row of the child table, but in the other direction, there can many rows in the child table that reference a single row in the parent table.</td></tr><tr><td>1-to-1 (1-1)</td><td>These relationships are used to reference multiple attributes of a row, determined by the primary key, where different attributes have varying levels of completeness (i..e they have a value or not). When investigating the relationship from both directions, there can not be more than one related row in either table. An example follows.</td></tr><tr><td>many-to-many (\u221E-\u221E)</td><td>Many-to-Many, also noted M:M or M:N, relationships are a special circumstance where there could be more than one reference to each row of the other table, in both directions. If the league was to decide that a player could play on more than one team, then the design of the tables has to change, but then we would have the scenario where each team could have more than one player and each player could play on more than one team.</td></tr></tbody></table><h2 id="referential-integrity" tabindex="-1"><a class="header-anchor" href="#referential-integrity" aria-hidden="true">#</a> Referential Integrity</h2><blockquote><p>it helps prevent errors in the data</p></blockquote><p><code>Referential Integrity</code> ensures that values entered into child table attributes already exist in the parent table. Additionally, referential integrity prevents records in a parent table to be deleted if it is currently being referenced from a child table.</p><p><code>An orphan record</code> is a child value that does not have an associated parent.</p><h3 id="cascading" tabindex="-1"><a class="header-anchor" href="#cascading" aria-hidden="true">#</a> Cascading</h3><p>It&#39;s a feature for helping automate the process and simplify the steps needed to allow these changes to occur</p><p>Types of cascading:</p><ol><li>Cascade Updates</li></ol><p>If the primary key of the parent record changes for any reason, then the child records that reference the parent value would be automatically updated to match the change.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>This feature is generally safe to include when the parent value is a <strong>primary key</strong> (a single field), as the uniqueness feature would maintain the unique reference between tables. However, in cases of a <strong>composite primary key</strong>, the uniqueness comes only from the combination of values and therefore it is possible that records could overlap and mixed together where they should not be.</p></div><ol start="2"><li>Cascade Deletes</li></ol><p>Cascade deletes are the most dangerous version of cascading. If a parent record is deleted, then all child records that refer to the parent record will also be deleted.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>If there are multiple relationships in a database, one relationship can not override another.</p><ol><li>cascade deletes - allowed - then both player 123 and the associated coaching position would also be deleted.</li><li>cascade deletes - not allowed - then the coaching position would prevent player 123 from being deleted, and because player 123 can not be deleted, team 22 (the Hornets) also can not be deleted, regardless of cascade deletes enabled on that relationship.</li></ol></div><h2 id="table-types" tabindex="-1"><a class="header-anchor" href="#table-types" aria-hidden="true">#</a> Table types</h2><p>4 major types of tables in common databases:</p><table><thead><tr><th>Table</th><th>Desc</th></tr></thead><tbody><tr><td>Data Table</td><td>The purpose is to store raw data for later querying, analyzing and manipulating. The majority of tables in a database are of this type</td></tr><tr><td>Lookup Table</td><td>The purpose is to centralize data to avoid repeated data groups. A common use - to populate a dropdown list on a website or user interface., Often lookup tables are parent tables in relationships. Examples: Provinces, Countries, Colours</td></tr><tr><td>Junction/Bridge Table</td><td>A third table created between two tables to simulate a many-to-many relationship through two opposite 1-to-many relationships. Junction or Bridge tables can often contain data as well, based on the dependencies between the data and the two parent primary keys.</td></tr><tr><td>Temporary Table</td><td>A table that has limited lifetime in a database. Often these table lack referential integrity, are not manually manipulated, break several fundamental database design rules, but has a very distinct purpose in a database. These purposes could include:</td></tr></tbody></table><ul><li>moving data from one table to another or importing data from an external source</li><li>migrating an old database design to a new database design</li><li>the static storage of query results to minimize repeated processing required for complex calculations. (Often used for feeding high traffic websites or mobile applications) |</li></ul><div class="custom-container danger"><p class="custom-container-title">Key Terms</p><details class="custom-container details"><p><strong>hierarchical model</strong>: represents data as a hierarchical tree structure <strong>instance</strong>: a record within a table</p><p><strong>network model</strong>: represents data as record types</p><p><strong>relation</strong>: another term for table</p><p><strong>relational model</strong>: represents data as relations or tables</p><p><strong>set type</strong>: a limited type of one to many relationship</p><p><strong>atomic value</strong>: each value in the domain is indivisible as far as the relational model is concernedattribute: principle storage unit in a database</p><p><strong>degree</strong>: number of attributes in a table</p><p><strong>domain</strong>: the original sets of atomic values used to model data; a set of acceptable values that a column is allowed to contain</p><p><strong>record</strong>: contains fields that are related; see tuple</p><p><strong>relation</strong>: a subset of the Cartesian product of a list of domains characterized by a name; the technical term for table or file</p><p><strong>structured query language (SQL)</strong>: the standard database access language</p><p><strong>tuple</strong>: a technical term for row or record</p><p>alternate key: all candidate keys not chosen as the primary keycandidate key: a simple or composite key that is unique (no two rows in a table may have the same value) and minimal (every column is necessary) characteristic entities: entities that provide more information about another table</p><p>composite attributes: attributes that consist of a hierarchy of attributes</p><p>composite key: composed of two or more attributes, but it must be minimal</p><p>dependent entities: these entities depend on other tables for their meaning</p><p>derived attributes: attributes that contain values calculated from other attributes</p><p>derived entities: see dependent entities</p><p>EID: employee identification (ID)</p><p>entity: a thing or object in the real world with an independent existence that can be differentiated from other objects</p><p>entity relationship (ER) data model: also called an ER schema, are represented by ER diagrams. These are well suited to data modelling for use with databases.</p><p>entity relationship schema: see entity relationship data model</p><p>entity set:a collection of entities of an entity type at a point of time</p><p>entity type: a collection of similar entities</p><p>foreign key (FK): an attribute in a table that references the primary key in another table OR it can be null</p><p>independent entity: as the building blocks of a database, these entities are what other tables are based on</p><p>kernel: see independent entity</p><p>key: an attribute or group of attributes whose values can be used to uniquely identify an individual entity in an entity set</p><p>multivalued attributes: attributes that have a set of values for each entity</p><p>n-ary: multiple tables in a relationship</p><p>null: a special symbol, independent of data type, which means either unknown or inapplicable; it does not mean zero or blank</p><p>recursive relationship: see unary relationship</p><p>relationships: the associations or interactions between entities; used to connect related information between tables</p><p>relationship strength: based on how the primary key of a related entity is defined</p><p>secondary key an attribute used strictly for retrieval purposes</p><p>simple attributes: drawn from the atomic value domains</p><p>single-valued attributes: see simple attributes</p><p>stored attribute: saved physically to the database</p><p>ternary relationship: a relationship type that involves many to many relationships between three tables.</p><p>unary relationship: one in which a relationship exists between occurrences of the same entity set.</p></details></div>',56),r=[n];function s(l,d){return t(),a("div",null,r)}const c=e(o,[["render",s],["__file","RelationalDBDesign.html.vue"]]);export{c as default};
