---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( {* ;} *objeto* ; *url* )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| url | Text | &#8594;  | URL a carregar na área Web |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA OPEN URL.Summary-->O comando **WA OPEN URL** carrega na área web designada pelos parâmetros *\** e *objeto* o URL passado no parâmetro *url*.<!-- END REF-->

Se passar uma cadeia vazia em *url*, o comando WA OPEN URL não faz nada e não é gerado nenhum erro. Para carregar uma página vazia na área web, passe a cadeia "about:blank" em *url*.

Como o comando [OPEN URL](open-url.md), **WA OPEN URL** aceita vários tipos de sintaxe no parâmetro *url* para designar os arquivos:

* sintaxe posix: "file:///c:/Meu%20Arquivo"
* sintaxe sistema: "c:\\MinhaPasta\\MeuArquivo" (Windows) ou "MeuDisco:MinhaPasta:MeuArquivo" (Mac OS).

**Nota:** por compatibilidade, a sintaxe "file://" (uso de dois "/") é aceita em 4D mas não cumpre com o RFC. Recomendamos utilizar a sintaxe "file:///" (com três "/") que cumpre com o RFC.

Em Mac OS, quando FileVault está ativo, deve utilizar a sintaxe Posix. Pode transformar as rotas do sistema utilizando o comando \[#cmd id="1106"/\].

Este comando tem o mesmo efeito que a modificação do valor da variável "URL" associada a área. Por exemplo, se a variável da área é chamada MinhaWArea\_url:

```4d
 MyWArea_url:="http://www.4d.com/"
```

```4d

```

#### Ver também 

[OPEN URL](open-url.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1020 |
| Thread-seguro | &cross; |


