---
id: post-key
title: POST KEY
slug: /commands/post-key
displayed_sidebar: docs
---

<!--REF #_command_.POST KEY.Syntax-->**POST KEY** ( *codigo* {; *modificadores* {; *processo*}} )<!-- END REF-->
<!--REF #_command_.POST KEY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| codigo | Integer | &rarr; | Código do caractere ou código da tecla de função |
| modificadores | Integer | &rarr; | Estado de teclas modificadoras |
| processo | Integer | &rarr; | Número de referência do processo destino; ou fila do evento de aplicação, se omitido, ou 0 |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.POST KEY.Summary-->O comando POST KEY simula uma tecla.<!-- END REF--> Esse efeito funciona como se o usuário tivesse entrado um caractere no teclado.  
  
Você passa o código do caractere em *codigo*.  
  
Se passar o parâmetro *modificadores*, você passa uma ou mais combinações das constantes Eventos (modificadores). Por exemplo, para simular a tecla Shift, passa Shift key mask. Se não passar *modificadores*, nenhum modificador será simulado. 

Se especificar o parâmetro *processo*, a tecla foi enviada ao processo cujo número de processo você passou em *processo*. Se você passar *0* (zero) ou se omitir o parâmetro, a tecla é enviada ao nível da aplicação, e o agendador de tarefas 4D irá enviá-lo ao processo apropriado.

#### Exemplo 

Ver exemplo do comando [Process number](process-number.md).

#### Ver também 

*Códigos ASCII*  
*Códigos de Função de teclado*  
[POST CLICK](post-click.md)  
[POST EVENT](post-event.md)  