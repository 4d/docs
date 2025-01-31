---
id: wp-get-header
title: WP Get header
slug: /WritePro/commands/wp-get-header
displayed_sidebar: docs
---

<!--REF #_command_.WP Get header.Syntax-->**WP Get header** ( *objFaixa* ) | (*docWP* ; *indiceSecao* {; *subsecaoTipo*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get header.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | Faixa 4D Write Pro |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| indiceSecao | Integer | &#8594;  | Indice seção |
| subsecaoTipo | Integer | &#8594;  | Tipo sub-seção (wk first page, wk left page ou wk right page) |
| Resultado | Object | &#8592; | Cabeçalho 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get header.Summary-->O comando **WP Get header** devolve um cabeçalho associado a faixa *objFaixa* ou ao *indiceSecao* do documento *wpDoc*.<!-- END REF--> Se não encontrar nenhum cabeçalho com respeito aos parâmetros, o comando devovle Null.

* Com a primeira sintaxe (utilizando o parâmetro *objFaix*a), o comando devolve o cabeçalho da primeira página da faixa. Se uma subseção estiver ativa na página, o comando devolve o cabeçalho da subseção ativa, portanto sempre devolve o cabeçalho visível.
* Com a segunda sintaxe (utilizando o parâmetro *wpDoc*), o comando devolve o cabeçalho da seção *indiceSecao* especificada (o valor *indiceSecao* deve ser >=1).  
Se for passada o parâmetro *tipoSubSecao*, o comando devolve o cabeçalho associado ao tipo de subseção especificado. Pode passar uma das constantes abaixo no parâmetro *tipoSubSecao*:  

| Constante     | Tipo          | Valor |  
| ------------- | ------------- | ----- |  
| wk first page | Inteiro longo | 1     |  
| wk left page  | Inteiro longo | 2     |  
| wk right page | Inteiro longo | 3     |  
    
Se não for especificado o *tipoSubSecao*, se devolverá o cabeçalho da seção principal. Nesse caso, se uma subseção estiver activa, o objeto de cabeçalho da seção principal está *indefinido* (o cabeçalho da seção principal só está disponível se não tiver nenhuma subseção wk first page ou wk left page ativa).

#### Exemplo 

Se quiser copiar o cabeçalho da primeira página de um documento 4D Write Pro aos cabeçalhos de todas as páginas de outro documento 4D Write Pro:

```4d
 var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object
 
 $headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page) //obter o cabeçalho da primeira página da seção 1
 $rangeSource:=WP Text range($headerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $headerTarget:=WP Get header([Docs]MyWPDoc;1) //todas as páginas da seção 1
 $rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Ver também 

*Utilizar uma área 4D Write Pro*  
[WP DELETE HEADER ](wp-delete-header.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  
[WP Text range](wp-text-range.md)  