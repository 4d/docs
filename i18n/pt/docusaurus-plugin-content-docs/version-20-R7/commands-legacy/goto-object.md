---
id: goto-object
title: GOTO OBJECT
slug: /commands/goto-object
displayed_sidebar: docs
---

<!--REF #_command_.GOTO OBJECT.Syntax-->**GOTO OBJECT** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.GOTO OBJECT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado = objeto é um nome de objeto (string). Se omitido = objeto é um campo ou uma variável |
| objeto | Field, Variable | &#8594;  | Nome de objeto (se * for especificado) ou Campo ou Variável (se * for omitido) ao que se vai |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GOTO OBJECT.Summary-->O comando GOTO OBJECT é utilizado para selecionar o objeto editável *objeto* como a área ativa do formulário.<!-- END REF--> É equivalente a um clique do usuário na área ou de utilizar a tecla Tab para selecionar o campo ou a variável. 

Se especifica o parâmetro opcional *\**, indica um nome de objeto (uma string) em *objeto*. Se omitir o parâmetro opcional *\**, indica um campo ou uma variável em *objeto*. Neste caso, especifique uma referência de campo ou de variável (objetos de campos ou variáveis unicamente) ao invés de uma string. Para maior informação sobre nomes de objetos, consulte a seção . 

Para eliminar todo foco no formulário atual, chame ao comando enquanto passa um nome de objeto vazio em *objeto* (ver ejemplo 2).

O comando GOTO OBJECT pode ser utilizada no contexto de um subformulário. Quando se chama desde um subformulário, busca primeiro o objeto no subformulario, depois, se a pesquisa não encontrar nada ali, extende a procura a objetos do formulário pai.

#### Exemplo 1 

O comando GOTO OBJECT pode ser utilizada de duas maneiras: 

```4d
 GOTO OBJECT([Pessoas]Nome) // Referencia do campo
 GOTO OBJECT(*;"AreaIdade") // Nome do objeto
```

#### Exemplo 2 

Se não deseja que nenhum objeto do formulário tenha o foco. 

```4d
 GOTO OBJECT(*;"")
```

#### Exemplo 3 

Veja o exemplo do comando [REJECT](reject.md "REJECT").

#### Ver também 

[CALL SUBFORM CONTAINER](call-subform-container.md)  
[REJECT](reject.md)  