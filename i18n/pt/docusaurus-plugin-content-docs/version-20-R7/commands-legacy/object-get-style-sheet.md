---
id: object-get-style-sheet
title: OBJECT Get style sheet
slug: /commands/object-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get style sheet.Syntax-->**OBJECT Get style sheet** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get style sheet.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| Resultado | Text | &#8592; | Nome da folha de estilo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get style sheet.Summary-->O comando **OBJECT Get style sheet** devolve o nome da folha de estilos associada ao objeto ou aos objetos designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
A folha de estilo pode ter sido atribuída em modo Desenho utilizando a lista de propriedades ou para o processo atual usando o comando [OBJECT SET STYLE SHEET](object-set-style-sheet.md).  
  
Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
O comando pode devolver:

* um nome de folha de estilos,
* uma cadeia vazia ("") se não se atribui nenhuma folha de estilos.
* se uma folha de estilo automática for atribuida, uma das seguintes constantes encontradas no tema "*Estilos de fonte*":  

| Constante                         | Tipo   | Valor                               | Comentário                                                                                                 |  
| --------------------------------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Cadeia | \_\_automatic\_\_                   | Usado como padrão para todos os objetos                                                                    |  
| Automatic style sheet\_additional | Cadeia | \_\_automatic\_additional\_text\_\_ | Suportado por texto estático, campos e variaáveis somente. Usado para texto adicional em caixas de diálogo |  
| Automatic style sheet\_main       | Cadeia | \_\_automatic\_main\_text\_\_       | Suportado apenas para texto estático, campos e variáveis. Usado para texto principal em caixas de diálogo. |

Se o comando atribuir vários objetos, a folha de estilo devolvida só tem sentido se lhe atribuir a todos os objetos.

#### Nota de compatibilidade 

Em **arquitetura de projeto**, só as três folhas de estilo automáticas são compatíveis com esse comando  
  

#### Ver também 

*Estilos de fonte*  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  