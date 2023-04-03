---
id: collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

To access a collection element, you need to pass the element number inside square brackets:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in *expression*. Examples:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

You can assign a value to a collection element or get a collection element value:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Initialization 

Collections must have been initialized, otherwise trying to read or modify their elements will generate a syntax error.

Collection initialization can be done in one of the following ways:

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). With such commands, it is not necessary to initialize explicitely objects in this case, the 4D command or function does it for you.

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference. 

Examples:

```4d
 var $colVar : Collection //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //initialization of a prefilled collection and assignment
```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets ([]). When you create a collection using a collection literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **object literals**. 

If an element is undefined, it will appear as Null in the collection.

Examples:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //empty collection
$col2:=[1;2;3;4;5;6] //collection of numbers
$users:=[{name: "Alice"; \
	height: 183; \
	eyecolor: "hazel"; \
	id: $col2[5]\
	}; \
	{name: "Bob"; \
	height: 172; \
	eyecolor: "blue"\
	}]
```



### Regular or shared collection  

You can create two types of collections:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command. These collections can be edited without any specific access control but cannot be shared between processes. 
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures. 

For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.

## Collection functions  

4D collection references benefit from special class functions (sometimes named *member functions*). Collection functions are listed in the [Class API Reference](API/CollectionClass.md) section.

For example:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### propertyPath parameter 


Several functions accept a _propertyPath_ as parameter. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".

**Warning:** When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```