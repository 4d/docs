---
id: arrays
title: Arrays
---

An **array** is an ordered series of **variables** of the same type. Each variable is called an **element** of the array. An array is given its size when it is created; you can then resize it as many times as needed by adding, inserting, or deleting elements, or by resizing the array using the same command used to create it. Array elements are numbered from 1 to N, where N is the size of the array. An array always has a special [element zero](#using-the-element-zero-of-an-array). Arrays are 4D variables. Like any variable, an array has a scope and follows the rules of the 4D language, though with some unique differences. 

:::tip

In most cases, it is recommended to use **collections** instead of **arrays**. Collections are more flexible and provide a wide range of dedicated methods. For more information, please refer to the [Collection](Concepts/dt_collection.md) section.

:::

## Creating Arrays 

You create an array with one of the array declaration commands from the "Array" theme. Each array declaration command can create or resize one-dimensional or two-dimensional arrays. For more information about two-dimensional arrays, see the [two dimensional arrays](#two-dimensional-arrays) section.

The following line of code creates (declares) an Integer array of 10 elements:

```4d
 ARRAY INTEGER(aiAnArray;10)
```

Then, the following code resizes that same array to 20 elements:
```4d
ARRAY INTEGER(aiAnArray;20)
```

Then, the following code resizes that same array to no elements:
```4d
ARRAY INTEGER(aiAnArray;0)
```

## Assigning values in arrays

You reference the elements in an array by using curly braces ({…}). A number is used within the braces to address a particular element; this number is called the element number. The following lines put five names into the array called atNames and then display them in alert windows:

```4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})
 End for
```
Note the syntax atNames{$vlElem}. Rather than specifying a numeric literal such as atNames{3}, you can use a numeric variable to indicate which element of an array you are addressing. Using the iteration provided by a loop structure (`For...End for`, `Repeat...Until` or `While...End while`), compact pieces of code can address all or part of the elements in an array.

**Important:** Be careful not to confuse the assignment operator (:=) with the comparison operator, equal (=). Assignment and comparison are very different operations. 


### Assigning an array to another array 
Unlike text or string variables, you cannot assign one array to another. To copy (assign) an array to another one, use `COPY ARRAY`.


## Using the element zero of an array 

An array always has an element zero. While element zero is not shown when an array supports a form object, there is no restriction(*) in using it with the language.

Here is another example: you want to initialize a form object with a text value but without setting a default value. You can use the element zero of the array:

```4d
  // method for a combo box or drop-down list  
  // bound to atName variable array
 Case of
    :(Form event code=On Load)
  // Initialize the array (as shown further above)  
  // But use the element zero
		ARRAY TEXT(atName;5)
		atName{0}:=Please select an item"
		atName{1}:="Text1"
		atName{2}:="Text2"
		atName{3}:="Text3"
		atName{4}:="Text4"
		atName{5}:="Text5"
	// Position the array to element 0
  		atName:=0
 End case
```
 
(*) However, there is one exception: in an array type List Box, the zero element is used internally to store the previous value of an element being edited, so it is not possible to use it in this particular context.


## Two-dimensional Arrays 

Each of the array declaration commands can create or resize one-dimensional or two-dimensional arrays. Example:

```4d
 ARRAY TEXT(atTopics;100;50) // Creates a text array composed of 100 rows of 50 columns
```

Two-dimensional arrays are essentially language objects; you can neither display nor print them.

In the previous example:

- atTopics is a two-dimensional array
- atTopics{8}{5} is the 5th element (5th column...) of the 8th row
- atTopics{20} is the 20th row and is itself a one-dimensional array
- `Size of array(atTopics)` returns 100, which is the number of rows
- `Size of array(atTopics{17})` returns 50, which the number of columns for the 17th row

In the following example, a pointer to each field of each table in the database is stored in a two-dimensional array:

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Create as many rows (empty and without columns) as there are tables
 $vlLastTable:=Last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns
  // For each table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Last field number($vlTable)
  // Give value of elements
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  //Insert a column in a row of the table underway
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  //Assign the "cell" with the pointer
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

Provided that this two-dimensional array has been initialized, you can obtain the pointers to the fields for a particular table in the following way:

```4d
  // Get the pointers to the fields for the table currently displayed at the screen:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialize Boolean and Date fields
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Note:** As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes.

## Arrays and Memory

Unlike the data you store on disk using tables and records, an array is always held in memory in its entirety.

For example, if all US zip codes were entered in the [Zip Codes] table, it would contain about 100,000 records. In addition, that table would include several fields: the zip code itself and the corresponding city, county, and state. If you select only the zip codes from California, the 4D database engine creates the corresponding selection of records within the [Zip Codes] table, and then loads the records only when they are needed (i.e., when they are displayed or printed). In order words, you work with an ordered series of values (of the same type for each field) that is partially loaded from the disk into the memory by the database engine of 4D.

Doing the same thing with arrays would be prohibitive for the following reasons:

- In order to maintain the four information types (zip code, city, county, state), you would have to maintain four large arrays in memory.
- Because an array is always held in memory in its entirety, you would have to keep all the zip codes information in memory throughout the whole working session, even though the data is not always in use.
- Again, because an array is always held in memory in its entirety, each time the application is started and then quit, the four arrays would have to be loaded and then saved on the disk, even though the data is not used or modified during the working session.

**Conclusion:** Arrays are intended to hold reasonable amounts of data for a short period of time. On the other hand, because arrays are held in memory, they are easy to handle and quick to manipulate.

However, in some circumstances, you may need to work with arrays holding hundreds or thousands of elements. The following table lists the formulas used to calculate the amount of memory used for each array type:

|Array Type	|Formula for determining Memory Usage in Bytes|  
|---|---|
|Blob|(1+number of elements) * 12 + Sum of the size of each blob
|Boolean|(31+number of elements)\8
|Date	|(1+number of elements) * 6
|Integer	|(1+number of elements) * 2
|Long Integer	|(1+number of elements) * 4  
|Object|(1+number of elements) * 8 + Sum of the size of each object
|Picture	|(1+number of elements) * 8 + Sum of the size of each picture
|Pointer	|(1+number of elements) * 8 + Sum of the size of each pointer
|Real	|(1+number of elements) * 8
|Text	|(1+number of elements) * 20 + (Sum of the length of each text) * 2
|Time|(1+number of elements) * 4
|Two-dimensional	|(1+number of elements) * 16 + Sum of the size of each array

**Notes:**

- The size of a text in memory is calculated using this formula: ((Length + 1) * 2)
- A few additional bytes are required to keep track of the selected element, the number of elements, and the array itself.