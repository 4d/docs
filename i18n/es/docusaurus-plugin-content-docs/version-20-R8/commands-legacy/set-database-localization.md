---
id: set-database-localization
title: SET DATABASE LOCALIZATION
slug: /commands/set-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.SET DATABASE LOCALIZATION.Syntax-->**SET DATABASE LOCALIZATION** ( *codigoLeng* {; *} )<!-- END REF-->
<!--REF #_command_.SET DATABASE LOCALIZATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| codigoLeng | Text | &#8594;  | Selector del lenguaje |
| * | Operador | &#8594;  | Alcance del comando |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET DATABASE LOCALIZATION.Summary-->El comando SET DATABASE LOCALIZATION utilizado para modificar el lenguaje actual de la base para la sesión actual.<!-- END REF-->  
  
El lenguaje actual de la base de datos le permite especificar la carpeta .lproj donde el programa buscará los elementos localizados de la aplicación (textos e imágenes). Por defecto, 4D determina automáticamente el lenguaje actual según el contenido de la carpeta Resources y el entorno del sistema (ver la descripción del comando [Get database localization](get-database-localization.md "Get database localization")). SET DATABASE LOCALIZATION permite modificar el idioma actual por defecto.   
  
El comando no modifica el lenguaje de los formularios que ya están cargados, sólo los elementos mostrados después de la llamada al comando tendrán en cuenta la nueva configuración.   
  
Pase el idioma que utilizará para la aplicación en *codigoLeng*, expresado en la norma definida por el RFC 3066, ISO639 y ISO3166\. Normalmente, se debe pasar "fr" para francés, "es" para español, "en-us" para Inglés americano, y así sucesivamente. Para obtener más información sobre esta norma, por favor consulte el *Apéndice B: Arquitectura XLIFF*.  
  
Por defecto, el comando se aplica a todas las bases y componentes abiertos, para todos los procesos. El parámetro opcional *\**, si se pasa, especifica que el comando sólo se debe aplicar a la base de datos que lo llamó. Este parámetro se puede utilizar más concretamente, para especificar por separado el idioma de la base de datos y el de un componente.   
  
Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1, de lo contrario, toma el valor 0.  
  
**Nota**: de acuerdo con el RFC, el comando utiliza el "-" (guión) para separar el código del lenguaje y el código de la región, por ejemplo, "fr-ca" o "en-us". Por otra parte, las carpetas "lproj" de la carpeta **Resources** utilizan el "\_" (guión bajo), por ejemplo "fr\_ca.lproj" o "en\_us.lproj".   
  
**4D Server**: con 4D Server, los idiomas disponibles son los pertenecientes a la máquina remota que llamó al comando. Por lo tanto, debe asegurarse de que las carpetas **Resources** estén sincronizadas.

#### Ejemplo 1 

Queremos definir el lenguaje de la interfaz como francés:

```4d
 SET DATABASE LOCALIZATION("fr")
```

#### Ejemplo 2 

La interfaz de su aplicación utiliza la cadena estática ":xliff:shopping". Los archivos XLIFF contienen particularmente la siguiente información:

* Carpeta FR:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Faire les courses</target>  
</trans-unit>  
```
* Carpeta FR\_CA folder:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Magasiner</target>  
</trans-unit>  
```

```4d
 SET DATABASE LOCALIZATION("fr")
  //La cadena ":xliff:shopping" muestra "Faire les courses"
 SET DATABASE LOCALIZATION("fr-ca")
  //La cadena ":xliff:shopping" muestra "Magasiner"
```

#### Ver también 

[Get database localization](get-database-localization.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1104 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


