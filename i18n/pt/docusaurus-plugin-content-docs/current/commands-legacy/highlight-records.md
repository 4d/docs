---
id: highlight-records
title: HIGHLIGHT RECORDS
slug: /commands/highlight-records
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT RECORDS.Syntax-->**HIGHLIGHT RECORDS** ( {*tabela* }{;}{ *nomConjunto* {; *}} )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT RECORDS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela cujos registros foram selecionados se omitidos, tabela do formulário atual |
| nomConjunto | Text | &#8594;  | Conjunto de registros a selecionar ou Userset se omitido |
| * | Operador | &#8594;  | Desativar a barra de rolagem automático da lista |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.HIGHLIGHT RECORDS.Summary-->O comando HIGHLIGHT RECORDS permite selecionar registros em um formulário listado.<!-- END REF--> Esta operação é idêntica à seleção de registros manual em modo listado utilizando o mouse ou as combinações de teclado **Shift+Clique** ou **Ctrl+Clique** (Windows) ou **comando+Clique** (Mac OS). A seleção atual não é modificada.  
  
**Nota**: o conjunto de registros selecionados é atualizado depois de redesenhar os registros; ou seja, depois da execução de todo o método de chamada e não apenas imediatamente depois da execução de HIGHLIGHT RECORDS.  
  
O parâmetro *tabela* permite designar a tabela da qual selecionar os registros. Este parâmetro pode ser utilizado, particularmente, para selecionar os registros dos subformulários incluídos, os quais não pertencem à tabela atual (ver a seguir).  

* Se passa um nome de conjunto válido em *nomConjunto*, o comando será aplicado aos registros desse conjunto para a *tabela* definida.
* Se omite o parâmetro *nomConjunto*, o comando selecionará unicamente os registros do conjunto UserSet atual. Este conjunto apenas é manejado em modo Desenho em caso de chamar os comandos [DISPLAY SELECTION](display-selection.md) /[MODIFY SELECTION](modify-selection.md). Se deseja selecionar os registros de um subformulário, deve passar um nome de tabela e de conjunto. Para maior informação sobre o conjunto UserSet, consulte a seção *Conjuntos*

Quando se passa o parâmetro \*, provoca a inativação da função de rolagem automático da lista se os registros selecionados não forem visíveis. Este mecanismo autoriza a gestão personalizadas da rolagem através do comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md).  
  
**Nota**: no marco dos subformulários incluídos, o comando HIGHLIGHT RECORDS não faz nada se a propriedade de seleção **Várias linhas** não estiver selecionada para o formulário. Neste caso, para selecionar uma linha, deve utilizar o comando [GOTO SELECTED RECORD](goto-selected-record.md).

#### Exemplo 

Em um formulário de saída mostrado pelo comando [MODIFY SELECTION](modify-selection.md), você deseja que o usuário possa realizar pesquisas sem que a seleção atual seja modificada. Para fazer isto, coloque um botão **Procurar** no formulário e associe-o com o seguinte método:

```4d
 SET QUERY DESTINATION(Into set;"UserSet")
 QUERY
 SET QUERY DESTINATION(Into current selection)
 HIGHLIGHT RECORDS
```

Quando o usuário clicar no botão, aparece a caixa de diálogo padrão procurar. Quando confirmar a pesquisa, os registros encontrados serão selecionados sem que a seleção atual seja modificada.

#### Ver também 

[GET HIGHLIGHTED RECORDS](get-highlighted-records.md)  
[OBJECT SET SCROLL POSITION ](object-set-scroll-position.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 656 |
| Thread-seguro | &check; |
| Proibido no servidor ||


