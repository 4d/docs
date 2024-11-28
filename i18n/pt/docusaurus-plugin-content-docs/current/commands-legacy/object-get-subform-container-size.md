---
id: object-get-subform-container-size
title: OBJECT GET SUBFORM CONTAINER SIZE
slug: /commands/object-get-subform-container-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Syntax-->**OBJECT GET SUBFORM CONTAINER SIZE** ( *largura* ; *altura* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| largura | Integer | &#8592; | Largura do objeto sub-formulário |
| altura | Integer | &#8592; | Altura do objeto sub-formulário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT GET SUBFORM CONTAINER SIZE.Summary-->O comando **OBJECT GET SUBFORM CONTAINER SIZE** devolve a *largura* e a *altura* (em pixels) de um objeto sub-formulário "atual", mostrado no formulário pai.<!-- END REF-->  
  
Este comando deve ser chamado desde o método de um formulário utilizado como sub-formulário e mostrado em um objeto sub-formulário. Devolve a *largura* e a *altura* do objeto que contém o sub-formulário. Devolve a *largura* e a *altura* do objeto que contém o sub-formulário.  
  
Este comando é útil, por exemplo, no caso de objetos de sub-formulário que devem movimentar-se e/o redimensionar-se em função das características do objeto sub-formulário mesmo. No evento formulário On Load, o sub-formulário pode chamar a este comando para calcular o espaço a sua disposição com o fim de mostrar seu conteúdo.

  
O evento On Resize é gerado no método formulario de subformulário se o objeto subformulário se redimensiona no objeto formulário pai (por exemplo se o objeto subformulário tiver uma propriedade de agrandamento horizontal/vertical e se o formulário pai se redimensiona).

* Se o comando se chama desde um formulário que não se está utilizando como um sub-formulário, devolve o tamanho atual de la janela do formulário.
* Se o comando se chama fora do contexto da visualização da tela (por exemplo, durante a impressão do formulário), devolve 0 em *largura* e *altura*.

#### Ver também 

[OBJECT GET SUBFORM](../commands/object-get-subform.md)  
[OBJECT SET SUBFORM](../commands/object-set-subform.md)  