---
id: wp-get-section
title: WP Get section
slug: /WritePro/commands/wp-get-section
displayed_sidebar: docs
---

<!--REF #_command_.WP Get section.Syntax-->**WP Get section** ( *alvoObj* ) | (*wpDoc* ; índiceSeção ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get section.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| alvoObj | Object | &#8594;  | Range ou elemento de referência |
| wpDoc | Object | &#8594;  | Documento 4D Write pro |
| índiceSeção | Integer | &#8594;  | Índice da seção |
| Resultado | Object | &#8592; | Seção 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get section.Summary-->O comando **WP Get section** devolve a primeira seção intersectada pela range *alvoObj* ou elemento, ou ao *indiceSeção*  especificado do documento *wpDoc*.<!-- END REF-->

* Com a primeira sintaxe (utilizando o parâmetro *alvoObj*), o comando devolve a primeira seção intersectada pela range ou o elemento. Pode passar em *targetObj*:  
   * uma range (gama ou faixa de seleção de elementos) ou  
   * uma referência de elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé). Não se pode passar uma referência de subseção, nem uma imagem ancorada (se devolve um erro nesse caso).  
Se a range ou a referência do elemento pertencer a uma caixa de texto, **WP Get section** sempre devolve a primeira seção, exceto se estiver ancorado a uma seção (nesse caso a seção é devolvida).
* Com a segunda sintaxe (utilizando o parâmetro *wpDoc*), o comando devolve a seção correspondente à seção *indiceSeção* (o valor de *indiceSeção* deve ser >=1).  
Se não for definida nenhuma seção para o *indiceSeção* especificado, o comando devolve um objeto indefinido (não se devolve nenhum erro).

**Nota:** utilize o comando [WP Get subsection](wp-get-subsection.md) para obter uma subseção de uma seção ou de uma range.

#### Exemplo 

Se quiser obtera primeira seção:

```4d
 var $section : Object
  // obtém a primeira seção
 $section:=WP Get section(wpDoc;1)
```

#### Ver também 

[WP Get sections](wp-get-sections.md)  
[WP Get subsection](wp-get-subsection.md)  