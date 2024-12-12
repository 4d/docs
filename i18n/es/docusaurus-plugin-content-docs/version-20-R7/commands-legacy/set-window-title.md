---
id: set-window-title
title: SET WINDOW TITLE
slug: /commands/set-window-title
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW TITLE.Syntax-->**SET WINDOW TITLE** ( *titulo* {; *ventana*} )<!-- END REF-->
<!--REF #_command_.SET WINDOW TITLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| titulo | Text | &#8594;  | Título de la ventana |
| ventana | Integer | &#8594;  | Número de referencia de ventana o Ventana del primer plano del proceso actual si se omite el parámetro |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET WINDOW TITLE.Summary-->El comando SET WINDOW TITLE cambia el título de la ventana cuyo número de referencia se pasa en *ventana* para el texto pasado en *titulo* (longitud máxima 80 caracteres).<!-- END REF--> 

Si la ventana no existe, SET WINDOW TITLE no hace nada. 

Si omite el parámetro *ventana*, SET WINDOW TITLE reemplaza el título de la ventana del primer plano del proceso actual.

**Nota:** en el entorno Diseño, 4D define automáticamente los títulos de las ventanas, por ejemplo, “Entrada para tabla 1” cuando realiza una entrada de datos. Si cambia un título de ventana, es probable que 4D lo sobrescriba. Por otra parte, en el entorno Aplicación, 4D no cambia los títulos de las ventanas.

#### Ejemplo 

Mientras efectúa una entrada de datos en un formulario, usted hace clic en un botón que ejecuta una operación larga (por ejemplo, una modificación por programación de los registros relacionados mostrados en un subformulario). Puede mantenerse informado sobre el progreso de la operación utilizando el título de la ventana actual:

```4d
  // Método de objeto del botón bAnalisis
 Case of
    :(FORM Event=On Clicked)
  // Guardar el título actual de la ventana en una variable
       $vsTituloActual:=Get window title
  // Iniciar la operación larga
       FIRST RECORD([Lineas factura])
       For($vlRegistro;1;Records in selection([Lineas factura]))
          HACER ALGO
  // Mostrar el progreso
          SET WINDOW TITLE("Procesando la línea #"+String($vlRegistro))
       End for
  // Restaurar el título original de la ventana
       SET WINDOW TITLE($vsTituloActual)
 End case
```

#### Ver también 

[Get window title](get-window-title.md)  