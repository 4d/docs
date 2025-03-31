---
id: restore
title: RESTORE
slug: /commands/restore
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE.Syntax-->**RESTORE** {( *endArquivo* {; *endPastaDestino*} )}<!-- END REF-->
<!--REF #_command_.RESTORE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| endArquivo | Text | &#8594;  | Endereço de acesso do arquivo a ser restituído |
| endPastaDestino | Text | &#8594;  | Endereço de acesso da pasta de destino |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESTORE.Summary-->O comando RESTORE permite restaurar o ou os arquivos incluidos em um arquivo de 4D.<!-- END REF--> Este comando é útil com interfaces personalizadas para a gestão de backups. 

Se o parâmetro *endArquivo* não passa, o comando mostra uma caixa de diálogo de abertura para que o usuário possa selecionar o arquivo a restaurar.

O parâmetro *endArquivo* permite indicar a rota de acesso do arquivo a restaurar. Esta rota deve ser expressa com a sintaxe do sistema. É possível passar uma rota absoluta ou uma relativa ao arquivo de estrutura do banco de dados.   
Neste caso (se é omitido o parâmetro *endPastaDest*), a caixa de diálogo de restauração padrão aparece com o arquivo pré-selecionado, de maneira que o usuário possa nomear a pasta de destino. Quando se completa o procedimento, aparece uma caixa de diálogo de alerta e mostra-se a pasta que contém os elementos restaurados. 

Também é possível passar o parâmetro *endPastaDest* com a rota de acesso da pasta de destino dos elementos restaurados. Esta rota deve ser expressa com a sintaxe do sistema. É possível passar uma rota absoluta ou relativa para o arquivo de estrutura do banco de dados. Se você passa este parâmetro, aparece uma caixa de diálogo de restauração pré-configurada, permitindo somente ao usuário lançar ou cancelar a restauração. Quando se completa o procedimento, a janela é fechada novamente sem mostrar informação adicional. 

O comando RESTORE modifica o valor das variáveis OK e Document: se a restauração é correta, OK toma o valor 1 e Document contém a rota da pasta de restauração. Se o usuário cancela a caixa de restauração, interrompe a restauração ou se ocorre um erro, OK toma o valor 0 e Document contém uma cadeia vazia. É possível interceptar o erro utilizando um método instalado através do comando *ON ERR CALL*.

Nota: em um aplicativo 4D compilado e fusionado com 4D Volume Desktop, o comando RESTORE produz a visualização de uma caixa de diálogo padrão de abertura de arquivos que lista por padrão os arquivos de extensão “4BK”.

#### Ver também 

[BACKUP](backup.md)  
[RESTORE INFO](restore-info.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 918 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK, Document, error |


