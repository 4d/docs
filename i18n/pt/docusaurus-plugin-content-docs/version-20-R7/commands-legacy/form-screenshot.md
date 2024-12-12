---
id: form-screenshot
title: FORM SCREENSHOT
slug: /commands/form-screenshot
displayed_sidebar: docs
---

<!--REF #_command_.FORM SCREENSHOT.Syntax-->**FORM SCREENSHOT** ( {{*tabela* ;} *nomeForm* ;} *imagForm* {; *pagNum*} )<!-- END REF-->
<!--REF #_command_.FORM SCREENSHOT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do formulário |
| nomeForm | Text | &#8594;  | Nome do formulário |
| imagForm | Picture | &#8592; | Imagem do formulário em execução se o primeiro parâmetro se omite, ou<br/>Imagem do formulário no editor de formulários se passar um nome de formulário |
| pagNum | Integer | &#8594;  | Número de página do formulário |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM SCREENSHOT.Summary-->O comando **FORM SCREENSHOT** retorna um formulário em forma de imagem.<!-- END REF--> Este comando aceita duas sintaxes diferentes: em função da sintaxe utilizada, você obtém ou uma imagem do formulário em execução ou uma imagem do formulário no editor de formulários.

* FORM SCREENSHOT ( *imagF* *orm* )  
Esta sintaxe permite obter uma captura de tela exata da página atual do formulário em execução ou carregado sob o comando [FORM LOAD](form-load.md): a imagem retorna no parâmetro   *imagForm* contém todos os objetos visíveis do formulário com os valores atuais dos campos e das variáveis do formulário, subformulário, etc. O formulário é retornado em sua totalidade, sem considerar o tamanho da janela que o contenha.  
Considere que esta sintaxe só funciona com formulários de entrada.
* FORM SCREENSHOT ( {*tabela* ;} nomeForm; *imagForm*{; *pagNum*} )  
Esta sintaxe permite obter uma captura de tela (screensho) de um formulário "modelo" do modo como é exibido no Editor de formulários. Todos os objetos visíveis são desenhados da mesma forma que no editor; os comandos consideram os formulários herdados e os objetos localizados na página 0.  
Se deseja uma captura de tela de um formulário tabela, passe a tabela do formulário no parâmetro *tabela* e depois seu nome como uma string em *nomeForm*. Para um formulário projeto, passe diretamente o nome do formulário em *nomeForm*.  
Automaticamente, o comando retorna uma captura de tela da página 1 do formulário. Se apenas deseja uma imagem da página 0, ou de qualquer outra página do formulário, passe o número de página no parâmetro *pagNum*.

**Notas:** 

* Àreas Web não são geradas na screenshot retornada.
* Já que os primeiros dois parâmetros do comando são opcionais, não é possível passar uma função retornando um ponteiro, tal como [Current form table](current-form-table.md)\-> ou [Table](table.md)\->, diretamente como argumento. Apesar dessa sintaxe funcionar em modo interpretado, seria rejeitada durante a compilação, então use uma variável ponteiro intermediária nesse caso. Para saber mais, veja "*Direct use of commands returning pointers*".

#### Ver também 

[FORM LOAD](form-load.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 940 |
| Thread-seguro | &cross; |


