---
id: sql-execute-script
title: SQL EXECUTE SCRIPT
slug: /commands/sql-execute-script
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE SCRIPT.Syntax-->**SQL EXECUTE SCRIPT** ( *rutaScript* ; *accionError* {; *nomAtrib* ; *valAtrib*} {; *nomAtrib2* ; *valAtrib2* ; ... ; *nomAtribN* ; *valAtribN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE SCRIPT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaScript | Text | &#8594;  | Ruta de acceso completa del archivo que contiene el script SQL a ejecutar |
| accionError | Integer | &#8594;  | Acción a efectuar en caso de error durante la ejecución del script |
| nomAtrib | Text | &#8594;  | Nombre del atributo a utilizar |
| valAtrib | Text | &#8594;  | Valor del atributo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL EXECUTE SCRIPT.Summary-->El comando SQL EXECUTE SCRIPT permite ejecutar una serie de instrucciones SQL ubicadas en el archivo de script designado por *rutaScript*.<!-- END REF-->  
Este comando sólo puede ejecutarse en un equipo local (4D local o procedimiento almacenado en 4D Server). Funciona con la base de datos actual (base interna o externa) 

**Nota:** este comando no puede utilizarse con una conexión externa que se abre directamente o vía ODBC. 

Pase en el parámetro *rutaScript* la ruta de acceso completa del archivo texto que contiene las instrucciones SQL a ejecutar. La ruta de acceso debe expresarse utilizando la sintaxis del sistema actual. Si pasa una cadena vacía ("") en *rutaScript*, se muestra una caja de diálogo de apertura estándar de manera que el usuario pueda seleccionar el archivo de script a ejecutar. 

**Nota:** los comandos [SQL EXPORT DATABASE](sql-export-database.md "SQL EXPORT DATABASE") y [SQL EXPORT SELECTION](sql-export-selection.md "SQL EXPORT SELECTION") generan automáticamente este archivo de script.

El parámetro *accionError* se utiliza para configurar el funcionamiento del comando cuando ocurre un error durante la ejecución del script. Puede pasar una de las siguientes tres constantes, ubicadas en el tema "":

| Constante             | Tipo         | Valor | Comentario                                                                                                                                   |
| --------------------- | ------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL On error abort    | Entero largo | 1     | En caso de error, 4D detiene de inmediato la ejecución del script.                                                                           |
| SQL On error confirm  | Entero largo | 2     | En caso de error, 4D muestra una caja de diálogo que describe el error y permite al usuario interrumpir o continuar la ejecución del script. |
| SQL On error continue | Entero largo | 3     | En caso de error, 4D lo ignoras y continua la ejecución del script.                                                                          |

Los parámetros *nomAtrib* y *valAtrib* deben pasarse en pares. Estos parámetros permiten definir los atributos específicos para la ejecución del script. En la versión actual de 4D, en *nomAtrib* sólo puede pasarse un atributo, disponible vía la constante siguiente, ubicada en el tema "":

| Constante             | Tipo   | Valor                    | Comentario                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- | ------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL use access rights | Cadena | SQL\_Use\_Access\_Rights | Permite restringir los derechos de acceso a aplicar durante la ejecución de los comandos SQL del script. Cuando utilice este atributo, debe pasar 0 ó 1 en *attribValue*: <br/>*attribValue* \= 1: 4D utiliza los derechos de acceso del usuario 4D actual.*attribValue* \= 0 (o atributo no definido): 4D no restringe el acceso, se utilizan los derechos del Diseñador. |

Si el archivo de registro de peticiones de 4D está activo (vía los selectores 28 o 45 del comando [SET DATABASE PARAMETER](set-database-parameter.md "SET DATABASE PARAMETER")), cada comando SQL ejecutado generará una entrada con la siguiente información:

* Tipo de comando SQL
* Número de registros afectados por el comando
* Duración de ejecución del comando
* Para cada error encontrado:  
   * el código de error  
   * el texto del error si está disponible

Si el script se ejecuta correctamente (no se encuentra ningún error), la variable sistema *OK* toma el valor 1\. En el evento de un error, la variable sistema *OK* toma o no el valor 0 en función del parámetro *accionError*: 

* Si *errorAction* es SQL On error abort (valor 1), *OK* toma el valor 0.
* Si *errorAction* es SQL On error confirm (valor 2), *OK* toma el valor 0 si el usuario elije detener la operación y 1 si elije continuar.
* Si *errorAction* es SQL On error continue (valor 3), la variable *OK* siempre toma el valor 1\.

**Nota:** si utiliza este comando para ejecutar acciones consumidoras de memoria tales como importación masiva de datos, puede considerar llamar al comando SQL ALTER DATABASE para desactivar temporalmente las opciones SQL.


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1089 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


