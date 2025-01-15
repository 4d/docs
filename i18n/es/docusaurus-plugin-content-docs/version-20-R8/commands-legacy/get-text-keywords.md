---
id: get-text-keywords
title: GET TEXT KEYWORDS
slug: /commands/get-text-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET TEXT KEYWORDS.Syntax-->**GET TEXT KEYWORDS** ( *texto* ; *arrPalabrasClaves* {; *} )<!-- END REF-->
<!--REF #_command_.GET TEXT KEYWORDS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto original |
| arrPalabrasClaves | Text array | &#8592; | Array que contiene las palabras claves |
| * | Operador | &#8594;  | Si se pasa = palabras únicas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET TEXT KEYWORDS.Summary-->El comando **GET TEXT KEYWORDS** divide todo el *texto* en palabras individuales y crea, para cada palabra obtenida, un elemento en el array texto *arrPalabrasClaves* para cada palabra.<!-- END REF-->  
  
4D utiliza el mismo algoritmo para dividir el texto en palabras individuales que utiliza para crear los *Índice de palabras claves*. Este algoritmo está basado en la librería ICU. Para más información sobre cómo se separa un texto en palabras, consulte la siguiente dirección: <http://userguide.icu-project.org/boundaryanalysis>.

**Nota**: por petición de los usuarios, se introdujo una excepción para el francés y el italiano: el apóstrofe (') seguido por una vocal o la letra "h" se considera como un separador de palabra. Por ejemplo, las cadenas "L'homme" o "l'arbre" se dividen en "L’"+"homme" y "l'"+"arbre".  
  
El algoritmo utilizado difiere si la opción **Considerar sólo caracteres no alfanuméricos para las palabras claves** está seleccionada en las [propiedades de la base](../settings/database.md#comparación-de-texto).  
  
En el parámetro *texto*, pase el texto original a dividir en palabras. Este texto puede tener estilo, en cuyo caso las etiquetas de estilo se ignoran.   
  
Para el parámetro *arrPalabrasClaves*, el comando llena este array texto con las palabras extraídas del texto.   
  
Si pasa el parámetro opcional *\**, el comando sólo almacena cada palabra diferente una vez en *arrPalabrasClaves*. Por defecto, si este parámetro se omite, todas las palabras extraídas del texto se guardan en el array, incluso si aparecen varias veces.  
  
Este comando permite efectuar de manera simple las búsquedas entre los registros que contienen grandes cantidades de texto garantizando utilizar las mismas palabras claves que 4D. Por ejemplo, imagine que tiene un texto que contiene "10,000 Jean-Pierre BC45". Si este texto se divide en las palabras claves "10,000" + "Jean-Pierre" + "BC45", el array contendrá 4 elementos. Entonces es fácil hacer un bucle en este array para encontrar los registros que contienen una o más de estas palabras clave utilizando el operador % (ver ejemplos).

#### Ejemplo 1 

En un formulario que contiene un área de búsqueda, los usuarios pueden introducir una o más palabras. Cuando un usuario valida este formulario, buscamos los registros cuyo campo *Micampo* contenga al menos una de las palabras claves introducidas por el usuario.   

```4d
  // vSearch es la variable del área de búsqueda en el formulario
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
  //* en el caso de que un usuario introduzca la misma palabra más de una vez
 CREATE SET([MiTabla];"Totalfound")
 $n:=Size of array(arrSearch)
 For($i;1;$n)
    QUERY([MiTabla];[MiTabla]MiCampo % arrSearch{$i})
    CREATE SET(([MiTabla];"encontrado")
    UNION("Totalfound";"encontrado";"Totalfound")
 End for
 USE SET("Totalfound")
```

#### Ejemplo 2 

En el mismo formulario que antes, buscamos los registros donde el campo *MiCampo* contenga todas las palabras claves introducidas por el usuario.

```4d
  // vSearch es la variable del área de entrada en el formulario
 GET TEXT KEYWORDS(vSearch;arrSearch;*)
 $n:=Size of array(arrSearch)
 QUERY([MiTabla];[MiTabla]MiCampo >=0;*)
  // inicializar la búsqueda = todos los registros
 For($i;1;$n)
    QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)
  // añadir el criterio
 End for
 QUERY([MiTabla]) //búsqueda
```

#### Ejemplo 3 

Para contar las palabras de un texto:

```4d
 GET TEXT KEYWORDS(vText;arrWords) // todas las palabras
 $n:=Size of array(arrWords)
 GET TEXT KEYWORDS(vText;arrWords;*) // palabras diferentes
 $m:=Size of array(arrWords)
 ALERT("Este texto contiene "+String($n)+" palabras de "+String($m))
```

#### Ver también 

[DISTINCT VALUES](distinct-values.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1141 |
| Hilo seguro | &check; |


