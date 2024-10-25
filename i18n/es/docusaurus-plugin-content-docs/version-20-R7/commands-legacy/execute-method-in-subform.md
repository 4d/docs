---
id: execute-method-in-subform
title: EXECUTE METHOD IN SUBFORM
slug: /commands/execute-method-in-subform
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Syntax-->**EXECUTE METHOD IN SUBFORM** ( *objetoSubForm* ; *nomMetodo* {; *retorno* {; *param*} {; *param2* ; ... ; *paramN*}} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objetoSubForm | Text | &#8594;  | Nombre del objeto subformulario |
| nomMetodo | Object, Text | &#8594;  | Nombre del método proyecto a ejecutar |
| retorno | *, Variable | &#8594;  | * si el método no devuelve un valor |
| &#8592; | Valor devuelto por el método |
| param | Expression | &#8594;  | Parámetro(s)a pasar al método |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Summary-->El comando EXECUTE METHOD IN SUBFORM permite ejecutar el código desigando por *formula* en el contexto del subformulario *objetoSubform*.<!-- END REF-->   
  
El código llamado puede recibir llamadas 1 a X parámetros en *param* y devolver un valor en *retorno*. Pase *\** en el parámetro *retorno* si el código no devuelve parámetros. 

En *formula*, usted designa el código 4D que se ejecutará en el contexto del *objetoSubform*. Puede pasar:

* un **objeto fórmula** (ver *Objetos Fórmula*). Los objetos fórmula pueden encapsular cualquier expresión ejecutable, incluyendo funciones y métodos proyecto;
* una **cadena** que contenga el nombre de un método proyecto.

El contexto de ejecución se conserva en el código llamado, lo que significa que el formulario actual y el evento formulario actual siguen definidos. Si el subformulario proviene de un componente, el método o función llamado debe pertenecer al componente y tener la propiedad "Compartido entre los componentes y la base local".  
  
Este comando debe llamarse en el contexto del formulario padre (contiene el objeto *objetoSubForm*), por ejemplo vía el método de formulario.

**Nota:** la *formula* no se ejecuta si *objetoSubForm* no se encuentra en la página actual o si no ha sido instanciado.

#### Ejemplo 1 

Dado el formulario "ContactDetail" utilizado como subformulario en el formulario padre "Empresa". El objeto subformulario que contiene el formulario ContactDetail se llama "ContactSubform". Imagine que queremos modificar la apariencia de ciertos elementos del subformulario de acuerdo al valor de los campos de la empresa (por ejemplo, "nomcontact" debe pasar a rojo cuando \[Empresa\]Ciudad="Nueva York" y a azul cuando \[Empresa\]Ciudad="San Diego"). Este mecanismo se implementa vía el método SetToColor. Para poder obtener este resultado, el método SetToColor no puede llamarse directamente desde el proceso del evento de formulario "On Load" del formulario padre Empresa porque el objeto "contactname" no pertenece al formulario actual, sino al formulario mostrado en el objeto subformulario "ContactSubform". El método debe por lo tanto ejecutarse utilizando el comando EXECUTE METHOD IN SUBFORM para que funcione correctamente.

```4d
 Case of
    :(Form event code=On Load)
       Case of
          :([Company]City="New York")
             $Color:=$Red
          :([Company]City="San Diego")
             $Color:=$Blue
          Else
             $Color:=$Black
       End case
       EXECUTE METHOD IN SUBFORM("ContactSubform";Formula(SetToColor);*;$Color)
 End case
```

#### Ejemplo 2 

Desarrolle una base que se utilizará como componente. Incluye un formulario proyecto compartido (llamado por ejemplo Calendar) que contiene *variables dinámicas* así como también un método proyecto público que permite ajustar el calendario: SetCalendarDate(varDate).   
Si este método se utilizó directamente en el método del formulario Calendar, puede llamar directamente el evento "On Load": 

```4d
 SetCalendarDate(Current date)
```

 Pero, en el contexto de la base local, imaginemos que un formulario proyecto contiene los dos subformularios "Calendar", en los objetos subformulario llamados "Cal1" y "Cal2". Debe definir la fecha de Cal1 en 01/01/10 y la fecha de Cal2 en 05/05/10\. No puede llamar directamente a SetCalendarDate porque el método no "sabrá" que formularios y variables aplicar. Por lo tanto, debe llamarlo vía el siguiente código: 

```4d
 EXECUTE METHOD IN SUBFORM("Cal1";Formula(SetCalendarDate);*;!01/01/20!)
 EXECUTE METHOD IN SUBFORM("Cal2";Formula(SetCalendarDate);*;!05/05/20!)
```

#### Variables y conjuntos del sistema 

Si este comando se ejecuta correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0.
