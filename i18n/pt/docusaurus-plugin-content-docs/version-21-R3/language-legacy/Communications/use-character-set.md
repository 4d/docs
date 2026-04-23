---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *mapa* : Text, Operator {; *mapaEntradaSaida* : Integer} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mapa | Text, Operator | &#8594; | Nome do conjunto de caracteres a ser usado (modo Unicode), ou nome do Documento do mapa ASCII a ser usado (ASCII mode) ou * para reiniciar para o conjunto de caracteres/mapa ASCII padrão |
| mapaEntradaSaida | Integer | &#8594; | 0 = Mapa de saída 1 = Mapa de entrada, se omitido, mapa de saída |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.USE CHARACTER SET.Summary-->USE CHARACTER SET modifica o conjunto de caracteres usado por 4D durante a transferência de dados entre o banco de dados e um documento ou uma porta serial para o processo atual.<!-- END REF--> As operações de transferência incluem a importação e exportação de texto (ASCII), DIF, e os arquivos SYLK. Um mapa de caracteres também funciona com os dados enviados pelos comandos [SEND PACKET](../commands/send-packet), [RECEIVE PACKET](../commands/receive-packet) (para pacotes de tipo texto), e [RECEIVE BUFFER](../commands/receive-buffer). Não tem efeito em transferências de dados realizadas com [SEND RECORD](../commands/send-record), [SEND VARIABLE](../commands/send-variable), [RECEIVE RECORD](../commands/receive-record), [SEND PACKET](../commands/send-packet), [RECEIVE PACKET](../commands/receive-packet) (para pacotes tipo BLOB) e [RECEIVE VARIABLE](../commands/receive-variable).

O parâmetro *mapa* deve corresponder ao nome do conjunto de caracteres "IANA" a ser utilizado, ou a um dos seus apelidos. Por exemplo, os nomes "iso-8859-1" ou "UTF-8" são nomes válidos, bem como os apelidos "latin1" ou "L1". Para mais informações sobre esses nomes, consulte o seguinte endereço:   
*http://www.iana.org/assignments/character-sets*. Também se apresentam exemplos de nomes IANA na descrição do comando [CONVERT FROM TEXT](../commands/convert-from-text).  

Se *mapaEntradaSaida* for 0, o mapa é definido para a exportação. Se *mapaEntradaSaida* for 1, o mapa é definido para a importação. Se você não passar o parâmetro *mapaEntradaSaida*, o mapa de exportação é usado por padrão.

Quando o parâmetro *\** é passado, o conjunto de caracteres padrão é restaurado (mapa de importação ou exportação dependendo do valor de *mapaEntradaSaida*)*.*

Em 4D v11, o conjunto de caracteres por padrão é UTF-8.

## Exemplo 

O exemplo a seguir (modo Unicode) usa o caracteres UTF-16 para exportar um texto, então o conjunto de caracteres padrão é restaurado:

```4d
 USE CHARACTER SET("UTF-16LE";0) // Use o conjunto de caracteres UTF-16 "Little Endian"
 EXPORT TEXT([MiTabla];"MiTexto") // Exportar dados através do mapa
 USE CHARACTER SET(*;0) // Restaure o conjunto de caracteres padrão
```

## Variáveis e conjuntos do sistema 

A variável de sistema OK é definida como 1 se o mapa é carregado corretamente. Caso contrário, é definido como 0.

## Ver também 

[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[RECEIVE BUFFER](../commands/receive-buffer)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 205 |
| Thread-seguro | yes |
| Modificar variáveis | OK |


