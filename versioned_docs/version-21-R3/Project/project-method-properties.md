---
id: project-method-properties
title: Project Methods
---


## Roles

A project method can have one of the following roles, depending on how it is executed and used:

- Subroutine
- Object formula
- Menu method
- Process method
- Event or Error catching method
- APIs to be called from the web server, transformation tags, extensions...
- You can also execute your project methods manually, for testing purpose for example.

### Subroutines

A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.

When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. A project method used in this way is called a subroutine.

You use subroutines to:

- Reduce repetitive coding
- Clarify your methods
- Facilitate changes to your methods
- Modularize your code

For example, let’s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. If there are ten places in your project where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines—to reduce the amount of code.

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. For example, to modify a customer’s record and then print the record, you would write this method:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

This capability simplifies your methods dramatically. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. This is the second reason for using subroutines—to clarify your methods. In this way, your methods become extensions to the 4D language.

If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. This is the next reason to use subroutines—to facilitate changes to your methods.

Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account project:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
```

Even for someone who doesn’t know the project, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible.

### Object formulas

You can encapsulate your project methods in **formula** objects and call them from your objects.

The [`Formula`](../commands/formula) or [`Formula from string`](../commands/formula-from-string) commands allow you to create [native formula objects](../API/FormulaClass.md) that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **()** operator after the property name. For example:

```4d
//myAlert
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
var $o : Object
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Syntax with brackets is also supported:

```4d
$o["custom_Alert"]() //displays "Hello world!"
```

For more information, see the [`4D.Formula` class description](../API/FormulaClass.md) and the [Using object properties as named parameters](../Concepts/parameters.md#using-object-properties-as-named-parameters) paragraph. 

### Menu Methods

A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a [command of the "Menus" theme](../commands/theme/Menus.md). The method executes when the menu command is chosen. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications.

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the [`ADD RECORD`(../commands/add-record)] command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the 4D programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application.

### Process Methods

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a [Worker process](../Develop/processes.md#worker-processes). Note that a menu method attached to a menu command with [*Start a New Process*](../Menus/properties.md#start-a-new-process) property is also the process method for the newly started process.

### Event and Error catching Methods

An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command [`ON EVENT CALL`](../commands/on-event-call).

An **error catching method** is an interrupt-based project method. It is called each time an error or an exception occurs. For more information, see the [Error handling](../Concepts/error-handling.md) section.


### API Methods

Project methods can be called from external contexts such as other applications, web apps, processed files, etc., in which case they can be seen as API. Such calls include:

- calls to the web server through [http request handlers](../WebServer/http-request-handler.md) or [`4DACTION` URLs](../WebServer/httpRequests.md#4daction),
- [tag processing](../Tags/transformation-tags.md)
- expressions called from extensions ([4D Write Pro](../WritePro/commands/wp-insert-formula.md), [4D View Pro](../ViewPro/formulas.md) or form objects (e.g. [`ST INSERT EXPRESSION`](../commands/st-insert-expression)). 

External calls to project methods must be allowed in the [project method properties](../Project/project-method-properties.md). 


### Manual Execution

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application.

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

You can execute methods in two ways:

- From the Code Editor window,
- From the Execute Method dialog box (project methods only).

#### From the Code Editor

Each [**Code Editor**](../code-editor/write-class-method.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired.

This button is only active for project methods and for the following database methods:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

For more information, see [Toolbar](../code-editor/write-class-method.md#toolbar).

#### From the Execute Method dialog box  

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](../Develop/processes.md).

**4D Server Notes**:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call a *stored procedure*, is created on the server machine in order to execute the method. This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.
- You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](../commands/register-client).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.


### Recursive Project Methods

Project methods can call themselves. For example:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The 4D language fully supports recursion.

Here is an example. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:

- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. You can build the sentence in this way:

```4d
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       var $vtTheWholeStory:="A friend of mine, "+$vsName
       var $vlQueryResult : Integer
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. You can also build it this way:

```4d
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

```4d
  //Genealogy of project method
  //Genealogy of ( String ) -> Text
  //Genealogy of ( Name ) -> Part of sentence
 
 #DECLARE($name : Text) -> $result : Text
 $result:=$name
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$name)
 If(Records in selection([Friends and Relatives])>0)
    $result:=$result+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory.

Some typical uses of recursion in 4D are:

- Treating records within tables that relate to each other in the same way as in the example.
- Browsing documents and folders on your disk, using the commands [`FOLDER LIST`](../commands/folder-list) and [`DOCUMENT LIST`](document-list). A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.

:::warning

Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a “Stack Full” error becuase it would no longer have space to “pile up” the calls (as well as parameters and local variables used in the method).

:::


## Properties

After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode. 

The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.

To display the **Method Properties** dialog box for a project method, you can either:

- in the [Code Editor](../code-editor/write-class-method.md), select the **Method Properties...** command in the **Method** menu,
- or on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu. 


> A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

### Name  

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. 

:::caution

Changing the name of a method already used in the project can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. It is strongly recommended to use the [renaming function for project methods](../Project/search-replace.md#renaming-project-methods-and-variables). With this function, you can automatically update the name wherever the method is called throughout the Design environment. 

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name.

:::

:::info

Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. 

:::

### Attributes  

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

#### Invisible  

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box. 

When you make a project method invisible, it is still available to database programmers. It remains listed on the method list of the Explorer and of the Code Editor.

#### Shared by components and host database  

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases. 

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

#### Execute on Server  

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called. 

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

### Execution mode  

This option allows you to declare the method eligible for execution in preemptive mode. It is described in the [Preemptive processes section](../Develop/preemptive.md).

### Available through  

Availability attributes specify the external services which are allowed to explicitly call the method.

#### Web Services  

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon.

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

#### Published in WSDL  

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689). 

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon. 

#### 4D tags and URLs (4DACTION...)  

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

In the Explorer, project methods with this attribute are given a specific icon.

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

#### SQL  

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D. 

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql)  tags or the [QUERY BY SQL](../commands/query-by-sql) command.

**Notes:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) in the 4D SQL manual.

#### REST Server  

*This option is deprecated. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md).*

### Batch setting for method attributes  

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

For batch setting of method attributes:

1.  On the [Methods Page](https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch.
The character string is used as a search criterion for the method names.

Use the wildcard character @ to help define groups of methods:

- To designate methods whose names begin with..., type @ at the end of the string. For example: `web@`
- To designate methods whose names contain..., type @ in the middle of the string. For example: `web@write`
- To designate methods whose names end with..., type @ at the beginning of the string. For example: `@write`
- To designate all of the methods, just type @ in the area.

**Notes:**
- The search does not take upper/lower case into account.
- You can enter several @ characters in the string, for example `dtro_@web@pro.@`

3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.

**Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.

4.  Click on **Apply**. The modification is applied instantly to all the project methods designated by the character string entered.


