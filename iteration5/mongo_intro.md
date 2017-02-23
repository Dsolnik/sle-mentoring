#Introduction to MD

##MongoDB Schema Design
brief review
* MongoDB supports Rich Documents
* Pre join/embed data
* no Mongo joins; because joins are very hard to scale, and we want to be high-performance
* no constraints
* Atomic Operations
* No declared Schema

### Normalization: Relational vs Non-Relational/MongoDB world:
* Free the db of modification anomalies
* Minimize re-design when extending
* __MONGODB DOESN'T CARE ABOUT THIS__:Avoid bias toward any particular access pattern

###MongoDB




##Remember These:
* The single most important factor in designing your application schema within MongoDB is to _match the data access patterns of your application_.
* This data acccess pattern is not well supported by the blog schema? _Providing a table of contents by tag_


