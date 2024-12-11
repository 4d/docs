---
id: svg-set-attribute
title: SVG SET ATTRIBUTE
slug: /commands/svg-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG SET ATTRIBUTE.Syntax-->**SVG SET ATTRIBUTE** ( {* ;} *objetoImagen* ; id_Element ; *nomAtrib* ; *valorAtrib* {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} {; *})<!-- END REF-->
<!--REF #_command_.SVG SET ATTRIBUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objetoImagen es un nombre de objeto (cadena). Si se omite, objetoImagen es una variable o un campo |
| objetoPicture | Picture | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| id_Element | Text | &#8594;  | ID del elemento donde uno o más atributos se definen |
| nomAtrib | Text | &#8594;  | Atributo a definir |
| valorAtrib | Text, Integer | &#8594;  | Nuevo valor del atributo |
| * | Operador | &#8594;  | Si se pasa = modificar el árbol DOM interno de la imagen SVG (variable únicamente) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SVG SET ATTRIBUTE.Summary-->El comando **SVG SET ATTRIBUTE** se utiliza para modificar el valor de un atributo existente en el árbol de renderización SVG de una imagen mostrada o en el árbol DOM interno de una imagen.<!-- END REF-->   
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objetoImagen* es un nombre de objeto (cadena). En este caso, el comando aplica a los parámetros de la imagen renderizada adjunta al objeto (tenga en cuenta que los parámetros y por lo tanto la imagen renderizada del objeto sólo se crean si el comando **SVG SET ATTRIBUTE** se llama al menos una vez).   
Si no pasa el parámetro *\**, indica que el parámetro *objetoImagen* es una variable o un campo. Por lo tanto, se pasa una referencia de variable (variable objeto únicamente) o de campo en lugar de una cadena. En este caso, el comando aplica a las imágenes renderizadas de todos los objetos que utilizan la variable o el campo.  
  
Por defecto, las modificaciones realizadas por este comando aplican únicamente a las imágenes renderizadas en los objetos formulario que corresponden con *objetoImagen* en el contexto de formulario, y no hace nada si ningún objeto lo utiliza. En este caso, todos los objetos formulario existentes o futuros que utilizan la imagen SVG serán modificados, en todos los contextos.   
  
**Notas**:

* El último *\** es inútil si el parámetro *objetoImagen* es un nombre de objeto, se tiene en cuenta solo si *objetoImagen* es una variable o campo.
* Para modificar la fuente de datos de una imagen SVG, puede también utilizar los comandos *XML DOM* o el componente **4D SVG** de 4D.

El parámetro *id\_Element* se utiliza para definir el identificador (atributo "id" o "xml: id") del elemento cuyo(s) atributo(s) desea modificar.  
  
En los parámetro *nomAtrib* y *valorAtrib*, pase respectivamente, el atributo a escribir y su valor (como variables, campos o valores literales). Puede pasar tantos pares de atributos/valores como quiera.   
  
El comando **SVG SET ATTRIBUTE** se utiliza para modificar (pero no para añadir o eliminar) la mayoría de los atributos SVG, como por ejemplo, 'fill', 'opacity', 'font-family', etc. Para una definición completa de los atributos SVG, consulte los documentos de referencia disponibles en la Internet, por ejemplo: *http://www.w3.org/TR/SVG11/attindex.html*. La imagen renderizada se actualiza inmediatamente, las modificaciones se transfieren a los elementos hijos para los estilos heredados.   
  
Tenga en cuenta que por razones técnicas, los atributos de ciertos elementos, así como ciertos atributos no pueden modificarse. La siguiente tabla muestra los elementos modificables y no modificables, así como los atributos no modificables:  
  
**Elementos cuyos atributos son modificables**   

| svg                                                                                               | Restricciones:                                                                                                                   |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| \- "width" y "height" no son modificables (1)                                                     |                                                                                                                                  |
| \- "viewBox" sólo puede modificarse si "width" y "height" se especifican en el documento original |                                                                                                                                  |
| g                                                                                                 |                                                                                                                                  |
| defs                                                                                              |                                                                                                                                  |
| use                                                                                               |                                                                                                                                  |
| filter                                                                                            | Restricción: los elementos hijos fe\_xxx child no son modificables                                                               |
| circle                                                                                            |                                                                                                                                  |
| ellipse                                                                                           |                                                                                                                                  |
| line                                                                                              |                                                                                                                                  |
| polyline                                                                                          |                                                                                                                                  |
| polygon                                                                                           |                                                                                                                                  |
| path                                                                                              |                                                                                                                                  |
| rect                                                                                              |                                                                                                                                  |
| text, tspan, textArea                                                                             | El atributo especifico "4d-text" se utiliza para modificar el texto de un elemento "text", "tspan" o "textArea" (ver el ejemplo) |
| Image                                                                                             |                                                                                                                                  |

**Elementos cuyos atributos no pueden modificarse**   

| linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter y los elementos que comienzan por fe, style, pattern | Este grupo designa todos los elementos referenciables o contenidos en un elemento referenciable. Esto significa que no es posible, por ejemplo, redefinir los atributos de un gradiente (pero es posible cambiar el gradiente utilizado). Del mismo modo, para cambiar un marcador de color negro por un marcador rojo, es necesario definir ambos marcadores en el documento SVG (uno negro y uno rojo) y seleccionar uno de ellos. No es posible por ejemplo modificar el color de un rectángulo si su padre es un elemento símbolo o marcador |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Atributos no modificables**  

| id o xml:id       |                                                           |
| ----------------- | --------------------------------------------------------- |
| lang o xml:lang   |                                                           |
| class o xml:class |                                                           |
| width, height     | Concierne los atributos del elemento 'svg' únicamente (1) |
  
  
(1) Estos atributos no pueden modificarse porque definen y estructuran la imagen resultante. Los atributos de width y height del elemento svg se utilizan para definir las dimensiones iniciales de la imagen en 4D y estas dimensiones debe permanecer constantes después de la creación de la imagen (sin embargo es posible modificar las dimensiones de la imagen resultante con el comando [SVG GET ATTRIBUTE](svg-get-attribute.md) de 4D).   
  
Consulte también la descripción del comando [SVG GET ATTRIBUTE](svg-get-attribute.md) para ver la lista de los atributos 4D reservados y dedicados a la animación.   
  
Si intenta modificar el atributo de un elemento que no es compatible o uno de sus elementos hijos, el comando no hace nada y no se genera error.  
  
Si el comando no se ejecuta en el contexto de un formulario o si se pasa un *objetoImagen* inválido, la variable OK toma el valor 0\. Si el comando se ha ejecutado correctamente, toma el valor 1.

#### Ejemplo 

Modificación del contenido de un elemento de tipo texto:

```4d
 SVG SET ATTRIBUTE(*;picture_object_name;text_element_ID;"4d-text";"Este es un texto")
```

**Nota:** no hay no namespace para que el atributo pueda utilizarse en una hoja de estilo CSS sin riesgo de conflicto. 

#### Ver también 

[SVG GET ATTRIBUTE](svg-get-attribute.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1055 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


