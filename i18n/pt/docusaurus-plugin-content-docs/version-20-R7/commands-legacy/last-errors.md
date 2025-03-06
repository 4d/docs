---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors**  : Collection<!-- END REF-->
<!--REF #_command_.Last errors.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Collection of error objects |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Last errors.Summary-->O comando **Last errors** devolve a pilha atual de erros da aplicação 4D como uma coleção de objetos de erro, ou **null** se não tiver produzido nenhum erro.<!-- END REF--> A pilha de erros inclui os objetos enviados pelo comando [throw](throw.md), se houver.

Cada objeto de erro contém os atributos abaixo:

| **Propriedade**    | **Tipo** | **Descrição**                                        |
| ------------------ | -------- | ---------------------------------------------------- |
| errCode            | number   | Código de erro                                       |
| message            | text     | Descrição de erro                                    |
| componentSignature | text     | Assinatura de componente interno que devolveu o erro |
  
  
Este comando deve ser chamado desde um método de chamada de erro instalado pelo comando [ON ERR CALL](on-err-call.md). 


#### Ver também 

[ON ERR CALL](on-err-call.md)  
[throw](throw.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1799 |
| Thread-seguro | &check; |


