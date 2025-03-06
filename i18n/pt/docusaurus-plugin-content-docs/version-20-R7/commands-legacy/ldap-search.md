---
id: ldap-search
title: LDAP Search
slug: /commands/ldap-search
displayed_sidebar: docs
---

<!--REF #_command_.LDAP Search.Syntax-->**LDAP Search** ( *dnRootEntry* ; *filtro* {; *escopo* {; *atributos* {; *atributoComoArray*}}} ) : Object<!-- END REF-->
<!--REF #_command_.LDAP Search.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Nome distinto da root entry onde a pesquisa começa |
| filtro | Text | &#8594;  | Filtro de pesquisa LDAP |
| escopo | Text | &#8594;  | Escopo da pesquisa: "base" (padrão), "one", ou "sub" |
| atributos | Text array | &#8594;  | Atributos a capturar |
| atributoComoArray | Boolean array | &#8594;  | True= força atributos a ser retornados como array, False = força atributos a ser retornados como uma variável simples |
| Resultado | Object | &#8592; | Atributos Chave/Valor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LDAP Search.Summary-->O comando **LDAP Search** encontra a primeira ocorrência que corresponde aos critérios definidos no servidor LDAP alvo.<!-- END REF--> Este comando deve ser executado em uma conexão com um servidor LDAP aberta com [LDAP LOGIN](ldap-login.md); caso contrário, é devolvido um erro 1003.  
  
Em *dnRootEntry*, passar o *Distinguished Name* do elemento raiz do servidor LDAP; a pesquisa irá recomeçar a partir deste elemento.  
  
*em Filtro*, passar o filtro de pesquisa LDAP para aplicar. A string de filtro deve ser compatível com [rfc2225](http://tools.ietf.org/search/rfc2254). Você pode passar uma string vazia "" para não filtrar a pesquisa; o "\*" é suportado para procurar substrings.

Em *escopo*, passe uma das seguintes constantes do tema "LDAP":  
  
| Constante          | Tipo   | Valor | Comentário                                                                                                  |
| ------------------ | ------ | ----- | ----------------------------------------------------------------------------------------------------------- |
| LDAP all levels    | Cadeia | sub   | Procurar no diretório raiz definido por *dnRootEntry* e em todos os ramos subdiretórios seguintes           |
| LDAP root and next | Cadeia | one   | Procura no nível de entrada raiz definido por *dnRootEntry* e nas entradas diretamente posteriores ao nível |
| LDAP root only     | Cadeia | base  |                                                                                                             |

Em *atributos*, passe um array texto que contenha a lista de todos os atributos LDAP a recuperar a partir das entradas encontradas. Como padrão, se for omitido este parâmetro, todos os atributos se recuperam.

**Nota:** lembre que os nomes de atributos LDAP distinguen entre maiúsculas e minúsculas. Para mais informação sobre os atributos LDAP, pode consultar [esta página](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) que lista todos os atributos disponíveis para MS Active directory.

Como padrão, o comando retorna atributos como um array se se encontram vários resultados, ou como uma variável se for encontrado um só resultado. Os parâmetros opcionais *atributosEmArray* permitem "forçar" o formato dos atributos retornados num array ou como uma variável para cada atributo definido:

* Quando passar **true** em um elemento, o elemento correspondente do parâmetro *atributos* será retornado em um array. Se for encontrado um único valor, o comando devolve um array com um só elemento.
* Quando passar **false** em um elemento, o elemento correspondente do parâmetro *atributos* será retornado em uma variável simples. Se forem encontradas várias entradas, o comando devolve só o primeiro elemento.

#### Exemplo 1 

Se deseja conseguir o número de telefone do usuário "smith" no diretório da empresa:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN($url;$dn;$pwd)
 $filter:="cn=*smith*"
 $vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
```

#### Exemplo 2 

Queremos obter um array de todas as entradas que se encontram no atributo "memberOf":

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
  // em $_arrMemberOf temos um array que contém todos os grupos da entrada
```

#### Ver também 

*LDAP*  
[LDAP SEARCH ALL](ldap-search-all.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1328 |
| Thread-seguro | &cross; |


