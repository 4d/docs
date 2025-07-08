---
id: control-flow
title: Control flow
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **Branching**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Looping**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:

	- [`While...End while`](#whileend-while)
	- [`Repeat...Until`](#repeatuntil)
	- [`For...End for`](#forend-for)
	- [`For each...End for each`](#for-eachend-for-each)

The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections. 

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels. 



## If...Else...End if

The formal syntax of the `If...Else...End if` control flow structure is:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Note that the `Else` part is optional; you can write:
```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

The `If...Else...End if` structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. When the Boolean expression is TRUE, the statements immediately following the test are executed. If the Boolean expression is FALSE, the statements following the Else statement are executed. The `Else` statement is optional; if you omit Else, execution continues with the first statement (if any) following the `End if`.

Note that the Boolean expression is always fully evaluated. Consider in particular the following test:

```4d
 If(MethodA & MethodB)
    ...
 End if
``` 

The expression is TRUE only if both methods are TRUE. However, even if _MethodA_ returns FALSE, 4D will still evaluate _MethodB_, which is a useless waste of time. In this case, it is more interesting to use a structure like:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and _MethodB_ is evaluated only if necessary. 

> **Note:** The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of If..Else statements.

#### Example 

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if 
```

**Tip:** Branching can be performed without statements to be executed in one case or the other. When developing an algorithm or a specialized application, nothing prevents you from writing:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```
or:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```
 
## Case of...Else...End case

The formal syntax of the `Case of...Else...End case` control flow structure is:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Note that the `Else` part is optional; you can write:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
 End case
```
As with the `If...Else...End if` structure, the `Case of...Else...End case` structure also lets your method choose between alternative actions. Unlike the `If...Else...End` if structure, the `Case of...Else...End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Each Boolean expression is prefaced by a colon (`:`). This combination of the colon and the Boolean expression is called a case. For example, the following line is a case:

```4d
:(bValidate=1)
```

Only the statements following the first TRUE case (and up to the next case) will be executed. If none of the cases are TRUE, none of the statements will be executed (if no `Else` part is included).

You can include an Else statement after the last case. If all of the cases are FALSE, the statements following the `Else` will be executed.

#### Example

This example tests a numeric variable and displays an alert box with a word in it:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

For comparison, here is the `If...Else...End if` version of the same method:

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Remember that with a `Case of...Else...End case` structure, only the first TRUE case is executed. Even if two or more cases are TRUE, only the statements following the first TRUE case will be executed.

Consequently, when you want to implement hierarchical tests, you should make sure the condition statements that are lower in the hierarchical scheme appear first in the test sequence. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. For example, the following code will never see its last condition detected:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

In the code above, the presence of the second condition is not detected since the test "vResult=1" branches off the code before any further testing. For the code to operate properly, you can write it as follows:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Also, if you want to implement hierarchical testing, you may consider using hierarchical code.

**Tip:** Branching can be performed without statements to be executed in one case or another. When developing an algorithm or a specialized application, nothing prevents you from writing:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

or:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...
        
    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

or:
```4d
 Case of
    Else
       statement(s)
 End case
```


## While...End while

The formal syntax of the `While...End while` control flow structure is:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

A `While...End while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. It tests the Boolean expression at the beginning of the loop and does not enter the loop at all if the expression is FALSE.

The `break` and `continue` statements are [described below](#break-and-continue).

It is common to initialize the value tested in the Boolean expression immediately before entering the `While...End while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `While...End while` executes the loop.

The Boolean expression must be set by something inside the loop or else the loop will continue forever. The following loop continues forever because _NeverStop_ is always TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

If you find yourself in such a situation, where a method is executing uncontrolled, you can use the trace facilities to stop the loop and track down the problem. For more information about tracing a method, see the [Error handling](error-handling.md) page.

#### Example

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In this example, the `OK` system variable is set by the `CONFIRM` command before the loop starts. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Otherwise, the `OK` system variable is set to 0 and the loop is skipped. Once the loop starts, the `ADD RECORD` command keeps the loop going because it sets the `OK` system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the `OK` system variable is set to 0 and the loop stops.

## Repeat...Until

The formal syntax of the `Repeat...Until` control flow structure is:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```
A `Repeat...Until` loop is similar to a [While...End while](flow-control.md#whileend-while) loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `Repeat...Until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `While...End while` loop does not execute the loop at all.

The other difference with a `Repeat...Until` loop is that the loop continues until the Boolean expression is TRUE.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Example 

Compare the following example with the example for the `While...End while` loop. Note that the Boolean expression does not need to be initialized—there is no `CONFIRM` command to initialize the `OK` variable.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
``` 

## For...End for 

The formal syntax of the `For...End for` control flow structure is:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

The `For...End for` loop is a loop controlled by a counter variable:

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

**Important:** The numeric expressions *Start_Expression*, *End_Expression* and *Increment_Expression* are evaluated once at the beginning of the loop. If these expressions are variables, changing one of these variables within the loop will not affect the loop.

**Tip:** However, for special purposes, you can change the value of the counter variable *Counter_Variable* within the loop; this will affect the loop.

- Usually *Start_Expression* is less than *End_Expression*.
- If *Start_Expression* and *End_Expression* are equal, the loop will execute only once.
- If *Start_Expression* is greater than *End_Expression*, the loop will not execute at all unless you specify a negative *Increment_Expression*. See the examples.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Basic examples

1. The following example executes 100 iterations:

```4d
 For(vCounter;1;100)
  //Do something
 End for
```

2. The following example goes through all elements of the array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. The following example goes through all the characters of the text vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. The following example goes through the selected records for the table [aTable]:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples. 

### Counter variable

#### Decrementing counter variable

In some cases, you may want to have a loop whose counter variable is decreasing rather than increasing. To do so, you must specify *Start_Expression* greater than *End_Expression* and a negative *Increment_Expression*. The following examples do the same thing as the previous examples, but in reverse order:

5. The following example executes 100 iterations:

```4d
 For(vCounter;100;1;-1)
  //Do something
 End for
```

6. The following example goes through all elements of the array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. The following example goes through all the characters of the text vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. The following example goes through the selected records for the table [aTable]:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
```

#### Incrementing the counter variable by more than one

If you need to, you can use an *Increment_Expression* (positive or negative) whose absolute value is greater than one.

9. The following loop addresses only the even elements of the array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### Optimizing the execution of the For...End for loops  

You can use Real and Integer variables as well as interprocess, process, and local variable counters. For lengthy repetitive loops, especially in compiled mode, use local Long Integer variables.

10. Here is an example:

```4d
 var $vlCounter : Integer //use local Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

### Comparing looping structures

Let's go back to the first `For...End for` example. The following example executes 100 iterations:
```4d
 For(vCounter;1;100)
  //Do something
 End for
```

It is interesting to see how the `While...End while` loop and `Repeat...Until` loop would perform the same action. Here is the equivalent `While...End while` loop:
```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Here is the equivalent `Repeat...Until` loop:
```4d
 $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
```

:::tip

The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `For...End for` loop whenever possible.

:::


### Nested For...End for looping structures

You can nest as many control structures as you (reasonably) need. This includes nesting `For...End for` loops. To avoid mistakes, make sure to use different counter variables for each looping structure.

Here are two examples:

1. The following example goes through all the elements of a two-dimensional array:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. The following example builds an array of pointers to all the date fields present in the database:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

The formal syntax of the `For each...End for each` control flow structure is:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

The `For each...End for each` structure iterates a specified *Current_item* over all values of the *Expression*. The *Current_item* type depends on the *Expression* type. The `For each...End for each` loop can iterate through three *Expression* types:

- collections: loop through each element of the collection,
- entity selections: loop through each entity,
- objects: loop through each object property.

The following table compares the three types of `For each...End for each`:

||Loop through collections	|Loop through entity selections	|Loop through objects|
|---|---|---|---|
|Current_Item type	|Variable of the same type as collection elements	|Entity	|Text variable|
|Expression type	|Collection (with elements of the same type)	|Entity selection	|Object|
|Number of loops (by default)	|Number of collection elements	|Number of entities in the selection	|Number of object properties|
|Support of begin / end parameters	|Yes	|Yes	|No|

- The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.
- By default, the enclosed _statement(s)_ are executed for each value in *Expression*. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords:
	- before entering the loop, if items should be modified together for integrity reasons, or
	- within the loop when only some elements/properties need to be modified and no integrity management is required. 
	
The `break` and `continue` statements are [described below](#break-and-continue).

### Loop through collections 

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. The following points must be taken into account:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The _Current_Item_ variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Example

You want to compute some statistics for a collection of numbers:

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### Loop through entity selections

When `For each...End for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

The number of loops is based on the number of entities in the entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save()`.

#### Example

You want to raise the salary of all British employees in an entity selection:

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loop through object properties

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property. 

The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### Example

You want to switch the names to uppercase in the following object:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```
You can write:

```4d
 For each($property;$vObject)
    If(Value type($vObject[$property])=Is text)
       $vObject[$property]:=Uppercase($vObject[$property])
    End if
 End for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```
### begin / end parameters

You can define bounds to the iteration using the optional begin and end parameters.

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded). 

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included).
If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*.
If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0.
**Note:** Even if begin is negative, the iteration is still performed in the standard order.
If *end* is a negative value, it is recalculed as `end:=end+Expression size`

For example:
- a collection contains 10 elements (numbered from 0 to 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element. 

#### Example

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Until and While conditions

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

You can pass either keyword depending on your needs:

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### Example 

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)
 
 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break and continue

All looping structures above support both `break` and `continue` statements. These statements give you more control over the loops by allowing to exit the loop and to bypass the current iteration at any moment.  

### break

The `break` statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop.

If the `break` statement is inside a [nested loop](#nested-forend-for-looping-structures) (loop inside another loop), the `break` statement will terminate the innermost loop.


#### Example

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //if a condition becomes true
		break //end of the for loop
	End if
End for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //go directly to the next iteration
	End if
	$text:=$text+String($i)
End for
// $text="012456789" 

```



## return {expression}

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|Added
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller. 

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller. 

#### Example

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
	$i:=$i+1
	$message+=String($i)+"A\r"  // until 5
	logConsole($message)
	If ($i=5)
		return //stops the loop
	End if 
	$message+=String($i)+"B\r"  // until 4
	logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

