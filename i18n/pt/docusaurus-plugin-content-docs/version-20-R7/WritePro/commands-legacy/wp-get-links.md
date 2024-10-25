---
id: wp-get-links
title: WP Get links
slug: /WritePro/commands/wp-get-links
displayed_sidebar: docs
---

<!--REF #_command_.WP Get links.Syntax-->**WP Get links** ( *objRange* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get links.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objRange | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| Resultado | Collection | &#8592; | Coleção de links |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get links.Summary-->**WP Get links** devolve a coleção de todos os links definidos em *objRange*.<!-- END REF-->

No parâmetro *objRange*, pode passar:

* uma range, ou
* um elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé / seção / subseção/ caixa de texto), ou
* um documento 4D Write Pro

**Valor devolvido**

**WP Get links** devolve uma coleção de objetos de link, cada uma das quais contém uma ou mais das seguintes propriedades:

| **Propriedade** | **Tipo**        | **Descrição**                                                 | **Disponível para**                |
| --------------- | --------------- | ------------------------------------------------------------- | ---------------------------------- |
| \[ \].url       | Texto           | Conteúdo de destino de link                                   | links url                          |
| \[ \].method    | Texto           | Nome de método de link                                        | links de método                    |
| \[ \].parameter | Texto \| Número | Valor de parâmetro de usuário passado ao link                 | links de método (se for utilizado) |
| \[ \].bookmark  | Texto           | Nome de marcador para o link                                  | links de marcadores                |
| \[ \].range     | Objeto          | Range da etiqueta de link. Ver *Comandos de seleção de faixa* | todos os links                     |

#### Exemplo 

Se quiser mudar a cor de todas as etiquetas de link url em um documento 4D Write Pro:

```4d
 var $links : Collection
 var $link : Object
 
 $links:=WP Get links(myDoc)
 
 For each($link;$links)
    If($link.url#Null) //it's a url link
       WP SET ATTRIBUTES($link.range;wk text color;"red")
    End if
 End for each
```

#### Ver também 

  
[WP Get formulas](wp-get-formulas.md)  
[WP SET LINK](wp-set-link.md)  