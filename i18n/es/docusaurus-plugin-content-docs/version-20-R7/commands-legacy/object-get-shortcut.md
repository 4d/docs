---
id: object-get-shortcut
title: OBJECT GET SHORTCUT
slug: /commands/object-get-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SHORTCUT.Syntax-->**OBJECT GET SHORTCUT** ( {* ;} *objeto* ; *tecla* ; *modificadores* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SHORTCUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| tecla | Text | &#8592; | Tecla asociada al objeto |
| modificadores | Integer | &#8592; | Máscara o combinación de máscaras de teclas de modificación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET SHORTCUT.Summary-->El comando **OBJECT GET SHORTCUT** devuelve el atajo de teclado asociado al objeto o a los objetos designados por los parámetros *objeto* y *\** en el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
El parámetro *tecla* devuelve el carácter asociado a la tecla (en el caso de una tecla estándar) o una cadena entre corchetes que designa la tecla (en el caso de una tecla función). Puede comparar este valor con las constantes del tema *Atajos de teclado* (ver el comando [OBJECT SET SHORTCUT](object-set-shortcut.md)).  
  
El parámetro *modificadores* devuelve un valor que indica la(s) tecla(s) modificadora(s) asociada(s) al atajo. Si hay varias teclas modificadoras combinadas, el comando devuelve la suma de sus valores. Puede comparar el valor recibido con las siguientes constantes, del tema *Eventos (Modificadores)*:

| Constante        | Tipo         | Valor | Comentario                                             |
| ---------------- | ------------ | ----- | ------------------------------------------------------ |
| Command key mask | Entero largo | 256   | Tecla Ctrl en Windows, Tecla Comando en OS X           |
| Control key mask | Entero largo | 4096  | Tecla Ctrl bajo OS X, o clic derecho en Windows y OS X |
| Option key mask  | Entero largo | 2048  | Tecla Alt (también llamada Opción en OS X)             |
| Shift key mask   | Entero largo | 512   | Windows y OS X                                         |
  
  
Si ninguna tecla de modificación se ha definido para el atajo, modificadores devuelve 0.  
  
**Nota**: si el parámetro *objeto* designa varios objetos del formulario que tienen diferentes configuraciones, el comando devuelve "" en *tecla* 0 en *modificadores*. 

#### Ver también 

[OBJECT SET SHORTCUT](object-set-shortcut.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1186 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


