---
id: current-method-name
title: Current method name
slug: /commands/current-method-name
displayed_sidebar: docs
---

<!--REF #_command_.Current method name.Syntax-->**Current method name**  : Text<!-- END REF-->
<!--REF #_command_.Current method name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Chamada nome do método |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current method name.Summary-->O comando Current method name devolve o nome do método no qual se chama.<!-- END REF--> Este comando é útil para depuração de métodos genéricos.

Em função do tipo de método chamado, a cadeia retornada pode ser:

| **Método de chamada**                                   | **Cadeia devolvida**                                      |
| ------------------------------------------------------- | --------------------------------------------------------- |
| Método de banco                                         | NomeMetodo                                                |
| Trigger                                                 | Trigger on \[NomeTabela\]                                 |
| Método de projeto                                       | NomeMetodo                                                |
| Método de formulário de tabela                          | \[NomeTabela\].NomeFormulario                             |
| Método de formulário de projeto                         | \[NomeTabela\]NomeFormulario                              |
| Método de objeto formulário de tabela                   | \[NomeTabela\]NomeFormulario.NomeObjeto                   |
| Método de objeto formulário de projeto                  | NomeFormulario.NomeObjeto                                 |
| Class Constructor                                       | ClassName:constructor                                     |
| Class Function                                          | ClassName.FunctionName                                    |
| Componente de Método de Projeto de Componente           | NomeMetodo                                                |
| Componente de Método de projeto de formulário           | NomeFormulario(NomeComponente)                            |
| Componente de Método de projeto de objeto de formulário | NomeFormulario(NomeComponente).NomeObjeto(NomeComponente) |

Este comando não pode ser chamado desde uma fórmula 4D.

**Nota:** para que este comando funcione em modo compilado, a range marcada não deve ser desativada. Veja *Controle de execução*.

```4d

//``

```4d

```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 684 |
| Thread-seguro | &check; |
| Proibido no servidor ||


