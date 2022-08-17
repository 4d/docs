---
id: collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null).

To manage Collection type variables you must use object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

To access a collection element, you need to pass the element number inside square brackets:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in expression. Examples:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

You can assign a value to a collection element or get a collection element value using object notation:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Initialization

Collections must have been initialized, for example using the `New collection` command, otherwise trying to read or modify their elements will generate a syntax error.

Example:
```4d
 C_COLLECTION($colVar) //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```

### Regular or shared collection

You can create two types of collections:

- regular (non-shared) collections, using the `New collection` command. These collections can be edited without any specific access control but cannot be shared between processes.
- shared collections, using the `New shared collection` command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by `Use...End use` structures. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.

## Collection methods

4D collection references benefit from special methods (sometimes named *member functions*). Thanks to object notation, these methods can be applied to collection references using the following syntax:

> {$result:=}myCollection.memberFunction( {params} )

Note that, even if it does not have parameters, a member function must be called with () parenthesis, otherwise a syntax error is generated.

For example:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Some methods return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### propertyPath parameter


Several methods accept a _propertyPath_ as parameter. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".

**Warning:** When using methods and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```
