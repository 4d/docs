---
id: overview
title: About 4D Code
---


The 4D code used across your application is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md).

The 4D IDE provides you with various features to create, edit, export, or delete your code. You will usually use the 4D [code editor](write-class-method.md) to work with your code.


## Creating methods

A method in 4D is stored in a **.4dm** file located in the appropriate folder of the [`/Project/Sources/`](../Project/architecture.md#sources) folder.

You can create [several types of methods](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](write-class-method.md#shortcuts).
- Triggers can also be created or opened from the Structure editor.
- Form methods can also be created or opened from the [Form editor](../FormEditor/formEditor.md).

## Creating classes

A user class in 4D is defined by a specific method file (**.4dm**), stored in the [`/Project/Sources/Classes/`](../Project/architecture.md#sources) folder. Der Name der Datei ist der Klassenname.

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

For more information, please refer to the [Classes](../Concepts/classes.md) section.


## Deleting methods or classes

To delete an existing method or class, you can:

- on your disk, remove the *.4dm* file from the "Sources" folder,
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).


## Importing and exporting code

You can import and export a method or a class code in the form of a file. These commands are found in the **Method** menu of the Code editor.

- When you select the **Export Method...** command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). As with printing, exporting does not take the collapsed state of code structures into account and the entire code is exported.
- When you select the **Import Method...** command, a standard file opening dialog box appears, allowing you to designate the file to be imported. Importing replaces the selected text in the method. To replace an existing method by an imported method, select the entire contents of the method before carrying out the import.

The import/export function is multi-platform: a method exported under Mac OS can be imported under Windows and vice versa; 4D handles the conversion of characters when necessary.

4D can export and import methods in two formats:

- 4D method (extension *.c4d*): In this format, methods are exported in encoded form. The names of objects are tokenized. This format is used in particular for exchanging methods between 4D applications and plug-ins in different languages. Conversely, it is not possible to display them in a text editor.
- Text (extension *.txt*): In this format, methods are exported in text-only form. In this case, the methods are readable using a standard text editor or a source control tool.


## Project method properties

After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode.

The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.

To display the **Method Properties** dialog box for a project method, you can either:

- in the [Code Editor](write-class-method.md), select the **Method Properties...** command in the **Method** menu,
- or on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu.


> A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

#### Name

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again.

**Warning:** Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). With this function, you can automatically update the name wherever the method is called throughout the Design environment.

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name

> Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned.

#### Attributes

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

##### Invisible

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box.

When you make a project method invisible, it is still available to database programmers. It remains listed on the method list of the Explorer and of the Code Editor.

##### Shared by components and host database

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases.

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

##### Execute on Server

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called.

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

#### Execution mode

This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode.

If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. The compiler will then check that these methods are actually thread-safe.

**Note:** Execution in preemptive mode is only available in compiled mode. For more information, refer to the [Preemptive 4D processes](https://doc.4d.com/4Dv19R6/4D/19-R6/Preemptive-4D-processes.300-5911166.en.html) section.

The following options are provided:

-   **Can be run in preemptive processes**: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".

When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.

If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see [When is a process started preemptively?](https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148)).

-   **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".

When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.

-   **Indifferent**(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".

When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the [New process](https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html) command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.

***Particular case*:** If the method has also the [**Shared by components and host database**](shared-by-components-and-host-database) property, setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**.

#### Available through

Availability attributes specify the external services which are allowed to explicitly call the method.

##### Web Services

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

##### Published in WSDL

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

##### 4D tags and URLs (4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

##### SQL

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**Hinweise:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

##### REST Server

*This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** [ORDA data model class functions](https://developer.4d.com/docs/en/REST/classFunctions.html) for REST access. *

#### Batch setting for method attributes

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.

For batch setting of method attributes:

1.  On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2.  In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch. The character string is used as a search criterion for the method names.

Use the wildcard character @ to help define groups of methods:

- To designate methods whose names begin with..., type @ at the end of the string. For example: `web@`
- To designate methods whose names contain..., type @ in the middle of the string. For example: `web@write`
- To designate methods whose names end with..., type @ at the beginning of the string. For example: `@write`
- To designate all of the methods, just type @ in the area.

**Hinweise:**
- The search does not take upper/lower case into account.
- You can enter several @ characters in the string, for example `dtro_@web@pro.@`

3.  In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.

**Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.

4.  Click on **Apply**. The modification is applied instantly to all the project methods designated by the character string entered.

