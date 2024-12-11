---
id: wa-execute-javascript-function
title: WA EXECUTE JAVASCRIPT FUNCTION
slug: /commands/wa-execute-javascript-function
displayed_sidebar: docs
---

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Syntax-->**WA EXECUTE JAVASCRIPT FUNCTION** ( {* ;} *objeto* ; *funcaoJS* ; resultado|* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| funcaoJS | Text | &#8594;  | Nome da função JavaScript a executar |
| resultado&#124;* | Variável | &#8594;  | * para a função sem resultado ou |
| &#8592; | Resultado da função (se esperado) |
| param | Text, Number, Date, Object, Collection | &#8594;  | Parâmetros a passar a função |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Summary-->O comando WA EXECUTE JAVASCRIPT FUNCTION executa, na área Web designada pelos parâmetros *\** e *objeto*, a função JavaScript *funcaoJS* retorna opcionalmente seu resultado no parâmetro *resultado*.<!-- END REF--> 

Se a função não retorna um resultado, passe *\** no parâmetro *resultado*.  
  
Pode passar em *param* uma ou várias cadeias que contenham os parâmetros da função.

O comando suporta vários tipos de parâmetros, tanto para entrada (*param*) como para saída (*resultado*). Pode passar e recuperar dados de tipo string, numérico, data, objeto e coleção. Se o tipo parâmetro não for definido, o tipo texto é usado como padrão

**Aviso**: Não é recomendado usar este comando para chamar diretamente uma função JavaScript que exibe um diálogo (alert(), print()...) porque o usuário não pode interagir com a área Web enquanto o código 4D roda. Se precisar implementar uma interface desse tipo, chame um código como setTimeout(function(){alert();}, 50)) para finalizar a execução do código 4D e permitir interação de usuário. 

#### Exemplo 1 

Chamada de uma função JavaScript con 3 parâmetros: 

```4d
 $JavaScriptFunction:="FuncaoAExecutar"
 $Param1:="10"
 $Param2:="true"
 $Param3:="1,000.2" //note "," como separador de milhares e "." como separador decimal
 
 WA EXECUTE JAVASCRIPT FUNCTION(MinhaWArea;$FuncaoAExecutar;$Result;$Param1;$Param2;$Param3)
```

#### Exemplo 2 

A função JavaScript "getCustomerInfo" recebe um número ID como parâmetro e devolve um objeto:

```4d
 var $Result : Object
 var $ID : Integer
 $ID:=1000
 WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)
```

#### Ver também 

[WA Evaluate JavaScript](wa-evaluate-javascript.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1043 |
| Thread-seguro | &check; |
| Proibido no servidor ||


