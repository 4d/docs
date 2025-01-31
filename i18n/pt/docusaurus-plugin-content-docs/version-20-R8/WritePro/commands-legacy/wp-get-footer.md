---
id: wp-get-footer
title: WP Get footer
slug: /WritePro/commands/wp-get-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP Get footer.Syntax-->**WP Get footer** ( *objFaixa* ) | (*docWP* ; *indiceSecao* {; *subtipoSecao*} )  -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get footer.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | Faixa do 4D Write Pro |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| indiceSecao | Integer | &#8594;  | Índice de Seção |
| subtipoSecao | Integer | &#8594;  | Subtipo de seção (wk first page, wk left page ou wk right page) |
| Resultado | Object | &#8592; | Rodapé 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get footer.Summary-->O comando **WP Get footer** devolveo rodapé de página associado a faixa *objfaixa* ou ao *indiceSeção* especificado do documento *wpDoc*.<!-- END REF--> \]. Se não for encontrado nenhum rodapé relativo aos parâmetros, o comando devolve Null.

* Com a primeira sintaxe (utilizando o parâmetro *objfaixa*), o comando devolve o rodapé da primeira página da faixa. Se uma subseção estiver ativa na página, o comando devolve o rodapé da subseção ativa, portanto sempre devolve o rodapé de página visível.
* Com a segunda sintaxe (utilizando o parâmetro *wpDoc*), o comando devolve o rodapé da seção *indiceSeção* especificada (o valor *indiceSecao* deve ser >=1).  
Se for passado o parâmetro *tipoSubSecao*, o comando devolve o rodapé de página associado ao tipo de subseção especificado. Pode passar uma das constantes abaixo no parâmetro *tipoSubSecao*:  

| Constante     | Tipo          | Valor |  
| ------------- | ------------- | ----- |  
| wk first page | Inteiro longo | 1     |  
| wk left page  | Inteiro longo | 2     |  
| wk right page | Inteiro longo | 3     |  
    
Se não for especificado *tipoSubSeção*, se devolverá o rodapé de página da seção principal. Nesse caso, se uma subseção estiver ativa, o objeto de rodapé de página da seção principal não está definido (o rodapé de página da seção principal só está disponível se não houver nenhuma subseção wk first page ou wk left page ativa).

#### Exemplo 

Se quiser copiar o rodapé da primeira página de um documento 4D Write Pro nos rodapés de todas as páginas de outro documento 4D Write Pro:

```4d
 var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object
 
 $footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page) //obtém o rodapé da primeira página da seção 1
 $rangeSource:=WP Text range($footerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $footerTarget:=WP Get footer([Docs]MyWPDoc;1) //todas as páginas da seção 1
 $rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Ver também 

*Utilizar uma área 4D Write Pro*  
[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get frame](wp-get-frame.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  