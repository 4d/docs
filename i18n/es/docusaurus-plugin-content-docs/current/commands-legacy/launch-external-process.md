---
id: launch-external-process
title: LAUNCH EXTERNAL PROCESS
slug: /commands/launch-external-process
displayed_sidebar: docs
---

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Syntax-->**LAUNCH EXTERNAL PROCESS** ( *nomArchivo* {; *flujoEntrada* {; *flujoSalida* {; *flujoError*}}}{; *pid*} )<!-- END REF-->
<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Ruta de acceso y argumentos del archivo a abrir |
| flujoEntrada | Text, Blob | &#8594;  | Flujo de entrada(stdin) |
| flujoSalida | Text, Blob | &#8592; | Flujo de salida (stdout) |
| flujoError | Text, Blob | &#8592; | Flujo de error(stderr) |
| pid | Integer | &#8592; | Identificador único del proceso externo |

<!-- END REF-->

:::info Compatibilidad

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Summary-->A partir de 4D v19 R4, recomendamos el uso de la [`4D.SystemWorker class`](../API/SystemWorkerClass.md) para ejecutar y controlar los procesos externos.<!-- END REF--> Sin embargo, se sigue soportando este comando. 

:::

#### Descripción 

El comando **LAUNCH EXTERNAL PROCESS** lanza un proceso externo de 4D, bajo macOS y Windows.  
Bajo macOS, este comando ofrece acceso a todas las aplicaciones ejecutables que puedan ser iniciadas desde el Terminal.

Pase en el parámetro *nomArchivo* la ruta de acceso de la aplicación a ejecutar, como también los argumentos requeridos (si es necesario).

Bajo macOS, puede igualmente pasar únicamente el nombre de la aplicación a ejecutar; 4D utilizará entonces la variable del entorno PATH para ubicar el ejecutable.

**Advertencia:** este comando sólo puede iniciar aplicaciones ejecutables; no puede ejecutar instrucciones que hagan parte del shell (interprete de comandos). Por ejemplo, bajo Mac OS no es posible utilizar este comando para ejecutar la instrucción *echo* o las indirecciones.

El parámetro *flujoEntrada* (opcional) contiene el *stdin* del proceso externo. Una vez el comando haya sido ejecutado, los parámetro *flujoSalida* y *flujoError* (si se pasan) devuelven respectivamente el *stdout* y el *tderr* del proceso externo. Puede utilizar los parámetros de tipo BLOB en lugar de las cadenas de caracteres si maneja datos binarios (como imágenes).

4D ofrece tres variables de entorno específicas que se pueden configurar utilizando [SET ENVIRONMENT VARIABLE](set-environment-variable.md) y están disponibles para su uso en el contexto de **LAUNCH EXTERNAL PROCESS**:

* *\_4D\_OPTION\_CURRENT\_DIRECTORY*: se utiliza para definir el directorio actual del proceso externo que se iniciará. En *valorVar*, debe pasar la ruta de acceso del directorio (sintaxis de tipo HFS en macOS y DOS en Windows).
* *\_4D\_OPTION\_HIDE\_CONSOLE* (Windows únicamente): permite ocultar la ventana de la consola DOS. Debe pasar "true" en *valorVar* para ocultar la consola o "false" para mostrarla.
* *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*: permite ejecutar el proceso externo en modo asincrónico, en otras palabras, sin bloqueo para las otras aplicaciones. Debe pasar "false" en *valorVar* para definir una ejecución asincrónica o "true" para una ejecución sincrónica (por defecto). Para esta variable, pasar "" en *valorVar* no hace nada.  
Si define la variable del entorno *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS* como "false" vía el comando [SET ENVIRONMENT VARIABLE](set-environment-variable.md) (ejecución asincrónica), los parámetros *flujoSalida* y *flujoError* no se devuelven.

Estas variables son válidas en el proceso actual para la siguiente llamada a **LAUNCH EXTERNAL PROCESS**.

Cuando se pasa, el parámetro *pid* (entero largo) devuelve el ID único del proceso creado para lanzar el comando, independientemente del estado de la opción *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*. Con esta información, es más fácil interactuar con los procesos externos creados por el comando, por ejemplo. para detenerlo. Si el lanzamiento del proceso falla, no se devuelve el parámetro *pid*.

#### Ejemplos bajo macOS 

Los siguientes ejemplos utilizan el Terminal macOS disponible en la carpeta Aplicaciones/Utilidades.

1\. Para cambiar los permisos de un archivo (*chmod* es el comando macOS utilizado para modificar el acceso al archivo):  
  
```4d
 LAUNCH EXTERNAL PROCESS("chmod +x /folder/myfile.txt")
```

2\. Para editar un archivo de tipo texto (*cat* es el comando macOS utilizado para editar los archivos). En este ejemplo, se pasa la ruta de acceso completa del comando:

```4d
 var input;output : Text
 input:=""
 LAUNCH EXTERNAL PROCESS("/bin/cat /folder/myfile.txt";input;output)
```

3\. Para obtener los contenidos de la carpeta "Users" (*ls -l* es el equivalente macOS del comando *dir* en DOS):

```4d
 var $In;$Out : Text
 LAUNCH EXTERNAL PROCESS("/bin/ls -l /Users";$In;$Out)
```

4\. Para iniciar una aplicación "gráfica" independiente, es preferible utilizar el comando sistema *open* (en este caso, la instrucción **LAUNCH EXTERNAL PROCESS** tiene el mismo efecto que hacer doble clic en la aplicación):

```4d
 LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")
```

#### Ejemplos bajo Windows 

5\. Para abrir NotePad: 

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe")
```

6\. Para abrir Notepad y abrir un documento específico: 

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe C:\\Docs\\nueva carpeta\\res.txt")
```

7\. Para iniciar la aplicación Microsoft® Word® y abrir un documento específico (Note el uso de las dos ""):

```4d
 $midoc:="C:\\Program Files\\Microsoft Office\\Office10\\WINWORD.EXE \"C:\\Documents and
 Settings\\Macros\\Escritorio\\MisDocs\\Nuevacarpeta\\test.xml\""
 LAUNCH EXTERNAL PROCESS($midoc;$tIn;$tOut)
```

8\. Para ejecutar un script Perl (es necesario ActivePerl):

```4d
 var $entrada;$salida : Text
 SET ENVIRONMENT VARIABLE("mivariable";"valor")
 LAUNCH EXTERNAL PROCESS("D:\\Perl\\bin\\perl.exe D:\\Perl\\eg\\cgi\\env.pl";$entrada;$salida)
```

9\. Para iniciar un comando con el directorio actual y sin mostrar la consola: 

```4d
 SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\4D_VCS")
 SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
 LAUNCH EXTERNAL PROCESS("micomando")
```

10\. Para permitir al usuario abrir un documento externo en Windows:

```4d
 $nomdoc:=Select document("";"*.*";"Elija el archivo a abrir";0)
 If(OK=1)
    SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
    LAUNCH EXTERNAL PROCESS("cmd.exe /C start \"\" \""+document+"\"")
 End if
 
```

11\. Los siguientes ejemplos recuperan la lista de procesos bajo Windows:

```4d
 var $pid : Integer
 var $stdin;$stdout;$stderr : Text
 
 LAUNCH EXTERNAL PROCESS("tasklist";$pid) //gets PID only
 LAUNCH EXTERNAL PROCESS("tasklist";$stdin;$stdout;$stderr;$pid) //obtener toda la información
```

#### Variables y conjuntos del sistema 

Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1\. De lo contrario (archivo no encontrado, memoria insuficiente, etc.), toma el valor 0.

#### Ver también 

[OPEN URL](open-url.md)  
[SET ENVIRONMENT VARIABLE](set-environment-variable.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 811 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


