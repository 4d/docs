---
id: query-by-example
title: QUERY BY EXAMPLE
slug: /commands/query-by-example
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY EXAMPLE.Syntax-->**QUERY BY EXAMPLE** ( {*tabela*}{;}{*} )<!-- END REF-->
<!--REF #_command_.QUERY BY EXAMPLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai retornar a seleção de registros, ou a tabela Padrão, se omitido |
| * | Operador | &#8594;  | Se passado, a barra de rolagem não será exibida |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY BY EXAMPLE.Summary-->QUERY BY EXAMPLE realiza a mesma ação que o comando de menu Pesquisa por formulário.<!-- END REF-->.. no ambiente Desenho. Este comando mostra o formulário de entrada atual como janela de pesquisa. QUERY BY EXAMPLE busca em *tabela* os dados que o usuário introduz na janela de pesquisa. O formulário deve conter os campos que você queira utilizar para realizar a pesquisa. A pesquisa é otimizada; os campos indexados são utilizados automaticamente para otimizar a pesquisa.

Ver o manual de Desenho de 4D para maior informação sobre a utilização do comando de menu pesquisa por formulário... do ambiente Desenho. 

#### Exemplo 

O método neste exemplo mostra o formulário minhaPesquisa. Se o usuário aceita o formulário e executa a Pesquisa (ou seja, se a variável sistema OK toma o valor 1), são mostrados os registros que cumprem com o critério de Pesquisa:

```4d
 FORM SET INPUT([Pessoas];"minhaPesquisa") // Passar ao formulario de entrada
 QUERY BY EXAMPLE([Pessoas]) // Mostrar o formulário e realizar a pesquisa
 If(OK=1) // Se o usuário valida a pesquisa
    DISPLAY SELECTION([Pessoas]) // Mostrar os registros
 End if
```

#### Variáveis e conjuntos do sistema 

Se o usuário clicar no botão Aceitar, ou pressionar a tecla Enter, a variável sistema OK toma o valor 1, e a pesquisa é realizada. Se o usuário clicar no botão Cancelar, ou pressiona a tecla de anulação, a variável sistema OK toma o valor 0, e a pesquisa é cancelada.

#### Ver também 

[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 292 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |
| Modificar o registro atual ||
| Modificar a seleção atual ||
| Proibido no servidor ||


