---
id: form-set-entry-order
title: FORM SET ENTRY ORDER
slug: /commands/form-set-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET ENTRY ORDER.Syntax-->**FORM SET ENTRY ORDER** ( *nomObjetos* {; *numPag*} )<!-- END REF-->
<!--REF #_command_.FORM SET ENTRY ORDER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomObjetos | Text array | &#8594;  | Array de nombres de objetos en su orden de entrada esperado |
| numPag | Integer | &#8594;  | Número de la página para definir el orden de entrada (página actual si se omite) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM SET ENTRY ORDER.Summary-->El comando **FORM SET ENTRY ORDER** permite definir dinámicamente el orden de entrada del formulario actual para el proceso actual basado en el array *nomObjetos*.<!-- END REF--> 

Pase en *nomObjetos* un array que contenga los nombres de los objetos de formulario a incluir en el orden de entrada. El orden de los objetos en el array define el orden de entrada del formulario. Todo objeto de formulario válido perteneciente al formulario actual puede ser listado. Un objeto es válido si:

* tiene la propiedad enfocable (**Nota**: el comando ignora la propiedad **Tabulable** de los objetos),
* existe en el formulario (su nombre está definido),
* se utiliza en la página actual (o en la página *numPag*, ver abajo). Tenga en cuenta que una página de formulario incluye los objetos de la página 0 y los objetos del formulario heredado.

Si se detecta un objeto no válido en tiempo de ejecución, simplemente se omite y 4D intentará utilizar el siguiente objeto válido en el array *nomObjetos*. Puede conocer el orden de entrada actual de la página actual (basada en objetos válidos) utilizando el comando [FORM GET ENTRY ORDER](form-get-entry-order.md) con el parámetro \*. 

Opcionalmente, puede pasar el *numPag* para el cual definir el orden de entrada. Si se omite, el comando se aplica a la página actual.

**Notas:** 

* El orden de entrada de un subformulario se define en el propio subformulario. Debe llamar al comando **FORM SET ENTRY ORDER** en el contexto del subformulario.
* Este comando no define el primer objeto enfocable en el formulario en tiempo de ejecución. Si desea definir un primer objeto en el orden de entrada, debe utilizar el comando [GOTO OBJECT](goto-object.md) en el evento On Load del formulario. Si utilizó el comando [OBJECT DUPLICATE](object-duplicate.md), puede definir el objeto duplicado como el primero pasando la constante Object First in entry order en el parámetro *ligadoA*.

  
**Acerca del orden de entrada de los datos**  
El orden de entrada de los datos es el orden en que se seleccionan los campos, subformularios y todos los demás objetos activos cuando el usuario toca la teclae **Tab** o **Retorno de carro** en un formulario. El orden inverso de entrada de datos también está disponible presionando las teclas **Mayús +Tab** o **Mayús +** **Retorno de carro**. El orden de entrada puede definirse por defecto o modificarse en el editor de formularios. Para más información, consulte la sección *Modificar el orden de entrada de los datos* del manual de *Diseño*.

#### Ejemplo 

Usted desea definir el orden de entrada de los objetos en el formulario basado en sus nombres:

```4d
 ARRAY TEXT(tabNames;0)
 
 FORM GET OBJECTS(tabNames;Form current page+Form inherited) //obtenemos los nombres de los objeto del formulario
 SORT ARRAY(tabNames;>) //clasifica los nombres en orden ascendente
 FORM SET ENTRY ORDER(tabNames) //utiliza el orden alfabético para el orden de entrada
  //se ignoran los objetos no enfocables
```

#### Ver también 

[FORM GET ENTRY ORDER](form-get-entry-order.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1468 |
| Hilo seguro | &cross; |


