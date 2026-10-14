---
id: field-properties-legacy
title: Fields
---
<!-- REF my.section.id.Desc -->
## Definition

The "Definition" area of the [Inspector palette](../Develop/structure-editor.md#inspector-palette) configures the basic field properties. Some properties are only available when certain types of fields are selected.

### Color

You can assign a color to each field name. Colors can be used to distinguish fields according to their role or attributes. For example, you can use one color for unique fields and another for mandatory ones. It is also possible to assign a [color individually to each table](../Develop/structure-tables.md#color-of-the-table-image) and to each relation.  

To set the color of one or more fields, select them and choose a color using:

- The **Color button** in the tool bar of the Structure editor,
- The **Color** command in the context menu of the fields,
- The **Color** option in the **Inspector palette**.

The **Automatic** option can be used to apply the standard original color to the field name.

### Invisible

You can make a field invisible in the Application environment and for the plug-ins by selecting the **Invisible** property for this field. The **Invisible** attribute hides the field from the user. A field with this attribute does not appear in any standard 4D editors and dialog boxes that appear in the Application environment. In addition, it cannot be used by plug-ins. The following **editors** and **dialog boxes** in the Application environment are concerned:

- All **Query** editors,
- The **Order by editor**,
- The **Label editor**,
- The **Quick reports**,
- The **Exporting and importing data** dialog boxes,
- The **Formula editor**.

In each of these places, the user is unable to see or choose the field. For instance, the user cannot choose an invisible field for a design created with the [Label editor](../Desktop/labels.md).  

**Note:** When using the editors, users have the option of saving their specifications (e.g., the query or sort they created) to disk files. In this case, any fields specified that are subsequently declared invisible will still be used in the operation. In addition, users can type the names of invisible fields in the **Formula editor**.

Invisible fields are displayed in *italics* in the Structure editor window.


### Unique

Use the **Unique** attribute when you want to be certain that each record has a different (unique) value in this field. The Unique attribute should be used for the field that uniquely identifies each record in the table. The Unique attribute is useful to validate fields that store Employee numbers, Social Security numbers, Purchase Order numbers, and so on.

The Unique attribute prevents duplication of empty values as for any entries. An empty field cannot be duplicated in another record.

The [information bar](../Develop/structure-editor.md#information-bar) of the Structure editor indicates whether the Unique property is checked for a field.

In 4D, fields with the Unique attribute must be indexed. A visual signal indicates that an index will be created (if it does not already exist) when you select the Unique attribute for a field: 

![](../assets/en/Develop/field-unique.png)

The editor prevents you from removing the index of a Unique field (**None** option or remove commands not available for indexes when such a field is selected). If you want to remove the index from a unique field, you need to remove the Unique attribute beforehand.


### Expose as REST resource

This option controls whether the [field is exposed to REST requests](../REST/configuration.md#exposing-field).  

:::note Notes

- You can also set this option at the level of the table.  
- This option is used in the context of [ORDA remote datastore features](../ORDA/remoteDatastores.md).

:::

### Reject NULL value input  

This property is used to prevent the storage of NULL values. When this property is checked for a field, it will not be possible to store the NULL value in this field. If a field having this attribute receives a NULL value, an error will be generated. This low-level property corresponds exactly to the NOT NULL attribute of SQL. 

:::note

In 4D, fields can also have the "Mandatory" attribute (see below). The two concepts are similar but their scope is different: the "Mandatory" attribute is a data entry control, whereas the "Reject NULL value input" attribute works at the level of the database engine.

:::

### Map NULL values to blank values  

This property make the processing of "blank" values and NULL values consistent for the field via the 4D language. 

:::warning Compatibility with ORDA

Using this option is not recommended with [ORDA](../ORDA/overview.md)-based developments, where the NULL values are fully supported.

:::

For compatibility reasons, NULL values stored in 4D database tables are automatically converted into default values when being manipulated via the 4D language. For example, in the case of the following statement:

```4d
$myTextVar:=[myTable]myTextField
```

... if the *myTextField* field contains a NULL value, the *$myTextVar* variable will contain "" (empty string). The [default values](../Concepts/data-types.md#default-values) depend on the data type. On the other hand, this mechanism in principle does not apply to processing carried out at the level of the 4D database engine, such as queries. In fact, searching for a “blank” value (for example $myvalue=0) will not find records storing the NULL value, and vice versa. When both types of values (default values and NULL) are present in the records for the same field, certain processing may be altered or require additional code. To avoid these inconveniences, the **Map NULL values to blank values** option can be used to standardize all the processing in the 4D language. This property can be used to extend the principle of using default values to all processing. Fields containing NULL values will be systematically considered as containing default values.

:::note Notes

- The Alpha fields in UUID format that are not generated are not considered as NULL (see UUID format).
- This property is taken into account at a very low level of the database engine. It acts more particularly on the [`Is field value Null`](../commands/is-field-value-null) command.

:::


### Autoincrement  

The **Autoincrement** property generates sequence numbers in the table. It can be used with fields of the [Integer, Long Integer and Integer 64 bits types](../Concepts/data-types.md).

A field with this property is automatically incremented each time a record is created in the table. The sequence number assigned to the field matches that of the "internal counter" of the table, maintained by 4D. This internal counter can also be accessed using 4D commands [`Sequence number`](../commands/sequence-number) and [`Get database parameter`](../commands/get-database-parameter) and using the `#N` marker (see Default values).

The numbers assigned are never reused in the table, even when records are deleted. Numbers generated during a transaction that is cancelled are "lost”. The Autoincrement property corresponds to the SQL AUTO_INCREMENT attribute and can be specified using this language. The AUTO INCREMENT label also appears in the SQL information area of the [Inspector](../Develop/structure-editor.md#inspector-palette) for fields having this attribute.

:::warning

Although they are unique in the table when they are generated, autoincremented numbers are NOT recommended to fill unique ID primary key fields for records, especially when the structure is used with several data files, because in this case the internal counter could be desynchronized. In addition, the internal counter of a table could be reset using the [`SET DATABASE PARAMETER`](../commands/set-database-parameter) command. To create unique record IDs, it is strongly recommended to use UUIDs, which provide the following advantages:

- UUIDs generate IDs which are unique between all tables and databases.  
- To generate UUID you can mix the **Auto UUID** option (see below) and the [`Generate UUID`](../commands/generate-uuid) command. 

:::



### Stored in record, data file or outside data file  

This menu of options is only available for Text, BLOB, Picture and Object [type](../Concepts/data-types.md) fields. You can set a storage location for the field data. 

#### In record

Data is stored with each record. Generally, you should not choose this option for fields containing voluminous data. However, it is selected by default for Text fields because this type of storage is required if you want to use "standard" B-Tree indexes. The index selection menu is hidden when Text data are stored outside of records.

#### In data file

Data is stored in the data file, but outside of each record. This option is selected by default for BLOB and Picture fields. You can optimize database functioning when working with voluminous data by storing texts, pictures, Blobs and objects outside of records. 

#### Outside data file

Data is stored in separate files, outside the [data file](../Project/architecture.md#data). This option is described in **External data storage**.

:::note Notes
- This option is only taken into account for new records created subsequently in the table. When you set this option for a table where records have already been entered, they are not modified and the table will work in a mixed internal/external storage mode. If you want to extend this mode to the existing records as well, you need to [compact the data](../MSC/compact.md) using the [**Force updating of the records**](../MSC/compact.md#force-updating-of-the-records) option. 
- Data stored outside the data file are not handled by the [data encryption feature](../MSC/encrypt.md), if enabled.
- This option is not available for [Object type fields](../Concepts/dt_object.md).

:::

#### Internal storage max size  

As described in the previous section, for optimization purposes, by default the data of BLOB, Picture, Text and Object type fields are stored outside of records or outside of the data file. In this configuration, it may be worthwhile, for performance reasons, to "force" data to be stored in the records when their size is limited. This functioning is particularly optimized when your application handles BLOB, Picture, text or object data of inconsistent sizes. The value entered in this area represents the size in bytes below which the data of the field will be stored in the record. For example, if you enter 30 000 for a picture field, a 20 KB picture will be stored in the record and a 40 KB picture will be stored at the location defined in the settings (in the data file or outside it). By default, the value is 0: all the data of the field is stored outside of the records. 

### UUID format  

This property is available for [Alpha type](../Concepts/data-types.md) fields. It indicates that the field stores UUID identifiers. The stored data must conform to the UUID format (combination of 32 letters (A-F, a-f) and numbers (0-9)). To do this, you can use the [**Auto UUID**](#auto-uuid) property, the [`Generate UUID`](../commands/generate-uuid) command, or any custom algorithm.

If you try to store a string that does not comply with the UUID format in this field, 4D converts it automatically. The same operation is also applied to the contents of existing non-Alpha fields that are transformed into UUID fields: when loading the records, the values are reformatted and then stored once again.

Fields with the UUID format property can be displayed in forms and remain enterable. Their contents appear in upper-case characters. You must pass through a variable if you want to display lower-case characters. 

:::note Notes

- Fields with the UUID format cannot be associated with keyword indexes nor with choice lists.
- You can create a relation between two fields that both have the UUID format but you cannot link a standard Alpha field to a field that has the UUID format.
- An UUID field that is initialized (generated) and that has the NULL value returns an empty string. An UUID field that is not generated is not NULL and returns "000..." (the number of 0s is equal to the number of characters). The property is not taken into account by non-generated UUID fields (display of "000...").

:::

#### Auto UUID  

This option is only active when you select the [**UUID format**](#uuid-format) property. You can use the **Auto UUID** property to generate a UUID number automatically in the field.

This number is calculated automatically in the following contexts:

- when a record is created,
- when a record is loaded whose UUID field contains a Null value. This occurs more particularly for records created and saved before the UUID field is added in the table, when [**Map NULL values to blank values**](#map-null-values-to-blank-values) option was unchecked.
Naturally, in all cases, the record must be saved in order for the automatically-generated UUID to be saved in the field.

:::note

When data is imported, even with this property selected, 4D does not generate a new number but uses the imported values (and transforms them when necessary if the format is not valid). However, if the value of the imported field is empty, a UUID is automatically generated.

:::

<!-- END REF -->



Queries and sorts on text without tags  
This property is available for Text and Alpha fields. When you select this option, queries and sorts carried out in the data stored in the field do not take any style tags into account.

This option is related to the abilit of 4D to apply different styles within the same text area (rich text) in a form. For more information about this function, refer to Multi-style (Rich text area).

The setting of styles is done by inserting HTML tags in the text. These tags are interpreted when the text area is displayed. 

Style tags are stored with the data. For example, if you write "week end" in a Text field, 4D stores `"week <SPAN STYLE = "color: #D81E05">end</SPAN>"`. This operation is transparent for the user at the form level. However, for queries and sorts, a specific setting is necessary for 4D to ignore the style tags. For the word "week end", the query can find it only if you have selected the Queries and sorts on text without tags option for the field in the Structure editor.

Note: With this option, a query for thevalue among the data of thefield is the same as executing this statement within 4D:

 QUERY BY FORMULA(OBJECT Get plain text(thefield)="thevalue")
Indexing  
The Index property is available for all field types except for BLOBs and Pictures. The Keyword Index property is available for fields of the Alpha, Text and Picture types. 

Using indexes helps accelerate processing and searches among the data.

Managing indexes is detailed in Creating and modifying indexes.

Data Entry Controls  
You can establish data entry controls for fields and enterable objects at the form level. Data entry controls restrict what the user can enter into the field or enterable object on a particular form.

Mandatory  
When the Mandatory attribute is set for a field, the user must enter a value in that field during data entry. 4D does not accept a record that contains an empty mandatory field. You would set the Mandatory attribute for a field that contains essential information for your database. The field that uniquely identifies each record is a good candidate for the Mandatory attribute. Social Security numbers, invoice numbers, certain dates, or employee numbers might need to have the Mandatory attribute set to protect the integrity of the records.

You can also set this attribute for a field in a particular form. If you select the Mandatory attribute in the Structure editor, you cannot deselect it on a particular form. However, you can apply the Mandatory attribute on a form to a field that does not have this attribute in the Structure editor. For information about setting the Mandatory attribute for a field in a form, see the Enterable and Mandatory attributes and field properties section.

Note: In 4D, fields can also have the "Reject NULL value input" property (see above). The two concepts are similar but their scope is different: the “Mandatory” attribute is a data entry control, whereas the “Reject NULL value input” attribute works at the level of the database engine.

Can’t Modify  
If this attribute is set for a field, 4D validates the value initially entered in the field, but does not allow the user to modify the value after the record has been saved. The user can edit an entry in such a field only during the initial creation of the record, before the record is validated. Once the user saves the record, the value in the field not editable. The value can then only be modified by a method or in the Design environment after you have first removed this option.

Use Can’t Modify for fields that must provide an audit trail such as Date Received, Date Paid, and so on. The Can’t Modify attribute is often used for the field that uniquely identifies each record in the table.

Note: This attribute only works on fields displayed in an input form in Page mode. In other cases (entry in list, entry in a subform in either List or Page mode), the value of the field can still be modified.

Display Only  
The user cannot enter values from the keyboard into a field that has the Display Only attribute set. You must use a default value for such a field or write a method that inserts a value in the field. A field with the Display Only attribute is useful for displaying values that you do not want database users to modify, such as calculated totals or a sequence number assigned by a method.

You can also make any field non-enterable on a particular form. For information about making a field non-enterable, see the Enterable and Mandatory attributes and field properties section.

Multiline  
This option is only available for Text type fields. When it is checked, the Text field is automatically configured, in forms created subsequently, so as to contain several lines of text. Its default characteristics are as follows:

Height corresponding to several lines,
Horizontal scrollbar,
During execution, a carriage return causes a line break.
When this option is not checked, the default appearance of Text fields in forms is the same as that of Alpha fields: a single line’s height and no scrollbar; a carriage return will move you to the next field of the form. 

It is possible to change the default field appearance at any time using the Form editor.

Allow Choice List  
Use the Allow Choice List attribute if you want to display a choice list for entering information in the field. To use this attribute, you first need to create the choice list using the Lists editor (see Lists).

Use the Allow Choice List attribute when you want to standardize entries in the field and avoid misspellings. Use a choice list for a field that has a limited number of valid entries or a limited number of usual entries. Using a choice list does not necessarily prevent the user from typing a different value (one that does not appear in the choice list).

You can also assign a choice list to a field on a particular form. However, when you assign a choice list only on a form, the list is not displayed in other editors and dialog boxes, such as the Query editor. For information about using a choice list in a form, see the section Data entry controls and assistance.

Note: It is also possible to set choices lists of required values and excluded values at the form level. 

When you check the Allow Choice List option, the associated scrolldown menu is enabled. You can then select an existing choice list that you want to assign to the field or you can click on [...] to directly access the Lists editor (see Lists).

Help Tip  
You can provide users with additional information about a field by adding a help tip to the field. When a tip is entered in the Help Tips area, it appears next to the field whenever a user places the pointer over the field in any form in which the field is included. A Help Tip is displayed on all platforms.

When the user places the mouse pointer over the field, the tip appears below the field, as shown below:



Note: Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the SET DATABASE PARAMETER command.

You can also associate help messages with fields in two other ways:

at the form editor level. In this case, the help tip of the field will not appear in the other forms. For more information about using help tips with forms, refer to the Help messages section.
using the OBJECT SET HELP TIP command, for the current process.
Comments  
The Comments area of the Inspector palette can be used to store additional information about the field. These comments are available to all the developers.
Note that each table and relation has its own comments area.

SQL  
The SQL area of the Inspector palette provides various useful information about the field from the perspective of its use via the SQL language.

This area indicates more particularly whether the name of the field respects the rules regarding SQL nomenclature (for example, unlike 4D, SQL does not allow a field name to contain spaces).

Note: SQL also defines a list of reserved words, including SQL functions and SQL keywords. You can view these reserved words in the of the Method editor.

For fields, the SQL information area also indicates their SQL attributes (type and properties).
