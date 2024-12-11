---
id: save-variables
title: SAVE VARIABLES
slug: /commands/save-variables
displayed_sidebar: docs
---

<!--REF #_command_.SAVE VARIABLES.Syntax-->**SAVE VARIABLES** ( *doc* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.SAVE VARIABLES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Nombre del documento en el cual guardar las variables |
| variable | Variable | &#8594;  | Variables a guardar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAVE VARIABLES.Summary-->El comando SAVE VARIABLES guarda una o varias variables en el documento cuyo nombre se pasa en l parámetro *documento*.<!-- END REF--> 

Las variables no deben ser del mismo tipo, pero tienen que ser de tipo Texto, Numérico, Fecha, Hora, Booleano o Imagen. 

Si pasa una cadena vacía en *documento*, aparece una caja de diálogo estándar de guardar archivos; el usuario puede entonces elegir el documento a crear. En este caso, la variable sistema Document toma el nombre del documento si se ha creado. 

Si las variables se guardan correctamente, la variable OK toma el valor 1\. Si no, OK toma el valor 0.

**Nota:** cuando escribe variables en documentos con SAVE VARIABLES, 4D utiliza un formato de datos interno. Puede recuperar las variables únicamente con el comando [LOAD VARIABLES](load-variables.md "LOAD VARIABLES"). No utilice [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE") o [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET") para leer un documento creado por SAVE VARIABLES.

**Advertencia:** este comando no soporta variables de tipo array. Para estas variables utilice los comandos del tema BLOB.

#### Ejemplo 

El siguiente ejemplo guarda tres variables en un archivo llamado PrefsUsuario:

```4d
 SAVE VARIABLES(" PrefsUsuario";vsNombre;vlCodigo;vgIconImagen)
```

#### Variables y conjuntos del sistema 

Si las variables se guardan correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0.

#### Ver también 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[LOAD VARIABLES](load-variables.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  
*Variables sistema*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 75 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document |
| Prohibido en el servidor ||


