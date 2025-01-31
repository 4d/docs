---
id: wa-set-page-content
title: WA SET PAGE CONTENT
slug: /commands/wa-set-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PAGE CONTENT.Syntax-->**WA SET PAGE CONTENT** ( {* ;} *objeto* ; *conteúdo* ; *bancoURL* )<!-- END REF-->
<!--REF #_command_.WA SET PAGE CONTENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| conteúdo | Text | &#8594;  | código de fonte HTML |
| bancoURL | Text | &#8594;  | URL para referências relativas (Mac OS) |

<!-- END REF-->

#### Nota de compatibilidade 

<!--REF #_command_.WA SET PAGE CONTENT.Summary-->Este comando não é mais útil.<!-- END REF--> Como a segurança em navegadores ficou cada vez mais forte, há mais e mais restrições para modificar o conteúdo de páginas "a qualquer momento". Uma abordagem mais adequada é criar um arquivo local (por exemplo na pasta temporária) e usar [WA OPEN URL](wa-open-url.md) para carregá-la. Para limpar o conteúdo, chame **WA OPEN URL**(myArea;”about:blank”).

#### Descrição 

O comando WA SET PAGE CONTENT substitui a página mostrada no área web designada pelos parâmetros *\** e *objeto* pelo código HTML passado no parâmetro *conteúdo*.  

O parâmetro *bancoURL* permite definir em Mac OS, uma URL de banco que se adicionará em frente dos links relativos que possam ser encontrados na página.  
  
Em Windows, este parâmetro não tem efeito e o URL de banco não está definido. Portanto não é possível utilizar referências relativas nesta plataforma.  
  
**Nota**: em Windows, é imperativo que uma página tenha sido carregada na área web antes de que se chame este comando. Se for necessário, pode passar a URL "about:blank" com o objetivo de carregar uma página vazia.

#### Exemplo 

Mostrar a frase "Olá mundo!" e definição de uma URL de banco "file:///" banco URL (Mac OS apenas): 

```4d
 WA SET PAGE CONTENT(MinhaWArea;"

[Olá Mundo!]

";"file:///")
```

#### Ver também 

[WA Get page content](wa-get-page-content.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1037 |
| Thread-seguro | &cross; |


