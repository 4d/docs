---
id: get-allowed-methods
title: GET ALLOWED METHODS
slug: /commands/get-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.GET ALLOWED METHODS.Syntax-->**GET ALLOWED METHODS** ( *arrMetodos* )<!-- END REF-->
<!--REF #_command_.GET ALLOWED METHODS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrMetodos | Text array | &#8592; | Array de nomes de métodos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET ALLOWED METHODS.Summary-->O comando GET ALLOWED METHODS retorna, em *arrMetodos*, os nomes dos métodos que possam ser utilizados para escrever fórmulas.<!-- END REF--> Estes métodos estão listados ao final da lista de comandos no editor.

Automaticamente, os métodos não podem ser utilizados no editor de fórmulas. Os métodos devem ser autorizados explicitamente utilizando o comando [SET ALLOWED METHODS](../commands/set-allowed-methods.md "SET ALLOWED METHODS"). Se este comando não tiver sido executado, GET ALLOWED METHODS retorna um array vazio.  
  
GET ALLOWED METHODS retorna exatamente o que se lhe passou a [SET ALLOWED METHODS](../commands/set-allowed-methods.md "SET ALLOWED METHODS"), ou seja um array alfa (o comando cria e dimensiona o array). Igualmente, se o caractere arroba (@) é utilizado para definir um grupo de métodos, é retornada a cadeia que contenha o caractere @ (e não os nomes dos métodos do grupo). 

Este comando é útil para conservar os parâmetros do conjunto atual de métodos autorizados antes da execução de uma fórmula em um contexto específico (por exemplo, um relatório rápido). 

#### Exemplo 

Este exemplo autoriza um conjunto de métodos específicos para criar um relatório: 

```4d
  //Armacenamento dos parâmetros atuais
 GET ALLOWED METHODS(metodosArray)
 
  //Definição dos métodos para o relatório rápido
 arrMetodos_Reports{1}:="Reports_@"
 SET ALLOWED METHODS(arrMetodos_Reports)
 QR REPORT([Pessoas];"MeuRelatorio")
 
  //Reestabelecimento dos parâmetros atuais
 SET ALLOWED METHODS(arrMetodos)
```

#### Ver também 

[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 908 |
| Thread-seguro | &check; |
| Proibido no servidor ||


