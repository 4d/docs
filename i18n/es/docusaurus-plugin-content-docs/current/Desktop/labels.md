---
id: labels
title: Etiquetas
---

4D’s Label editor provides a convenient way to print a wide variety of labels. With it, you can do the following:

- Design labels for mailings, file folders and file cards, and for many other needs,
- Create and insert decorative items in label templates,
- Specify the font, font size, and style to be used for the labels,
- Specify the number of labels across and down on each page,
- Specify how many labels to print per record,
- Specify the label page margins,
- Designate a method to execute when printing each label or record,
- Create a preview and print the labels.

:::note

Labels can also be created using the [Form editor](../FormEditor/formEditor.md). Utilice el editor de formularios para diseñar etiquetas especializadas que incluyan variables o aproveche las herramientas de dibujo disponibles en el editor de formularios e imprímalas utilizando el editor de etiquetas o el comando [`PRINT LABEL`](../commands-legacy/print-label.md).

:::

You use the Label editor to create, format, and print labels. The Label editor contains settings for designing labels and positioning the labels on label paper. For example, when producing mailing labels, you might want a label design that includes the person’s first and last name on the first line, the street address on the second line, and so on. As part of the design, the Label editor enables you to specify the number of labels on the page and the margins of the label paper so that the label text is centered within the labels.
When you create a satisfactory label design, you can save it to disk so that you can reuse it.

Para abrir el editor de etiquetas:

- In the Design environment, choose **Labels...** from the **Tools** menu or from the menu associated with the "Tools" button in the 4D tool bar.
 O
- En una aplicación, llame al comando [`PRINT LABEL`](../commands-legacy/print-label.md).

![](../assets/en/Desktop/label-wizard.png)

You use the Label page to specify the contents of the label and the Layout page to define the size and position of the labels on the page.

![](../assets/en/Desktop/label-buttons.png)

## Página Etiqueta

The Label page contains several areas with settings for designing and formatting labels.

### Lista de campos

Displays the names of the fields in the current table in a hierarchical list. If this table is related to other tables, the foreign key fields have a plus sign (on Windows) or an arrow (on macOS). You can display fields from the related table by expanding the related fields. The fields in the related table are indented. To use a field from this list in the label template, you just drag it onto the label preview area to the right of the list.

:::note Notas

- Only tables and fields which are visible appear in the Label editor.
- [Object type](../Concepts/dt_object.md) fields are not supported by the Label editor.

:::

The search area allows you to narrow the list of fields displayed to those containing the entered string:

![](../assets/en/Desktop/label-filter.png)

### Vista previa de etiqueta

You use this area to design your label zone by placing and positioning all the items that you want to include in your label. El rectángulo blanco representa una sola etiqueta (su tamaño se configura en la página [Diseño](#layout-page)).

- You can drag fields onto the label.
- You can also concatenate two fields by dropping the second field onto the first one. They are automatically separated by a space.<br/>
 ![](../assets/en/Desktop/label-concat.png)<br/>
 If you hold down the **Shift** key, they are separated by a carriage return. This lets you create, for example, address labels using several overlapping fields (Address1, Address2, etc.), without producing a blank row when an address requires only one field.
- You can add a formula onto the label by selecting the **Formula** tool ![](../assets/en/Desktop/label-tool6.png) (or choosing **Tool>Formula** in the contextual menu) and drawing an area. The **Formula editor** is then displayed:
 ![](../assets/en/Desktop/label-formula1.png)<br/>
 For example, you can apply a format to a field using the [`String`](../commands-legacy/string.md) command:<br/>

![](../assets/en/Desktop/label-formula2.png)<br/>

:::note

Keep in mind that you can only enter methods that are "allowed" for the database in the Formula editor. Los métodos permitidos dependen de los [parámetros del proyecto](../settings/security.md#options) y del comando [`SET ALLOWED METHODS`](../commands/set-allowed-methods.md).

:::

- You can drag and drop picture files as well as label files (".4lbp" files) from the desktop of the OS.

- To modify the area, double-click on the contents in order to switch to editing mode. When you double-click on fields or formulas, the **Formula editor** is displayed, allowing you to remove or modify items:
 ![](../assets/en/Desktop/label-formula.png)

### Formulario a utilizar

This drop-down list allows you to define a table form as a label template. The form chosen must be specially adapted to the creation of labels.
En este caso, el editor de etiquetas está parcialmente deshabilitado: sólo las funciones de la [página de diseño](#layout-page) pueden ser usadas — para permitirte configurar la página basada en el formulario. The image of the form selected is displayed in the label preview area.
When you use a form, 4D executes any form or object methods associated with it. Al usar esta opción, también puede designar un método proyecto para ejecutar para cada registro o etiqueta y luego asignar variables (ver [este ejemplo](#printing-labels-using-forms-and-methods-example) más abajo). If you want to create your labels using the editor itself, you need to choose the **No Form** option.

:::note Notas

- Puede restringir los formularios listados que aparecen en este menú mediante un [archivo JSON específico](#controlling-available-forms-and-methods).
- If the database does not contain any table forms, this menu is not displayed.

:::

### Graphic area commands

The graphic area of the editor includes both a tool bar and a context menu that you can use to design your label template.

The left-hand side of the tool bar includes commands for selecting and inserting objects. You can also access these tools by means of the **Tool>** command in the area's context menu.

| Icono                                     | Nombre de la herramienta | Descripción                                                                                                                                                                                                        |
| ----------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](../assets/en/Desktop/label-tool1.png) | Selección                | Click on a single object or draw a selection box around several objects. For a selection of non-adjacent objects, hold down **Shift** and click on each object you want to select. |
| ![](../assets/en/Desktop/label-tool2.png) | Creación de línea        |                                                                                                                                                                                                                    |
| ![](../assets/en/Desktop/label-tool3.png) | Creación rectangular     | For Rectangle or Rounded rectangle.                                                                                                                                                                |
| ![](../assets/en/Desktop/label-tool4.png) | Creación de círculo      |                                                                                                                                                                                                                    |
| ![](../assets/en/Desktop/label-tool5.png) | Inserción de texto       | Draw a rectangle and enter text inside it. You can edit any text area, including those containing field references, by double-clicking it.                                         |
| ![](../assets/en/Desktop/label-tool6.png) | Formula insertion        | Draw a rectangle to display the **Formula editor**, where you can define dynamic label contents (fields and formulas).                                                          |

There are shortcuts available to move or resize objects more precisely using the keyboard arrow keys:

- Keyboard arrow keys move the selection of objects 1 pixel at a time.
- **Shift** + arrow keys move the selection of objects 10 pixels at a time.
- **Ctrl** + arrow keys enlarge or reduce the selection of objects by 1 pixel.
- **Ctrl** + **Maj** + arrow keys enlarge or reduce the selection of objects by 10 pixels.

The right-hand side of the tool bar contains commands used to modify items of the label template:

| Icono                                      | Nombre de la herramienta  | Descripción                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/Desktop/label-tool7.png)  | Color de relleno          | all color icons display the selected color                                                                                                                                                                                                                                                                                                                       |
| ![](../assets/en/Desktop/label-tool8.png)  | Color de línea            |                                                                                                                                                                                                                                                                                                                                                                  |
| ![](../assets/en/Desktop/label-tool9.png)  | Lineweight                |                                                                                                                                                                                                                                                                                                                                                                  |
| ![](../assets/en/Desktop/label-tool10.png) | Font menu                 | Sets the font and its size, as well as the text style, color and alignment for the block(s) of selected text.                                                                                                                                                                                                                 |
| ![](../assets/en/Desktop/label-tool11.png) | Alineación y distribución | Two or more objects must be selected for the alignment options to be available. "Distributing" objects means automatically setting the horizontal or vertical intervals between at least three objects, so that they are identical. The resulting interval is an average of all those existing in the selection. |
| ![](../assets/en/Desktop/label-tool12.png) | Object level              | Moves objects to the front or back, or moves one or more objects up or down one level.                                                                                                                                                                                                                                                           |

## Layout Page

The Layout page contains controls for printing labels based on the requirements of your current print settings.

![](../assets/en/Desktop/label-layout.png)

- **Labels Order**: Specifies whether labels should be printed in the direction of the rows or the columns.
- **Rows** and **Columns**: Set the number of labels to be printed by "row" and by "column" on each sheet. These settings determine the label size when the "Automatic resizing" option is enabled.
- **Labels per record**: Sets the number of copies to print for each label (copies are printed consecutively).
- **Print Setup...**: Sets the format of the page on which the sheet of labels will be printed. When you click this button, the setup dialog box for the printer selected in your system appears. By default, the sheet of labels is generated based on an A4 page in portrait mode.
 **Note:** The sheet created by the editor is based on the logical page of the printer, i.e. the physical page (for instance, an A4 page) less the margins that cannot be used on each side of the sheet. The physical margins of the page are shown by blue lines in the preview area.
- **Unit**: Changes the units in which you specify your label and label page measurements. You can use points, millimeters, centimeters, or inches.
- **Automatic resizing**: Means that 4D automatically calculates the size of the labels (i.e. the Width and Height parameters) according to the values set in all the other parameters. When this option is checked, the label size is adjusted each time you modify a page parameter. The Width and Height parameters can no longer be set manually.
- **Width** and **Height**: Sets the height and width of each label manually. They cannot be edited when the **Automatic resizing** option is checked.
- **Márgenes** (Superior, Derecho, Izquierdo, Inferior): define los márgenes de su hoja. These margins are symbolized by blue lines in the preview area. Clicking on **Use printer margins** replicates, in the preview area, the margin information provided by the selected printer (these values can be modified).
- **Gaps**: Set the amount of vertical and/or horizontal space between label rows and columns.
- **Method**: Lets you trigger a specific method that will be run at print time. For example, you can execute a method that posts the date and time that each label was printed. This feature is also useful when you print labels using a dedicated table form, in which case you can fill variables from a method.
 To be eligible for label processing, a project method must comply with the following settings:
 - debe ser "permitido" para la base de datos (los métodos permitidos dependen de los [parámetros del proyecto](../settings/security.md#options) y el comando [`SET ALLOWED METHODS`](../commands/set-allowed-methods.md), de lo contrario no se mostrará en el menú **Aplicación**.
 - debe tener la opción [Compartido por componentes y base de datos local](../Project/code-overview.md#shared-by-components-and-host-database).
  Ver también [este ejemplo](#printing-labels-using-forms-and-methods-example) a continuación.

:::note

Para necesidades avanzadas, puede restringir la lista de métodos disponibles utilizando un [archivo json específico](#controlling-available-forms-and-methods).
The **For each: Record or Label** options are used to specify whether to run the method once per label or once per record. This control has meaning only if you are printing more than one copy of each label and you are also executing a method at print time.

:::

- **Layout preview**: Provides a reduced view of how an entire page of labels will look, based on the dimensions you enter in the Label editor. The page preview also reflects the paper size selected in the Print Setup dialog box. También puede utilizar esta zona para designar la primera etiqueta de la página que se va a imprimir (esta opción sólo afecta a la primera hoja en caso de impresión multipágina). This can be useful, for example, when you want to print on a sheet of adhesive labels, part of which has already been used. You can also select the first label on the page to be printed by clicking on it:

![](../assets/en/Desktop/label-start.png)

## Impresión de etiquetas mediante formularios y métodos (ejemplo)

You can use dedicated table forms and project methods to print labels with calculated variables. This simple example shows how to configure the different elements.

1. En un formulario tabla dedicado, añada su(s) campo(s) de etiqueta y su(s) variable(s).
 Here, in a table form named "label", we added the *myVar* variable:
 ![](../assets/en/Desktop/label-example1.png)

2. Create a `setMyVar` project method with the following code:

```4d
 var myVar+=1
```

3. Defina el método proyecto como ["Compartido por los componentes y la base de datos local"](../Project/code-overview.md#shared-by-components-and-host-database).

4. Before displaying the Label editor, make sure the project method is allowed by executing this code:

```4d
 ARRAY TEXT($methods;1)
 $methods{1}:="setMyVar"
 SET ALLOWED METHODS($methods)
```

5. Open the Label editor and use your form:
 ![](../assets/en/Desktop/label-example2.png)

6. In the Layout page, select the method:
 ![](../assets/en/Desktop/label-example3.png)

Then you can print your labels:
![](../assets/en/Desktop/label-example4.png)

## Controlling available forms and methods

The Label editor includes an advanced feature allowing you to restrict which project forms and methods (within "allowed" methods) can be selected in the dialog box:

- en el menú **Formulario a utilizar** de la página "Etiqueta" y/o
- en el menú **Aplicar (método)** de la página "Diseño".

1. Crea un archivo JSON llamado **labels.json** y ponlo en la [carpeta de recursos](../Project/architecture.md#resources) del proyecto.
2. In this file, add the names of forms and/or project methods that you want to be able to select in the Label editor menus.

The contents of the **labels.json** file should be similar to:

```json
[ 
    {"tableId":2,"forms":[],"methods":["myMethod1","myMethod2"]},
    {"tableId":1,"forms":["Sample Label 1","Sample Label 2"],"methods":[]}
]
```

If no **labels.json** file has been defined, then no filtering is applied.

## Managing label files

4D allows you to save each label design in a file that you can open subsequently from within the wizard. By saving your label designs, you can build a label library adapted to your specific needs. Each label design stores the settings defined on the Label and Layout pages.

You can drag and drop label files from your desktop onto the label design area.

Label designs are managed using the **Load** and **Save** buttons of the tool bar.

- To load a label design, click on the **Load** button and designate the design you want to load by means of the File Open dialog box (if a label design is already present in the wizard, 4D replaces it by the one you have loaded).
- To save a label design, click on the **Save** button and indicate the name and location of the design to be created.

### Formato del archivo

The file extension of 4D labels saved by the wizard is ".4lbp". Note that this format is open since it is written internally in XML.

### Precargando archivos de etiqueta

The Label Wizard allows you to store label files within your application, so that label designs can be selected and opened by the user directly using the **Load** button.

To do this, you just need to create a folder named `Labels` within the [Resources folder](../Project/architecture.md#resources) of the project and then copy your label files into it:

![](../assets/en/Desktop/label-resources.png)

:::note

Both standard ".4lbp" files and files generated by the former wizard (".4lb") files are supported.

:::

When the Label Wizard starts, if this folder is detected and contains valid label files, a pop-up icon is added to the **Load** button. Label designs can then be selected through a menu line:

![](../assets/en/Desktop/label-resources2.png)

