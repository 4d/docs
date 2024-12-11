---
id: open-window
title: Open window
slug: /commands/open-window
displayed_sidebar: docs
---

<!--REF #_command_.Open window.Syntax-->**Open window** ( *izquierda* ; *superior* ; *derecha* ; *inferior* {; *tipo* {; *titulo* {; *casillaCerrar*}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open window.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| izquierda | Integer | &#8594;  | Coordenada global izquierda del interior de la ventana |
| superior | Integer | &#8594;  | Coordenada global superior del interior de la ventana |
| derecha | Integer | &#8594;  | Coordenada global derecha del interior de la ventana |
| inferior | Integer | &#8594;  | Coordenada global inferior del interior de la ventana |
| tipo | Integer | &#8594;  | Tipo de la ventana |
| titulo | Text | &#8594;  | Título de la ventana |
| casillaCerrar | Text | &#8594;  | Método a llamar en caso de doble clic del menú Control o de clic en la casilla Cerrar |
| Resultado | Integer | &#8592; | Número de referencia de la ventana |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Open window.Summary-->**Open window** abre una nueva ventana cuyas dimensiones son definidas por los cuatro primeros parámetros: 

* *izquierda* es la distancia en píxeles desde el lado izquierdo de la ventana de la aplicación y el costado interior izquierdo de la ventana.<!-- END REF-->
* *superior* es la distancia en píxeles entre la altura de la ventana de la aplicación y el borde superior del interior de la ventana.
* *derecha* es la distancia en píxeles entre el lado izquierdo de la ventana de la aplicación y el costado interior derecho de la ventana.
* *inferior* es la distancia en píxeles desde la parte superior de la ventana de la aplicación y borde interior inferior de la ventana.

**Nota de compatibilidad**: **Open window** integra diferentes opciones que han evolucionado a través de las versiones y ahora sólo se conserva por razones de compatibilidad. Cuando se escribe nuevo código para la gestión de ventanas, por lo general es más práctico utilizar el comando [Open form window](open-form-window.md), que se adapta mejor a las interfaces actuales.

Si pasa -1 en *derecha* e *inferior,* le indica a 4D que redimensione automáticamente la ventana si se cumplen las siguientes condiciones:

* Usted ha diseñado un formulario y definido sus opciones de redimensionamiento en la ventana de propiedades del formulario en el entorno Diseño
* Antes de llamar **Open window**, usted seleccionó el formulario utilizando el comando [FORM SET INPUT](form-set-input.md), al cual pasó el parámetro opcional *\**.

**Importante:** este dimensionamiento automático de la ventana ocurrirá únicamente si realiza una llamada previa a [FORM SET INPUT](form-set-input.md) para el formulario a mostrar en la ventana y si le pasa el parámetro opcional \* a [FORM SET INPUT](form-set-input.md).

* El parámetro *tipo* es opcional y define el tipo de ventana que quiere mostrar, y corresponde a las diferentes ventanas presentadas en la sección . Si el tipo pasado es negativo, la ventana será flotante. Si el tipo no se especifica, el tipo 1 se utiliza por defecto.
* El parámetro *titulo* indica el título opcional de la ventana

Si pasa una cadena vacía ("") en *titulo,* le indica a 4D que utilice los valores de introducidos en el área Nombre de la ventana de la ventana de Propiedades del formulario en el entorno Diseño para el título del formulario a mostrar en la ventana. 

**Importante:** el título por defecto del formulario se aplicará a la ventana únicamente se llama previamente al comando [FORM SET INPUT](form-set-input.md) para el formulario a mostrar y le pasa el parámetro opcional \* a [FORM SET INPUT](form-set-input.md).

* El parámetro *casillaCerrar* es opcional y designa el método para cerrar la ventana. Si se especifica este parámetro, la casilla del menú Control (Windows) o la casilla Cerrar (Macintosh) se añade a la ventana. Cuando el usuario hace doble clic en la casilla de menú Control (Windows) o clic en la Casilla cerrar (Macintosh), se llama al método pasado en *casillaCerrar*.

**Nota:** también puede administrar el cierre de la ventana desde el método del formulario mostrado en la ventana cuando ocurre un evento On Close Box. Para mayor información, consulte el comando [Form event code](form-event-code.md).

Si se abre más de una ventana para un proceso, la última ventana abierta es la ventana activa (del primer plano) para ese proceso. Sólo puede modificarse la información dentro de la ventana activa. Todas las demás ventanas pueden ser visualizadas. Cuando el usuario digita, la ventana activa siempre pasará al primer plano, si aún no está ahí.

Los formularios se muestran al interior de una ventana abierta. El texto pasado al comando [MESSAGE](message.md) también aparece en la ventana.

**Open window** devuelve una referencia de ventana de tipo [WinRef](# "Unique ID (Longint) of each open window"), utilizable por los comandos de gestión de ventanas (ver la sección "*WinRef*"). 

#### Ejemplo 1 

El siguiente método de proyecto abre una ventana centrada en la ventana en la ventana principal (Windows) o en la pantalla principal (Macintosh). Note que puede aceptar dos, tres, o cuatro parámetros:

```4d
  // Método de proyecto OPEN CENTERED WINDOW
  // $1 – Ancho de la ventana
  // $2 – Alto de la ventana
  // $3 – Tipo de la ventana (opcional)
  // $4 – Título de la ventana (opcional)
 $SW:=Screen width\2
 $SH:=(Screen height\2)
 $WW:=$1\2
 $WH:=$2\2
 Case of
    :(Count parameters=2)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)
    :(Count parameters=3)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3)
    :(Count parameters=4)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3;$4)
 End case
```

Una vez escrito el método de proyecto, puede utilizarlo de esta forma:

```4d
 OPEN CENTERED WINDOW(400;250;Movable dialog box;"Actualizar archivos")
 DIALOG([Tabla de herramientas];"UPDATE OPTIONS")
 CLOSE WINDOW
 If(OK=1)
  // ...
 End if
```

#### Ejemplo 2 

El siguiente ejemplo abre una ventana flotante que tiene un casilla de menú Control (Windows) o una casilla de cerrar (Macintosh). La ventana se abre en la esquina superior derecha de la ventana de la aplicación.  
  
```4d
 $myWindow:=Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"CloseColorPalette")
 DIALOG([Dialogs];"Color Palette")
```

El método CloseColorPalette llama al comando [CANCEL](cancel.md):

```4d
 CANCEL
```

  
#### Ejemplo 3 

El siguiente ejemplo abre una ventana cuyo tamaño y título provienen de las propiedades del formulario mostrado en la ventana:   
  
```4d
 ORM SET INPUT([Customers];"Add Records";*)
 $myWindow:=Open window(10;80;-1;-1;Plain window;"")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```
  
  
**Recuerde**: para que la función **Open window** utilice automáticamente las propiedades del formulario, debe llamar a [FORM SET INPUT](form-set-input.md) con el parámetro opcional *\** y las propiedades del formulario deben haber sido definidas en función de esta utilización en el entorno Diseño.

#### Ejemplo 4 

Este ejemplo ilustra el mecanismo de “retraso” de mostrar ventanas bajo Mac OS X:

```4d
 $miVentana:=Open window(10;10;400;400;Sheet window)
  //Por el momento, se crea la ventana pero permanece oculta
 DIALOG([Tabla];"formDial")
  //El evento On Load se genera luego se muestra la ventana; "desciende" de debajo de la barra de título
```

#### Ver también 

[CLOSE WINDOW](close-window.md)  
*Crear ventana*  
[Open form window](open-form-window.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 153 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


