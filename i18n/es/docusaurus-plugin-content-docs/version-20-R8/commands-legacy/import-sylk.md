---
id: import-sylk
title: IMPORT SYLK
slug: /commands/import-sylk
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT SYLK.Syntax-->**IMPORT SYLK** ( {*tabla* ;} *doc* )<!-- END REF-->
<!--REF #_command_.IMPORT SYLK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual importar los datos, o Tabla por defecto, si se omite |
| doc | Text | &#8594;  | Documento SYLK a importar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.IMPORT SYLK.Summary-->El comando IMPORT SYLK lee los datos de *documento*, un documento SYLK Windows o Macintosh, y los escribe en *tabla* creando nuevos registros.<!-- END REF-->

La operación de importación se realiza por intermedio del formulario de entrada actual. La operación de importación lee los campos y las variables en función del plano de los objetos en el formulario de entrada. Por esta razón, debe ser muy cuidadoso en cuanto al orden de los objetos texto (campos y variables) en el formulario. El primer objeto en el cual los datos serán importados debe estar al fondo del formulario, etc. Si el número de campos o variables en el formulario no corresponde al número de campos a importar, los campos extras son ignorados. Un formulario de entrada utilizado para importar no puede contener botones. Los objetos de subformulario son ignorados. 

**Nota:** una forma de asegurar que los datos se importen en los objetos correctos es seleccionar el objeto en el cual se debe importar el primer campo y moverlo al primer plano. Continúe moviendo los campos y variables al primer plano, en orden, asegurándose de que tenga un campo o variable para cada campo a importar.

Un evento On Validate se envía al método de formulario para cada registro que se importa. Utilice este evento para copiar los datos de las variables a los campos, si utiliza las variables en el formulario de exportación.

El parámetro *documento* puede incluir una ruta de acceso a los nombres de volúmenes y carpetas. Si pasa una cadena vacía, aparece la caja de diálogo estándar de apertura de archivos. Si el usuario cancela este diálogo, se cancela la operación de importación, y la variable sistema OK toma el valor 0.

Un termómetro de progreso aparece durante la importación. El usuario puede cancelar la operación haciendo clic en el botón Detener. Los registros que ya hayan sido importados no serán removidos si el usuario presiona el botón Detener. Si la importación termina con éxito, la variable sistema OK toma el valor 1\. Si ocurre un error o se interrumpe la operación, la variable sistema toma el valor 0\. El termómetro puede ocultarse con el comando [MESSAGES OFF](messages-off.md).

El comando utiliza por defecto el conjunto de caracteres UTF-8\. Los documento en formato SYLK utilizan por lo general el conjunto de caracteres ISO-8859-1, puede ser necesario utilizar el comando [USE CHARACTER SET](use-character-set.md)  para definir el conjunto de caracteres apropiado.

Durante la utilización de IMPORT SYLK, el delimitador de campos por defecto es el carácter de tabulación (código 9). El delimitador del registro por defecto es el retorno de carro (código 13). Puede modificar estos valores asignando nuevos valores a las dos *Variables sistema* *FldDelimit* y *RecDelimit*. El usuario puede cambiar estos valores en la caja de diálogo de exportación del entorno Diseño. Como los campos Texto pueden contener retornos de carro, sea cuidadoso si utiliza el retorno de carro como delimitador entre los campos a exportar.

#### Ejemplo 

El siguiente ejemplo importa datos de un documento SYLK. El método comienza por definir el formulario de entrada de manera que los datos sean importados por el formulario correcto, luego realiza la importación:

```4d
 FORM SET INPUT([Personas];"Importar")
 IMPORT SYLK([Personas];"Nuevas_Personas.slk") // Importar del documento “Nuevas_Personas.slk”
```

#### Variables y conjuntos del sistema 

OK toma el valor 1 si la importación termina con éxito; de lo contrario, toma el valor 0.

#### Ver también 

[EXPORT SYLK](export-sylk.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT TEXT](import-text.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 87 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


