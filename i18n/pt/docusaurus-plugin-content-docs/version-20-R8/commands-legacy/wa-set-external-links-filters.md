---
id: wa-set-external-links-filters
title: WA SET EXTERNAL LINKS FILTERS
slug: /commands/wa-set-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Syntax-->**WA SET EXTERNAL LINKS FILTERS** ( {* ;} *objeto* ; *arrFiltro* ; *permitirArrRecusar* )<!-- END REF-->
<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| arrFiltro | Text array | &#8594;  | Array filtros |
| permitirArrRecusar | Boolean array | &#8594;  | Allow-deny array |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Summary-->O comando WA SET EXTERNAL LINKS FILTERS permite estabelecer um ou mais filtros de links externos para a zona web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> Os filtros de links externos determinam se um URL associado a página atual através um link deve ser aberto na área web ou no navegador web por padrão da máquina.

Quando o usuário clicar em um link na página atual, 4D consulta a lista dos filtros externos com o objetivo de verificar a URL solicitado deve ser aberto no navegador da máquina. Se for assim, a página correspondente a URL é mostrada no navegador web e se gera o evento de formulário On Open External Link. Do contrário (o funcionamento por padrão), a página correspondente a URL se mostra na área web. A avaliação da URL está baseada no conteúdo dos arrays *arrFiltro* e *permitirArrRecusar*.

Os arrays *arrFiltro* e *permitirArrRecusar* devem estar sincronizados.

* Cada linha do array *arrFiltro* deve conter um URL a filtrar. Pode utilizar \* como coringa para substituir um ou mais caracteres.
* Cada linha correspondente no array *permitirArrRecusar* deve conter um booleano indicando se a URL deve ser aberta na área web (*True*) ou no navegador web (*False*).
Se houver uma contradição a nível da configuração (a mesma URL é ao mesmo tempo autorizada e recusada), a última configuração é levada em consideração.   
  
Para desativar o filtro das URL, chame o comando e passe os arrays vazio ou passe, respectivamente os valores "\*" e *True* nos últimos elementos dos arrays *arrFiltro* e *permitirArrRecusar*.  
  
**Importante**: o filtro estabelecido pelo comando [WA SET URL FILTERS](wa-set-url-filters.md) é levado em consideração antes do comando WA SET EXTERNAL LINKS FILTERS. Isto significa que se um URL é recusado por um filtro do comando [WA SET URL FILTERS](wa-set-url-filters.md), não poderá ser aberto no navegador mesmo se for definido explicitamente pelo comando WA SET EXTERNAL LINKS FILTERS (ver exemplo 2).

#### Exemplo 1 

Este exemplo provoca a abertura de sites em navegadores externos: 

```4d
 ARRAY STRING(0;$filtros;0)
 ARRAY BOOLEAN($PermitirRecusar;0)
 
 APPEND TO ARRAY($filtros;"*www.google.*") //Selecionar "google"
 APPEND TO ARRAY($PermitirRecusar;False)
  //False: este link será aberto em um navegador externo
 APPEND TO ARRAY($filtros;"*www.apple.*")
 APPEND TO ARRAY($PermitirRecusar;False)
  //False: este link será aberto em um navegador externo
 WA SET EXTERNAL LINKS FILTERS(MinhaWArea;$filtros;$PermitirRecusar)
```

#### Exemplo 2 

Este exemplo combina os filtros de sites e de links externos: 

```4d
 ARRAY STRING(0;$filtros;0)
 ARRAY BOOLEAN($PermitirRecusar;0)
 APPEND TO ARRAY($filtros;"*www.google.*") //Selecionar "google"
 APPEND TO ARRAY($PermitirRecusar;False) //Link negado
 WA SET URL FILTERS(MinhaWArea;$filtros;$PermitirRecusar)
 
 ARRAY STRING(0;$filtros;0)
 ARRAY BOOLEAN($PermitirRecusar;0)
 APPEND TO ARRAY($filtros;"*www.google.*") //Selecionar "google"
 APPEND TO ARRAY($PermitirRecusar;False)
  //False: este link deve ser aberto em um navegador externo mas este parâmetro
  //não tem efeito porque o link será bloqueado pelo filtro da URL.
 WA SET EXTERNAL LINKS FILTERS(MinhaWArea;$filtros;$PermitirRecusar)
```

#### Ver também 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1032 |
| Thread-seguro | &cross; |


