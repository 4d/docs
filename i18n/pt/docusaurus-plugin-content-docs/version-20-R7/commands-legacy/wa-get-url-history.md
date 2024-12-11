---
id: wa-get-url-history
title: WA GET URL HISTORY
slug: /commands/wa-get-url-history
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL HISTORY.Syntax-->**WA GET URL HISTORY** ( {* ;} *objeto* ; *arrayURLs* {; *endereço* {; *arrTitulos*}} )<!-- END REF-->
<!--REF #_command_.WA GET URL HISTORY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| arrayURLs | Text array | &#8592; | Array das URLs visitadas |
| endereço | Integer | &#8594;  | 0 ou omitido = Lista das URLs anteriores; 1 = Lista das próximas URLs |
| arrTitulos | Text array | &#8592; | Array de titulos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA GET URL HISTORY.Summary-->O comando WA GET URL HISTORY retorna um ou dois arrays que contenhamm as URLs visitadas durante a sessão na área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> Permite construir uma interface de navegação personalizada.

A informação proporcionada faz referência à sessão; ou seja a navegação realizada em uma mesma área web sempre que não tenha fechado o formulário.  
  
O array *arrayUrls* se preenche com a lista dos URLs visitados. Dependendo do valor do parâmetro endereço (se for passado), o array recupera a lista das URLs anteriores (funcionamento por padrão) ou a lista das URLs seguintes. Esta lista corresponde ao conteúdo dos botões padrão Anterior e Seguinte dos navegadores.

As URLs são clasificadas por ordem cronológica.  
  
Passe em *endereço* um valor indicando a lista a recuperar. Pode utilizar uma das seguintes constantes, que são encontradas no tema *Web Area*:

| Constante        | Tipo          | Valor |
| ---------------- | ------------- | ----- |
| WA next URLs     | Inteiro longo | 1     |
| WA previous URLs | Inteiro longo | 0     |

Se for omitido o parâmetro *endereço*, se utiliza o valor 0.

Se for passado, o parâmetro *arrTitulos* contém a lista dos nomes de janelas associados aos URLs. Este array está sincronizado com o array *arrUrls*.

Nota de Compatibilidade: A partir de 4D v19 R5, esse comando só retorna a URL atual em urlsArr e titlesArr arrays para áreas web usando o motor de renderização de Windows. 

#### Ver também 

[WA Create URL history menu](wa-create-url-history-menu.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1048 |
| Thread-seguro | &check; |
| Proibido no servidor ||


