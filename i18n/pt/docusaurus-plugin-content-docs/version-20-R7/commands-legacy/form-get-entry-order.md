---
id: form-get-entry-order
title: FORM GET ENTRY ORDER
slug: /commands/form-get-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET ENTRY ORDER.Syntax-->**FORM GET ENTRY ORDER** ( *objectNames* {; numPagina | * } )<!-- END REF-->
<!--REF #_command_.FORM GET ENTRY ORDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objectNames | Text array | &#8592; | Nomes de objeto ordenados por ordem de entrada |
| numPagina &#124; * | Inteiro longo, Operador | &#8594;  | Número de página para o qual obter a ordem definida de entrada (página atual se omitida) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM GET ENTRY ORDER.Summary-->O comando **FORM GET ENTRY ORDER** devolve em *nomObjetos* os nomes ordenados dos objetos que definem a ordem de entrada do formulario.<!-- END REF--> 

* Se não passar o parâmetro *\**, **FORM GET ENTRY ORDER** devolve a ordem de entrada como foi declarado anteriormente com o comando [FORM SET ENTRY ORDER](form-set-entry-order.md). Pode omitir ou passar o parâmetro *numPag*:  
   * Se omitir o parâmetro *numPag*, o array *nomObjetos* devolve a ordem de entrada para a página atual,  
   * Se passar o parâmetro *numPag*, o array *nomObjetos* devolve a ordem de entrada para a página *numPag*.  
Em ambos casos, se o comando [FORM SET ENTRY ORDER](form-set-entry-order.md) não foi chamado previamente para o formulário atual, o array *nomObjetos* é devolvido vazio.
* Se passar o parâmetro *\**, **FORM GET ENTRY ORDER** devolve a ordem de entrada atual da página atual, ou seja, o array *nomObjetos* só contém nomes de objeto **válidos** ( (para mais informação sobre objetos válidos, consulte a descrição do comando [FORM SET ENTRY ORDER](form-set-entry-order.md)). A ordem de entrada de formulário real pode ser:  
   * A ordem de entrada de formulario predeterminado, baseada na superposição de objetos,  
   * Ou a ordem de entrada do editor de formulários (ver *Modificar a ordem de entrada dos dados*), se tiver sido utilizado,  
   * Ou a ordem de entrada definido por uma chamada ao comando [FORM SET ENTRY ORDER](form-set-entry-order.md) no processo atual, se tiver sido utilizado.  
A ordem de entrada real sempre inclui objetos da página 0 e dos formulários herdados.

**Nota:** a ordem de entrada dentro de um subformulario não é devolvida quando se aplica este comando ao formulário pai.

#### Exemplo 

Pode excluir certos objetos da ordem de entrada:

```4d
 ARRAY TEXT($arrTabOrderObject;0)
 var $vElem : Integer
 
 FORM GET ENTRY ORDER($arrTabOrderObject;*) //obter a ordem de entrada atual
 Repeat
    $vElem:=Find in array($arrTabOrderObject;"vTax@")
    If($vElem>0) //exclui objetos cujo nome começa por "vTax" da ordem de entrada de dados
       DELETE FROM ARRAY($arrTabOrderObject;$vElem)
    End if
 Until($vElem<0)
 FORM SET ENTRY ORDER($arrTabOrderObject) //aplica a nova ordem de entrada
```

#### Ver também 

[FORM SET ENTRY ORDER](form-set-entry-order.md)  