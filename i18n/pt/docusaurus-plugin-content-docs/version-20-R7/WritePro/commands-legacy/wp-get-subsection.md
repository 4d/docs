---
id: wp-get-subsection
title: WP Get subsection
slug: /WritePro/commands/wp-get-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP Get subsection.Syntax-->**WP Get subsection** ( *targetObj* ) | (*wpSection* ; *subSectionType* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get subsection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range ou elemento |
| wpSection | Object | &#8594;  | Seção 4D Write Pro |
| subSectionType | Integer | &#8594;  | Tipo de subseção (wk first page, wk left page, ou wk right page) |
| Resultado | Object | &#8592; | Subseção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get subsection.Summary-->O comando **WP Get subsection** devolve uma primeira subseção intersectada pela range ou elemento *targetObj*, ou à subseção especificada *subSectionType* da seção *wpSection*.<!-- END REF-->

* Com a primeira sintaxe (utilizando o parâmetro *targetObj*), o comando devolve a primeira subseção que intersecta a range ou o elemento. Se nenhuma subseção intersecta a range ou o elemento, se devolve um objeto **null**, pode passar em *targetObj*:  
   * uma range, ou  
   * uma referência de elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé).  
Se a range ou elemento pertencer a um cabeçalho ou rodapé, **WP Get subsection** retorna a subseção a qual o cabeçalho ou rodapé é anexado. Se o cabeçalho ou rodapé não for anexado a uma subseção, um objeto **null** é retornado.  
Se a range ou elemento pertencer a uma imagem ancorada, um erro é retornado.
* Com a segunda sintaxe (utilizando os parâmetros *wpSection* e *subSectionType*), o comando devolve um objeto *wpSubSection* (filho de *wpSection*) do tipo *subSectionType*. Passe uma das constantes abaixo no parâmetro *subSectionType*:  
    
| Constante     | Tipo          | Valor |  
| ------------- | ------------- | ----- |  
| wk first page | Inteiro longo | 1     |  
| wk left page  | Inteiro longo | 2     |  
| wk right page | Inteiro longo | 3     |  
    
    
Se não for definido *subSectionType* para a *wpSection* especificada, o comando devolve um objeto indefinido (não é devolvido nenhum erro).

#### Exemplo 

Se quiser aplicar um fundo azul nas páginas da esquerda:

```4d
 var $section;$subsection : Object
  //Recupera a referência na primeira seção
 $section:=WP Get section(wpDoc;1)
  //Recupera a referência na subseção esquerda da primeira seção
 $subsection:=WP Get subsection($section;wk left page)
 
  //Se a subseção existir, configure o fundo em azul
 If($subsection#Null)
    WP SET ATTRIBUTES($subsection;wk background color;"#87CEEB")
 Else
    ALERT("Por favor, crie subseções esquerda e direita")
 End if
```

#### Ver também 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get section](wp-get-section.md)  
[WP New subsection](wp-new-subsection.md)  