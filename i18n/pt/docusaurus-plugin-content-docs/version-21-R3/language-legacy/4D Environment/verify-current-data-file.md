---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** ({ *objetos* : Integer ; *opções* : Integer ; *metodo* : Text {; *arrayTabelas* : Integer array {; *arrayCampos* : Integer array}} })<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objetos | Integer | &#8594; | Objeto a ser verificado |
| opções | Integer | &#8594; | Opções de verificação |
| metodo | Text | &#8594; | Nome do método 4D de retrochamada |
| arrayTabelas | Integer array | &#8594; | Números de tabelas a serem verificadas |
| arrayCampos | Integer array | &#8594; | 2D array, numbers of indexes to be checked |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15 R3|Modificado|
|11 SQL Release 4|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->O comando VERIFY CURRENT DATA FILE realiza uma verificação estrutural dos objetos encontrados no arquivo de dados atualmente aberto por 4D.<!-- END REF-->

Este comando tem o mesmo funcionamento que o comando [VERIFY DATA FILE](../commands/verify-data-file), exceto que ela só se aplica ao arquivo de dados atuais do banco de dados aberto. Por conseguinte, não requer parâmetros que especificam a estrutura e dados.  
Consulte o comando [VERIFY DATA FILE](../commands/verify-data-file) para obter uma descrição dos parâmetros.

Se você passar o comando VERIFY CURRENT DATA FILE sem parâmetros, a verificação é realizada com os valores padrão dos parâmetros:

\- *objetos* \= Verificar todos (= valor 16)  
\- *opções* \= 0 (é criado o arquivo de histórico)  
\- *método* \= ""  
\- *arrayTabelas* e *arrayCampos* são omitidos.

Quando este comando é executado, o cache de dados são liberados e todas as operações para acessar os dados são bloqueadas durante a verificação.

Se um arquivo de histórico foi gerado, o nome completo de caminho é retornado na variável de sistema Document.

## Variáveis e conjuntos do sistema 

Se a verificação não for realizada, um erro é gerado e a variável do sistema OK é definida como 0. Se um arquivo de log foi gerado, seu nome de caminho completo é retornado na variável do sistema Document.

## Ver também 

[VERIFY DATA FILE](../commands/verify-data-file)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1008 |
| Thread-seguro | yes |
| Modificar variáveis | OK, Document, error |


