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
