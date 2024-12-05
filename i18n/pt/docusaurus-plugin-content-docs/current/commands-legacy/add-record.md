---
id: add-record
title: ADD RECORD
slug: /commands/add-record
displayed_sidebar: docs
---

<!--REF #_command_.ADD RECORD.Syntax-->**ADD RECORD** ( {*tabela*}{;}{*} )<!-- END REF-->
<!--REF #_command_.ADD RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a utilizar para entrada de dados ou Tabela por padrão, se omitida |
| * | Operator |  &#8594;  | Ocultar barras de deslocamento |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Compatibilidade 

<!--REF #_command_.ADD RECORD.Summary-->Esse comando foi implementado em 4D em lançamentos anteriores e é ainda útil para desenvolvimento básico ou protótipos.<!-- END REF--> Entretanto, para construir interfaces personalizadas e modernas, agora não é recomendado usar formulários genéricos baseados no comando *[DIALOG](../commands/dialog.md) que oferece propriedades avançadas e melhor controle sobre o fluxo de dados*

#### Descrição 

O comando ADD RECORD permite ao usuário adicionar um novo registro na tabela *tabela* ou na tabela por padrão, se omitir o parâmetro *tabela*. 

ADD RECORD cria um novo registro, e faz com que o novo registro se transforme no registro atual para o processo atual e mostra o formulário de entrada atual. No ambiente Menus personalizados, depois de que o usuário aceita o novo registro, o novo registro é o único registro na seleção atual. 

A seguinte imagem representa um formulário de entrada de dados típico. 

![](../assets/en/commands/pict2804768.en.png)

O formulário aparece na janela do primeiro plano do processo. A janela tem barras de rolagem e uma caixa de controle do tamanho. Se passar o parâmetro opcional *\** a janela aparece sem as barras de rolagem e sem a caixa de controle de tamanho.

ADD RECORD mostra o formulário até que o usuário aceita ou cancela o registro. Se o usuário está adicionando vários registros, o comando deve ser executado uma vez para cada registro. 

O registro é guardado (aceito) se o usuário clicar no botão Aceitar ou ao pressionar a tecla Intro (teclado numérico), ou se o comando [ACCEPT](accept.md) for executado. 

O registro não é guardado (cancelado) se o usuário clicar no botão Cancelar ou ao pressionar a tecla de anulação Esc ou se for executado o comando [CANCEL](cancel.md).

**Nota**: este comando não exibe tabelas para estar em modo leitura/escrita. Pode ser utilizado mesmo se a tabela estiver em modo lectura unicamente (ver *Record Locking*). Depois de chamar a ADD RECORD, OK toma o valor 1 se for aceito o registro e 0 se for cancelado.

**Nota:** o registro permanece em memória, inclusive quando é cancelado, e pode ser guardado se é executado \[#cmd id="53"\] antes de que mude o ponteiro do registro atual. 

#### Exemplo 1 

O seguinte exemplo é um loop utilizado geralmente para adicionar novos registros a um banco: 

```4d
 FORM SET INPUT([Clientes];"Entrada") // Designar o formulário de entrada da tabela [Clientes]
 Repeat // Loop até que o usuário cancele
    ADD RECORD([Clientes];*) // Adicionar um registro a tabela [Clientes]
 Until(OK=0) // Até que o usuário cancele
```

#### Exemplo 2 

O seguinte exemplo procura um cliente no banco. Dependendo dos resultados da busca, acontecerá uma destas coisas. Se não se encontrar um cliente, então é permitido ao usuário adicionar um novo cliente com ADD RECORD. Se encontrar ao menos um cliente, se lhe apresenta ao usuário o primeiro registro encontrado, o qual pode ser modificada com [MODIFY RECORD](modify-record.md "MODIFY RECORD"): 

```4d
 READ WRITE([Clientes])
 FORM SET INPUT([Clientes];"Entrada") // Decidir o formulario de entrada
 vlCustNum:=Num(Request("Introduzir um número de cliente:")) // Obter o número de cliente
 If(OK=1)
    QUERY([Clientes];[Clientes]CustNo=vlCustNum) // Procurar o cliente
    If(Records in selection([Clientes])=0) // se não se encontra nenhum cliente…
       ADD RECORD([Clientes]) // Adicionar um novo registro
    Else
       If(Not(Locked([Clientes])))
          MODIFY RECORD([Clientes]) // Modificar o registro
          UNLOAD RECORD([Clientes])
       Else
          ALERT("O registro está sendo utilizado atualmente.")
       End if
    End if
 End if
```

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se aceitar o registro e 0 se o cancelar. A variável OK não toma nenhum valor até que o registro tenha sido confirmado ou anulado.

#### Ver também 

[ACCEPT](accept.md)  
[CANCEL](cancel.md)  
[CREATE RECORD](create-record.md)  
[MODIFY RECORD](modify-record.md)  
[SAVE RECORD](save-record.md)  