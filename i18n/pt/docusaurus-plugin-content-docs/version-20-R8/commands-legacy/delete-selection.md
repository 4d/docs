---
id: delete-selection
title: DELETE SELECTION
slug: /commands/delete-selection
displayed_sidebar: docs
---

<!--REF #_command_.DELETE SELECTION.Syntax-->**DELETE SELECTION** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.DELETE SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a qual apagar a seleção atual, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE SELECTION.Summary-->DELETE SELECTION apaga a seleção atual de registros de *tabela*.<!-- END REF--> Se a seleção atual estiver vazia, DELETE SELECTION não faz nada. Depois de apagar os registros, a seleção atual fica vazia. Os registros que são apagados durante uma transação estão bloqueados para os outros usuários e processos até que a transação seja confirmada ou cancelada.  

**Advertência**: a eliminação de uma seleção de registros é uma operação definitiva e não pode ser desfeita.

Desmarcar a opção **Registros apagados definitivamente** no Inspetor de tabelas lhe permite aumentar a velocidade das eliminações durante o uso de DELETE SELECTION (ver *Registros eliminados definitivamente* no manual *Modo Desenho*).

#### Exemplo 1 

O seguinte exemplo mostra todos os registros da tabela \[Pessoas\] e permite ao usuário selecionar quais apagar. O exemplo tem duas partes. A primeira é um método para mostrar os registros. A segunda é um método de objeto para um botão Apagar. Este é o primeiro método: 

```4d
 ALL RECORDS([Pessoas]) // Seleção de todos os registros
 &NBSP;FORM SET OUTPUT([Pessoas];"Lista") // Definição do formulário para listar os registros DISPLAY SELECTION ([Pessoas]) ` Mostrar todos os registros
```
  
  
Abaixo há o método de objeto do botão Apagar, que aparece no rodapé do formulário de saída. O método de objeto utiliza os registros selecionados pelo usuário (o conjunto sistema UserSet) para apagar a seleção. Note que se o usuário não seleciona nenhum registro, DELETE SELECTION não tem nenhum efeito.  

```4d
  // Solicitar confirmação de que o usuário realmente quer apagar os registros CONFIRM("Vocêe selecionou"+String(Records in set ("UserSet"))+" pessoas a apagar."
 +Char(13)+"Clique em OK para apagá-las.")
 If(OK=1)
    &NBSP;USE SET("UserSet") // Utilizar os registros escolhidos pelo usuário
    DELETE SELECTION([Pessoas]) // Apagar a seleção de registros
    &NBSP;End if
    &NBSP;ALL RECORDS([Pessoas]) // Seleção de todos os registros
```

#### Exemplo 2 

Se for encontrado um registro bloqueado durante a execução de DELETE SELECTION, esse registro não se apaga. Todos os registros bloqueados são colocados em um conjunto sistema chamado LockedSet. Depois da execução de DELETE SELECTION, pode testar LockedSet para verificar se os registros estavam bloqueados. O seguinte loop será executado até que todos os registros são apagados:  
  
```4d
 Repeat // Repetir para cada registro bloqueado
    &NBSP;DELETE SELECTION([EstaTabela])
    &NBSP;If(Records in set("LockedSet")#0) // Se houver registros bloqueados
    &NBSP;USE SET("LockedSet") // Selecionar apenas os registros bloqueados
    &NBSP;End if Until(Records in set("LockedSet")=0) // Até que não haja mais registros bloqueados
```

#### Ver também 

*Conjuntos*  
[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
*Record Locking*  
[TRUNCATE TABLE](truncate-table.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 66 |
| Thread-seguro | &check; |
| Modificar a seleção atual ||


