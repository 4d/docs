---
id: wp-get-text
title: WP Get text
slug: /WritePro/commands/wp-get-text
displayed_sidebar: docs
---

<!--REF #_command_.WP Get text.Syntax-->**WP Get text** ( *objRango* {; *expresiones*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| expresiones | Number | &#8594;  | Instrucciones para evaluar la expresión |
| Resultado | Text | &#8592; | Texto de objRango |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get text.Summary-->El comando **WP Get text** recupera el contenido de texto de un documento 4D Write Pro dentro del *objRango* especificado.<!-- END REF-->

**WP Get text** solo devuelve texto sin formato. Todo estilo aplicado (negrita, cursiva, etc.) se ignorará.

En el parámetro *objRango*, pase un objeto que contenga:

* un rango, o
* un elemento (tabla / párrafo / cuerpo / encabezado / pie de página / sección / subsección), o
* un documento 4D Write Pro

**Notas:** 

* Si pasa un documento 4D Write Pro en *objRango*, el comando sólo devuelve el texto del elemento del cuerpo del documento.
* Si pasa una subsección en *objRango*, el comando devuelve el texto de la sección padre.

El parámetro opcional *expresiones* da instrucciones para la evaluación de expresiones 4D dentro de *objRango* (para mayor información, consulte la página *Gestión de fórmulas*). Las opciones son:

| Constante                | Comentario                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| wk expressions as source | Se devuelve la cadena original de referencias de expresión 4D.                                                 |
| wk expressions as space  | Cada referencia se devuelve como un carácter de espacio no disruptivo.                                         |
| wk expressions as value  | Las referencias de expresión 4D se devuelven en su formulario evaluada. (Por defecto si la opción no se pasa). |

**Importante**: solo el texto sin formato con wk expressions as space es consistente con los índices de rango de texto utilizados por los comandos WP o ST, ya que los comandos WP y ST siempre asumen el tamaño de la expresión = 1 caracter.

**Notas**: 

* Si *objRango* contiene imágenes, las imágenes se ignoran y se devuelven como caracteres espaciales (" ").
* Si *objRango* contiene tablas, el contenido de cada celda se trata como párrafos individuales y se devuelve como texto separado por pestañas. Las filas están separadas por retornos de carro.

#### Ejemplo 

Para recuperar el texto en este documento:

![](../../assets/en/WritePro/commands/pict3772381.en.png)

puede escribir:

```4d
 $range:=WP Text range(myDoc2;wk start text;wk end text)
 vText:=WP Get text($range;wk expressions as value) //devuelve "Hola mundo! Hoy es: 06/03/18."
 vText2:=WP Get text($range;wk expressions as source) //devuelve "Hola mundo! Hoy es: Current date."
 vText3:=WP Get text($range;wk expressions as space) //devuelve "Hola mundo! Hoy es:  ."
```

#### Ver también 

*Gestión de fórmulas*  
[WP SET TEXT](wp-set-text.md)  