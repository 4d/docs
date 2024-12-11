---
id: modify-record
title: MODIFY RECORD
slug: /commands/modify-record
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY RECORD.Syntax-->**MODIFY RECORD** ( {*tabela*}{;}{*} )<!-- END REF-->
<!--REF #_command_.MODIFY RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a utilizar para entrada de dados ou Tabela por padrão, se omitida |
| * | Operator |  &#8594;  | Ocultar barras de deslocamento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MODIFY RECORD.Summary-->O comando MODIFY RECORD permite ao usuário modificar o registro atual da tabela *tabela* ou da tabela por padrão se é omitido o parâmetro *tabela*.<!-- END REF--> MODIFY RECORD carrega o registro, se não for carregado pelo processo atual e mostra o formulário de entrada atual. Se não houver registro atual, então MODIFY RECORD não faz nada. MODIFY RECORD não afeta a seleção atual. 

O formulário aparece na janela do primeiro plano do processo. A janela tem barras de rolagem e uma caixa de controle do tamanho. Se passar o parâmetro opcional *\** a janela aparece sem as barras de rolagem e sem a caixa de controle de tamanho. 

Para utilizar MODIFY RECORD, o registro atual deve ter acesso de leitura-escritura e não deve estar bloqueado.   
Se o formulário contiver botões de navegação entre os registros da seleção, MODIFY RECORD lhe permite ao usuário clicar nos botões para modificar registros e ser movidos a outros registros.

O registro é salvado (aceito) se o usuário clicar no botão Aceitar ou pressionar a tecla Intro (teclado numérico) ou se é executado o comando [ACCEPT](accept.md "ACCEPT"). 

O registro não é guardado se o usuário clicar num botão de tipo CANCELAR ou pressionar a combinação de teclas (Ctrl-Ponto em Windows, Comando-Ponto em Macintosh), ou se é executado o comando CANCEL.

Depois de chamar MODIFY RECORD, a variável sistema OK toma o valor 1 se for aceita o registro e 0 si for cancelada. 

**Nota:** o registro permanece em memória, inclusive quando é cancelada, e pode ser guardada se for executada [SAVE RECORD](save-record.md "SAVE RECORD") antes de que o ponteiro do registro atual mude. 

Se estiver utilizando MODIFY RECORD e o usuário não realiza nenhuma modificação ao registro, não são considerados que o registro tenha sido modificado e ainda que aceite o registro não serão guardadas novamente. As ações tais como a mudança do valor de variáveis, a seleção de caixas de seleção e de botões de opção não são classificadas como modificações. Unicamente a modificação do valor de um campo, através de uma entrada manual ou de um método, faz com que o registro seja guardado novamente.

#### Exemplos 

Ver o exemplo do comando [ADD RECORD](add-record.md).

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se aceitar o registro e 0 se o cancelar. A variável OK não toma nenhum valor até que o registro tenha sido confirmado ou anulado.

#### Ver também 

[ADD RECORD](add-record.md)  
[Locked](locked.md)  
[Modified record](modified-record.md)  
[READ WRITE](read-write.md)  
[UNLOAD RECORD](unload-record.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 57 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


