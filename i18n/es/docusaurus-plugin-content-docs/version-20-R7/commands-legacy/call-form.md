---
id: call-form
title: CALL FORM
slug: /commands/call-form
displayed_sidebar: docs
---

<!--REF #_command_.CALL FORM.Syntax-->**CALL FORM** ( *ventana* ; *metodo* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.CALL FORM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ventana | Integer | &#8594;  | Número de referencia de la ventana |
| metodo | Object, Text | &#8594;  | Nombre del método proyecto a llamar |
| param | Expression | &#8594;  | Parámetros pasados al método |

<!-- END REF-->

#### Gestión de errores 

<!--REF #_command_.CALL FORM.Summary-->El comando **CALL FORM** ejecuta el código designado en *formula* con el(los) *param*(s) opcional(es) en el contexto de un formulario que se muestra en una *ventana*, independientemente del proceso al que pertenece la ventana.<!-- END REF-->

Al igual que en la comunicación entre procesos basada en los workers (ver *Sobre workers*), un cuadro de mensaje está asociado a la ventana y se puede utilizar cuando la ventana muestra un formulario (después del evento On Load). **CALL FORM** encapsula la formula y sus argumentos en un mensaje que se ha enviado en el cuadro de mensaje de la ventana. El formulario a continuación, ejecuta el mensaje en su propio proceso. El proceso de llamada puede ser cooperativo o apropiativo, por tanto, esta funcionalidad permite a un proceso apropiativo intercambiar información con los formularios.

En *ventana*, pase el número de referencia de la ventana que muestra el formulario llamado.

En *formula*, designe el código 4D que se ejecutará en el contexto del proceso padre de *ventana*. Puede pasar:

* un **objeto fórmula** (ver *Objetos Fórmula*). Los objetos fórmula pueden encapsular cualquier expresión ejecutable, incluyendo funciones y métodos proyecto;
* una **cadena** que contenga el nombre de un método proyecto.

También puede pasar parámetros a la fórmula utilizando uno o más parámetros *param*. Puede utilizar *parámetros secuenciales* o, si la expresión de la fórmula es una función o un método de proyecto, *parámetros nombrados*. Al iniciar la ejecución en el contexto del formulario, la fórmula proceso recibe los valores parámetro en *$1*, *$2*, etc. Recuerde que los arrays no pueden ser pasados ​​como parámetros a un método. Además, en el contexto del comando **CALL FORM**, las siguientes consideraciones adicionales deben tenerse en cuenta:

* Se permiten punteros a tablas o campos.
* Los punteros a las variables, particularmente las variables locales y de proceso, no se recomiendan ya que estas variables pueden no estar definidas en el momento en que el método de proceso acceda.
* Si pasa un parámetro de tipo Objeto o Colección, 4D crea una copia del objeto o de la colección en el proceso de destino (en lugar de una referencia) si el formulario está en un proceso diferente del que llama al comando **CALL FORM**.

#### Ejemplo 1 

Puede utilizar el comando **CALL FORM** para pasar configuraciones personalizadas a un formulario, por ejemplo valores de configuración, sin tener que utilizar variables proceso:

```4d
 $win:=Open form window("form")
 CALL FORM($win;Formula(configure);param1;param2)
 DIALOG("form")
```

#### Ejemplo 2 

Usted quiere abrir dos ventanas de diálogo diferentes en el mismo formulario, pero con diferentes colores de fondo y diferentes mensajes. También desea enviar mensajes después y mostrarlos en cada ventana de diálogo.

En el formulario principal, un botón abre los dos diálogos:

```4d
  //Crear método objeto formularios
  // primera ventana
 formRef1:=Open form window("FormMessage";Palette form window;On the left)
 SET WINDOW TITLE("MyForm1";formRef1)
 DIALOG("FormMessage";*)
 SHOW WINDOW(formRef1)
 
  //segunda ventana
 formRef2:=Open form window("FormMessage";Palette form window;On the left+500)
 SET WINDOW TITLE("MyForm2";formRef2)
 DIALOG("FormMessage";*)
 SHOW WINDOW(formRef2)
 
  //Enviar colores
 CALL FORM(formRef1;"doSetColor";0x00E6F2FF)
 CALL FORM(formRef2;"doSetColor";0x00F2E6FF)
  //Dibujar mensajes
 CALL FORM(formRef1;"doAddMessage";Current process name;"Hello Form 1")
 CALL FORM(formRef2;"doAddMessage";Current process name;"Hello Form 2")
```

El método *doAddMessage* sólo añade una línea en un list box en el formulario "FormMessage":

```4d
 var $1 : Text // nombre del llamador
 var $2 : Text // mensaje a mostrar
  // recibir mensaje desde $2 y log el mensaje en list box
 $p:=OBJECT Get pointer(Object named;"Column1")
 INSERT IN ARRAY($p->;1)
 $p->{1}:=$1+" sends "+$2
```

En ejecución, obtiene el siguiente resultado:

![](../assets/en/commands/pict2896824.en.png)

Luego puede añadir otros mensajes ejecutando el comando **CALL FORM** nuevamente:

```4d
 CALL FORM(formRef1;"doAddMessage";Current process name;"Hello 2 Form 1")
 CALL FORM(formRef2;"doAddMessage";Current process name;"Hello 2 Form 2")
```

![](../assets/en/commands/pict2896833.en.png)

#### Ver también 

  
[CALL WORKER](call-worker.md)  
[DIALOG](dialog.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1391 |
| Hilo seguro | &check; |


