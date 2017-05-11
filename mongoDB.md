# Chapter 1 - Introduction

### How should we scale out our databases?
Scaling a database comes down to the two choices of scaling up (getting a bigger machine), or scaling out (partitioning data across more machines).
_MongoDB was designed to scale out._ Its documented-oriented model makes it easier for it to split up data across multiple servers.


# Chapter 2 - Getting Started

### Basic MongoDB Concepts

* a _document_ is the basic unit of data for MongoDB -- the same to a _row_ in a relational db.
  - every document has a special key, `_id` that is unique within a collection
* a _collection_ is the equivalent of a table with a dynamic schema
* a single instance of MongoDB can host multiple independent _databases_, each of which can have its own collections.
* MongoDB comes with a JS shell, `mongo`, used for admin and data manipulation

## Documents 

* Every MongoDB document has an ordered set of key with associated values; just like a JSON object `{"key" : value}`
* MongoDB is type-sensitive and case-sensitive. 
* MongoDB CANNOT contain duplicate keys

## Collections

* A collection is a group of documents.
* Collections have _dynamic schemas_, meaning documents within a single collection can have any number of different "shapes"
* With no need for separate schemas for different kinds of documents, why should we use more than one collection? There are several good reasons:
    * __Separation of Concerns__: devs need to ensure that each query is only returning documents of a certain type, or that the app code performing the query can handle documents of different shapes.
    * __Speed__: It is much faster get a list of collections than to extra a list of the types in a collection. 
    * __Data Locality & Reduced Disk Seeks__: grouping documents of the same kind together in the same collection allows for data locality. This leads to fewer disk seeks.
    * __Efficient Indexing__: by putting documents of a single type into the same collection, we can index our collections more efficiently.


## Naming

* __Subcollections__ are a useful naming convention, a great way to organize data in MongoDB and is highly recommended. Subcollections are denoted by the a delimiting `.` character.
    * i.e., blog.posts and blog.authors insinuate that these are two child collections from the parent blog collection. 

## Databases
MongoDB groups collections into _databases_. A database has its own permissions and each database is stored in separate files on disk.

__Reserved Database names__:
  * _admin_: this is the "root" db, in terms of auth. if a user is added to the _admin_ db, the user automatically inherits permissions for all databases. 
  * _local_: this database will never be replicated and can be used to store any collections that should be local to a single server. 
  * _config_ when MongoDB is being used in a sharded setup, it uses the _config_ db to store information about shards

* _namespace_: when you concatenate a db name with a collection in that db; i.e., `cms.blog.posts`


## Data Types 

Documents in MongoDB can be thought of as _JSON-like_. They have the 6 data types of JSON: null, boolean, numeric, string, array, and object and have a few more additional data types on top of that. The additional data types are: 
  * __date__: in epoch time, where time zone is not stored
  * __regular expressions__: queries can use regular expressions using JS's RegEx syntax
  * __embedded document__: documents can contain entire documents embedded as values in a parent document. 
      * i.e, if we have a document representing a person, and want to store his address... we can nest his "address" data as a document where it contains: street, city, state
  * __object id__: Every Mongo object MUST HAVE a unique `_id` key, stored as a 12 byte ID
  * __binary data__: string of arbitary bytes. it's the only way to save non-UTF-8 strings to the database (like images :) )
  * __code__ : Queries and Documents can contain arbitrary JS code.
  
 
## MongoDB Shell, `mongo`

* __Create__: `db.collection.insert()`
* __Read__: `db.collection.findOne()` ; or `find()` for many
* __Update__: `db.collection.update()`
* __Delete__: `db.collection.remove()`

### Running Scripts with the Shell

* Running scripts from within the interactive shell using `load()`
    * scripts have access to the db variable ( as well as any other globals)
    * you can use scripts to inject variables into the shell, such as help functions that you commonly use.
    
    
### Creating a `.mongorc.js`

If you have frequently-loaded scripts you might want to put them in your `mongorc.js` file - this file is run whenever you start up the shell. Create a file called `.mongorc.js` in your home directory to do so.

* you can config this file to remove certain commands such as the "dangerous" shell helpers: `dropDatabase`, or `deleteIndexes`
    * i.e., 
        - `DBCollection.prototype.drop = no`
        - `db.dropDatabase = DB.prototype.dropDatabase = no`
    * MAKE SURE that, if you change any db functions you do so on both the db variable and the DB prototype.
    * If done correctly, if you try to call any of these functions, it will print an error message.
    * you can disable your `.mongorc.js` by using the `--norc` flag when starting the shell

# Chapter 3 - Creating, Updating, and Deleting Documents 

## Inserting & Saving Documents

### Bulk Insert
if you have a situation where you are inserting multiple documents into a collection, you can make the insert faster by using _batch_ inserts: `db.foo.batchInsert()`

* batch inserts are only useful if you are inserting multiple documents into a single collection. You cannot use batch inserts to insert into multiple collectioins with a single request.
* __Warning__: Current versions of MongoDB do not accept messages longer than 48 MB. If you attempt to insert more than 48MB, many drivers will split up the batch insert into multiple 48MB batch inserts.

### Insert Validation
MongoDB does minimal checks on data being inserted. Some checks are:
* does the `_id` field exist, if not add one
* document size has to be < 16MB

## Removing Documents

* `db.foo.remove()` will remove all documents in the _foo_ collection
    * you can specifiy parameters as to which documents should be removed: `db.mailing.list.remove({"email" : true})`
* if you want to clear an entire collection , it is faster to `db.foo.drop()` than to `remove()` document-by-document. It is vastly faster, but if a whole collection is dropped, all its metadata is deleted with is.

### Document Replacement 

* the simplest type of update replaces a matching document with a new one. __This can be useful to do a dramatic schema migration.__
* __REMEMBER__ to use best practice, and replace a _unique_ document by a key like `_id`. 
    - this is why `db.people.update({"name": "joe"}, joe})` doesn't work and `db.people.update({"_id": ObjectID("...")}, joe)` works.

## Using Modifiers 
Usually only certain portions of a document need to be updated. You can update specific fields in a document using atomic _update modifiers_.

* __Update Modifiers__ are special keys that can be used to specify complex update operations.


### Updating or Setting the value within an existing Document
`"$set"` modifier updates or sets the value of a field. A user can use `"$set"` to:
  - add a new field that has not yet been created
  - change the value of a key-value pair within a document
  - change the value-type of a key-value pair
  - reach in and change embedded documents
  - remove the key altogether using `"$unset"`

### Incrementing++ and Decrementing--
the `"$inc"` and `"$decr"`  modifier can be used to change the value for an existing key or to create a new key, and is useful for anything that has a changeable, numeric value. `"$inc"` is similar to `"$set"`, but it is designed for incrementing and decrementing numbers only.  

* ex: we want to keep a running counter for each time someone visited a page. We can use the `"$inc"` modifier to incr. the value of the `"pageviews"` key. 
    ```
    > db.analytics.update({"url" : "www.example.com"}, 
    ... {"$inc" : {"pageviews" : 1}})
    ```

### Array Modifiers

* `"$push"` adds elements to the end of an erray if it exists and creates a new array if it doesn't. 
    * `"$slice"` in conjunction with `"$push"` prevents an array from growing beyond a certain size, effectively making a "top N" list of items.
* `"$each"` allows you to push multiple values in one operation  
* `"$sort"` allows you to sort the array in desc. (-1) or asc. (1) order
* _Note_: you can't just `"$slice"` or `"$sort"` an array with `"$push"`. You need to include `"$each"`    

* Using Arrays as sets, where all values in a set are unique - only adding values if they are not present. 
    - To push a value onto an existing array, only if that value DNE, you use the `"$ne"` modeifier in the query document
    ```
    > db.papers.update({"authors cited" : {`"$ne"` : "Ritchie"}}, 
    ... {$push : {"authors cited" : "Richie"}}) 
    ```
* to remove elements from an array:
    - use `"$pop"` to remove elements from either end, 1 for end of array, -1 for beginning
    - use `"$pull"` to remove elements of an array that match the given criteria
    
## Updating Multiple Documents
Updates, by default, update only the 1st document found that matches the criteria. To modify all of the documents matching the criteria, you can pass `true` as the fourth parameter to update.

Multiupdates are a great way of performing schema migrations or rolling out new features to certain users. For example we can give a gift to every user who has a bday on a certain day :

  ```
  > db.users.update({"birthday" : "10/13/2017"},
  ... {"$set" : {"gift" : "Happy Bday!"}}, false, true)
  ```
 
# Chapter 4 - Querying

## Introduction to `find()` 
the `find()` method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection.

* Sometimes you don't need all the key/value pairs in a document returned. If this is the case, you can pass a second argument to `find()` specifying the keys you want
    * i.e., `db.users.find({}, {"username" : 1, "email": 1})` returns just the key/values for username and email for every document in the users collection
        - you can exclude specific key/value pairs from the results of a query by setting the value of the 2nd parameter key/value pair to `0`
* _Limitations_: the value of a query document must be constant as far as the database is concerned. You can make it a normal variable in your own code. 


## Query Criteria 

* `"$lt"`, `"$lte"`, `"$gt"`, `"$gte"` are the basic conditionals of a query
* `"$in"`, `"$or"`, `"$nin"` are __OR__ queries, used for a variety of values for a single key
* `"$not"` can be applied on top of any other criteria to negate the return values
* Multiple conditions can be put on a single key. 
* `"$and"`, `"$or"`, `"$nor"` are the few 'meta-operators' that go in the outer document 
    - i.e., `db.users.find({"$and" : [{"x" : {"lt" : 1}}, {"x" : 4}]})`

## `"$where"` Queries
__`"$where"` should not be used unless strictly necessary.__ For queries that cannot be done any other way, the `"$where"` clause allows you to execute arbitrary JS as part of your query. You should only use `"$where"` only when there is no other way of doing the query.

## Server-side Scripting
Server-side JS is susceptible to injection attacks similar to those that occur in a relationalDB. By following certain rules around accepting input, you can use use JS safely:
* turn off JS execution altogether by running mongod with the `--noscripting` option
* make sure you aren't accepting user input and passing it directly to mongod

## Cursors
the database returns results from `find()` using a _cursor_. WIth cursors you can limit, skip, or sort results in any combinations in any direction and perform a number of other powerful operations. 

to create a cursor with a shell, assign the results of a query on a collection to a local variable. 
* example: 
  ```
  > for(i=0; i<100; i++) {
  ...     db.collection.insert({x: i});
  ...   }
  > var cursor = db.collection.find();
  ```

## Limits, Skips and Sorts 
The most common query options are limiting the number of results returned, skipping a number of results, and sorting. All these options must be added before a query is sent to the database. 

* `limit`: `db.c.find().limit(n)` sets an upper limit, of documents to be returned.
* `skip`: `db.c.find().skip(n)` this will skip the first n matching documents and return the rest of the matches. 
* `sort`: `db.c.find().sort({username: 1, age: -1})` takes an object: a set of key/value pairs where the keys are key names and the values are the sort direction. If multiple keys are given, the results will be sorted in that order.

These 3 methods cam be combined - often handy for pagination. For example, you want 50 results per page, sorted by price, from high to low, you'd do the following: `db.stock.find({"desc": food}).limit(50).sort({"price": -1})`


# Chapter 5 - Indexing

## Introduction to Indexing
A query that doesn't use an index is called a _table scan_, which means that the server has to "look through the whole book" to find a query's results - very computationaly expensive. Indexes are a greay way to fix queries like this because they organize data by a given field to let MongoDB find it quickly. 

* Downside to Indexes: every write that touches an indexed field (insert, update, or delete) will take longer for every index you have. 
* __PRO TIP__: To choose which fields to create indexes for, look through your common queries and queries that need to be fast and try to find a common set of keys from those. 
* Use `explain()` to see what MongoDB is doing when it executes the query; prints out a summary statistic of the query with keys such as `nscanned` and `millis`(time). __You should always run `explain()` on _exactly_ the queries that your app is running.__

## Introduction to Compound Indexes
* A _compound index_ is an index on more than one field: `db.users.ensureIndex({"age" : 1, "username" : 1})`. 
* In general, if MongoDB uses an index for a query it will return the resulting documents in an index order
* Three most common ways MongoDB uses indexes:

    1. __Point Query__: `db.users.find({"age" : 21}).sort({"username" : -1})` a _point query_ searches for a single value (although there might be multiple documents with that value). Due to the second field in the index, the results are already in the correct order for the sort: MongoDB can start with the last match of `{"age" : 21}` and traverse the index in order. 
      
     
    Point Queries are very efficient: MongoDB can jump directly to the correct age and doesn't need to sort the results as traversing the index returns the data in the correct order.

    2. __Multi-value Query__: `db.users.find({"age" : {"$gte" : 21, "$lte" : 30}})` looks for documents matching multiple values.
    
    3. __Multi-value Query w/ Sort__: 
        * __BAD__:`db.users.find({"age" : {"$gte" : 21, "$lte" : 30}}).sort({"username" : 1})`. With this query, MongoDB has to sort the results in memory before returning them resulting in a suboptimal query. 
        * __BEST__: `db.users.find({"age" : {"$gte" : 21, "$lte" : 30}}).sort({"username" : 1}).hint({"username": 1, "age" : 1})`. by using `hint()` it forces the query optimizer to use a specific index to fulfill the query, so it doesn't have to do an in-memory sort.
        
## Indexing Objects and Arrays
MongoDB allows you to reach into your documents and create indexes on nested fields and arrays, which behave similary to "normal" index fields

### Indexing Embedded docs
Indexes can be created on keys in embedded documents. 

```
{
  "username" : "sid",
  "loc" : {
      "ip" : "1.2.3.4",
      "city" : "Springfield",
      "state" : "NY"
   }
 }
```


We can put an index on one of the subfields of `"loc"`, say `"loc.city"` to speed up queries using that field: `db.users.ensureIndex({"loc.city" : 1})`

## Index Cardinality
_Cardinality_ refers to how many distinct values there are for a field in a collection. In general, __the greater the cardinality of a field, the more helpful an index on that field can be__. As a rule of thumb, create indexes on high-cardinality keys or at least put high-cardinality keys first in compound indexes before low-cardinality keys.

## When not to Index
Indexes often work well for | Table scans often work well for
------------ | -------------
Large Collections | Small Colllections
Large Documents | Small Documents
Selective Queries | Non-Selective Queries

## Types of Indexes

* __Unique Indexes__: guarantee that each value appear at most once. The `"_id" key is a unique index that is automatically created whenever you create a collection. 
    * _Compound unique indexes_: individual keys can have the same values, but the combination of values across all keys in an index entry can appear in the index at most once. GridFS uses this method for storing large files with a unique index on . {"files_id" : 1, "n" : 1}
    * _Dropping duplicates_: if you attempt to build a unique index on an existing collection, it will failt to build if there are any duplicate values. You can also use the `dropDups` option which will save the first document and remove any subsquent documents with duplicate values. __WARNING__ only use if your data isn't important
        * i.e., `> db.people.ensureIndex({"username" : 1}, {"unique" : true, "dropDups" : true})
* __Sparse Indexes__: unique indexes count `null` as a value, so you cannot have a unique index with more than one document missing the key. However, there are plenty of cases where you may want the unique index to be enforced only if the key exists. If you have a field that may or may not exist, but must be unique when it does, you can combine the unique option with the `"sparce": true` option. 


## Index Administration
All of the information about a db's indexes are stored in the _system.indexes_ collection. This collection is reserved, so you cannot remove or modify the documents. 

* Identifying indexes: you can name your indexes with the `name` option: `> db.foo.ensureIndex({..., {"name" : "indexName"})`
* Changing Indexes: you can drop indexes using the `dropIndex` command: `> db.people.dropIndex("indexName")`

# Chapter 6 - Special Index & Collection Types

## Capped Collections
Capped collections  are fixed in size. When we try to insert a capped collection that is already full, the oldest document will be deleted, and the new one will take it's place. Certain operations aren't allowed on capped collection, they are: documents cannot be removed, deleted, and updates that cause documents to grow in size aren't allowed. Use cases for Capped collections could be: text message deletion upon reaching max memory, Snapchat's cache overflow etc

* You can create a capped collection specifying a fixed size, as well as a limit of # of documents:
```
  > db.createCollection("my_collection",
  ... {"capped": true, size: 100000, "max" : 100});
  { "ok" : true }
```

* once a capped collection has been created it cannot be changed (it must be dropped or recreated if you wish to change it's properties)
* you can also create a capped collection by converting an existing regular collection using the `"convertToCapped"` option: 
`> db.runCommand({"convertToCapped" : "test", "size" : 10000});`

* __documents in a capped collection are always kept in insertion order__ so, where natural sorts normally wouldn't be beneficial on a normal collection that can change document positions, it would work exceptionally on a capped collection - giving you sorts from newest to oldest: `> db.my_collection.find().sort({"$natural" : -1})`

## Time-to-Live (TTL) Indexes 
TTL indexes allow you to set a timeout for each document, where after the document reaches a preconfigured age it will be deleted. This type of index is useful for caching problems like session storage. Example: `> db.foo.ensureIndex({"lastUpdated" : 1}, {"expireAfterSeconds" : 60*24*24})`

## Full-Text Indexes
Full-text indexes give you the ability to search text quickly, as well as provide built-in support for multi-language stemming and stop words. 

* __WARNING__: Creating a full-text index on a busy collection can overload MongoDB, so adding this type of index should always be done offline, or at a time when performance doesn't matter. 
* only one full text index is allowed per collection 
* by default MongoDB queries for an OR of all words
* you can optimize full-text searches using prefix and postfix criteria with the full-text fields to narrow your search results down before indexing: `> db.blog.ensureIndex({"data" : 1, "post" : "text", "author" : 1})`
 
## Storing files with GridFS
GridFS is a mechanism for storing large binary files in MongoDB, and is best when you have large files you'll be accessing in a sequential fashion that won't be changing much. 

__PROS__:
* Using GridFS can simplify your stack. If you're already using MongoDB, you might be able to use GridFS instead of a separate tool for file storage
* GridFS is easier for failover and scaling-out, since it leverages any existing replication or autosharding that you've set up for MongoDB.

__CONS__: 
* slower performance: accessing files from MongoDB will not be as fast s going directly through the filesystem
* you can only modify documents by deleting them and resaving the whole thing. 

You can use the `mongofiles` utility (included w/ MongoDB distributions)to upload, download, list, search for, or delete files in GridFS.


# Chapter 7 - Aggregation 
The aggregation framework lets you transform and combine documents in a collection. THrough this we can build pipelines that process a stream of documents through several building blocls: filtering, projecting, grouping, sorting, limiting and skipping. 

## Pipeline Operations
Each operator receives a stream of documents, doe some type of transformation on these docs, and then passes on the results of the transformation. If it's the last one then the results are returned to the client.

__Common Pipeline Operators__: 
* __`$match`__: `{$match : {"state" : "VA"}}`; subsets documents
    * __BEST PRACTICE__: use `$match` expressions as early as possible in the pipeline, so it filters put unneeded documents quickly and the query can use indexes if it is run before any projections or groupings
* __`$project`__: allows you to extract fields from subdocuments, rename fields, and perform operations on them. Here are some common expressions you would use alongside with `$project`L
    * __renaming__
    ```
    > db.users.aggregate({"$project" : {"userId": "$_id", "_id": 0}})
    {
        result" : {"userId" : ObjectId("...")}
    }
    ```
    _note_: you must exclude `"_id"` to prevent it from returning alongisde `"userId"`.
    * __mathematical expressions__
    ```
    > db.users.aggregate(
    ... {
    ...     "$project" : {
    ...         "totalPay" : {
    ...             "$add" : ["$add" : ["$salary", "$bonus"]
    ...          }
    ...      }
    ... }) 
    ```
    * __logical expressions__
        * `"$cmp" : [expr1, expr2]`; compare two expressions if they're equal.
        * `"$cond" : [booleanExpr, trueExpr, FalseExpr]; equivalent of an `ifelse()`
        
* __`$group`__: `{"$group" : {"\_id": "$day"}}` allows you to group documents based on certain fields and combine their values. from here we can apply several grouping operators:
```
> db.sales.aggregate(
... {
...     "$group" : {
...         "_id" : "$country",
...         "averageRevenue" : {"$avg" : "$revenue"},
...         "numSales" : {"$sum" : 1},
...         "highestSales" : {"$max" : "$revenue"},
...         "lowestSales" : {"$min" : "$revenue")
...      }
... }) 
```
* __`$unwind`__: `> db.blog.aggregate({"$unwind" : "$comments"})`. Unwinding turns each field of an array into a separate document. This is useful when you want to return certain subdocuments from a query - you'd `"$unwind"` the subdocs and then `"$match"` the ones you want. 
* __`$sort`__,  __`$limit`__,  __`$skip`__ are all trivial

__ Advice on Pipelines__
Attempt to filter out as many documents (as well as fields) as possible at the beginninng of your pipeline before hitting any `"$project"`, `"$group"`, or `"$unwind"` operations. MongoDB won't allow a single aggregation to use more than a fraction of the system's memory and will error out if it is the case. If you can reduce the result set size with a selective `"$match"`, you can use the pipeline for real-time aggregations :smiley:

## MapReduce
MapReduce solves some problems that are too complex to express using the aggregation framework's query language. MapReduce tends to be fairly slow and __should not be used for real-time analysis__. 

__How MapReduce Works__: 
1. __Map step__: It starts with the map step, which _maps_ an operation onto every document in a collection. That operation could be either "do nothing" or "emit these keys with X values". 
2. __Shuffle step__: keys are grouped and lists of emitted values are created for each key. 
3. __Reduce step__: takes the list of values from step 2, and _reduces_ it to a single element. This element is returned to the shuffle step until each key has a list containing a single value: the result. 



# Chapter 8 - Application Design 

## Normalization vs Denormalization

* __Normalization__ is dividing data into multiple collections with references between collections
* __Denormalization__ is the opposite of normalization - it embeds all the data in a single document.

With normalization, to change the data, only one document must be documented. However, MongoDB has no joining facilities, so gathering documents from multiple collections will require multiple queries.

With denormalization, instead of docuuments containing references to one definitive copy of the data, many documents may have copies of that data, meaning that multiple documents need to be updated if the information changes, but all related data can be fetched with a single query. 

## Embedding vs References
When to embed data within a document (i.e., include it verbosely), or reference it (i.e., store it in it's own collection)

Embedding is better for... | References are better for...
------------ | -------------
Small subdocuments | Large subdocuments
Data that does not change regularly | Volatile data
When eventual consistency is acceptable | When immediate consistency is necessary
Documents that grow by a small amount | Documents that grow a large amount
Data that you'll often need to perform a second query to fetch | Data that you'll often exclude from the results
Fast reads | Fast writes

__Good rule of thumb__: common relationships we see are 1-1, 1-many, or many-many. When using MongoDB, it's conceptually useful to split "many" into "many" and "few". Generally, "few" relationships will work better with embedding, and "many" relationships will work better as references. 


## Friends, Followers and other inconveniences
To mitigate the volatile field of followers, we succumb to normalizing to the point where we store follower relations in another collection. Although it takes an extra query to get the followers, this keeps our user documents svelte, and we are able to keep a collection that matches followers to followees with documents that look something like this:
```
{
    "_id" : ObjectId("..1"), // followee's "_id"
    "followers" : [
        ObjectId("..x"),
        ObjectId("..y"),
        ObjectId("..z")
    ]
}
```


## Optimizations for Data Manipulations
To optimize your app, you must first know what it's bottleneck is by evaluating its read and write performance.

Optimizing reads generally involves having the correct indexes and returning as much of the info as possible in a single document. 
Optimizing writes usually involves minimizing the number of indexes you have and making updates as efficient as possible.

Since there are trade-offs between schemas that are optimized for writing quickly and those that are optimized for reading quickly, you have to decide which is more important for your app. This also includes factoring in not only the importances of reads vs writes, but also their proportions. 

## Planning out Databases and Collections

For databases, the big issues to consider are locking (read/write lock per database) and storage.
* user collections are high-value -- it's paramount to keep that user data safe
* high-traffic collection for social activities -- low importance, but not quite as unimportant as the logs
* logs collection is mainly used for user notifications, so it is almost an append-only collection. 

Be aware that there are some limitations when using multiple databaes, for instance: MongoDB generally doesn't allow you to move data directly from one db to another.










# Items to address/optimize within my db
1. Followers collections; folowee to have an array of followers in separate collection
2. partition into separate databases: Event, User, logs, activities etc
3. 








# Questions for Stevie:

1. When would you want to Index an Array? Since Indexes on array elements do not keep any notion of position, what's the point if you can't get the top or bottom of that array with an index? (pg. 97)
2. let's talk about Multiple Collections - 1 DB, vs Many DBs.
