---
id: is-compiled-mode
title: Is compiled mode
slug: /commands/is-compiled-mode
displayed_sidebar: docs
---

<!--REF #_command_.Is compiled mode.Syntax-->**Is compiled mode** {( * )} : Boolean<!-- END REF-->
<!--REF #_command_.Is compiled mode.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Retorna a informação do banco local |
| Resultado | Boolean | &#8592; | Compilado (True), Interpretado (False) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is compiled mode.Summary-->Is compiled mode testa se você está executando no modo compilado (True) ou no modo interpretado (False).<!-- END REF-->   

O parâmetro \* é opcional e útil no caso de uma arquitetura usando componentes: pode ser usado para determinar o banco de dados (host ou componente) para o qual você quer descobrir o modo de execução.  

* Quando o comando é chamado a partir de um componente:
   * Se o parâmetro *\** for passado, o comando retorna *True* ou *False*, dependendo do modo em que o banco de dados está correndo,
   * Se o parâmetro *\** não for passado, o comando retorna *True* ou *False*, dependendo do modo em que o componente está sendo executado.
* Quando o comando é chamado a partir de um método de banco de dados do host, ele retorna *True* ou *False*, dependendo do modo em que o banco de dados host está executando.

#### Exemplo 

Em uma de suas rotinas, você inclui a depuração do código apenas quando você está executando no modo interpretado, desta forma rodear este código de depuração com um teste que chama Is compiled mode:

```4d
  // ...
 If(Not(Is compiled mode))
  // Inclua o código para depurar seu banco aqui
 End if
  // ...
```

#### Ver também 

[IDLE](idle.md)  
[Undefined](undefined.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 492 |
| Thread-seguro | &check; |
| Proibido no servidor ||


