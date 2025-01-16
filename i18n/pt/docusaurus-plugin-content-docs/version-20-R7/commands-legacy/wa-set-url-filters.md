---
id: wa-set-url-filters
title: WA SET URL FILTERS
slug: /commands/wa-set-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET URL FILTERS.Syntax-->**WA SET URL FILTERS** ( {* ;} *objeto* ; *arrFiltro* ; *permitirArrRecusar* )<!-- END REF-->
<!--REF #_command_.WA SET URL FILTERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| arrFiltro | Text array | &#8594;  | Array filtros |
| permitirArrRecusar | Boolean array | &#8594;  | Array autorizar- recusar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA SET URL FILTERS.Summary-->O comando WA SET URL FILTERS permite colocar um ou mais filtros para a área Web designada pelos parâmetros *\** e *objeto*.<!-- END REF-->  

Antes de carregar toda página solicitada pelo usuário, 4D consulta a lista de filtros com o objetivo de verificar se a URL objetivo está permitido. A avaliação da URL está baseada nos conteúdos dos arrays *arrFiltro e permitirArrRecusar*.  
  
Se a URL solicitada não estiver autorizada, não se carrega e se gera o evento de formulário On URL Filtering.

Os arrays *arrFiltro* e *permitirArrRecusar* devem estar sincronizados.

* Cada elemento do array *arrFiltro* deve conter um URL a filtrar. Pode utilizar *\** como coringa para substituir um ou mais caracteres.
* Cada elemento correspondente no array *permitirArrRecusar* deve conter um booleano indicando se a URL deve ser autorizado (**True**) ou recusado (**False**).
Em caso de contradição a nível dos parâmetros (autorização e recusa de uma mesma URL), será considerada a última configuração.  
  
Para desativar o filtro dos URLs, chame o comando e passe arrays vazios ou passe, respectivamente, os valores "\*" e True nos últimos elementos dos arrays *arrFiltro e permitirArrRecusar*.  
  
Quando tiver executado o comando, os filtros são transformados em propriedade da área Web. Se os arrays *arrFiltro* e *permitirArrRecusar* são apagados ou reinicializados, os filtros permanecem ativos sempre que o comando não tiver sido executado novamente. Para conhecer os filtros ativos para uma área, deve utilizar o comando [WA GET URL FILTERS](wa-get-url-filters.md).  
  
**Importante**: o filtro dos URLs realizado por este comando apenas aplica a qualquer requisição para mudar a URL primária da página, seja do usuário, código javascript ou código 4D, exceto para o comando \[#cmd id="1020"/\] e URLs iniciando com "javascript:".

#### Exemplo 1 

Imagine que deseja permitir acesso todos sites web .org, .net e .fr: 

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($permitirRecusar;0)
 
 APPEND TO ARRAY($filtros;"*.org")
 APPEND TO ARRAY($permitirRecusar;False)
 APPEND TO ARRAY($filtros;"*.net")
 APPEND TO ARRAY($permitirRecusar;False)
 APPEND TO ARRAY($filtros;"*.fr")
 APPEND TO ARRAY($permitirRecusar;False)
 WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)
```

#### Exemplo 2 

Imagine que deseja acessar todos os websites exceto russos (.ru): 

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($permitirRecusar;0)
 
 APPEND TO ARRAY($filtros;"*") //Selecionar tudo
 APPEND TO ARRAY($permitirRecusar;False) //Recusar tudo
 APPEND TO ARRAY($filtros;"www.*.ru") //Selecionar *.ru
 APPEND TO ARRAY($permitirRecusar;True) //Permitir
 WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)
```

#### Exemplo 3 

Você pode permitir acesso ao web site 4Ds (.com, .fr, .es, etc.): 

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($permitirRecusar;0)
 
 APPEND TO ARRAY($filtros;"*") //Selecionar tudo
 APPEND TO ARRAY($permitirRecusar;False) //Recusar tudo
 APPEND TO ARRAY($filtros;"www.4D.*") //Selecionar 4d.fr, 4d.com...
 APPEND TO ARRAY($permitirRecusar;True) //Permitir
 WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)
```

#### Exemplo 4 

Você quer autorizar o acesso local à documentação apenas (que fica na pasta C://doc):  

```4d
 ARRAY TEXT($filtros;0)ARRAY BOOLEAN($PermitirRecusar;0)
 
```

```4d
 APPEND TO ARRAY($filtros;"*") //Selecionar tudo
 APPEND TO ARRAY($PermitirRecusar;False) //Negar tudo
 APPEND TO ARRAY($filtros;"file://C:/doc/*")
  //Selecionar a rota ao arquivo:// autorizado
 APPEND TO ARRAY($PermitirRecusar;True) //Autorizar
```

```4d
 WA SET URL FILTERS(MinhaWArea;$filtros;$PermitirRecusar)
```

#### Exemplo 5 

Imagine que deseja permitir acesso para todos os sites, exceto um, por exemplo o site Elcaro: 

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($permitirRecusar;0)
 APPEND TO ARRAY($filtros;"*")
 APPEND TO ARRAY($permitirRecusar;True) //Permitir tudo
 APPEND TO ARRAY($filtros;"*elcaro*") //Recusar todo o conteúdo do elcaro
 APPEND TO ARRAY($permitirRecusar;False)
 WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)
```

#### Exemplo 6 

Imagine que deseja negar o acesso a endereços IP específicos:   

```4d
 ARRAY TEXT($filtros;0)
 ARRAY BOOLEAN($permitirRecusar;0)
 APPEND TO ARRAY($filtros;"*") //Selecionar tudo
 APPEND TO ARRAY($permitirRecusar;True) //Permitir tudo
 APPEND TO ARRAY($filtros;86.83.*")  //Selecionar endereços IP que começam com 86.83.
 APPEND TO ARRAY($permitirRecusar;False) //Recusar
 APPEND TO ARRAY($filtros;86.1*")  //Selecionar endereços IP que começam com 86.1 (86.10, 86.135 etc.)
 APPEND TO ARRAY($permitirRecusar;False) //Recusar
 WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)
  //(Note que o endereço IP de um domínio pode variar).
```

#### Ver também 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1030 |
| Thread-seguro | &cross; |


