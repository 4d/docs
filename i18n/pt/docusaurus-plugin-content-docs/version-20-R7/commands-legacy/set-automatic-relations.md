---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *um* {; *muitos*} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| um | Boolean | &#8594;  | Estado de todas as relação Muitos a Um |
| muitos | Boolean | &#8594;  | Estado de todas as relações Um a Muitos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->SET AUTOMATIC RELATIONS muda temporariamente todas as relações manuais em relações automáticas para todo o banco no processo atual.<!-- END REF--> As relações permanecem automáticas a menos que se realize uma chamada posterior a SET AUTOMATIC RELATIONS.

* Se *um* é true, então todas as relações Muitos a Um se transformam em automáticas. Se Um é false, todas as relações Muitos a Um se tornam manuais.
* Se *muitos* é true, então todas as relações Um a Muitos se transformam em automáticas. Se Muitos é false, todas as relações Um a Muitos se tornam manuais.

Este comando muda relações definidas como manuais em modo Desenho a automáticas, justo antes de executar operações que requeiram que sejam automáticas (tais como pesquisas relacionais e ordenações). Uma vez terminada a operação, as relações podem ser mudadas a manuais chamando novamente a **SET AUTOMATIC RELATIONS**. As relações definidas como automáticas no ambiente Desenho não são afetadas por este comando.  
  
**Nota:** 

* Quando passar [True](true.md "True") ao comando **SET AUTOMATIC RELATIONS**, o modo automático se "bloqueia" para todas as relações manuais durante a sessão. Neste caso, todas as chamadas ao comando [SET FIELD RELATION](set-field-relation.md) durante a mesma sessão se ignoram, sem importar se estavam antes ou depois de **SET AUTOMATIC RELATIONS**. Para "desbloquear" o modo automático e ter em conta as chamadas a [SET FIELD RELATION](set-field-relation.md), passe [False](false.md "False") a **SET AUTOMATIC RELATIONS**.
* As funcionalidades automáticas são desativadas quando as tabelas relacionadas são visualizadas em um formulário listado mostrado utilizando [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md), ou um subformulário. Ver *Relações manuais e automáticas*.

#### Exemplo 

O exemplo a seguir torna automáticas todas as relações Muitos a Um e restabelece a manual todas as relações Um a Muitos modificadas previamente:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

#### Ver também 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET FIELD RELATION](set-field-relation.md)  
*Sobre Relações*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 310 |
| Thread-seguro | &check; |
| Proibido no servidor ||


