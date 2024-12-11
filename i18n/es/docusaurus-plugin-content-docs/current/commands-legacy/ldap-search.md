---
id: ldap-search
title: LDAP Search
slug: /commands/ldap-search
displayed_sidebar: docs
---

<!--REF #_command_.LDAP Search.Syntax-->**LDAP Search** ( *dnRootEntry* ; *filtro* {; *alcance* {; *atributos* {; *atributosEnArray*}}} ) : Object<!-- END REF-->
<!--REF #_command_.LDAP Search.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Distinguished Name del elemento raíz donde la búsqueda se inicia |
| filtro | Text | &#8594;  | Filtro de búsqueda LDAP |
| alcance | Text | &#8594;  | Campo de acción de la búsqueda: "base" (por defecto), "one", o "sub" |
| atributos | Text array | &#8594;  | Atributo(s) a recuperar |
| atributosEnArray | Boolean array | &#8594;  | True = forzar el retorno de los atributos como array; False = forzar el retorno de los atributos como una variable simple |
| Resultado | Object | &#8592; | Atributos llave/valor |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LDAP Search.Summary-->El comando **LDAP Search** busca la primera ocurrencia que coincida con los criterios definidos en el servidor LDAP objetivo.<!-- END REF--> Este comando debe ser ejecutado dentro de una conexión a un servidor LDAP abierta con *RuntimeVLIncludeIt*; de lo contrario se devuelve un error 1003.

En *dnRootEntry*, pase el *Distinguished Name* del elemento raíz del servidor LDAP; la búsqueda se iniciará a partir de este elemento.

En *filtro*, pase el filtro de búsqueda LDAP a aplicar. La cadena filtro debe ser compatible con [rfc2225](http://tools.ietf.org/search/rfc2254). Puede pasar una cadena vacía "" para no filtrar la búsqueda; el "\*" se soporta para buscar subcadenas.

En *alcance*, pase una de las siguientes constantes del tema "LDAP":

| Constante          | Tipo   | Valor | Comentario                                                                                                           |
| ------------------ | ------ | ----- | -------------------------------------------------------------------------------------------------------------------- |
| LDAP all levels    | Cadena | sub   | Buscar en el elemento raíz definido por *dnRootEntry* y en todas las ramas siguientes                                |
| LDAP root and next | Cadena | one   | Buscar en el nivel de entrada raíz definido por *dnRootEntry* y en las entradas directamente posteriores en un nivel |
| LDAP root only     | Cadena | base  | Buscar únicamente en el elemento raíz definido por *dnRootEntry* (se omite por defecto)                              |

En *atributos*, pase un array texto que contiene la lista de todos los atributos LDAP a recuperar a partir de las entradas encontradas. Por defecto, si se omite este parámetro, todos los atributos se recuperan.

**Nota:** tenga en cuenta que los nombres de atributos LDAP distinguen entre mayúsculas y minúsculas. Para más información sobre los atributos LDAP, puede consultar [esta página](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) que lista todos los atributos disponibles para MS Active directory.

Por defecto, el comando devuelve los atributos en forma de colección si se encuentran varios resultados o en forma de variable si se encuentra un solo resultado. El parámetro opcional *atributosEnArray* permite "forzar" el formato de los atributos devueltos en colección o en variable para cada atributo definido:

* Cuando pase **true** en un elemento, el elemento correspondiente del parámetro *atributos* será devuelto en una colección. Si se encuentra un solo valor, el comando devuelve una colección con un solo elemento.
* Cuando pase **false** en un elemento, el elemento correspondiente del parámetro *atributos* será devuelto en una variable simple. Si se encuentran varias entradas, el comando devuelve sólo el primer elemento.

#### Ejemplo 1 

Usted desea conseguir el número de teléfono del usuario "smith" en el directorio de la empresa:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN($url;$dn;$pwd)
 $filter:="cn=*smith*"
 $vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
```

#### Ejemplo 2 

Queremos obtener una array de todas las entradas que se encuentran en el atributo "memberOf":

```4d
 var $entry : Object
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 $entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($entry;"memberOf";$_arrMemberOf)
  // en $_arrMemberOf tenemos un array que contiene todos los grupos de la entrada
```

#### Ver también 

*LDAP*  
[LDAP SEARCH ALL](ldap-search-all.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1328 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


