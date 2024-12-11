---
id: clickcount
title: Clickcount
slug: /commands/clickcount
displayed_sidebar: docs
---

<!--REF #_command_.Clickcount.Syntax-->**Clickcount**  : Integer<!-- END REF-->
<!--REF #_command_.Clickcount.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de clics consecutivos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Clickcount.Summary-->El comando **Clickcount** devuelve, en el contexto de un evento clic, el número de veces que el usuario ha hecho clic de manera repetida con el mismo botón del ratón.<!-- END REF--> Normalmente, este comando devuelve 2 para un doble clic. 

Este comando le permite detectar un doble clic en los encabezados o pies de list box e igualmente manejar las secuencias de triples clics o más.

Cada clic con un botón del ratón genera un evento clic separado. Por ejemplo, si un usuario hace doble clic, un evento es generado para el primer clic en el cual **Clickcount** devuelve 1; luego otro evento es generado por el segundo clic, en el cual **Clickcount** devuelve 2.

Este comando sólo debe ser utilizado en el contexto del evento formulario On Clicked, On Header Click u On Footer Click. Por tanto, es necesario verificar en modo Diseño que el evento correspondiente ha sido seleccionado correctamente en las propiedades del formulario y/o para el objeto específico.

Cuando ambos eventos formulario On Clicked y On Double Clicked están activados, la siguiente secuencia será devuelto por **Clickcount**:

* 1 en el evento On Clicked
* 2 en el evento On Double Clicked
* 2+n en el evento On Clicked

#### Ejemplo 1 

La estructura de código siguiente se puede colocar en un encabezado de listbox para manejar clics simples y dobles:

```4d
 Case of
    :(Form event code=On Header Click)
       Case of
          :(Clickcount=1)
             ... //acción clic sencillo
          :(Clickcount=2)
             ... //acción clic doble
       End case
 End case
```

#### Ejemplo 2 

Las etiquetas no son editables pero lo son después de un triple-clic. Si desea permitir a los usuarios editar las etiquetas, puede escribir el método objeto siguiente:

```4d
 If(Form event code=On Clicked)
    Case of
       :(Clickcount=3)
          OBJECT SET ENTERABLE(*;"Label";True)
          EDIT ITEM(*;"Label")
    End case
 End if
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1332 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


