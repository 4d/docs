---
id: project-method-properties
title: Project Method Properties
---


After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode. 

The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.

To display the **Method Properties** dialog box for a project method, you can either:

- in the [Code Editor](../code-editor/write-class-method.md), select the **Method Properties...** command in the **Method** menu,
- or on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu. 


> A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

## Name  

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. 

:::caution

Changing the name of a method already used in the project can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. It is strongly recommended to use the [renaming function for project methods](../Project/search-replace.md#renaming-project-methods-and-variables). With this function, you can automatically update the name wherever the method is called throughout the Design environment. 

With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name.

:::

:::info

Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. 

:::

## Attributes  

You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).

### Invisible  

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box. 

When you make a project method invisible, it is still available to database programmers. It remains listed on the method list of the Explorer and of the Code Editor.

### Shared by components and host database  

This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases. 

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

### Execute on Server  

This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called. 

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

## Execution mode  

This option allows you to declare the method eligible for execution in preemptive mode. It is described in the [Preemptive processes section](../Develop/preemptive.md).

## Available through  

Availability attributes specify the external services which are allowed to explicitly call the method.

### Web Services  

This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon.

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.

### Published in WSDL  

This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689). 

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon. 

### 4D tags and URLs (4DACTION...)  

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

In the Explorer, project methods with this attribute are given a specific icon.

For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.

### SQL  

When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D. 

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](../commands-legacy/begin-sql.md)/[End SQL](../commands-legacy/end-sql.md)  tags or the [QUERY BY SQL](../commands-legacy/query-by-sql.md) command.

**Notes:**

-   Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.
-   The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) in the 4D SQL manual.

### REST Server  

*This option is deprecated. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md).*

## Batch setting for method attributes  

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

