---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Parámetros | Tipo |    | Descripción                                  |                  |
| ---------- | ---- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text | -> | Nombre de objeto formulario área 4D View Pro | <!-- END REF --> |

#### Descripción

El comando `VP FLUSH COMMANDS` <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->ejecuta inmediatamente los comandos almacenados y borra el buffer de comandos<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Para aumentar el rendimiento y reducir el número de peticiones enviadas, los comandos 4D View Pro llamados por el desarrollador se almacenan en un buffer de comandos. Cuando se llama, `VP FLUSH COMMANDS` ejecuta los comandos como un lote al salir del método y vacía el contenido del buffer de comandos.

#### Ejemplo

Quiere rastrear la ejecución de los comandos y vaciar el buffer:

```4d

 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")
 
 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```
