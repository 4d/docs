---
id: set-help-menu
title: SET HELP MENU
slug: /commands/set-help-menu
displayed_sidebar: docs
---

<!--REF #_command_.SET HELP MENU.Syntax-->**SET HELP MENU** ( *menuCol* )<!-- END REF-->
<!--REF #_command_.SET HELP MENU.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menuCol | Collection | &#8594;  | Colección de objetos de menú |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET HELP MENU.Summary-->El comando **SET HELP MENU** le permite reemplazar el menú **Ayuda** por defecto de 4D por la colección de elementos del menù *menuCol* del modo aplicación.<!-- END REF-->

Este comando reemplaza el menú **Ayuda** por defecto del modo aplicación en todos los entornos 4D: interpretado, compilado, fusionado, monousuario y cliente/servidor.

**Notas:** 

* La propia etiqueta "Ayuda" es gestionada por el sistema y no puede personalizarse con este comando.
* Los menús de ayuda personalizados no soportan submenús, marcas de verificación, estilos o iconos.

En *menuCol*, pase una colección de objetos de menú que definan todos los elementos del menú de Ayuda personalizado. Cada objeto de menú puede contener las siguientes propiedades:

| **Propiedad <br/>** | **Tipo <br/>**                                                                          | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                       | Text                                                                                            | Nombre del elemento de menú                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| method                      | Text \| [4D.Function](https://developer.4d.com/docs/API/FunctionClass#about-4dfunction-objects) | Nombre del método proyecto u objeto fórmula 4D a ejecutar cuando se selecciona el elemento de menú. Cuando se utiliza esta propiedad, no se debe pasar la propiedad "action" (de lo contrario se ignora "method").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| worker                      | Text \| Number                                                                                  | Nombre del worker o Número del proceso que se encargará de la ejecución del código del "método". Se soportan varias configuraciones, dependiendo del valor de la propiedad "worker":<br/> si es un nombre de worker (Text), 4D utiliza o crea este worker para ejecutar el "método" (equivalente a [CALL WORKER](call-worker.md)) si es un número de proceso, 4D utiliza este proceso si existe, en caso contrario no hace nada (equivalente a [CALL WORKER](call-worker.md)) si no está definido y la aplicación muestra un diálogo actual (frontmost dialog), 4D utiliza el proceso de este diálogo (equivalente a [CALL FORM](call-form.md)) si no está definido y la aplicación no muestra un diálogo actual, 4D llama y utiliza el worker1 (4D remoto/mono usuario) o el worker *4D\_server\_interface* (4D Server) |
| action                      | Text                                                                                            | *Acción estándar* a ejecutar cuando el elemento de menú es seleccionado. Cuando se utiliza esta propiedad, la propiedad "method" se ignora si se pasa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| shortcutKey                 | Text                                                                                            | Tecla de acceso directo del elemento (para llamar con la tecla Ctrl/Comando)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| shortcutShift               | Boolean                                                                                         | True para añadir la tecla **Mayús** al acceso directo del elemento                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| shortcutAlt                 | Boolean                                                                                         | True para añadir la tecla **Alt/Opción** al acceso directo del elemento                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

El menú **Ayuda** personalizado mostrará los elementos en el mismo orden que la colección.

Para insertar una línea separadora, pase **null** o un objeto vacío en la colección.

#### Ejemplo 

Desea personalizar el menú **Ayuda** de su aplicación:

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("title";"Knowledge base";"worker";"workerHlp";"method";"methodHlp";"shortcutAlt";True;"shortcutKey";"Y"))
 $col.push(Null) //to add a separation line
 $col.push(New object("title";"Tools";"action";ak msc;"shortcutShift";True;"shortcutKey";"Y"))
 SET HELP MENU($col)
 SET ABOUT("About this application";"m_about") //para reemplazar 'About 4D' en Windows
```

![](../assets/en/commands/pict6260534.en.png)

#### Ver también 

[SET ABOUT](set-about.md)  