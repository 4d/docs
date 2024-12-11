---
id: get-style-sheet-info
title: GET STYLE SHEET INFO
slug: /commands/get-style-sheet-info
displayed_sidebar: docs
---

<!--REF #_command_.GET STYLE SHEET INFO.Syntax-->**GET STYLE SHEET INFO** ( *nomHojaEstilo* ; *fuente* ; *tam* ; *estilos* )<!-- END REF-->
<!--REF #_command_.GET STYLE SHEET INFO.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomHojaEstilo | Text | &#8594;  | Nombre de la hoja de estilo |
| fuente | Text | &#8592; | Tipo de fuente |
| tam | Integer | &#8592; | Tamaño de fuente |
| estilos | Integer | &#8592; | Valor del estilo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET STYLE SHEET INFO.Summary-->El comando **GET STYLE SHEET INFO** devuelve la configuración actual de la hoja de estilo *nomHojaEstilo* .<!-- END REF--> 

Pase en *nomHojaEstilo*, el nombre de la hoja de estilo definida en modo Diseño. Para designar una hoja de estilo Automática, utilice una de las siguientes constantes, ubicadas en el tema "*Estilos de fuente*":

| Constante                         | Tipo   | Valor                               | Comentario                                                                                                                 |
| --------------------------------- | ------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Automatic style sheet             | Cadena | \_\_automatic\_\_                   | Se utiliza de forma predeterminada para todos los objetos                                                                  |
| Automatic style sheet\_additional | Cadena | \_\_automatic\_additional\_text\_\_ | Soportado por los textos estáticos, campos y variables solamente. Se utiliza para texto adicional en las cajas de diálogo. |
| Automatic style sheet\_main       | Cadena | \_\_automatic\_main\_text\_\_       | Soportado por los textos estáticos, campos y variables solamente. Se utiliza para texto principal en las cajas de diálogo. |

El comando devuelve en *fuente*, el nombre de la fuente de caracteres asociada a la hoja de estilo para la plataforma actual. 

El comando devuelve en *tam*, el tamaño en puntos de la fuente asociada a la hoja de estilo para la plataforma actual. 

El comando devuelve en *estilos*, un valor que corresponde al estilo(s) asociado(s) a la hoja de estilo para la plataforma actual. Puede comparar el valor recibido con las siguientes constantes, que se encuentran en el tema "*Estilos de fuente*": 

| Constante            | Tipo         | Valor |
| -------------------- | ------------ | ----- |
| Bold                 | Entero largo | 1     |
| Bold and Italic      | Entero largo | 3     |
| Bold and Underline   | Entero largo | 5     |
| Italic               | Entero largo | 2     |
| Italic and Underline | Entero largo | 6     |
| Plain                | Entero largo | 0     |
| Underline            | Entero largo | 4     |

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario (por ejemplo, si *nomHojaEstilo* no existe), toma el valor 0.

##### Nota de compatibilidad 

En la **arquitectura proyecto**, este comando sólo soporta las tres hojas de estilo automáticas.   
  
#### Ejemplo 

Si quiere conocer la configuración actual de la hoja de estilo "Automatic"

```4d
 var $size;$style : Integer
 var $font : Text
 GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)
```

#### Ver también 

[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1256 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


