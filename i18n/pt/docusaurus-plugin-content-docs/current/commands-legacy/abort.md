---
id: abort
title: ABORT
slug: /commands/abort
displayed_sidebar: docs
---

<!--REF #_command_.ABORT.Syntax-->**ABORT**<!-- END REF-->
<!--REF #_command_.ABORT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ABORT.Summary-->O comando ABORT é utilizado em um método de projeto de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").<!-- END REF-->

Se não instala um método de projeto de tratamento de ocorrências, quando ocorra um erro (por exemplo, um erro do banco de dados) 4D mostrará sua caixa de diálogo de erro padrão e depois interromperá a execução de seu código. Se o código em execução é:

* Um método de objeto, método de formulário (ou um método de projeto chamado por um método de formulário ou de objeto), o controle retorna ao formulário que seja mostrado atualmente.
* Um método chamado desde um menu, o controle volta à barra de menus ou formulário que se mostra atualmente.
* O método mestre de um processo, então o processo termina.
* Um método chamado direta ou indiretamente por uma operação de importação ou exportação, a operação pára. A mesma coisa para as pesquisas sequenciais ou ordenações.
* Etc.

Se utiliza um método de projeto de tratamento de ocorrências, 4D não mostra mais sua caixa de diálogo de erros padrão e não interrompe a execução de seu código. Ao invés disso, 4D chama a seu método de projeto de gestão de erros (que pode ver como um manejador de exceções), e reassume a execução da linha de código seguinte no método que disparou o erro. 

Há erros que pode tratar por programação; por exemplo, durante uma operação de importação, um erro de banco de dados que assinala um valor duplicado pode “cobrir” o erro e seguir com a importação. Entretanto, há erros que não podem ser processados e erros que não deve “cobrir.” Nestes casos, necessita parar a execução chamando ABORT desde o método de projeto de gestão de erros.

#### Nota histórica 

Apesar do comando ABORT está destinado a ser utilizado apenas a partir de um método de projeto de gestão de erros, alguns membros da comunidade 4D também o utilizam em outros métodos para interromper sua execução. O fato de que funcione é apenas um efeito secundário. Não recomendamos usar esse comando em métodos diferentes aos métodos de projeto de gestão de erros.

#### Ver também 

[ON ERR CALL](on-err-call.md)  