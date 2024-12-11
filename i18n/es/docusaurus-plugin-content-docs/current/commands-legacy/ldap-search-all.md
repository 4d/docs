---
id: ldap-search-all
title: LDAP SEARCH ALL
slug: /commands/ldap-search-all
displayed_sidebar: docs
---

<!--REF #_command_.LDAP SEARCH ALL.Syntax-->**LDAP SEARCH ALL** ( *dnRootEntry* ; *arrResult* ; *filtro* {; *alcance* {; *atributos* {; *atributosenArray*}}} )<!-- END REF-->
<!--REF #_command_.LDAP SEARCH ALL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Distinguished Name del elemento raíz donde iniciar la búsqueda |
| arrResult | Object array | &#8592; | Resultado de la búsqueda |
| filtro | Text | &#8594;  | Filtro de búsqueda LDAP |
| alcance | Text | &#8594;  | Alcance de la búsqueda: "base" (por defecto), "one", o "sub" |
| atributos | Text array | &#8594;  | Atributos a recuperar |
| atributosenArray | Boolean array | &#8594;  | True = forzar el retorno de los atributos como array; false = forzar el retorno de los atributos como variables simples |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LDAP SEARCH ALL.Summary-->El comando **LDAP SEARCH ALL** busca todas las ocurrencias que coinciden con los criterios definidos en el servidor LDAP objetivo.<!-- END REF--> Este comando debe ser ejecutado dentro de una conexión a un servidor LDAP abierta con *LDAP LOGIN*; de lo contrario se devuelve un error 1003.

Tenga en cuenta que los servidores LDAP generalmente imponen un número máximo de entradas que se pueden recibir de una búsqueda. Por ejemplo, el directorio de Microsoft Active limita este número a 1.000 entradas por defecto.

En *dnRootEntry*, pase el *Distinguished Name* del elemento raíz del servidor LDAP; la búsqueda se iniciará a partir de este elemento.

En *tabResult*, pase un array objeto que se llenará con todas las entradas coincidentes; en este array, cada elemento es un objeto que contiene los pares atributo/valor devueltos por una entrada coincidente. Puede utilizar el parámetro *atributos* para definir los parámetros a devolver. 

En *filtro*, pase el filtro de búsqueda LDAP a aplicar. La cadena filtro debe ser compatible con [rfc2225](http://tools.ietf.org/search/rfc2254). Puede pasar una cadena vacía "" para no filtrar la búsqueda; el "\*" se soporta para buscar subcadenas.

En *alcance*, pase una de las siguientes constantes del tema "LDAP":

| **Constante**      | **Tipo** | **Valor** | **Comentario**                                                                                                  |
| ------------------ | -------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| LDAP root only     | Texto    | "base"    | Buscar sólo en el elemento raíz definido por *dnRootEntry* (por defecto si se omite)                            |
| LDAP root and next | Texto    | "one"     | Buscar en el elemento la raíz definido por *dnRootEntry* y en las entradas posteriores directamente en un nivel |
| LDAP all levels    | Texto    | "sub"     | Buscar en el elemento raíz definido por *dnRootEntry* y en todas las entradas posteriores                       |

En *atributos*, pase un array texto que contiene la lista de todos los atributos LDAP a recuperar a partir de las entradas encontradas. Por defecto, si se omite este parámetro, todos los atributos se recuperan.

**Nota:** tenga en cuenta que los nombres de atributos LDAP distinguen entre mayúsculas y minúsculas. Para más información sobre los atributos LDAP, puede consultar [esta página](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) que lista todos los atributos disponibles para MS Active directory.

Por defecto, el comando devuelve atributos como un array si se encuentran varios resultados, o como una variable si se encuentra un solo resultado. Los parámetros opcionales *atributosEnArray* permiten "forzar" el formato de los atributos devueltos en un array o como una variable para cada atributo definido:

* Cuando pase **true** en un elemento, el elemento correspondiente del parámetro *atributos* será devuelto en un array. Si se encuentra un solo valor, el comando devuelve un array con un solo elemento.
* Cuando pase **false** en un elemento, el elemento correspondiente del parámetro *atributos* será devuelto en una variable simple. Si se encuentran varias entradas, el comando devuelve sólo el primer elemento.

#### Ejemplo 1 

Queremos obtener el número de teléfono de todos los usuarios con nombre "smith" en el directorio de la empresa:

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"telephoneNumber")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 ARRAY OBJECT($_entry;0)
 
 LDAP LOGIN($url;$myLogin;$pwd)
 $filter:="cn=*smith*"
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
 
 
  //$_entry contendrá por ejemplo
  // $_entry{1} = {"cn":"John Smith","telephoneNumber":"01 40 87 00 00"}
  // $_entry{2} = {"cn":"Adele Smith","telephoneNumber":"01 40 87 00 01"}
  // $_entry{3} = {"cn":"Adrian Smith","telephoneNumber":"01 23 45 67 89"}
  // ...
```

#### Ejemplo 2 

Estos ejemplos ilustran el uso del parámetro *atributosEnArray*:

```4d
 ARRAY OBJECT($_entry;0)
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($_entry{1};"memberOf";$_arrMemberOf)
  // en $_arrMemberOf tenemos un array que contiene todos los grupos de la entrada
```

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 $memberOf:=OB Get($_entry{1};"memberOf")
  // en $memberOf tenemos una variable que contiene el primer grupo de la entrada
```

#### Ver también 

*LDAP*  
[LDAP Search](ldap-search.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1329 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


