---
id: count-parameters
title: Count parameters
slug: /commands/count-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Count parameters.Syntax-->**Count parameters**  : Integer<!-- END REF-->
<!--REF #_command_.Count parameters.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de parámetros efectivamente pasados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Count parameters.Summary-->El comando Count parameters devuelve el número de parámetros pasados a un método de proyecto.<!-- END REF-->

**Advertencia:** Count parameters es significativo sólo en un método de proyecto que haya sido llamado por otro método (método de proyecto u otro). Si el método de proyecto que llama Count parameters está asociado a un menú, Count parameters devuelve 0.

#### Ejemplo 1 

Los métodos de proyecto de 4D aceptan parámetros opcionales, a partir de la derecha.  
Por ejemplo, puede llamar al método MiMetodo(a;b;c;d) de las siguientes formas:

```4d
 MiMetodo(a;b;c;d) // Todos los parámetros se pasan
 MiMetodo(a;b;c) // El último parámetro no se pasa
 MiMetodo(a;b) // Los dos últimos parámetros no se pasan
 MiMetodo(a) // Sólo se pasa el primer parámetro
 MiMetodo // No se pasa ningún parámetro
```

Utilizando Count parameters desde MiMetodo, puede detectar el número de parámetros pasados y efectuar diferentes operaciones dependiendo de lo que haya recibido. El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un área 4D Write o enviar el texto a un documento en disco:

```4d
  // Método de proyecto AGREGAR TEXTO
  // AGREGAR TEXTO ( Texto { ; Entero largo { ; Hora } } )
  // AGREGAR TEXT ( Texto { ; Área 4D Write { ; RefDoc } } )
 
 var $1 : Text
 var $2 : Time
 var $3 : Integer
 
 MESSAGE($1)
 If(Count parameters>=3)
    SEND PACKET($3;$1)
 Else
    If(Count parameters>=2)
       WR INSERT TEXT($2;$1)
    End if
 End if
```

Después de añadir este método de proyecto a su aplicación, puede escribir:

```4d
 AGREGAR TEXTO(vtText) // Mostrar sólo el mensaje de texto
 AGREGAR TEXTO(vtText;$wrArea) // Mostrar el mensaje de texto y añadir el texto a $wrArea
 AGREGAR TEXTO(vtText;0;$vhRefDoc) // Mostrar el mensaje de texto y escribirlo en $vhDocRef
```

#### Ejemplo 2 

Los métodos de proyecto de 4D aceptan un número variable de parámetros del mismo tipo, a partir de la derecha. Para declarar estos parámetros, utilice las directivas de compilación a las cuales usted pasa *${N}* como una variable, donde N especifica el primer parámetro. Utilizando Count parameters puede referenciar estos parámetros con un bucle For y la sintaxis de indirección de parámetro. Este ejemplo es una función que devuelve el número más grande recibido como parámetro:

```4d
  // Método de proyecto Max de
  // Max de ( Real { ; Real2... ; RealN } ) -> Real
  // Max de ( Valor { ; Valor2... ; ValorN } ) -> Valor máximo
 
 var $0;${1} : Real // Todos los parámetros son de tipo REAL así como el resultado de la función
 $0:=${1}
 For($vlParam;2;Count parameters)
    If(${$vlParam}>$0)
       $0:=${$vlParam}
    End if
 End for
```

Después de añadir este método de proyecto a su aplicación, puede escribir:

```4d
 vrResult:=Max of(Records in set("Operación A");Records in set("Operación B"))
```

o:

```4d
 vrResult:=Max of(r1;r2;r3;r4;r5;r6)
```

#### Ver también 

*Comandos del Compilador*  
[Copy parameters](copy-parameters.md)  