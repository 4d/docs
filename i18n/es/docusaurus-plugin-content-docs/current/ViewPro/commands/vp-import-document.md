---
id: vp-import-document
title: VP IMPORT DOCUMENT
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                             |
| ----------- | ------------------------------------------ |
| 20 R2       | Soporte de documentos .sjs |

</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( _vpAreaName_ : Text ; _filePath_ : Text { ; _paramObj_ : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| filePath   | Text   | -> | Ruta de acceso del documento                 |                  |
| paramObj   | Object | -> | Opciones de importación                      | <!-- END REF --> |

#### Descripción

The `VP IMPORT DOCUMENT` command <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->imports and displays the document designated by _filePath_ in the 4D View Pro area _vpAreaName_<!-- END REF -->. El documento importado sustituye a los datos ya insertados en el área.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

In _filePath_, pass the path and name of the document to be imported. Se soportan los siguientes formatos:

- Los documentos 4D View Pro (extensión ".4vp")
- Microsoft Excel (extensión ".xlsx")
- documentos texto (extension ".txt", ".csv", el documento debe estar en utf-8)
- [SpreadJS documents](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (extension ".sjs")

If the document extension is not a recognized extension, such as `.4vp` or `.xlsx`, the document is considered a text document. Debe pasar una ruta completa, a menos que el documento se encuentre en el mismo nivel que la carpeta Project, en cuyo caso puede pasar sólo su nombre.

An error is returned if the `filePath` parameter is invalid, or if the file is missing or malformed.

The optional _paramObj_ parameter allows you to define properties for the imported document:

| Parámetros |                     | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                     | 4D.Function | Un método de retollamada que se lanzará cuando la importación haya terminado. Debe utilizar una fórmula devuelta por el comando [`Formula`](../../API/FunctionClass.md#formula). See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                       |
| contraseña |                     | text                        | Sólo Microsoft Excel (opcional) - La contraseña utilizada para proteger un documento MS Excel.                                                                                                                                                                                                                                                                                                                             |
| csvOptions |                     | object                      | opciones de importación csv                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|            | range               | object                      | Rango de celdas que contiene la primera celda donde se escribirán los datos. Si el rango especificado no es un rango de celdas, sólo se utiliza la primera celda del rango.                                                                                                                                                                                                                                                   |
|            | rowDelimiter        | text                        | Delimitador de línea. Si no está presente, el delimitador es determinado automáticamente por 4D.                                                                                                                                                                                                                                                                                                                              |
|            | columnDelimiter     | text                        | Delimitador de columna. Por defecto: ","                                                                                                                                                                                                                                                                                                                                                                                      |
| sjsOptions |                     | object                      | opciones para la importación de sjs                                                                                                                                                                                                                                                                                                                                                                                                                           |
|            | calcOnDemand        | boolean                     | Si se calculan las fórmulas sólo cuando se solicitan, por defecto es false.                                                                                                                                                                                                                                                                                                                                                                   |
|            | dynamicReferences   | boolean                     | Si calcular funciones con referencias dinámicas, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                         |
|            | fullRecalc          | boolean                     | Si calcular después de cargar los datos json, false por defecto.                                                                                                                                                                                                                                                                                                                                                                              |
|            | includeFormulas     | boolean                     | Si se incluyen las fórmulas al cargar, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                                   |
|            | includeStyles       | boolean                     | Si se incluyen los estilos al cargar, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                                    |
|            | includeUnusedStyles | boolean                     | Si se incluyen los estilos de nombre no utilizados al convertir excel xml a json, por defecto es true.                                                                                                                                                                                                                                                                                                                                        |
|            | openMode            | integer                     | <li>0 (normal): normal open mode, without lazy and incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): lazy open mode. Al abrir el archivo, sólo se cargará directamente la hoja activa. Other sheets will be loaded only when they are be used.</li><li>2 (incremental): incremental open mode. When opening file, UI and UI event could be refreshed and responsive directly.</li> |

:::note Notas

- Importing files in .xslx, .csv, and .sjs formats is **asynchronous**. With these formats, you must use the `formula` attribute if you want to start an action at the end of the document processing.
- Al importar un archivo con formato Microsoft Excel a un documento 4D View Pro, algunos parámetros pueden perderse. You can verify your settings with [this list from SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- For more information on the CSV format and delimiter-separated values in general, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)

:::

#### Ejemplo 1

Desea importar un documento 4D View Pro por defecto almacenado en el disco, al abrir el formulario:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //Área 4D View Pro cargada y lista
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Ejemplo 2

Desea importar un documento Microsoft Excel protegido por contraseña a un área 4D View Pro:

```4d
	//Import code
var $o : Object
$o:=New object
$o.password:="excel123"
$o.formula:=Formula(myImport)
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

```4d
	//myImport callback method
#DECLARE($area : Text; $filePath : Text; $param : Object; $status : Object)

If ($status.success)
     ALERT("Import successfully completed")
Else 
     ALERT("Error: "+$status.errorMessage)
End if
```

#### Ejemplo 3

Quiere importar un archivo `.txt` que utiliza una coma (",") como delimitador:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Here's the result:
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

#### Ver también

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)
