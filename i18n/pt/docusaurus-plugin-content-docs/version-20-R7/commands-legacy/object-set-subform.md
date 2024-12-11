---
id: object-set-subform
title: OBJECT SET SUBFORM
slug: /commands/object-set-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM.Syntax-->**OBJECT SET SUBFORM** ( {* ;} *objeto* {; *aTabela*}; *subFormDet* {; *subFormList*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| aTable | Table | &#8594;  | Tabela de formulário (se tabela de formulário) |
| subFormDet | Text, Object | &#8594;  | Nome do formulário detalhado de sub-formulário |
| subFormList | Text, Object | &#8594;  | Nome do formulário listado de sub-formulário (formulário tabela) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET SUBFORM.Summary-->O comando **OBJECT SET SUBFORM** permite modificar dinamicamente o formulário detalhado assim também, opcionalmente, o formulário listado associado ao objeto sub-formulário designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
**Nota**: este comando não permite mudar o mesmo tipo de sub-formulário (lista ou página). Esta propriedade só pode ser configurada em modo Desenho.   
  
Passa-se o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
No parâmetro *aTabela*, passe a tabela dos formulários a utilizar. Este parâmetro é opcional; pode omitir-lo se especifica um formulário projeto como sub-formulário detalhado.  
  
Nos parâmetros *subFormDet*, e listSubForm passe ou :  
  
 o nome do formulário ou  
 a rota (em sintaxe POSIX) a um arquivo .json válido que contenha uma descrição do formulário a usar (rotas relativas devem ser relativas à um formulário parente, ver *Form file path*), ou  
 um objeto que contenha uma descrição do formulário  
  
**Nota**: o parâmetro listSubform pode ser passado só quando modificar um subformulário tipo lista  
  
  
Quando modifica um sub-formulário página, o comando pode executar-se em qualquer momento; as seleções atuais não se modificam. No entanto, quando modifica um sub-formulário listado, só pode modificar-se quando mostra a lista. Se o comando se executa quando o formulário detalhado é mostrado depois de um doble clic na lista, é gerado um erro.

#### Ver também 

[OBJECT GET SUBFORM](object-get-subform.md)  
[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1138 |
| Thread-seguro | &check; |
| Proibido no servidor ||


