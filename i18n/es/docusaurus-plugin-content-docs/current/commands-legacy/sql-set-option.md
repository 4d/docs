---
id: sql-set-option
title: SQL SET OPTION
slug: /commands/sql-set-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET OPTION.Syntax-->**SQL SET OPTION** ( *opción* ; *valor* )<!-- END REF-->
<!--REF #_command_.SQL SET OPTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opción | Integer | &#8594;  | Número de opción a definir |
| valor | Integer, Text | &#8594;  | Nuevo valor de opción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL SET OPTION.Summary-->El comando **SQL SET OPTION** se utiliza para modificar el *valor* de la opción pasada en *opcion*.<!-- END REF-->

*opcion* puede tener uno de los siguientes valores, ubicados en el tema “SQL”:

| Constante              | Valor | Comentario                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SQL asynchronous       | 1     | 0 = Conexión sincrónica (valor por defecto), 1 (o valor diferente de 0) = Conexión asincrónica                                                                                                                                                                                                                                       |
| SQL charset            | 100   | Codificación del texto utilizada por las peticiones enviadas a fuentes externas (vía SQL pass-through). La modificación se lleva a cabo para el proceso actual y la conexión actual.<br/>Valores posibles: identificador MIBEnum (ver nota 2), cadena "WCHAR" (ver nota 3) o valor -2 (ver nota 4). Por defecto: 106 (UTF-8) |
| SQL connection timeout | 5     | Tiempo máximo de espera durante la ejecución del comando [SQL LOGIN](sql-login.md "SQL LOGIN"). Este valor debe definirse antes de abrir la conexión para que sea tenido en cuenta.<br/>Valores posibles: tiempo en segundos<br/>Por defecto: no hay timeout<br/>                                            |
| SQL data chunk size    | 6     | Tamaño del trozo de datos que se enviará al servidor. Esta opción es útil principalmente con el controlador ODBC Sybase, que no admite trozos de datos reales. Definir un valor mayor que el predeterminado permite enviar datos más grandes a la vez. <br/>Valor: tamaño en bytes<br/>Por defecto: 8000             |
| SQL max data length    | 3     | Longitud máxima de los datos devueltos                                                                                                                                                                                                                                                                                               |
| SQL max rows           | 2     | Número máximo de líneas en el conjunto resultante (utilizado para previsualizaciones)                                                                                                                                                                                                                                                |
| SQL query timeout      | 4     | Tiempo máximo de espera al ejecutar el comando [SQL EXECUTE](sql-execute.md "SQL EXECUTE"). <br/>Valores: tiempo en segundos<br/>Por defecto: no hay timeout                                                                                                                                                         |

**Notas:**  
  
1\. Cuando trabaja con el motor SQL interno de 4D, la opción SQL Asynchronous no tienen ningún propósito ya que ese tipo de conexión siempre es sincrónica.  
2\. Los números MIBEnum se referencian en las siguientes direcciones: *http://www.iana.org/assignments/character-sets* *.xhtml*.  
3\. Cuando pasa -2 como el *valor* a SQL Charset, la codificación utilizada por el servidor SQL de 4D se adapta automáticamente a la plataforma de ejecución (codificación no UTF):

   * Bajo Windows, se utiliza ISO8859-1,
   * Bajo Mac OS, se utiliza MAC-ROMAN.

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK devuelve 1\. De lo contrario, devuelve 0.

#### Ver también 

[SQL GET OPTION](sql-get-option.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 818 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


