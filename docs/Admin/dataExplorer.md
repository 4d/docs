---
id: dataExplorer
title: Web Data Explorer
---


The Data Explorer provides a web interface to enter, view, and manage data in your datastore. Using this tool, you can easily browse among all your entities in the dataclasses, search, order, or compare attribute values. It helps you to control data and quickly identify issues at any steps of the development process. 

![alt-text](assets/en/Admin/dataExplorer1.png)


## Access Configuration

The Data Explorer relies on the [`WebAdmin`](webAdmin.md) web server component for the configuration and authentication settings. 

- **configuration**: the Data Explorer configuration reuses the [`WebAdmin` web server settings](webAdmin.md#webadmin-settings),
- **authentication**: access to the Data Explorer is granted when the [session user is authenticated](webAdmin.md#authentication-and-session) and if the user has the "WebAdmin" privilege. When the Data Explorer is accessed through the **Data Explorer** menu item (see below), an automatic authentication is provided. 

## Opening the Data Explorer

The Data Explorer page is automatically available when the `WebAdmin` web server is [started](webAdmin.md#starting-the-webadmin-web-server).

To connect to the Data Explorer web page:

- if you use a 4D application with interface, select **Data Explorer...** command from:
	- 4D stand-alone - the **Records** menu 
	- 4D Server - the **Window** menu.

- whether you use a headless 4D application or not, you can open your web browser and enter the following address:

`IPaddress:HTTPPort/dataexplorer`

or

`IPaddress:HTTPSPort/dataexplorer`

[HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) are configured in the `WebAdmin` settings. 


## Authentication

Access to the Data Explorer requires that the user session is authenticated and has the "WebAdmin" privilege.

- When the Data Explorer is accessed by entering a URL and without prior identification, an authentication is required. The user configuration must enter the [access key](webAdmin.md#access-key) in an authentication dialog box. If the access key was not defined in the [`WebAdmin settings`](webAdmin.md#webadmin-settings), no access via URL is possible.

- When the Data Explorer is accessed through the **Data Explorer** menu item, the user is automatically authenticated.
 

> A browser can only be authenticated for one Data Explorer page at a time (because of the session cookie). If you want to work simultaneously with multiple 4D instances on different projects, you must open Data Explorer pages with different browsers or use private browsing. 


## Using the Data Explorer

In addition to a comprehensive and customizable view of your data, the Data Explorer allows you to query and order your data.

### Requirements

The Data Explorer supports the following web browsers:

- Chrome
- Safari
- Edge

The minimum resolution to use the Data Explorer is 1280x720. Recommended resolution is 1920x1080.

### Basics

The Data Explorer provides an overall access to the ORDA data model with respect to the [ORDA mapping](ORDA/dsmapping.md#general-rules). 

The page contains several areas that display the data model:

- On the **left side**, you can select the dataclasses and attributes to display. You can filter the list of dataclass names and attribute names using the respective search areas. 
![alt-text](assets/en/Admin/dataExplorer3.png)

- The **central area** displays the list of all entities of the selected dataclass. By default, all attributes are selected. You can reduce the number of columns by unchecking attributes in the left side. You can also move any column with the list by simple drag and drop. 
- You can [sort entities](#ordering-entities) by clicking on column headers. 
- When you select a dataclass in the left side, its name is displayed as a tab at the top of the entity list. Selecting another dataclass will add another tab in the area at the right of the previous one, and so on. You can remove any referenced dataclass by clicking the "remove" icon at the right of the dataclass name.
- Under the dataclass names is the entity [query area](#query-area), allowing to create simple or complex queries to find or filter entities. 

- The **right area** displays the attribute values of the currently selected entity.
All attribute types are displayed, including pictures and objects (expressed in json). You can browse between the entities of the dataclass by clicking the **First** / **Previous** / **Next** / **Last** links at the bottom of the area.   

You can switch to the **dark mode** display themes using the selector at the bottom of the page:

![alt-text](assets/en/Admin/dark.png)

![alt-text](assets/en/Admin/dataExplorer2.png)


### Up	dating contents

When the ORDA model or data is modified on the database side (table added, record edited or deleted, etc.), you just need to refresh the Data Explorer page in the browser (using the F5 key, for example). 


### Ordering entities

You can reorder the displayed entity list according to attribute values. All types of attributes can be used for a sort, except picture and object. 

- Click on a column header to order entities according to the corresponding attribute values. By default, the sort is ascending. Click twice for a descending sort. A column used to sort entities is displayed with a small icon and its name is in *italics*.
- 
![alt-text](assets/en/Admin/dataExplorer7.png)

- You can sort attributes on several levels. For example, you can sort employees by city and then by salary. To do that, hold down the **Shift** key and click sequentially on each column header to include in the sort order. 

### Query area

You can filter the displayed entities of the dataclass using the query area of the Data Explorer. Two query modes are available:

- Query on attributes (selected by default)
- Advanced query with expression

You select the query mode by clicking on the corresponding icon:

![alt-text](assets/en/Admin/dataExplorer4.png)

The **X** button allows you to reset the query area (and thus stop filtering). 

If the loading of dataclass entities requires a long time, a "Loading data" bar is displayed to inform you that this operation is in progress. You can stop the loading at any moment by clicking on the red button, only the loaded entities will be available then:

![alt-text](assets/en/Admin/dataExplorer5.png)


#### Query on attributes

In this mode, you can filter entities by entering values to find (or to exclude) in the areas above the attribute list. You can filter on one or several attributes. The entity list is automatically updated when you type in.

![alt-text](assets/en/Admin/dataExplorer6.png)

Different operators and query options are available, depending on the data type of the attribute. 

> You cannot filter on picture or object attributes. 

##### Numeric operators

With numeric, date, and time attributes, the "=" operator is selected by default. However, you can select another operator from the operator list (click on the "=" icon to display the list):

![alt-text](assets/en/Admin/DEFilter1.png)

##### Dates

With date attributes, you can enter the date to use through a calendar widget (click on the date area to display the calendar):

![alt-text](assets/en/Admin/DEFilter2.png)

##### Booleans

When you click on a boolean attribute area, you can filter on **true**/**false** values but also on **null**/**not null** values: 

![alt-text](assets/en/Admin/DEFilter3.png)

- **null** indicates that the attribute value was not defined
- **not null** indicates that the attribute value is defined (thus true or false).

##### Text

Text filters are not diacritic (a = A). 

By default, the filter is of the "starts with" type. For example, entering "Jim" will show "Jim" and "Jimmy" values. 

You can also use the wildcard character (@) to replace one or more characters in order to create different filters, such as "ends with". For example: 

|A filter with|Finds|
|---|---|
|Bel@|All values beginning with “Bel” (equivalent to "Bel")|
|@do|All values ending with “do”|
|Bel@do|All values starting with “Bel” and ending with “do”|
|@elm@|All values containing “elm”|

If you want to create more specific queries, such as "is exactly", you may need to use the advanced queries feature.


#### Advanced queries with expression

When you select this option, a query area is displayed above the entity list, allowing you to enter any expression to use to filter the contents:

![alt-text](assets/en/Admin/dataExplorer8.png)

You can enter advanced queries that are not available as attribute queries. For example, if you want to find entities with *firstname* attribute containing "Jim" but not "Jimmy", you can write:

```
firstname=="Jim"
```

You can use any ORDA query expression as [documented with the `query()` function](API/dataclassClass.md#query), including placeholders and formulas . For example, with the Employee dataclass, you could write:

```
"lastName = :1 and manager.lastName = :2";"M@";"S@")
```