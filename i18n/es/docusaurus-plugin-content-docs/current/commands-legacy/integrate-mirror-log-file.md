---
id: integrate-mirror-log-file
title: INTEGRATE MIRROR LOG FILE
slug: /commands/integrate-mirror-log-file
displayed_sidebar: docs
---

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Syntax-->**INTEGRATE MIRROR LOG FILE** ( *rutaAcceso* ; *numOperacion* {; *modo* {; *objError*}} )<!-- END REF-->
<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaAcceso | Text | &#8594;  | Nombre o ruta de acceso del archivo de historial a integrar |
| numOperacion | Real | &#8594;  | Número de la última operación integrada |
| &#8592; | Nuevo número de la última operación integrada o -2 para integrar todo el archivo |
| modo | Integer | &#8594;  | 0=modo estricto (modo por defecto), 1=modo auto reparar |
| objError | Object | &#8592; | Operaciones faltantes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Summary-->**Nota preliminar:** este comando sólo funciona con 4D Server.<!-- END REF--> Únicamente puede ejecutarse vía el comando [Execute on server](execute-on-server.md) o en un procedimiento almacenado.

El **INTEGRATE MIRROR LOG FILE**  permite integrar el archivo de historial designado por *rutaAcceso* en una base 4D Server, a partir de la operación *numOperacion*.

El comando acepta integrar todo archivo de historial en la base, incluso si no corresponde al archivo de datos. Este comando está destinado específicamente para su uso en el contexto de una base espejo.

**Nota:** a partir de 4D v14, es posible utilizar un archivo de historial en el contexto de una base "espejo": la opción "Utilizar archivo de historial" ahora se puede seleccionar en las propiedades de una base 4D Server utilizada como espejo lógico, por tanto, permitiendo la implementación de servidores espejo en serie (ver la sección *Configurar un espejo lógico* en el manual 4D Server).  
  
A diferencia del comando *\_o\_INTEGRATE LOG FILE*, el comando **INTEGRATE MIRROR LOG FILE** no sustituye el archivo de historial integrado al historial actual al ejecutarse: el archivo de historial de la base continua siendo utilizado. En consecuencia, cualquier cambio realizado durante la integración se guarda en el archivo de historial actual.

En *rutaAcceso*, pase una ruta absoluta o relativa a la carpeta de la base. Si pasa una cadena vacía en este parámetro, aparecerá una caja de diálogo estándar de apertura de archivo para que pueda designar el archivo a integrar. Si se cancela esta caja de diálogo, ningún archivo se integra y la variable sistema *OK* toma el valor 0.

En la variable *numOperacion*, pase el número de la última operación integrada, de manera que la integración comience en la siguiente operación. Después de la integración, el valor de la variable *numOperacion*, se actualiza con el número de la última operación integrada. Esto le permite seguir adelante con posteriores integraciones del archivo de historial, utilizando **\[** **#current\_title\]**. Pase -2 en la variable a integrar todas las operaciones en el archivo de historial.

**Nota de compatibilidad:* en las versiones de 4D anteriores a* **la v15  R4, el parámetro* **numOperacion* *era opcional; Sin embargo, desde ahora en adelante, si se omite el parámetro* **operationNum,* *se genera un error. Para restablecer el funcionamiento original de su antiguo código, puede simplemente pasar -2 en el parámetro* **numOperacion.* 

En *modo*, pase el modo de integración a activar. Puede utilizar una de las siguientes constantes que se encuentran en el tema "*Backup*":

| Constante        | Tipo         | Valor | Comentario                                                                                                        |
| ---------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------- |
| Auto repair mode | Entero largo | 1     | Utilizar el modo flexible con las acciones de reparación automática y llenar el parámetro *errObject* (si lo hay) |
| Strict mode      | Entero largo | 0     | Utilice el modo de integración estricto (por defecto)                                                             |

* Strict mode: en este modo, tan pronto como se produce un error durante la integración, se detiene y hay que utilizar el CSM para rastrear el error. Este modo de seguridad se utiliza de forma predeterminada y se recomienda en la mayoría de los casos.
* Auto repair mode: en este modo, cuando un error no crítico se produce, se omite y continúa la integración. Si pasa el parámetro *obj* *Error*, cada error se registra y se pueden analizar después.  
Los casos de errores no críticos son:  
   * El archivo de historial solicita agregar un registro, pero este registro ya existe en los datos.  
   Acción de reparación: 4D actualiza el registro.  
   * El archivo de historial solicita actualizar un registro, pero aún no existe este registro.  
   Acción de reparación: 4D añade el registro.  
   * El archivo de historial solicita eliminar un registro, pero no existe este registro.  
   Acción de reparación: 4D no hace nada.

**Nota**: en modo estricto (modo por defecto), la integración se detendrá en el primer error encontrado. En este caso, si desea continuar con la integración tendrá que utilizar el CSM.

Cuando se produce una de las anomalías en modo auto reparación, el registro en cuestión queda automáticamente "reparado" y la operación relacionada se registra en el parámetro *obj* *Error*.   
Una vez finalizada la ejecución, el parámetro *obj* *Error* lista todos los registros reparados. Contiene un único array de objetos denominado "operaciones" construido de la siguiente manera:

```json
{"operations":    [        {            "operationType":24,            "operationName":"Create record",            "operationNumber":2,            "contextID":48,            "timeStamp":"2015-07-10T07:53:02.413Z",            "dataLen":24,            "recordNumber":0,            "tableID":"F4CXXXXX",            "tableName":"Customers",            "fields": {                "1": 9,                "2": "test value",                "3": "2003-03-03T00:00:00.000Z",                "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",                "8": "BlobID: 2"              }        },        {...}     ]
```

**Atención:** el modo de reparación auto debe ser utilizado en casos específicos, ya que pasa por alto las funcionalidades de comprobación de integridad de datos internas de 4D. Se puede utilizar, por ejemplo, cuando un archivo de registro intermedio se ha perdido o dañado y que desea recuperar tantas operaciones como sea posible. En cualquier caso, es necesario prestar atención a la integridad de los datos específicos al utilizar este modo.

##### 

La lista actual de propiedades disponibles depende del tipo de operación (por ejemplo: crear registros, eliminar registros, modificar registros, etc.). Estas son las principales propiedades:

* *operationType*: código interno para la operación
* *operationName*: tipo de operación, por ejemplo, "crear registro", "modificar registro"
* *operationNumber*: número interno de la operación en el archivo de registro
* *contextID*: ID del contexto de ejecución; el contexto se detalla en la sección *extraData*
* *timeStamp*: timestamp de la operación en el archivo de historial
* *dataLen*: tamaño interno de los datos
* *recordNumber*: número de registro internor
* *tableID*: ID interno de la tabla
* *tableName*: nombre de la tabla
* *fields*: objeto que contiene la lista de números de campo junto con sus valores. Se registran todos los campos de la tabla.  
En el caso de los valores Blob o imágenes, se ofrece información diferente en función de su lugar de almacenamiento:  
   * Si el Blob o la imagen están almacenados dentro del archivo de datos, la propiedad será "BlobID: "+ un número de Blob interno, por ejemplo "BlobID:1"  
   * Si el Blob o la imagen se almacena fuera del archivo de datos, la propiedad será "BlobPath:" + la ruta de acceso a los datos, por ejemplo "BlobPath: Tabla 1/Campo 6/Datos\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData*: datos del contexto usuario, incluidos el nombre y el ID del usuario, el nombre y el ID de la tarea, el nombre de la máquina local y la versión cliente.
* *sequenceNumber*: número de secuencia con auto incrementar.
* *primaryKey*: valor de la llave primaria.

#### Ejemplo 

Usted desea integrar un archivo de historial en el servidor espejo en modo de reparación auto:

```4d
  //a ejecutar en el servidor
 var $err : Object
 var $num : Integer //--2 para integrar todas las operaciones
 INTEGRATE MIRROR LOG FILE("c:\\mirror\\logNew.journal";$num;Auto repair mode;$err)
```

#### Variables y conjuntos del sistema 

Si la integración se efectúa correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0\. 

#### Ver también 

  
[LOG FILE TO JSON](log-file-to-json.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1312 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


