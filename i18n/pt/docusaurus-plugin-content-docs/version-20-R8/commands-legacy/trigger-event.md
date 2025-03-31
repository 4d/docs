---
id: trigger-event
title: Trigger event
slug: /commands/trigger-event
displayed_sidebar: docs
---

<!--REF #_command_.Trigger event.Syntax-->**Trigger event**  : Integer<!-- END REF-->
<!--REF #_command_.Trigger event.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | 0 = Fora de um ciclo de execução de trigger; 1 = Guardar um novo registro; 2 = Guardar um registro existente; 3 = Apagar um registro. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Trigger event.Summary-->Quando chamado de dentro de um trigger, o comando **[Trigger event](trigger-event.md)** retorna um valor numérico que indica o tipo do evento do banco, em outras palavras, a razão pela qual é chamado o trigger.<!-- END REF-->  

As seguintes constantes pré-definidas são oferecidas pelo 4D no tema *Trigger Events*:  
  
| Constante                       | Tipo          | Valor |
| ------------------------------- | ------------- | ----- |
| On Deleting Record Event        | Inteiro longo | 3     |
| On Saving Existing Record Event | Inteiro longo | 2     |
| On Saving New Record Event      | Inteiro longo | 1     |
  
  
Dentro de um trigger, se realizar operações de banco de dados sobre vários registros, pode encontrar condições (geralmente registros bloqueados) que impedem ao trigger executar corretamente as operações para as quais for chamado. Um exemplo desta situação é a atualização de vários registros na tabela \[Produtos\] quando se adiciona um registro a tabela \[Faturas\]. Neste ponto, deve parar as operações do banco e devolver um erro de maneira que o processo chamante saiba que a petição não pode ser realizada. O processo chamante deve então poder cancelar, durante a transação, as operações incompletas realizadas pelo trigger. Quando isso acontece, você precisa saber, de dentro do trigger, se você estiver em uma transação antes mesmo de tentar fazer algo. Para fazer isto, utilize o comando [In transaction](in-transaction.md).  
  
Em 4D não há limite, além da quantidade da memória disponível, para a chamada de triggers em cascada. Para otimizar a execução de um trigger, pode escrever o código de seus triggers dependendo não apenas do evento do banco, mas também do nível da chamada quando os triggers são chamados em cascada. Por exemplo, durante o evento de banco deletion para a tabela \[Faturas\], pode não realizar a atualização do campo \[Clientes\] Vendas brutas se a eliminação do registro da tabela \[Faturas\] é parte da eliminação em cascada de faturas relacionadas com o registro na tabela \[Clientes\] que está sendo eliminado. Para fazer isto, utilize os comandos [Trigger level](trigger-level.md) e [TRIGGER PROPERTIES](trigger-properties.md).

#### Exemplo 

Utilize o comando **Trigger event** para estruturar seus triggers desta maneira:

```4d
  // Trigger da tabela [qualquerTabela]
 var $0 : Integer
 $0:=0 // Tenha certeza que a petição do banco será concedida
 Case of
    :(Trigger event=On Saving New Record Event)
  // Executar as ações apropriadas para guardar um novo registro
    :(Trigger event=On Saving Existing Record Event)
  // Executar as ações apropriadas para guardar um registro existente
    :(Trigger event=On Deleting Record Event)
  // Executar as ações apropriadas para a eliminação de um registro
 End case
```

#### Ver também 

[In transaction](in-transaction.md)  
[Trigger level](trigger-level.md)  
[TRIGGER PROPERTIES](trigger-properties.md)  
*Triggers*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 369 |
| Thread-seguro | &check; |


