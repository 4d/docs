---
id: ldap-search-all
title: LDAP SEARCH ALL
slug: /commands/ldap-search-all
displayed_sidebar: docs
---

<!--REF #_command_.LDAP SEARCH ALL.Syntax-->**LDAP SEARCH ALL** ( *dnRootEntry* ; *arrResultado* ; *filtro* {; *escopo* {; *atributos* {; *atributosComoArray*}}} )<!-- END REF-->
<!--REF #_command_.LDAP SEARCH ALL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | o Distinguished Name do diretório raiz onde a pesquisa começará |
| arrResultado | Object array | &#8592; | Resultado da pesquisa |
| filtro | Text | &#8594;  | filtro de pesquisa LDAP |
| escopo | Text | &#8594;  | Escopo da pesquisa "base" (padrão), "one", ou "sub" |
| atributos | Text array | &#8594;  | Atributos da pesquisa |
| atributosComoArray | Boolean array | &#8594;  | True = força os atributos a serem retornados como um array, false = força os atributos a serem retornados como uma variável simples |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LDAP SEARCH ALL.Summary-->O comando **LDAP SEARCH ALL** encontra todas as ocorrências que correspondem aos critérios definidos no servidor LDAP objetivo.<!-- END REF--> Este comando deve ser executado dentro de uma conexão com um servidor LDAP aberto com *LDAP LOGIN*; caso contrário, um erro 1003 é retornado.  
  
Lembre que os servidores LDAP geralmente impõem um número máximo de entradas que podem ser recebidas a partir de uma pesquisa. Por exemplo, o diretório de Microsoft Active limita esse número para 1.000 entradas como padrão.

Em *dnRootEntry*, passe o *Distinguished Name* do elemento raiz do servidor LDAP; a pesquisa irá recomeçar a partir deste elemento.  
  
Em *tabResult*, passe um objeto array que será preenchido com todas as entradas correspondentes; nesse array, cada elemento é um objeto que contém os pares atributo / valor retornados por uma entrada correspondente. Você pode usar o parâmetro *atributos* para definir os parâmetros devolvidos.  
  
Em *filtro*, passar o filtro de pesquisa LDAP a ser aplicado. A string filtro deve ser [rfc2225](http://tools.ietf.org/search/rfc2254) compatível. Você pode passar uma string vazia "" para não filtrar a pesquisa; o "\*" é suportado para encontrar substrings.  
  
Em *escopo* (escopo do aplicativo), passar uma das seguintes constantes do tema "LDAP":

| **Constante**      | **Tipo** | **Valor** | **Comentario**                                                                                         |
| ------------------ | -------- | --------- | ------------------------------------------------------------------------------------------------------ |
| LDAP root only     | Texto    | "base"    | Procurar só no elemento raíz definido por *dnRootEntry* (por padrão se for omitido)                    |
| LDAP root and next | Texto    | "one"     | Buscar no elemento la raíz definido por *dnRootEntry* e nas entradas posteriores diretamente nun nivel |
| LDAP all levels    | Texto    | "sub"     | Buscar no elemento raíz definido por *dnRootEntry* e em todas as entradas posteriores                  |

Em *atributos*, passar um array de texto que contém a lista de todos os atributos LDAP para recuperar a partir das entradas encontradas. Por padrão, se o parâmetro for omitido, todos os atributos são recuperados.  
  
**Nota**: Por favor, note que os nomes dos atributos LDAP diferenciam entre maiúsculas e minúsculas. Para mais informações sobre os atributos LDAP, você pode consultar [esta página](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) que lista todos os atributos disponíveis para MS Active directory.

Como padrão, o comando retorna atributos como uma array se forem encontrados vários resultados, ou como uma variável, se for um único resultado. Parâmetros opcionais *atributosEmArray* permitem "forçar" o formato dos atributos retornados em um array ou como uma variável para cada atributo definido:  
  
* Quando você passar **true** em um item, o elemento correspondente do parâmetro *atributos* será devolvido em um array. Se houver um único valor, o comando retorna um array com um único elemento.
* Quando você passar **false** em um item, o elemento correspondente do parâmetro *atributos* será devolvido em uma variável simples. Se forem encontradas várias entradas, o comando retorna apenas o primeiro elemento.

#### Exemplo 1 

Queremos obter o número de telefone de todos os usuários com nome "smith" no diretório da empresa:

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
 
 
  //$_entry conterá por exemplo
  // $_entry{1} = {"cn":"John Smith","telephoneNumber":"01 40 87 00 00"}
  // $_entry{2} = {"cn":"Adele Smith","telephoneNumber":"01 40 87 00 01"}
  // $_entry{3} = {"cn":"Adrian Smith","telephoneNumber":"01 23 45 67 89"}
  // ...
```

#### Exemplo 2 

Estes exemplos ilustram o uso do parâmetro *atributosEmArray*:

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
  // em $_arrMemberOf temos um array que contém todos os grupos da entrada
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
  // em $memberOf temos uma variável que contém o primeiro grupo da entrada
```

#### Ver também 

*LDAP*  
[LDAP Search](ldap-search.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1329 |
| Thread-seguro | &cross; |


