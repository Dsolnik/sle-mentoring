# Chapter 1 - Introduction

### How should we scale out our databases?
Scaling a database comes down to the two choices of scaling up (getting a bigger machine), or scaling out (partitioning data across more machines).
_MongoDB was designed to scale out._ Its documented-oriented model makes it easier for it to split up data across multiple servers.


# Chapter 2 - Getting Started

### Basic MongoDB Concepts

* a _document_ is the basic unit of data for MongoDB -- thes ame to a _row_ in a relational db.
  - every document has a special key, `_id` that is unique within a collection
* a _collection_ is the equivalent of a table with a dynamic schema
* a single instance of MongoDB can host multiple independent _databases_, each of which can have its own collections.
* MongoDB cmoes with a JS shell, used for admin and data manipulation

## Documents 

* Every MongoDB document has an ordered set of key with associated values; just like a JSON object `{"key" : value}`
* MongoDB is type-sensitive and case-sensitive. 
* MongoDB CANNOT contain duplicate keys

## Collections

* A collection is a group of documents.
* Collections have _dynamic schemas_, meaning documents within a single collection can have any number of different "shapes"
* With no need for separate schemas for different kinds of documents, why should we use more than one collection? There are several good reasons:
    * Separation of Concerns: devs need to ensure that each query is only returning documents of a certain type, or that the app code performing the query can handle documents of different shapes.
    * Speed: It is much faster get a list of collections than to extra a list of the types in a collection. 
    * Data Locality & Reduced Disk Seeks: grouping documents of the same kind together in the same collection allows for data locality. This leads to fewer disk seeks.
    * Efficient Indexing: by putting documents of a single type into the same collection, we can index our collections more efficiently.


## Naming

* __Subcollections__ are a useful naming convention, a great way to organize data in MongoDB and is highly recommended. Subcollections are denoted by the a delimiting `.` character.
    * i.e., blog.posts and blog.authors insinuate that these are two child collections from the parent blog collection. 

## Databases
MongoDB groups collections into _databases_. A dtabase has its own permissions and each database is stored in separate files on disk.

Reserved Database names:
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
  
 
## MongoDB Shell

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
the `"$inc"` `"$decr"` and  modifier can be used to change the value for an existing key or to create a new key, and is useful for anything that has a changeable, numeric value. `"$inc"` is similar to `"$set"`, but it is designed for incrementing and decrementing numbers only.  

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

Multiupdates are a great way of performing schema migrations or rolling out new features to certain users. Fore xample we can give a gift to every user who has a bday on a certain day :

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
* _Limitations_:
    * the value of a query document must be constant as far as the database is concerned. You can make it a normal variable in your own code. 


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
Server-side JS is susceptible to injection attacks similar to those that occur in a relationalDB. By following certain riles around accepting input, you can use use JS safely:
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
  
  
