---
id: execute-on-server
title: Execute on server
slug: /commands/execute-on-server
displayed_sidebar: docs
---

<!--REF #_command_.Execute on server.Syntax-->**Execute on server** ( *proced* ; *pila* {; *nombre* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Execute on server.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proced | Text | &#8594;  | Procedimiento a ejecutar en el proceso |
| pila | Integer | &#8594;  | Tamaño de la pila en bytes |
| nombre | Text | &#8594;  | Nombre del proceso creado |
| param | Expression | &#8594;  | Paramétro(s) del procedimiento |
| * | Operador | &#8594;  | Proceso único |
| Resultado | Integer | &#8592; | Número de proceso para el proceso creado recientemente o de un proceso que está siendo ejecutado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Execute on server.Summary-->El comando Execute on server inicia un nuevo proceso en el equipo servidor (cuando se llama en Cliente/Servidor) o en el mismo equipo (si se llama en monousuario) y devuelve el número de este proceso.<!-- END REF-->

Utilice Execute on server para iniciar un procedimiento almacenado. Para mayor información sobre procedimientos almacenados, consulte la sección *Stored Procedures* en el manual de referencia de 4D Server.

Si llama Execute on server en un equipo cliente, el comando devuelve un número de proceso negativo. Si llama Execute on server en el equipo servidor, Execute on server devuelve un número de proceso positivo. Note que llamar [New process](new-process.md "New process") en el equipo servidor hace lo mismo que llamar Execute on server.

Si el proceso no se pudo crear (por ejemplo, si no hay suficiente memoria), Execute on server devuelve (0) y se genera un error. Puede interceptar este error utilizando un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

##### Método de proceso 

En *proced*, pase el nombre del método de proceso para el nuevo proceso. Una vez 4D haya definido el contexto para el nuevo proceso, comienza la ejecución de este método, el cual se convierte en el método de proceso. 

##### Pila de proceso 

El parámetro *pila*, permite indicar la cantidad de memoria asignada para la pila del proceso. Este valor representa el espacio en memoria utilizado para “apilar” las llamadas de métodos, las variables locales, los parámetros en subrutinas y los registros apilados.

* Pase 0 en *pila* para utilizar un tamaño de pila por defecto, conveniente para la mayoría de las aplicaciones (configuración recomendada).
* En algunos casos particulares, puede querer un valor personalizado. Se debe expresar en bytes. Esta configuración debe utilizarse con precaución, depende de la llamada de cadena de proceso y la plataforma.

**Nota:** la pila NO es la memoria total reservada para el proceso. Los procesos comparten memoria para los registros, las variables interproceso, etc. Un proceso utiliza igualmente la memoria extra para almacenar sus variables proceso. La pila contiene diferente información interna 4D; la cantidad de información guardada en la pila depende del número de llamadas a métodos anidados que el proceso emplee, el número de formularios que abrirá antes de cerrarlos y el número y tamaño de las variables locales utilizadas en cada llamada al método anidado.

##### Nombre del proceso 

 El nombre del nuevo proceso se pasa en *nombre*. En monousuario, este nombre aparecerá en la lista de procesos del entorno Diseño, y será devuelto por el comando [PROCESS PROPERTIES](process-properties.md "PROCESS PROPERTIES") cuando se aplica a este nuevo proceso. En cliente/servidor, este nombre aparecerá en azul en la lista de **Procedimientos almacenado**s de la ventana principal de 4D Server.

Puede omitir este parámetro; si lo hace, el nombre del proceso será una cadena vacía. 

**Advertencia:** a diferencia del comando Nuevo Proceso, no intente crear un proceso local colocándole el signo dólares (*$*) como prefijo al nombre mientras utiliza Execute on server. Funcionará correctamente en monousuario, porque Execute on server actúa como [New Process](new-process.md "New Process") en este entorno. Por otra parte, en Cliente/Servidor, esto generará un error.

##### Parámetros del método proceso 

 Puede pasar parámetros al método de proceso. Puede pasar parámetros de la misma forma como los pasaría a una subrutina. Sin embargo, hay una restricción, no puede pasar expresiones de tipo puntero. Igualmente, recuerde que los arrays no pueden ser pasados como parámetros a un método. Una vez comience la ejecución en el contexto del nuevo proceso, el método de proceso recibe los valores de los parámetros en *$1*, *$2*, etc.

**Nota:** si pasa parámetros al método de proceso, debe pasar el parámetro *nombre*; en este caso no se puede omitir. 

Si pasa un objeto ([C\_OBJECT](c-object.md)) o una colección ([C\_COLLECTION](c-collection.md)) como *param*, se envía una copia (y no una referencia) y el formulario JSON se utiliza en UTF-8 para el servidor. Si el objeto o colección contiene punteros, se envían sus valores desreferenciados y no los punteros mismos.

##### Parámetro opcional \* 

Si pasa este último parámetro le pide a 4D verificar primero si se está ejecutando un proceso con el mismo nombre que pasó en *nombre*. Si es así, 4D no inicia un nuevo proceso y devuelve el número del proceso con ese nombre.

#### Ejemplo 1 

Desea registrar cierta información desde el lado remoto en un archivo de texto en la máquina del servidor.

Ejecuta el método con información local como parámetros en una máquina remota:

```4d
 $process:=Execute on server("WriteLog";0;"WriteLogFile";Current user;String(Current date);String(Current time))
```

El método WriteLog se ejecutará en el servidor. Contiene, por ejemplo:

```4d
 var $1;$2;$3 : Text
 TEXT TO DOCUMENT(Get 4D folder(Logs folder)+"Log"+$1+".txt";$2+" "+$3)
```

#### Ejemplo 2 

El siguiente ejemplo muestra cómo la importación de datos puede acelerarse de manera dramática en entorno Cliente/Servidor. El método Importacion Clasica listado a continuación le permite medir cuánto tiempo toma una importación de registros utilizando el comando [IMPORT TEXT](import-text.md "IMPORT TEXT"):

```4d
  //Método de proyecto Importacion Clasica
 $vhDocRef:=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    FORM SET INPUT([Tabla1];"Import")
    $vhHoraInicial:=Current time
    IMPORT TEXT([Tabla1];Document)
    $vhHoraFinal:=Current time
    ALERT("La operación tardó "+String(0+($vhHoraFinal-$vhHoraInicial))+" segundos.")
 End if
```

Con la importación de datos clásica, 4D Client analiza el archivo ASCII, luego, para cada registro, crea un nuevo registro, llena los campos con los datos importados y envía el registro al equipo servidor de manera que pueda ser añadido a la base. Por lo tanto hay muchas peticiones circulando por la red. Una manera de optimizar la operación es utilizar un procedimiento almacenado para hacer el trabajo localmente en el equipo servidor. El equipo cliente carga el documento en un BLOB, comienza un procedimiento almacenado pasando el BLOB como parámetro. El procedimiento almacenado coloca el BLOB en un documento en el disco del equipo servidor, luego importa el documento localmente. Por lo tanto, la importación de datos se lleva a cabo localmente a una velocidad comparable a la de una versión monopuesto de 4D, porque la mayoría de las peticiones que circulan por la red han sido eliminadas. Este es el método de proyecto CLIENTE IMPORTAR. Ejecutado en el equipo cliente, inicia la ejecución del procedimiento almacenado SERVIDOR IMPORTAR, listado a continuación:

```4d
  // Método de proyecto CLIENTE IMPORTAR
  // CLIENTE IMPORTAR ( Puntero ; Alfa )
  // CLIENTE IMPORTAR ( -> [Tabla] ; Formulario de entrada )
 
 var $1 : Pointer
 var $2 : Text
 var $vhDocRef : Time
 var $vxData : Blob
 var spErrCode : Integer
 
  // Seleccione el documento a importar
 $vhDocRef:=Open document("")
 If(OK=1)
  // Si un documento fue seleccionado, no lo deje abierto
    CLOSE DOCUMENT($vhDocRef)
    $vhHoraInicial:=Current time
  // Trate cargarlo en memoria
    DOCUMENT TO BLOB(Document;$vxData)
    If(OK=1)
  // Si el documento puede ser cargado en el BLOB,
  // Inicie el procedimiento almacenado que importará los datos en el equipo servidor
       $spProcessID:=Execute on server("SERVIDOR IMPORTAR";0;"Servidor Importando";Table($1);$2;$vxData)
  // En este punto, ya no necesitamos más el BLOB en este proceso
       CLEAR VARIABLE($vxData)
  // Espere la terminación de la operación realizada por el procedimiento almacenado
       Repeat
          DELAY PROCESS(Current process;300)
          GET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
          If(Undefined(spErrCode))
  // Nota: si el procedimiento almacenado no ha inicializado su propia instancia
  // de la variable spErrCode, puede que retorne una variable indefinida
             spErrCode:=1
          End if
       Until(spErrCode<=0)
  // Enviemos un acuse de recibo al procedimiento almacenado
       spErrCode:=1
       SET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
       $vhHoraFinal:=Current time
       ALERT("La operación tardó"+String(0+($vhHoraFinal-$vhHoraInicial))+" segundos.")
    Else
       ALERT("No hay suficiente memoria para cargar el documento.")
    End if
 End if
```

He aquí el método de proyecto SERVIDOR IMPORTAR ejecutado como procedimiento almacenado:

```4d
  // Método de proyecto SERVIDOR IMPORTAR
  // SERVIDOR IMPORTAR ( Entero largo ; Alfa ; BLOB )
  // SERVIDOR IMPORTAR ( Número de tabla ; Formulario de entrada ; Datos importados )
 
 var $1 : Integer
 var $2 : Text
 var $3 : Blob
 var spErrCode : Integer
 
  // La operación no ha terminado aún, asignemos 1 a spErrCode
 spErrCode:=1
 $vpTabla:=Table($1)
 FORM SET INPUT($vpTabla->;$2)
 $vsDocNombre:="Archivo import "+String(1+Random)
 DELETE DOCUMENT($vsDocNombre)
 BLOB TO DOCUMENT($vsDocNombre;$3)
 IMPORT TEXT($vpTabla->;$vsDocNombre)
 DELETE DOCUMENT($vsDocNombre)
  // La operación ha terminado, asignemos 0 a spErrCode 0
 spErrCode:=0
  // Espere a que el equipo cliente reciba los resultados
 Repeat
    DELAY PROCESS(Current process;1)
 Until(spErrCode>0)
```

Una vez estos dos métodos de proyecto hayan sido implementados en su base de datos, puede efectuar una importación basada en un procedimiento almacenado, escribiendo por ejemplo:

```4d
 CLIENTE IMPORTAR(->[Tabla1];"Import")
```

Con algunas pruebas comparativas, puede comprobar que con este tipo de método, la importación de los registros puede ser 60 veces más rápida que una importación clásica. 

#### Ejemplo 3 

Consulte la sección *Servicios basados en los procedimientos almacenados (ejemplo)* en el manual de *Referencia de 4D Server*.

#### Ver también 

[EXECUTE ON CLIENT](execute-on-client.md)  
[New process](new-process.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 373 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


