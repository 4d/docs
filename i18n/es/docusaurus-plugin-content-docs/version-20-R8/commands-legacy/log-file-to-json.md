---
id: log-file-to-json
title: LOG FILE TO JSON
slug: /commands/log-file-to-json
displayed_sidebar: docs
---

<!--REF #_command_.LOG FILE TO JSON.Syntax-->**LOG FILE TO JSON** ( *rutaCarpetaDest* {; *tamMax* {; *rutaHist* {; *atribCampo*}}} )<!-- END REF-->
<!--REF #_command_.LOG FILE TO JSON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaCarpetaDest | Text | &#8594;  | Ruta de acceso de la carpeta de destino del archivo guardado |
| tamMax | Integer | &#8594;  | Tamaño máximo del archivo JSON a crear (bytes) |
| rutaHist | Text | &#8594;  | Ruta de acceso del archivo de historial a exportar; utilizar el historial actual si se omite |
| atribCampo | Integer | &#8594;  | Atributo de descripción del campo: 1 = utilizar número(por defecto), 2 = utilizar nombre |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LOG FILE TO JSON.Summary-->El comando **LOG FILE TO JSON** guarda en formato JSON el archivo de historial actual o todo archivo de historial especificado.<!-- END REF-->

Una vez un historial (archivo binario) se guarda en JSON, su contenido puede ser leído e interpretado por el administrador de la base o por cualquier usuario con el fin de analizar los eventos de la base, por ejemplo.

En *rutaCarpetaDest*, pase la ruta de la carpeta en la que desea almacenar el archivo JSON. Este archivo se llama **JournalExport.json**.

De forma predeterminada, el tamaño máximo del archivo JSON exportada es de 10 MB. Cuando se alcanza este tamaño, el archivo se cierra y se crea un nuevo archivo. Limitar el tamaño de cada archivo JSON reduce los requerimientoos de memoria para el análisis de los archivos. Puede cambiar el tamaño máximo para el archivo exportado definiendo un valor (en bytes) en el parámetro *tamMax*. Pasar 0 restaura el tamaño predeterminado. Pasar un valor negativo elimina todo límite de tamaño. 

Por defecto, si se omite el parámetro *rutaHist*, el comando guarda el archivo de historial actual. Si desea exportar un archivo de historial específico, pase su ruta en el parámetro *rutaHist*. El archivo de historial debe ser un archivo con una extensión ".journal". Si desea exportar un archivo de historial archivado (extensión ".4bl"), es necesario convertirlo de antemano con el comando [RESTORE](restore.md). Puede pasar una cadena vacía ("") para mostrar el diálogo estándar de abrir archivo, lo que permite al usuario seleccionar el archivo de historial a guardar. La ruta del archivo de historial seleccionado se devuelve en la variable sistema **Document**.

**Nota:** cuando el comando guarda el archivo de historial actual, la base no está bloqueada. Las nuevas operaciones se pueden ejecutar mientras el archivo se escribe en el disco, estas operaciones no se incluirán en el archivo guardado.

Cuando exporta el archivo de historial actual, el parámetro *atribCampo* le permite definir cómo se describen en el atributo exportado: por número (por defecto), o por nombre. Puede pasar una de las siguientes constantes, que se encuentra en el tema "*Backup*":

| Constante                   | Tipo         | Valor | Comentario                                                                                  |
| --------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------- |
| Field attribute with name   | Entero largo | 2     | Los campos son identificados por su nombre. Ejemplo: {"Apellido":"Gómez"}                   |
| Field attribute with number | Entero largo | 1     | Los campos se identifican por su número (por defecto si se omite). Ejemplo: { "5":"Jones"}. |

**Nota:** cuando exporta un archivo de historial externo, los campos siempre se identifican por su número.

El archivo JSON guardado contiene todas las operaciones registradas en el historial, en forma de un array de objetos JSON. Cada objeto contiene varias propiedades que describen la operación. Ejemplo:

```json
[   {      "operationType":25,      "operationName":"Modify record",      "operationNumber":45,      "contextID":37,      "timeStamp":"2019-12-11T09:13:17.138Z",      "dataLen":42,      "recordNumber":4,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": "primkey5",            "2": -5,            "5": "data 25"        },      "primaryKey": "8"   },   {      "operationType":23,      "operationName":"Save seqnum",      "operationNumber":46,      "contextID":37,      "timeStamp":"2019-12-11T09:13:18.155Z",      "sequenceNumber":23,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem"    },   {      "operationType":24,      "operationName":"Create record",      "operationNumber":47,      "contextID":37,      "timeStamp":"2019-12-11T09:13:19.228Z",      "dataLen":570,      "recordNumber":7,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": 9,            "2": "test value",            "3": "2003-03-03T00:00:00.000Z",            "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "8": "BlobID: 2"       },      "extraData": {          "task_id": 1,          "user_name": "Vanessa Smith",          "user4d_alias": "Default 4D User",          "user4d_id": 1,          "host_name": "iMac-VSmith-0833",          "task_name": "Application process",          "client_version": -1610541776      },      "primaryKey": "9"   }]
```

**Nota:** si pasó Field attribute with **name** en el parámetro *atribCampo*, el objeto "fields" se verá así:  

```json
...      "fields": {            "ID": 9,            "Field_2": "test value",            "Date_Field": "2003-03-03T00:00:00.000Z",            "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "Field_8": "BlobID: 2"       },...
```

##### 

La lista actual de propiedades disponibles depende del tipo de operación (por ejemplo: crear registros, eliminar registros, modificar registros, crear Blob etc.). Estas son las principales propiedades:

* *tipoOperacion*: código interno para la operación
* *nomOperacion*: tipo de operación, por ejemplo, "crear registro", "modificar registro"
* *numOperacion*: número interno de la operación en el archivo de registro
* *contextID*: ID del contexto de ejecución
* *timeStamp*: timestamp de la operación en el archivo de registro
* *dataLong*: tamaño de los datos
* *numRegistro*: número de registro interno
* *IDtabla*: ID interno de la tabla
* *nomTabla*: nombre de la tabla
* *campos*: de valores de campo
* En el caso valores de tipo Blob o imagen, se suministra información diferente según su ubicación de almacenamiento:  
   * Si el Blob o la imagen se almacenan dentro del archivo de datos, la propiedad será "BlobID:"+ un número Blob interno, por ejemplo: "BlobID:1"  
   * Si el Blob o la imagen se almacenan fuera del archivo de datos, la propiedad será "BlobPath:" + la ruta para los datos, por ejemplo: "BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData*: datos de contexto del usuario, incluidos el nombre de usuario y el alias (\*), el nombre y la ID de la tarea, el nombre de la máquina local y la versión del cliente.
* numSecuencia: número de secuencia dentro de la secuencia de auto incrementar.
* *primaryKey*: valor de la llave primaria.

(\*) En las bases de datos proyecto, la propiedad "user4d\_id" no se devuelve.

#### Ejemplo 

Usted quiere guardar el archivo de historial actual en JSON:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs")
```

Usted quiere guardar un archivo de historial archivado en JSON:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs";0;"c:\\4Dv15\\Backup\\old_myDB.journal")
```

#### Variables y conjuntos del sistema 

El comando **LOG FILE TO JSON** modifica el valor de las variables sistema OK y Document: si el archivo JSON se guarda correctamente, OK toma el valor 1 y Document contiene la ruta del archivo de historial. Si ha pasa "" en el parámetro *rutaLog* y el usuario cancela el cuadro de diálogo de selección de archivos, OK toma el valor 0 y el Document contiene una cadena vacía. Si el usuario selecciona un archivo no válido, OK toma el valor 0 y Document contiene la ruta del archivo invalido.

#### Ver también 

  
[INTEGRATE MIRROR LOG FILE](integrate-mirror-log-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1352 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document |


