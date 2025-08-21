---
id: vp-import-document
title: VP IMPORT DOCUMENT
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                            |
| ----------- | ----------------------------------------------------------------------------------------- |
| 20 R9       | Activación de la función de retrollamada una vez finalizadas las funciones personalizadas |
| 20 R2       | Soporte de documentos .sjs                                                |

</details>

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->

**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| filePath   | Text   | -> | Ruta de acceso del documento                 |                  |
| paramObj   | Object | -> | Opciones de importación                      | <!-- END REF --> |

## Descripción

El comando `VP IMPORT DOCUMENT` <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->importa y muestra el documento designado por *filePath* en el área de 4D View Pro *vpAreaName*<!-- END REF -->. El documento importado sustituye a los datos ya insertados en el área.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *filePath*, pase la ruta y el nombre del documento a importar. Se soportan los siguientes formatos:

 - Los documentos 4D View Pro (extensión ".4vp")
 - Microsoft Excel (extensión ".xlsx")
 - documentos texto (extension ".txt", ".csv", el documento debe estar en utf-8)
 - [SpreadJS documents](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (extension ".sjs")

Si la extensión del documento no es una extensión reconocida, como `.4vp` o `.xlsx`, el documento se considera un documento texto. Debe pasar una ruta completa, a menos que el documento se encuentre en el mismo nivel que la carpeta Project, en cuyo caso puede pasar sólo su nombre.

Se devuelve un error si el parámetro `filePath` no es válido, o si el archivo falta o está mal formado.

El parámetro opcional *paramObj* permite definir las propiedades del documento importado:

| Parámetros   |                           | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------ | ------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula      |                           | 4D.Function | Un método de retollamada que se lanzará cuando la importación haya terminado. Debe utilizar una fórmula devuelta por el comando [`Formula`](../../commands/formula.md). Ver [Pasar un método de retrollamada (fórmula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                                                                                |
| contraseña   |                           | text                        | Sólo Microsoft Excel (opcional) - La contraseña utilizada para proteger un documento MS Excel.                                                                                                                                                                                                                                                                                                                                                                                                   |
| csvOptions   |                           | object                      | opciones de importación csv                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|              | range                     | object                      | Rango de celdas que contiene la primera celda donde se escribirán los datos. Si el rango especificado no es un rango de celdas, sólo se utiliza la primera celda del rango.                                                                                                                                                                                                                                                                                                                         |
|              | rowDelimiter              | text                        | Delimitador de línea. Si no está presente, el delimitador es determinado automáticamente por 4D.                                                                                                                                                                                                                                                                                                                                                                                                    |
|              | columnDelimiter           | text                        | Delimitador de columna. Por defecto: ","                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sjsOptions   |                           | object                      | opciones para la importación de sjs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|              | calcOnDemand              | boolean                     | Si se calculan las fórmulas sólo cuando se solicitan, por defecto es false.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|              | dynamicReferences         | boolean                     | Si calcular funciones con referencias dinámicas, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|              | fullRecalc                | boolean                     | Si calcular después de cargar los datos json, false por defecto.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|              | includeFormulas           | boolean                     | Si se incluyen las fórmulas al cargar, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|              | includeStyles             | boolean                     | Si se incluyen los estilos al cargar, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|              | includeUnusedStyles       | boolean                     | Si se incluyen los estilos de nombre no utilizados al convertir excel xml a json, por defecto es true.                                                                                                                                                                                                                                                                                                                                                                                                              |
|              | openMode                  | integer                     | <li>0 (normal): modo abierto normal, sin perezoso (lazy) e incremental. When opening file, UI and UI event could be refreshed and responsive at specific time points.</li><li>1 (lazy): modo de apertura lazy. Al abrir el archivo, sólo se cargará directamente la hoja activa. Las demás hojas sólo se cargarán cuando se vayan a utilizar.</li><li>2 (incremental): modo abierto incremental. Al abrir un archivo, la interfaz de usuario y el evento de interfaz de usuario podrían actualizarse y responder directamente.</li> |
| excelOptions |                           | object                      | Sólo Excel (opcional) - Opciones para exportar Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|              | includeStyles             | boolean                     | Si se incluye el estilo al importar, por defecto true.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|              | includeFormulas           | boolean                     | Si se incluye la fórmula al importar, por defecto true.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|              | frozenColumnsAsRowHeaders | boolean                     | Whether to treat the frozen columns as row headers when importing, default false.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|              | frozenRowsAsColumnHeaders | boolean                     | Whether to treat the frozen rows as column headers when importing, default false.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|              | fullRecalc                | boolean                     | Si calcular después de cargar los datos json, false por defecto.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|              | dynamicReferences         | boolean                     | Whether to calculate functions with dynamic reference, default true.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|              | calcOnDemand              | boolean                     | Whether to calculate formulas only when they are demanded, default false.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|              | includeUnusedStyles       | boolean                     | Si incluir el estilo de nombre no utilizado al convertir excel xml al json, default true.                                                                                                                                                                                                                                                                                                                                                                                                                           |
|              | contraseña                | text                        | La contraseña para abrir el workbook.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|              | openMode                  | text                        | The open mode of normal, lazy and incremental. Por defecto es normal.                                                                                                                                                                                                                                                                                                                                                                                                                               |

:::note Notas

 - La importación de archivos en formatos .xslx, .csv y .sjs es **asíncrona**. Con estos formatos, debe utilizar el atributo `formula` si desea iniciar una acción al final del procesamiento del documento.
 - Al importar un archivo con formato Microsoft Excel a un documento 4D View Pro, algunos parámetros pueden perderse. Puede verificar su configuración con [esta lista de SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
 - Para más información sobre el formato CSV y los valores separados por delimitadores en general, ver [este artículo en Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)
 - Se recomienda utilizar el objeto *excelOptions* al importar en formato ".xlsx". Make sure to not mix this object with legacy first level property *password* to avoid potiental issues.
 - La función callback especificada en el atributo `formula` se activa después de que todas las [funciones personalizadas 4D](../formulas.md#4d-functions) dentro del contenido importado hayan completado sus cálculos. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved.

:::

## Ejemplo 1

Desea importar un documento 4D View Pro por defecto almacenado en el disco, al abrir el formulario:

```4d
var $docPath : text
If(Form event code=On VP Ready) //Área 4D View Pro cargada y lista
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

## Ejemplo 2

Desea importar un documento Microsoft Excel protegido por contraseña a un área 4D View Pro:

```4d
	//Import code
var $o:={}
$o.formula:=Formula(myImport)
$excelOptions:={includeStyles:false;includeFormulas:true;password:"excel123"}
$o.excelOptions:=$excelOptions
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfile.xlsx";$o)
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

## Ejemplo 3

Quiere importar un archivo `.txt` que utiliza una coma (",") como delimitador:

![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv.png)

```4d
var $params:={}
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Este es el resultado:
![example-import-csv](../../assets/en/ViewPro/vp-import-document-csv-result.png)

## Ver también

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP NEW DOCUMENT](vp-new-document.md)<br/>
[4D View Pro: Excel import/export update (blog post)](https://blog.4d.com/4d-view-pro-excel-import-export-update)

