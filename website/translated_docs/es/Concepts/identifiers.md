---
id: identifiers
title: Identifiers
---

This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.).


## Basic Rules
The following rules apply for all 4D frameworks.

- A name can begin with an alphabetic character, an underscore, or a dollar ("$") (note that a dollar sign can denote a local element, see below).
- Thereafter, the name can include alphabetic characters, numeric characters, the space character, and the underscore character ("_").
- Periods (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.
- Commas, slashes, quotation marks, and colons are not allowed.
- Characters reserved for use as operators, such as * and +, are not allowed.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (If, For, etc.), and constants.
- Any trailing spaces are ignored.

### Additional rules for object property and ORDA names
- Space characters are not allowed.
- Periods (".") and brackets ("[ ]") are not allowed.
- Names are case sensitive.

### Additional rules for SQL
- Only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted
- Names must not include any SQL keywords (command, attribute, etc.).

**Note:** The "SQL" area of the Inspector in the Structure editor automatically indicates any unauthorized characters in the name of a table or field.


## Tables

You designate a table by placing its name between brackets: [...]. A table name can contain up to 31 characters.

Examples:
```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Fields

You designate a field by first specifying the table to which it belongs. The field name immediately follows the table name. A field name can contain up to 31 characters.

Examples:
```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Interprocess Variables

You designate an interprocess variable by preceding the name of the variable with the symbols (<>) — a “less than” sign followed by a “greater than” sign.

The name of an interprocess variable can be up to 31 characters, not including the <> symbols.

Examples:
```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## Process Variables

You designate a process variable by using its name (which cannot start with the <> symbols nor the dollar sign $). A process variable name can contain up to 31 characters.

Examples:
```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## Local Variables

You designate a local variable by placing a dollar sign ($) before the variable name. A local variable name can contain up to 31 characters, not including the dollar sign.

Examples:
```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## Arrays

You designate an array by using its name, which is the name you pass to an array declaration (such as ARRAY LONGINT) when you create the array. Arrays are variables, and from the scope point of view, like variables, there are three different types of arrays:

- Interprocess arrays,
- Process arrays,
- Local arrays.

### Interprocess Arrays
The name of an interprocess array is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess array name can contain up to 31 characters, not including the <> symbols.

Examples:
```4d
ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
```

### Process Arrays
You designate a process array by using its name (which cannot start with the <> symbols nor the dollar sign $). A process array name can contain up to 31 characters.

Examples:
```4d
ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
```

### Local Arrays
The name of a local array is preceded by the dollar sign ($). A local array name can contain up to 31 characters, not including the dollar sign.

Examples:
```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### Elements of arrays
You reference an element of an interprocess, process or local array by using the curly braces("{ }"). The element referenced is denoted by a numeric expression.

Examples:
```4d  
    //Addressing an element of an interprocess array
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

    //Addressing an element of a process array
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

    //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Elements of two-dimensional arrays
You reference an element of a two-dimensional array by using the curly braces ({…}) twice. The element referenced is denoted by two numeric expressions in two sets of curly braces.

Examples:
```4d
    //Addressing an element of a two-dimensional interprocess array
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

    //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

    //Addressing an element of a two-dimensional local array
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Object attributes

When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. An attribute name can contain up to 255 characters and is case sensitive.

Examples:
```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Note:** Additional rules apply to object attribute names (they must conform to the ECMAScript specification). For more information, see [Object property identifiers](Concepts/dt_object.md#object-property-identifiers).

## Forms

You designate a form by using a string expression that represents its name. A form name can contain up to 31 characters.

Examples:
```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Form objects

You designate a form object by passing its name as a string, preceded by the * parameter. A form object name can contain up to 255 characters.

Example:
```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Note:** Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands.

## Project methods

You designate a project method (procedure or function) by using its name. A method name can contain up to 31 characters.

**Note:** A project method that does not return a result is also called a procedure. A project method that returns a result is also called a function.

Examples:
```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

**Note:** When you call a method, you just type its name. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. Example:

Examples:
```4d
    //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
    //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
    //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

Project methods can accept parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. In addition, multiple consecutive (and last) parameters can be addressed with the syntax ${n}where n, numeric expression, is the number of the parameter.

Inside a function, the $0 local variable contains the value to be returned.

Examples:
```4d
    //Within DROP SPACES $1 is a pointer to the field [People]Name
DROP SPACES(->[People]Name)

    //Within Calc creator:
    //- $1 is numeric and equal to 1
    //- $2 is numeric and equal to 5
    //- $3 is text or string and equal to "Nice"
    //- The result value is assigned to $0
$vsResult:=Calc creator(1;5;"Nice")

    //Within Dump:
    //- The three parameters are text or string
    //- They can be addressed as $1, $2 or $3
    //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3
    //- The result value is assigned to $0
vtClone:=Dump("is";"the";"it")
```

## Plug-In Commands

You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters.

Examples:
```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Sets

From the scope point of view, there are two types of sets:

- Interprocess sets
- Process sets

4D Server also includes:

- Client sets

### Interprocess Sets
A set is an interprocess set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the <> symbols.

### Process Sets
You denote a process set by using a string expression that represents its name (which cannot start with the <> symbols or the dollar sign $). A set name can contain up to 255 characters.

### Client Sets
The name of a client set is preceded by the dollar sign ($). A client set name can contain up to 255 characters, not including the dollar sign.

**Note:** Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets.

Examples:
```4d
    //Interprocess sets
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
    //Process sets
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
    //Client sets
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Named Selections

From the scope point of view, there are two types of named selections:

- Interprocess named selections
- Process named selections.

### Interprocess Named Selections
A named selection is an interprocess named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the <> symbols.

### Process Named Selections
You denote a process named selection by using a string expression that represents its name (which cannot start with the <> symbols nor the dollar sign $). A named selection name can contain up to 255 characters.

Examples:
```4d
    //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
    //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Processes

In the single-user version, or in Client/Server on the Client side, there are two types of processes:

- Global processes
- Local processes.

### Global Processes
You denote a global process by using a string expression that represents its name (which cannot start with the dollar sign $). A process name can contain up to 255 characters.

### Local Processes
You denote a local process if the name of the process is preceded by a dollar ($) sign. The process name can contain up to 255 characters, not including the dollar sign.

Examples:
```4d
    //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
    //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Summary of Naming Conventions

The following table summarizes 4D naming conventions.

| Identifier                   | Max. Length | Example                    |
| ---------------------------- | ----------- | -------------------------- |
| Table                        | 31          | [Invoices]                 |
| Field                        | 31          | [Employees]Last Name       |
| Interprocess Variable/Array  | <> + 31     | <>vlNextProcessID          |
| Process Variable/Array       | 31          | vsCurrentName              |
| Local Variable/Array         | $ + 31      | $vlLocalCounter            |
| Object attribute             | 255         | $o.myAttribute             |
| Form                         | 31          | "My Custom Web Input"      |
| Form object                  | 255         | "MyButton"                 |
| Project method               | 31          | M_ADD_CUSTOMERS          |
| Plug-in Routine              | 31          | PDF SET ROTATION           |
| Interprocess Set             | <> + 255    | "<>Records to be Archived" |
| Process Set                  | 255         | "Current selected records" |
| Client Set                   | $ + 255     | "$Previous Subjects"       |
| Named Selection              | 255         | "Employees A to Z"         |
| Interprocess Named Selection | <> + 255    | "<>Employees Z to A"       |
| Local Process                | $ + 255     | "$Follow Events"           |
| Global Process               | 255         | "*P_INVOICES_MODULE*"    |
| Semaphore                    | 255         | "mysemaphore"              |

**Note:** If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Resolving Naming Conflicts

Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifies names used in procedures in the following order:

1. Fields
2. Commands
3. Methods
4. Plug-in routines
5. Predefined constants
6. Variables.

For example, 4D has a built-in command called `Date`. If you named a method *Date*, 4D would recognize it as the built-in `Date` command, and not as your method. This would prevent you from calling your method. If, however, you named a field “Date”, 4D would try to use your field instead of the `Date` command.

