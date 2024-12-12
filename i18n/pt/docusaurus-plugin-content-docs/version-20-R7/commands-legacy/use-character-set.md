---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *mapa* {; *mapaEntradaSaida*} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mapa | Text, * | &#8594;  | Nome do conjunto de caracteres a ser usado (modo Unicode), ou nome do Documento do mapa ASCII a ser usado (ASCII mode) ou * para reiniciar para o conjunto de caracteres/mapa ASCII padrão |
| mapaEntradaSaida | Integer | &#8594;  | 0 = Mapa de saída 1 = Mapa de entrada, se omitido, mapa de saída |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.USE CHARACTER SET.Summary-->USE CHARACTER SET modifica o conjunto de caracteres usado por 4D durante a transferência de dados entre o banco de dados e um documento ou uma porta serial para o processo atual.<!-- END REF--> As operações de transferência incluem a importação e exportação de texto (ASCII), DIF, e os arquivos SYLK. Um mapa de caracteres também funciona com os dados enviados pelos comandos [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (para pacotes de tipo texto), e [RECEIVE BUFFER](receive-buffer.md). Não tem efeito em transferências de dados realizadas com [SEND RECORD](send-record.md), [SEND VARIABLE](send-variable.md), [RECEIVE RECORD](receive-record.md), [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (para pacotes tipo BLOB) e [RECEIVE VARIABLE](receive-variable.md).

O parâmetro *mapa* deve corresponder ao nome do conjunto de caracteres "IANA" a ser utilizado, ou a um dos seus apelidos. Por exemplo, os nomes "iso-8859-1" ou "UTF-8" são nomes válidos, bem como os apelidos "latin1" ou "L1". Para mais informações sobre esses nomes, consulte o seguinte endereço:   
*http://www.iana.org/assignments/character-sets*. Também se apresentam exemplos de nomes IANA na descrição do comando [CONVERT FROM TEXT](convert-from-text.md).  

Se *mapaEntradaSaida* for 0, o mapa é definido para a exportação. Se *mapaEntradaSaida* for 1, o mapa é definido para a importação. Se você não passar o parâmetro *mapaEntradaSaida*, o mapa de exportação é usado por padrão.

Quando o parâmetro *\** é passado, o conjunto de caracteres padrão é restaurado (mapa de importação ou exportação dependendo do valor de *mapaEntradaSaida*)*.*

Em 4D v11, o conjunto de caracteres por padrão é UTF-8.

#### Exemplo 

O exemplo a seguir (modo Unicode) usa o caracteres UTF-16 para exportar um texto, então o conjunto de caracteres padrão é restaurado:

```4d
 USE CHARACTER SET("UTF-16LE";0) // Use o conjunto de caracteres UTF-16 "Little Endian"
 EXPORT TEXT([MiTabla];"MiTexto") // Exportar dados através do mapa
 USE CHARACTER SET(*;0) // Restaure o conjunto de caracteres padrão
```

#### Variáveis e conjuntos do sistema 

A variável de sistema OK é definida como 1 se o mapa é carregado corretamente. Caso contrário, é definido como 0.

#### Ver também 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  