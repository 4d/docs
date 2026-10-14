---
id: structure-exporting-and-importing 
title: Exporting and importing structure definitions
---

4D lets you export the database structure definition as an XML or HTML file. Conversely, it is possible to use a structure definition saved in XML format to generate a new 4D database on the fly. These possibilities meet different needs:

- Allowing structures to be represented in custom formats (reports, tables, etc.) or to be analyzed in other environments,
- Allowing databases to be generated from definition files.

## Format of a 4D structure definition

4D structure definitions are based on the XML format.  
You can display a structure definition using a simple text editor. The XML format also allows any type of use to be foreseen, in particular via XSL transformations. Moreover, 4D uses an .XSL file to export the structure definition in HTML format.

A structure definition includes tables, fields, indexes and relations, along with their attributes and the various characteristics that are necessary for a complete definition of the structure. The internal “grammar” of 4D structure definitions is documented through DTD files — also used for the validation of XML files. The DTD files used by 4D are grouped together in the DTD folder, located next to the 4D application. The **base_core.dtd** and **common.dtd** files are used for the definition of the structure. For more information about 4D structure definitions, feel free to consult these files, as well as the comments they contain.

## Exporting a structure definition

4D lets you export a structure in either XML or HTML format. Choose the format that best meets your needs:

- **XML Format:** An XML-format structure may be viewed using a simple text editor or used in various ways (custom XSL transformation, importing and analysis in another software, etc.).  
  Choose this format when you want to use the structure definition to create new databases.

- **HTML Format:** This format allows the representation of the structure in the form of a report that can be viewed and printed via a browser.

To export a structure definition in XML:

1. Select the **Export > Structure definition to XML file...** command in the File menu of 4D.  
2. A standard Save as dialog box appears so that you can specify the name and location as well as the type of file to be exported.  
3. Specify the name and location of the export then validate the dialog box.

To export a structure definition in HTML:

1. Select the **Export > Structure definition to HTML file...** command in the File menu of 4D.  
2. A dialog box used for selecting a folder appears so that you can designate the location where the HTML files will be stored.  
3. Click on **Make New Folder** or specify an existing folder.  
   4D automatically creates, at the specified location, a folder named *“Mystructure.4db Structure Export”* that contains the exported items (*Mystructure.4db* represents the name of the database).  
4. A dialog box lets you view the results of the export directly in the default browser. Structure definitions in HTML format look like this:
[picture here]

### Customizing the XSL transformation

To generate the HTML pages of the structure definition, 4D carries out XSL transformations by default using the **“Structure_to_html.xsl”** file placed in the */Resource/language.lproj* subfolder of the application.

:::note 

If this file is not present, exporting in HTML is not available in the export dialog box.

:::

You can customize these transformations as desired using a custom XSL style sheet file. To do this, simply create a file named **“Structure_to_html.xsl”** file (you can duplicate the default file) and place it at the same level as the *.4db* file. 4D will then use this file to generate the structure definition in HTML format.


## Creating a database from a structure definition

Structure definitions that are exported in XML format can be used to create new identical databases on the fly. In this case, the structure definition can be considered as a structure template, which it is possible to duplicate at leisure.

An XML structure definition can be used as such or can be modified beforehand via an XML editor. This means that the use of any type of mechanism used to generate structures by programming can be considered.

Furthermore, since the internal format of 4D structure definition XML files is public (see the “Format of a 4D structure definition” section above),  
it is possible to build this type of file from other database environments or any design application in order to generate 4D databases automatically.

To create a database from a structure definition:

1. Select the **New > Database From Structure Definition...** command in the File menu of 4D.  
   A standard Open document dialog box appears so that you can specify the definition file to be opened.  
   You must select an XML format file that respects the “grammar” of 4D structure definitions (the program validates the DTD file).  
2. Select a structure definition XML file then click **OK**.  
   4D displays a dialog box that can be used to choose the name and location of the database to be created.  
3. Choose the name and location of the database to be created then click **OK**.
If the XML file is valid, 4D closes the current database (if applicable) and creates the new database using the structure definition file and displays its Explorer window.  
An empty data file is also created.
