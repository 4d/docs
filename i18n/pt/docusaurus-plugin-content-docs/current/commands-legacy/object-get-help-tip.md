---
id: object-get-help-tip
title: OBJECT Get help tip
slug: /commands/object-get-help-tip
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get help tip.Syntax-->**OBJECT Get help tip** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get help tip.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| Resultado | Text | &#8592; | Mensagem de ajuda do objeto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get help tip.Summary-->O comando **OBJECT Get help tip** devolve a mensagem de ajuda associado ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\** no processo atual.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, uma referencia passa de variável em lugar de uma cadeia.  
  
O comando devolve a mensagem de ajuda atual associado ao objeto, tal como está definido no modo Desenho ou para o processo utilizando o comando [OBJECT SET HELP TIP](object-set-help-tip.md). La cadeia outra vez mostra o mensagem como aparece quando se executa o formulário. Se contém elementos variáveis (*resname* xliff ou referencias 4D), se interpretam em função do contexto. 

#### Exemplo 

O título de um botão imagem é guardado em forma de mensagem de ajuda. Este título se guarda em um arquivo xliff e difere em função da linguagem atual de la aplicação: 

```4d
 OBJECT SET HELP TIP(*;"button1";":xliff:btn_discover")
 $helpmessage:=OBJECT Get help tip(*;"button1")
  // $helpmessage contém por exemplo "Découvrir" com um 4D francês e "Discover" com um 4D inglês.
```

#### Ver também 

[OBJECT SET HELP TIP](object-set-help-tip.md)  