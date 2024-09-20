---
id: vp-export-document
title: VP EXPORT DOCUMENT
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                             |
| ----------- | ------------------------------------------ |
| 20 R2       | Soporte de documentos .sjs |

</details>

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->

**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| filePath   | Text   | -> | Ruta de acceso del documento                 |                  |
| paramObj   | Object | -> | Opciones de exportación                      | <!-- END REF --> |

#### Descripción

El comando `VP EXPORT DOCUMENT` <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exporta el objeto de 4D View Pro adjunto al área 4D View Pro *vpAreaName* a un documento en disco según los parámetros *filePath* y *paramObj*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *filePath*, pase la ruta de destino y el nombre del documento a exportar. Si no especifica una ruta, el documento se guardará en el mismo nivel que la carpeta Project.

Puede especificar el formato del archivo exportado incluyendo una extensión después del nombre del documento:

- 4D View Pro (".4vp")
- Microsoft Excel (".xlsx")
- PDF (".pdf")
- CSV (".txt", o ".csv")
- [Documento SpreadJS](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) (".sjs")

Si no se incluye la extensión, pero se especifica el formato en *paramObj*, el archivo exportado tendrá la extensión que corresponda al formato, excepto para el formato CSV (en este caso no se añade ninguna extensión).

El parámetro opcional *paramObj* le permite definir múltiples propiedades para el objeto 4D View Pro exportado y lanzar un método de retrollamada cuando la exportación haya finalizado.

| Propiedad            | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format               | text                        | (opcional) Cuando está presente, designa el formato del archivo exportado: ".4vp" (por defecto), ".csv", ".xlsx", ".pdf" o ".sjs". Puede utilizar las siguientes constantes<li>:`vk 4D View Pro format``vk</li><li> csv format``vk</li><li> MS Excel format``vk</li><li> pdf format``vk</li><li> sjs format`</li>4D añade la extensión adecuada al nombre del archivo si es necesario. Si el formato especificado no corresponde con la extensión en *filePath*, se añadirá al final de *filePath*. Si no se especifica un formato y no se da ninguna extensión en *filePath*, se utiliza el formato de archivo por defecto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| contraseña           | text                        | Sólo Microsoft Excel (opcional) - Contraseña utilizada para proteger el documento MS Excel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| formula              | 4D.Function | Método de retrollamada que se lanzará cuando la exportación haya finalizado. La utilización de un método de retrollamada es necesaria cuando la exportación es asíncrona (que es el caso de los formatos PDF y Excel) si necesita que se ejecute algún código después de la exportación. El método retrollamada debe pasarse con el comando [`Formula`](../../API/FunctionClass.md#formula). Ver [Pasar un método de retrollamada (fórmula)](#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| valuesOnly           | boolean                     | Especifica que sólo los valores de las fórmulas (si las hay) serán exportados.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| includeFormatInfo    | boolean                     | True para incluir información de formato, false en caso contrario (por defecto es True). La información de formato es útil en algunos casos, por ejemplo, para una exportación a SVG. Por otro lado, poner esta propiedad en *false* permite reducir el tiempo de exportación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| includeBindingSource | boolean                     | Sólo 4DVP y Microsoft Excel. True (por defecto) para exportar los valores del contexto de datos actual como valores de celda en el documento exportado (los contextos de datos en sí no se exportan). False en caso contrario. El enlace de la celda siempre se exporta. Para la gestión de los contextos de datos y de las fusiones de celdas, ver [VP SET DATA CONTEXT](vp-set-data-context.md) y [VP SET BINDING PATH](vp-set-binding-path.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| sheetIndex           | number                      | PDF únicamente (opcional) - Índice de la hoja a exportar (empezando por 0). -2=todas las hojas visibles (**por defecto**), -1=sólo la hoja actual                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| pdfOptions           | object                      | Sólo PDF (opcional) - Opciones para la exportación de pdf <p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>creator</td><td>text</td><td>nombre de la aplicación que creó el documento original a partir del cual se convirtió.</td></tr><tr><td>title</td><td>text</td><td>título del documento.</td></tr><tr><td>author</td><td>text</td><td>nombre de la persona que ha creado el documento.</td></tr><tr><td>keywords</td><td>text</td><td>palabras clave asociadas al documento.</td></tr><tr><td>subject</td><td>text</td><td>asunto del documento.</td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| csvOptions           | object                      | Sólo CSV (opcional) - Opciones para la exportación csv <p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>range</td><td>object</td><td>Objeto rango de celdas</td></tr><tr><td>rowDelimiter</td><td>text</td><td>Delimitador de fila. Por defecto: <code>"\r\n"</code></td></tr><tr><td>columnDelimiter</td><td>text</td><td>Delimitador de columna. Por defecto: <code>","</code></td></tr></table></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| sjsOptions           | object                      | SJS solo (opcional) - Opciones para exportar a sjs <p><table><tr><th>Propiedad</th><th>Tipo</th><th>Descripción</th></tr><tr><td>includeAutoMergedCells</td><td>boolean</td><td>si se deben incluir las celdas fusionadas automáticamente, el valor predeterminado es false.</td></tr><tr><td>includeBindingSource</td><td>boolean</td><td>si se debe incluir la fuente de datos, el valor predeterminado es true.</td></tr><tr><td>includeCalcModelCache</td><td>boolean</td><td>si se debe incluir los datos adicionales de cálculo. Puede ser más rápido al abrir el archivo con esos datos, el valor predeterminado es false.</td></tr><tr><td>includeEmptyRegionCells</td><td>boolean</td><td>si se deben incluir celdas vacías (celdas sin datos o solo con estilo) fuera del rango de datos utilizado, el valor predeterminado es true.</td></tr><tr><td>includeFormulas</td><td>boolean</td><td>si se deben incluir las fórmulas, el valor predeterminado es true.</td></tr><tr><td>includeStyles</td><td>boolean</td><td>si se debe incluir el estilo, el valor predeterminado es true.</td></tr><tr><td>includeUnusedNames</td><td>boolean</td><td>si se deben incluir los nombres personalizados no utilizados, el valor predeterminado es true.</td></tr><tr><td>saveAsView</td><td>boolean</td><td>si se debe aplicar la cadena de formato a los valores exportados, el valor predeterminado es false.</td></tr></table></p> |
| `\<customProperty>` | any                         | Toda propiedad personalizada que estará disponible a través del parámetro $3 en el método de retrollamada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**Notas sobre el formato Excel**:

- Al exportar un documento 4D View Pro a un archivo con formato Microsoft Excel, pueden perderse algunos parámetros. Por ejemplo, los métodos y fórmulas 4D no son soportados por Excel. Puede verificar otras configuraciones con [esta lista de SpreadJS](https://developer.mescius.com/spreadjs/docs/excelimpexp/excelexport).
- La exportación en este formato se ejecuta de forma asíncrona, utilice la propiedad `formula` del *paramObj* para el código a ejecutar después de la exportación.

**Notas sobre el formato PDF**:

- Al exportar un documento 4D View Pro en PDF, las fuentes utilizadas en el documento se integran automáticamente en el archivo PDF. Sólo se pueden integrar las fuentes OpenType (archivos .OTF o .TTF) que tengan un tabla Unicode. Si no se encuentra un archivo de fuentes válido para una fuente, se utiliza una fuente por defecto.
- La exportación en este formato se ejecuta de forma asíncrona, utilice la propiedad `formula` del *paramObj* para el código a ejecutar después de la exportación.

**Notas sobre el formato CSV**:

- Al exportar un documento 4D View Pro al formato CSV, es posible que se pierdan algunos parámetros, ya que sólo se guardan el texto y los valores.
- Todos los valores se guardan como cadenas entre comillas. Para más información sobre valores separados por delimitadores, ver [este artículo en Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values).
- La exportación en este formato se ejecuta de forma asíncrona, utilice la propiedad `formula` del *paramObj* para el código a ejecutar después de la exportación.

**Notas sobre el formato de archivo SpreadJS**:

- Los [archivos SpreadJS](https://developer.mescius.com/spreadjs/docs/features/spreadjs-file-format) son archivos comprimidos.
- La exportación en este formato se ejecuta de forma asíncrona, utilice la propiedad `formula` del *paramObj* para el código a ejecutar después de la exportación.

Una vez finalizada la operación de exportación, `VP EXPORT DOCUMENT` activa automáticamente la ejecución del método definido en la propiedad *formula* del *paramObj*, si se usa.

#### Pasar un método retrollamada (fórmula)

Cuando se incluye el parámetro opcional *paramObj*, el comando le permite utilizar el comando [`Formula`](../../API/FunctionClass.md#formula) para llamar a un método 4D que se ejecutará una vez finalizada la exportación. El método de retrollamada recibirá los siguientes valores en parámetros locales:

| Parámetros |                               | Tipo    | Descripción                                                       |
| ---------- | ----------------------------- | ------- | ----------------------------------------------------------------- |
| param1     |                               | text    | El nombre del objeto de área 4D View Pro                          |
| param2     |                               | text    | Ruta de acceso del objeto 4D View Pro exportado                   |
| param3     |                               | object  | Una referencia al *paramObj* del comando                          |
| param4     |                               | object  | Un objeto devuelto por el método con un mensaje de estado         |
|            | .success      | boolean | True si exporta con éxito, de lo contrario False. |
|            | .errorCode    | integer | Código de error.                                  |
|            | .errorMessage | text    | Mensaje de error.                                 |

#### Ejemplo 1

Quiere exportar el contenido del área "VPArea" a un documento 4D View Pro en el disco:

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP se guarda en su disco
```

#### Ejemplo 2

Quiere exportar la hoja actual en PDF:

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```

#### Ejemplo 3

Desea exportar un documento 4D View Pro en formato ".xlsx" y llamar a un método que inicie Microsoft Excel con el documento abierto una vez completada la exportación:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vk MS Excel format //".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

Método ***AfterExport***:

```4d
 #DECLARE($areaName : Text ; $filePath : Text ; $params : Object ; $status : Object )

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### Ejemplo 4

Quiere exportar la hoja actual a un archivo `.txt` con valores separados por "|":

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv.png)

```4d
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

Aquí está el resultado:

![example-export-csv](../../assets/en/ViewPro/vp-export-document-csv-result.png)

#### Ver también

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP IMPORT DOCUMENT](vp-import-document.md)<br/>
[VP Print](vp-print.md)
