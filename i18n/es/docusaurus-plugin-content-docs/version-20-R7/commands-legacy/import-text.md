---
id: import-text
title: IMPORT TEXT
slug: /commands/import-text
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT TEXT.Syntax-->**IMPORT TEXT** ( {*tabla* ;} *doc* )<!-- END REF-->
<!--REF #_command_.IMPORT TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual importar datos, o Tabla por defecto, si se omite |
| doc | Text | &#8594;  | Documento texto a importar datos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.IMPORT TEXT.Summary-->El comando IMPORT TEXT lee los datos de *documento*, un documento texto Windows o Macintosh, y los escribe en *tabla* creando nuevos registros para esa tabla.<!-- END REF-->

La operación de importación se efectúa a través del formulario de entrada actual. La operación de importación lee los campos y variables en función de las capas de objetos en el formulario de entrada. Por esta razón, debe ser muy cuidadoso en cuanto al orden de los objetos (campos y variables) en el formulario. El primer objeto en el cual los datos serán importados debe estar al fondo del formulario, etc. Si el número de campos o variables en el formulario no corresponde al número de campos a importar, los campos extras son ignorados. Un formulario de entrada utilizado para importar no puede contener botones. Los objetos de subformulario son ignorados.

**Nota:** una manera de asegurarse de que los datos sean importados en el objeto correcto es seleccionar el objeto en el cual será importado el primer campo y moverlo al primer plano. Continúe moviendo los campos y variables al primer plano en orden, asegurándose de que tenga un campo o variable para cada campo a importar. 

El evento On Validate es enviado al método de formulario para cada registro importado. Utilice este evento para copiar los datos de las variables en los campos, si utiliza variables en el formulario de importación.

El parámetro *documento* puede incluir una ruta de acceso a los nombres de los volúmenes y carpetas. Si pasa una cadena vacía, aparece la caja de diálogo estándar de apertura de archivos. Si el usuario cancela este diálogo, la operación de importación se cancela, y la variable sistema OK toma el valor 0.

Un termómetro de progreso aparece durante la importación. El usuario puede cancelar la operación haciendo clic en el botón Detener. Los registros que ya han sido importados no se eliminarán si el usuario presiona el botón Detener. Si la importación se completa con éxito, la variable sistema OK toma el valor 1\. En caso de error o si la operación se interrumpe, la variable OK toma el valor 0\. El termómetro puede ocultarse con el comando [MESSAGES OFF](messages-off.md).

El comando utiliza por defecto el conjunto de caracteres UTF-8\. Usted puede utilizar el comando [USE CHARACTER SET](use-character-set.md) para modificar este conjunto de caracteres.

Durante la utilización de IMPORT TEXT, el delimitador de campos por defecto es el carácter de tabulación (code 9). El delimitador de registros por defecto es el retorno de carro (code 13). Puede cambiar estos valores por defecto asignando nuevos valores a las *Variables sistema*: *FldDelimit* y *RecDelimit*. El usuario puede cambiar los valores por defecto en la caja de diálogo de importación del entorno Diseño. Los campos texto pueden contener retornos de carro, por lo tanto, tenga cuidado cuando utilice como delimitador un retorno de carro si está importando campos texto. 

#### Ejemplo 

El siguiente ejemplo importa datos de un documento texto. El método primero define el formulario de entrada de manera que los datos sean importados al formulario correcto, cambia el delimitador de variables 4D, luego efectúa la importación:

```4d
 FORM SET INPUT([Personas];"Importar")
 FldDelimit:=27 // Definir carácter delimitador de campos: Escape
 RecDelimit:=10 // Definir carácter delimitador de registros: Line Feed
 IMPORT TEXT([Personas];"Nuevas_Personas.txt") // Importación del documento “Nuevas_Personas.txt”
```

#### Variables y conjuntos del sistema 

OK toma el valor 1 si la importación termina con éxito; de lo contrario, toma el valor 0.

#### Ver también 

[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 168 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


