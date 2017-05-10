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
    
    
