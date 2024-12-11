---
id: filter-keystroke
title: FILTER KEYSTROKE
slug: /commands/filter-keystroke
displayed_sidebar: docs
---

<!--REF #_command_.FILTER KEYSTROKE.Syntax-->**FILTER KEYSTROKE** ( *carFiltro* )<!-- END REF-->
<!--REF #_command_.FILTER KEYSTROKE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| carFiltro | Text | &#8594;  | Carácter de filtrado de tecleo o Cadena vacía para cancelar el filtrado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FILTER KEYSTROKE.Summary-->FILTER KEYSTROKE permite reemplazar el carácter introducido por el usuario en un campo o en un área editable por el primer carácter de la cadena *carFiltro*.<!-- END REF-->

Si pasa una cadena vacía, el filtrado se cancela y se ignora.

Generalmente, FILTER KEYSTROKE se llama en un método de formulario o de objeto cuando se gestiona el evento de formulario On Before Keystroke. Para detectar los eventos de tecleo, utilice el comando [Form event](form-event.md "Form event"). Para obtener el carácter tecleado, utilice el comando [Keystroke](keystroke.md "Keystroke").

**IMPORTANTE:** el comando FILTER KEYSTROKE le permite cancelar o reemplazar el carácter introducido por el usuario con otro carácter. Por otra parte, si quiere insertar más de un carácter para un keystroke especifico, recuerde que el texto que ve en la pantalla aún NO es el valor de la variable o campo fuente de datos para el área que está siendo editada. El valor del campo o de la variable fuente de datos se asigna después de que se valida la entrada de datos para el área. Por lo tanto depende de usted el colocar los datos introducidos en una variable y luego trabajar con el valor de la variable y reasignar el área de entrada (ver el ejemplo en esta sección).

Utilice el comando FILTER KEYSTROKE para:

* efectuar un filtro personalizado de caracteres
* crear un filtro de entrada no disponible en estándar, por ejemplo en los filtros de entrada
* implementar áreas dinámicas de búsqueda o de tecleo anticipado

**Advertencia:** si llama al comando [Keystroke](keystroke.md "Keystroke") después de llamar a FILTER KEYSTROKE, se devuelve el carácter que usted pasa a este comando en lugar del carácter introducido realmente.

#### Ejemplo 1 

Utilizando el siguiente código:

```4d
  // Método de objeto del área editable miObjeto
 Case of
    :(FORM Event=On Load)
       miObjeto:=""
    :(FORM Event=On Before Keystroke)
       If(Position(Keystroke;"0123456789")>0)
          FILTER KEYSTROKE("*")
       End if
 End case
```

Todos los dígitos introducidos en el área *miObjeto* se transforman en asteriscos.

#### Ejemplo 2 

Este código define el comportamiento de un área de entrada de contraseña, en la cual los caracteres introducidos son reemplazados (en la pantalla) por caracteres aleatorios:

```4d
  // Método de objeto del área editable vsContraseña
 Case of
    :(FORM Event=On Load)
       vsContraseña:=""
       vsContraseñaReal:=""
    :(FORM Event=On Before Keystroke)
       Manejo keystroke(->vsContraseña;->vsContraseñaReal)
       If(Position(Keystroke;Char(Backspace)+Char(Left arrow key)+
          Char(Right arrow key)+Char(Up arrow key)+Char(Down arrow key))=0)
          FILTER KEYSTROKE(Char(65+(Random%26)))
       End if
 End case
```

Una vez validada la entrada de datos, usted recupera la contraseña introducida en realidad por el usuario *vsContraseñaReal*. Nota: El método Manejo keystroke está listado en el ejemplo del comando Keystroke. 

#### Ejemplo 3 

En su aplicación, tiene algunas áreas de texto en las cuales puede introducir algunas frases. Su aplicación también incluye una tabla de diccionario de los términos utilizados con más frecuencia en su base. Durante la edición de sus áreas de texto, a usted le gustaría poder recuperar e insertar rápidamente entradas del diccionario basado en los caracteres seleccionados en un área de texto. Hay dos formas de hacer esto:   
 \- Ofrecer algunos botones con teclas asociadas o   
 \- Interceptar caracteres especiales durante la edición del área de texto 

Este ejemplo implementa la segunda solución, basado en la tecla Ayuda.

Como se explicó anteriormente, durante la edición del área de texto, el valor introducido será asignará a la fuente de datos para esta área después de validar la entrada de datos. Para poder recuperar e insertar entradas del diccionario en el área de texto mientras se edita esta área, debe crear una segunda área para poner los valores introducidos. Se pasan como primeros parámetros los punteros hacia el área de entrada y hacia la variable, luego como tercer parámetro la cadena de caracteres “prohibidos”. Sin importar cómo se trate el tecleado, el método devuelve el tecleadooriginal. Los caracteres “prohibidos” son aquellos que usted no quiere insertar en el área editable y quiere tratar como caracteres especiales. 

```4d
  // Método de proyecto Tecleado sombra
  // Tecleado sombra ( Puntero ; Puntero ; Alfa) -> Alfa
  // Tecleado sombra ( -> srcArea ; -> curValor ; Filtro ) -> Antiguo valor tecleado
 C_STRING(1;$0)
 var $1;$2 : Pointer
 var $vtNuevoValor : Text
 C_STRING(255;$3)
  // Devuelve el carácter original
 $0:=Keystroke
  // Obtener la selección de texto en el área editable
 GET HIGHLIGHT($1->;$vlInicio;$vlFin)
  //Comenzar a trabajar con el valor actual
 $vtNuevoValor:=$2->
  // Dependiendo de la tecla presionada o del carácter introducido,
  // Efectuar las acciones apropiadas
 Case of
  // La tecla Retorno (Suprimir) ha sido presionada
    :(Character code($0)=Backspace)
  // Suprimir los caracteres seleccionados o el carácter a la izquierda del cursor
       $vtNuevoValor:=Borrar texto($vtNuevoValor;$vlInicio;$vlFin)
  // Una tecla flecha ha sido presionada
  // No hacer nada, sino aceptar el carácter tecleado
    :(Character code($0)=Left arrow key)
    :(Character code($0)=Right arrow key)
    :(Character code($0)=Up arrow key)
    :(Character code($0)=Down arrow key)
 
  // Un carácter válido ha sido introducido
    :(Position($0;$3)=0)
       $vtNuevoValor:=Insertar texto($vtNuevoValor;$vlInicio;$vlFin;$0)
    Else
  // El carácter no es aceptado
       FILTER KEYSTROKE("")
 End case
  // Devolver el valor para la próxima gestión de keystroke
 $2->:=$vtNuevoValor
```

Este método utiliza los siguientes dos submétodos:

```4d
  // Método de proyecto Borrar texto
  // Suprimir texto ( Alfa; Long ; Long ) -> Alfa
  // Suprimir texto ( -> Texto ; SelInicio ; SelFin ) -> Nuevo texto
 var $0;$1 : Text
 var $2;$3 : Integer
 $0:=Substring($1;1;$2-1-Num($2=$3))+Substring($1;$3)
```

```4d
  // Método de proyecto Insertar texto
  // Insertar texto ( Alfa ; Long ; Long ; Alfa) -> Alfa
  // Insertar texto ( -> srcText ; SelInicio ; SelFin ; Texto a insertar ) -> Nuevo texto
 var $0;$1;$4 : Text
 var $2;$3 : Integer
 $0:=$1
 If($2#$3)
    $0:=Substring($0;1;$2-1)+$4+Substring($0;$3)
 Else
    Case of
       :($2<=1)
          $0:=$4+$0
       :($2>Length($0))
          $0:=$0+$4
       Else
          $0:=Substring($0;1;$2-1)+$4+Substring($0;$2)
    End case
 End if
```

Una vez haya añadido estos métodos de proyecto a su base, puede utilizarlos de esta manera: 

```4d
  // Método de objeto del área editable vsDescripcion
 Case of
    :(FORM Event=On Load)
       vsDescripcion:=""
       vsShadowDescripcion:=""
  // Establecer la lista de caracteres “prohibidos” a tratar como teclas especiales
  // ( acá, en este ejemplo, sólo la tecla Help es filtrada)
       vsSpecialKeys:=Char(HelpKey)
    :(FORM Event=On Before Keystroke)
       $vsKey:=Tecleado sombra(->vsDescripcion;->vsShadowDescripcion;vsSpecialKeys)
       Case of
          :(Character code($vsKey)=Help key)
  // Hacer algo cuando la tecla Ayuda sea presionada
  // Acá, en este ejemplo, una entrada de diccionario debe ser buscada e insertada
             CONSULTAR DICCIONARIO(->vsDescripcion;->vsShadowDescripcion)
       End case
 End case
```

El método de proyecto LOOKUP DICTIONARY es listado a continuación. Su propósito es utilizar la variable shadow para reasignar el área editable a modificar:

```4d
  // Método de proyecto CONSULTAR DICCIONARIO
  // CONSULTAR DICCIONARIO ( Puntero ; Puntero )
  // CONSULTAR DICCIONARIO ( -> Area editable ; ->ShadowVariable )
 
 var $1;$2 : Pointer
 var $vlInicio;$vlFin : Integer
 
  // Obtener la selección de texto en el área editable
 GET HIGHLIGHT($1->;$vlInicio;$vlFin)
  // Obtener el texto seleccionado o la palabra situada a la izquierda del cursor
 $vtHighlightedText:=ObtenerTextoSeleccionado($2->;$vlInicio;$vlFin)
  //¿Hay algo que buscar?
 If($vtHighlightedText#"")
  // Si la selección de texto era el cursor
  // la selección comienza con la palabra situada después del cursor
    If($vlInicio=$vlFin)
       $vlInicio:=$vlInicio-Length($vtHighlightedText)
    End if
  // Buscar la primera entrada disponible del diccionario
    QUERY([Diccionario];[Diccionario]Entry=$vtHighlightedText+"@")
  // ¿Hay alguna?
    If(Records in selection([Diccionario])>0)
  // Si hay alguna entrada disponible, insertarla en el texto shadow
       $2->:=Insert text($2->;$vlInicio;$vlFin;[Diccionario]Entry)
  // Copiar el texto shadow en área editable
       $1->:=$2->
  // Fijar la selección justo después de insertar la entrada del diccionario
       $vlFin:=$vlInicio+Length([Diccionario]Entry)
       HIGHLIGHT TEXT(vsComments;$vlFin;$vlFin)
    Else
  // No hay una entrada correspondiente en el diccionario
       BEEP
    End if
 Else
  // No hay un texto seleccionado
    BEEP
 End if
```

El método ObtenerTextoSeleccionado es el siguiente:

```4d
  // Método de objeto ObtenerTextoSeleccionado
  // ObtenerTextoSeleccionado( Alfa ; Long ; Long ) -> Alfa
  // ObtenerTextoSeleccionado ( Text ; SelInicio ; SelEnd ) -> texto seleccionado
 var $0;$1 : Text
 var $2;$3 : Integer
 If($2<$3)
    $0:=Substring($1;$2;$3-$2)
 Else
    $0:=""
    $2:=$2-1
    Repeat
       If($2>0)
          If(Position($1[[$2]];"  ,.!?:;()-_–—")=0)
             $0:=$1[[$2]]+$0
             $2:=$2-1
          Else
             $2:=0
          End if
       End if
    Until($2=0)
 End if
```

#### Ver también 

[Form event code](form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 389 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


