---
id: wa-evaluate-javascript
title: WA Evaluate JavaScript
slug: /commands/wa-evaluate-javascript
displayed_sidebar: docs
---

<!--REF #_command_.WA Evaluate JavaScript.Syntax-->**WA Evaluate JavaScript** ( {* ;} *objeto* ; *codeJS* {; *tipo*} )  : any<!-- END REF-->
<!--REF #_command_.WA Evaluate JavaScript.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| codeJS | Text | &#8594;  | Código Java Script |
| tipo | Integer | &#8594;  | Tipo ao qual converter o resultado |
| Resultado | Date, Time, Object, Pointer, Real, Text | &#8592; | Resultado da função |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WA Evaluate JavaScript.Summary-->O comando WA Evaluate JavaScript executa na área web designada pelos parâmetros *\** e *objeto* o código JavaScript passado em *codeJS* e retorna o resultado.<!-- END REF-->. Este comando deve ser chamado depois de carregar a página (o evento de formulário On End URL Loading deve ter sido gerado).

Por padrão, o comando devolve o resultado como cadeias. Pode utilizar o parâmetro opcional *tipo* para especificar a digitação do valor devolvido. Para fazer isto, passe uma das seguintes constantes, do tema "*Tipos de campos e variáveis*":

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is Boolean    | Inteiro longo | 6     |
| Is collection | Inteiro longo | 42    |
| Is date       | Inteiro longo | 4     |
| Is longint    | Inteiro longo | 9     |
| Is object     | Inteiro longo | 38    |
| Is real       | Inteiro longo | 1     |
| Is text       | Inteiro longo | 2     |
| Is time       | Inteiro longo | 11    |

**Aviso**: Não é recomendado usar este comando para chamar diretamente uma função JavaScript que exibe um diálogo (alert(), print()...) porque o usuário não pode interagir com a área Web enquanto o código 4D roda. Se precisar implementar uma interface desse tipo, chame um código como setTimeout(function(){alert();}, 50)) para finalizar a execução do código 4D e permitir interação de usuário. 

#### Exemplo 1 

Este exemplo de código JavaScript faz com que a URL anterior seja mostrada. 

```4d
 $result:=WA Evaluate JavaScript(MinhaWArea;"history.back()")
```

#### Exemplo 2 

Este exemplo mostra algumas avaliações com conversão dos valores recebidos.

As funções JavaScript se localizam em um arquivo HTML:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <script>
        function evalLong(){
            return 123;
        }
        function evalText(){
            return "456";
        }
        function evalObject(){
            return {a:1,b:"hello world"};
        }
        function evalDate(){
            return new Date();
        }
    </script>
    </head>
    <body>
        TEST PAGE
    </body>
</html>
```

Escreva no método do formulário 4D:

```4d
 If(Form event code=On Load)
    WA OPEN URL(*;"Web Area";"C:\\myDatabase\\index.html")
 End if
```

Logo pode avaliar o código JavaScript desde 4D:

```4d
 $Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)
  //$Eval1 = 123
  //$Eval1 = "123" if type is omitted
 $Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)
  //$Eval2 = "456"
 $Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)
  //$Eval3 = {"a":1,"b":"hello world"}
 $Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)
  // $Eval4 = 06/21/13
  // $Eval4 = "2013-06-21T14:45:09.694Z" Se o tipo se omite
```

#### Ver também 

[WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)  