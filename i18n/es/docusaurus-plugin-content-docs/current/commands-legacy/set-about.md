---
id: set-about
title: SET ABOUT
slug: /commands/set-about
displayed_sidebar: docs
---

<!--REF #_command_.SET ABOUT.Syntax-->**SET ABOUT** ( *textoElem* ; *metodo* )<!-- END REF-->
<!--REF #_command_.SET ABOUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| textoElem | Text | &#8594;  | Nueva línea de menú Acerca de |
| metodo | Text | &#8594;  | Nombre del método a ejecutar cuando se elije la línea |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET ABOUT.Summary-->El comando **SET ABOUT** cambia el comando de menú **Acerca de 4D** del menú **Ayuda** (Windows) o del menú **Aplicación** (Mac OS X) por *textoElem*.<!-- END REF-->

Después de llamar este comando, cuando el usuario selecciona esta línea de menú en el entorno Diseño o Aplicación, se llama *metodo*. Generalmente, este método muestra una caja de diálogo que da información sobre la versión de su aplicación.

Este comando se utiliza con 4D (todos los modos), 4D Desktop y 4D Server. Su ejecución en el equipo servidor provoca la creación de un nuevo proceso.

**Nota:** en Windows, este comando modifica la línea "Acerca de 4D" en el menú Ayuda creado por el comando [SET HELP MENU](set-help-menu.md).

#### Ejemplo 1 

El siguiente ejemplo reemplaza el comando de menú Acerca de 4D por el comando de menú Acerca del programador. El método ACERCA DE muestra una caja Acerca de personalizada:

```4d
 SET ABOUT(“Acerca del programador…”;“ACERCA DE”)
```

#### Ejemplo 2 

El siguiente ejemplo reinicializa el comando de menú Acerca de 4D:

```4d
 SET ABOUT("Acerca de 4D";"")
```

#### Ver también 

[SET HELP MENU](set-help-menu.md)  