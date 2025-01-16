---
id: verify-data-file
title: VERIFY DATA FILE
slug: /commands/verify-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY DATA FILE.Syntax-->**VERIFY DATA FILE** ( *rutaEstructura* ; *rutaDatos* ; *objetos* ; *opciones* ; *metodo* {; *arrayTablas* {; *arrayCampos*}} )<!-- END REF-->
<!--REF #_command_.VERIFY DATA FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaEstructura | Text | &#8594;  | Ruta de acceso al archivo de estructura de la base a verificar |
| rutaDatos | Text | &#8594;  | Ruta de acceso del archivo de datos de la base a verificar |
| objetos | Integer | &#8594;  | Objetos a verificar |
| opciones | Integer | &#8594;  | Opciones de verificación |
| metodo | Text | &#8594;  | Nombre del método 4D de retrollamada |
| arrayTablas | Integer array | &#8594;  | Números de las tablas a verificar |
| arrayCampos | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Números de los índices a verificar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VERIFY DATA FILE.Summary-->El comando VERIFY DATA FILE efectúa una verificación estructural de los objetos contenidos en el archivo de datos 4D designado por *rutaEstructura* y *rutaDatos*.<!-- END REF-->para mayor información sobre el proceso de verificación de datos, consulte el Manual de Diseño. *rutaEstructura* designa el archivo de estructura (compilado o no) asociado con el archivo de datos a verificar. Puede tratarse del archivo de estructura abierto o de cualquier otro archivo de estructura. Usted debe pasar un nombre de ruta completo, expresado con la sintaxis del sistema operativo. También puede pasar una cadena vacía, en este caso aparece una caja de diálogo estándar de apertura de archivos que permite al usuario designar el archivo de estructura a utilizar.

*rutaDatos* designa un archivo de datos 4D (.4DD). Debe corresponder al archivo de estructura definido por el parámetro *rutaEstructura*. Atención, usted puede designar el archivo de estructura actual pero el archivo de datos no debe ser el archivo actual (abierto). Para verificar el archivo de datos está abierto actualmente, utilice el comando [VERIFY CURRENT DATA FILE](verify-current-data-file.md). Si intenta verificar el archivo de datos actual con el comando VERIFY DATA FILE, se genera un error.

El archivo de datos designado se abre en modo solo lectura. Debe asegurarse de que ninguna aplicación acceda a este archivo en modo escritura, de lo contrario los resultados de la verificación podrían ser distorsionados.

En el parámetro *rutaDatos*, puede pasar una cadena vacía, un nombre de archivo o una ruta de acceso completa, expresada en la sintaxis del sistema operativo. Si pasa una cadena vacía, aparecerá la caja de diálogo estándar de apertura de archivos de manera que el usuario puede especificar el archivo a revisar (note que en este caso, no es posible seleccionar el archivo de datos actual). Si pasa únicamente un nombre de archivo de datos, 4D lo buscará en el mismo nivel que el archivo de estructura especificado.

El parámetro *objetos* se utiliza para designar los tipos de objetos a verificar. Puede verificar dos tipos de objetos: registros e índices. Puede utilizar las siguientes constantes, que se encuentran en el tema "*Mantenimiento archivo de datos*”:

| Constante      | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                     |
| -------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Verify all     | Entero largo | 16    |                                                                                                                                                                                                                                                                                |
| Verify indexes | Entero largo | 8     | Esta opción verifica la consistencia física de los índices, sin enlace a los datos. Señala llaves inválidas pero no le permite detectar llaves duplicadas (dos índices que apuntan al mismo registro). Este tipo de error sólo puede detectarse con la opción Verificar todos. |
| Verify records | Entero largo | 4     |                                                                                                                                                                                                                                                                                |

Para verificar los registros y los índices, pase el total de Verify Records+Verify Indexes. El valor 0 (cero) también puede ser utilizado para obtener el mismo resultado. La opción Verify All realiza una verificación interna completa. Esta verificación es compatible con la creación de un historial.

El parámetro *opciones* se utiliza para definir las opciones de verificación. Las siguientes opciones están disponibles, accesibles vía las constantes del tema “*Mantenimiento archivo de datos*”:

| Constante               | Tipo         | Valor  | Comentario                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Do not create log file  | Entero largo | 16384  | Por lo general, este comando crea un archivo de historial en formato XML (consulte el final de la descripción del comando). Con esta opción, no se creará un archivo de historial.                                                                                                                                                                                            |
| Timestamp log file name | Entero largo | 262144 | Cuando esta opción se pasa, el nombre del archivo de historial generado contendrá la fecha y hora de su creación; como resultado, no reemplazará cualquier archivo de historial generado anteriormente. Por defecto, si no se pasa esta opción, los nombres de archivos de historial no son marcados con la fecha y hora y cada nuevo archivo generado sustituye al anterior. |

  
Generalmente, el comando VERIFY DATA FILE crea un archivo de historial en formato XML (por favor vaya al final de la descripción de este comando). Puede cancelar esta operación pasando esta opción. Para crear el archivo de historial, pase 0 en *opciones*. 

El parámetro *metodo* permite definir un método de retrollamada que será llamado regularmente durante la verificación. Si pasa una cadena vacía o un nombre de método invalido, este parámetro se ignora (no se llama el método). Cuando se llama, este método recibe hasta 5 parámetros en función de los objetos verificados y del tipo de evento que origina la llamada (ver la tabla de llamadas). Es imperativo declarar estos parámetros en el método:

| \- $1 | Entero largo | Tipo de mensaje (ver tabla) |
| ----- | ------------ | --------------------------- |
| \- $2 | Entero largo | Tipo de objeto              |
| \- $3 | Text         | Mensaje                     |
| \- $4 | Entero largo | Número de tabla             |
| \- $5 | Entero largo | Reservado                   |

La siguiente tabla describe el contenido de los parámetros en función del tipo de evento:

| **Evento**                  | **$1 (Entero largo)** | **$2 (Entero largo)** | **$3 (Texto)** | **$4 (Entero largo)** | **$5 (Entero largo)** |
| --------------------------- | --------------------- | --------------------- | -------------- | --------------------- | --------------------- |
| Mensaje                     | 1                     | 0                     | Progresión     | Porcentaje            | Reservado             |
| mensaje                     | hecho (0-100)         |                       |                |                       |                       |
| Fin de la verificación (\*) | 2                     | Tipo de objeto (\*\*) | Mensaje OK     | Tabla o índice        | Reservado             |
| prueba                      | número                |                       |                |                       |                       |
| Error                       | 3                     | Tipo de objeto (\*\*) | Texto de error | Tabla o índice        | Reservado             |
| mensaje                     | número                |                       |                |                       |                       |
| Fin de ejecución            | 4                     | 0                     | DONE           | 0                     | Reservado             |
| Advertencia                 | 5                     | Tipo de objeto (\*\*) | Texto de error | Tabla o índice        | Reservado             |
| mensaje                     | número                |                       |                |                       |                       |

(\*) El evento *Fin de la verificación* ($1=2) no se devuelve nunca cuando el modo de verificación es Verify All. Sólo se utiliza en modo Verify Records o Verify Indexes.  
(\*\*) *Tipo de objeto*: cuando un objeto se verifica, puede enviarse un mensaje "terminado" ($1=2), error ($1=3) o terminado ($1=5). El tipo de objeto devuelto en $2 puede ser uno de los siguientes:

* 0 = indeterminado
* 4 = registro
* 8 = índice
* 16 = objeto estructura (control preliminar del archivo de datos).

*Caso especial*: cuando $4 = 0 para $1=2, 3 ó 5, el mensaje no concierne a una tabla sino a un archivo de datos en su conjunto.

El método de retrollamada también debe retornar un valor en $0 (Entero largo), permitiendo controlar la ejecución de la operación:

* Si $0 = 0, la operación continúa normalmente
* Si $0 = -128, la operación se detiene sin que se genere error
* Si $0 = otro valor, la operación se detiene y el valor pasado en $0 se devuelve como número de error. Este error puede ser interceptado por un método de gestión de errores.

**Nota**: no es posible interrumpir la ejecución vía $0 luego de que el evento se haya generado *Fin de ejecución* ($4=1).

Dos arrays opcionales también pueden ser utilizados por este comando:

* El array *arrayTablas* contiene los números de las tablas cuyos registros van a ser verificados. Permite limitar la verificación de ciertas tablas. Si este parámetro no se pasa o si el array está vacío y el parámetro *objetos* contiene Verify Records, todas las tablas serán verificadas.
* El *arrayCampos* contiene los números de los campos indexados que deben ser verificados. Si este parámetro no se pasa o si el array está vacío y el parámetro *objetos* contiene Verify Indexes, todos los índices serán verificados. El comando ignora los campos que no están indexados. Si un campo contiene varios índices, todos son verificados. Si un campo forma parte de un índice compuesto, la totalidad del índice se verifica.  
Debe pasar un array 2D en *arrayCampos*. Para cada línea del array:  
\- El elemento {0} contiene el número de la tabla,  
\- Los otros elementos {1...x} contienen los números de los campos.

Por defecto, el comando VERIFY DATA FILE crea un archivo de historial en formato XML (si no ha pasado la opción Do not create log file, vea el parámetro *opciones*). Su nombre está basado en el archivo de estructura de la base actual y está ubicado en la carpeta **Logs** de esta base. Por ejemplo, para un archivo de estructura llamado “myDB.4db,” el archivo de historial se llamará “myDB\_Verify\_Log.xml.”   
Si ha pasado la opción Timestamp log file name, el nombre del archivo de historial incluye la fecha y la hora de su creación en la forma "AAAA-MM-DD HH-MM-SS", que nos da, por ejemplo: “myDB\_Verify\_Log\_2015-09-27 15-20-35.xml”. Esto significa que cada nuevo archivo de historial no reemplaza al anterior, pero podría requerir acción manual posterior para eliminar archivos innecesarios.  
Independientemente de la opción seleccionada, tan pronto como se genera un archivo de historial, su ruta se devuelve en la variable del sistema *Document* después de la ejecución del comando.

#### Ejemplo 1 

Verificación simple de los datos y de los índices:

```4d
 VERIFY DATA FILE($NomEstructura;$NomData;Verify indexes+Verify records;Do not create log file;"")
```

#### Ejemplo 2 

Verificación completa con archivo de historial:

```4d
 VERIFY DATA FILE($NomEstructura;$NomData;Verify All No Callback;0;"")
```

#### Ejemplo 3 

Verificación de los registros únicamente:

```4d
 VERIFY DATA FILE($NomEstructura;$NomData;Verify records;0;"")
```

#### Ejemplo 4 

Verificación de los registros de las tablas 3 y 7 únicamente:

```4d
 ARRAY LONGINT($arrTableNums;2)
 $arrTableNums{1}:=3
 $arrTableNums{2}:=7
 VERIFY DATA FILE($StructName;$DataName;Verify records;0;"FollowScan";$arrTableNums)
```

#### Ejemplo 5 

Verificación de índices específicos (índice del campo 1 de la tabla 4 e índice de los campos 2 y 3 de la tabla 5):

```4d
 ARRAY LONGINT($arrTablaNums;0) //no utilizado pero obligatorio
 ARRAY LONGINT($arrIndex;2;0) //2 líneas (columnas añadidas luego)
 $arrIndex{1}{0}:=4 // número de tabla en elemento 0
 APPEND TO ARRAY($arrIndex{1};1) //número del primer campo a verificar
 $arrIndex{2}{0}:=5 // número de la tabla en elemento 0
 APPEND TO ARRAY($arrIndex{2};2) // número del primer campo a verificar
 APPEND TO ARRAY($arrIndex{2};3) // número del segundo campo a verificar
 VERIFY DATA FILE($NomEstructura;$NomData;Verify indexes;0;"FollowScan";$arrTablaNums;$arrIndex)
```

#### Ejemplo 6 

Verifique el archivo de datos, cree y muestre el archivo de registro:

```4d
 VERIFY DATA FILE(Structure file;Data file;Verify all;0;"")
 SHOW ON DISK(File(Verification log file).platformPath)
```

#### Variables y conjuntos del sistema 

Si el método de retrollamada no existe, la verificación no se efectúa, se genera un error y la variable sistema OK toma el valor 0\. Si un archivo de historial se ha generado, su ruta completa se devuelve en la variable sistema Document.  

#### Ver también 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 939 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document, error |


