---
id: save-set
title: SAVE SET
slug: /commands/save-set
displayed_sidebar: docs
---

<!--REF #_command_.SAVE SET.Syntax-->**SAVE SET** ( *conjunto* ; *documento* )<!-- END REF-->
<!--REF #_command_.SAVE SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nome do conjunto a salvar |
| documento | Text | &#8594;  | Nome do arquivo de disco para o qual vai salvar o conjunto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAVE SET.Summary-->SAVE SET guarda *conjunto* no arquivo *documento*.<!-- END REF-->  

Não é necessário que *documento* tenha o mesmo nome que o conjunto. Se passar uma string vazia em *documento*, aparece uma caixa de diálogo de salvar arquivos de maneira que o usuário possa introduzir o nome do documento. Com o comando [LOAD SET](load-set.md) pode carregar um conjunto guardado.

Se o usuário clicar em Cancelar na caixa de diálogo de Salvar Arquivo, ou se acontecer um erro durante a operação de salvar, a variável sistema OK assume o valor 0\. Do contrário, assume o valor 1.  
  
SAVE SET é utilizado frequentemente para salvar em disco os resultados de uma pesquisa longa.  
  
**Advertência**: lembre que um conjunto é uma representação de uma seleção de registros no momento em que o conjunto for criado. Se os registros representados pelo conjunto forem modificados, o conjunto poderia ficar inválido. Portanto, um conjunto guardado em disco deve representar a um grupo de registros que não seja modificado com frequência. Múltiplos eventos podem tornar um conjunto inválido: modificação ou eliminação de um registro do conjunto, ou modificação dos critérios que determinam a criação do conjunto. Lembre também que os conjuntos não guardam valores de campos.

#### Exemplo 

O exemplo abaixo mostra a caixa de diálogo padrão de salvar arquivos com o objetivo de permitir ao usuário introduzir o nome do documento que contém o conjunto:  

```4d
 SAVE SET("UmConjunto";"")
```

  
#### Variáveis e conjuntos do sistema 

Se o usuário clicar no botão Cancelar na caixa de diálogo de salvar arquivos, ou se houver um erro durante a operação de carregamento, a variável sistema OK assume o valor 0\. Do contrário, assume o valor 1.

#### Ver também 

[LOAD SET](load-set.md)  