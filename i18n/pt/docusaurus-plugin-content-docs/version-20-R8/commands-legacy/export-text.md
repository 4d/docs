---
id: export-text
title: EXPORT TEXT
slug: /commands/export-text
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT TEXT.Syntax-->**EXPORT TEXT** ( {*tabela* ;} *documento* )<!-- END REF-->
<!--REF #_command_.EXPORT TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual vai exportar dados, ou tabela Padrão, se omitida |
| documento | Text | &#8594;  | Documento texto que recebe os dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXPORT TEXT.Summary-->O comando EXPORT TEXT escreve os dados dos registros da seleção atual de *tabela* no processo atual.<!-- END REF--> Os dados são escritos em *documento*, um documento de texto Windows ou Macintosh, no disco.

A operação de exportação é realizada pelo formulário de saída atual. A operação de exportação escreve os campos e as variáveis baseado na ordem de entrada do formulário de saída. Por essa razão, utilize um formulário de saída que só contenha os campos ou objetos editáveis que queira exportar. Não localize botões ou outros objetos no formulário de exportação. Os objetos de sub-formulário são ignorados.

Um evento On Load é enviado ao método do formulário por cada registro exportado. Utilize este evento para definir as variáveis que poderia utilizar no formulário de exportação.

O parâmetro *documento* pode dar nome a um documento novo ou existente. Se *documento* tem o mesmo nome que um documento existente, o documento existente é sobrescrito. O *documento* pode incluir uma rota de acesso que contenha os nomes dos volumes e as pastas. Se passa uma cadeia vazia, aparece a caixa de diálogo comum de salvar arquivos. Se o usuário cancela este diálogo, é cancelada a operação de exportação, e a variável sistema OK toma o valor 0\. 

Um termômetro de progresso aparece durante a exportação. O usuário pode cancelar a operação clicando no botão Parar. Se a exportação termina com sucesso, a variável sistema OK toma o valor 1\. Em caso de erro ou se a operação seja interrompida, a variável OK toma o valor 0\. O termômetro pode ser ocultado com o comando [MESSAGES OFF](messages-off.md).

Em modo Unicode (modo padrão), o comando utiliza por padrão o conjunto de caracteres UTF-8\. Pode utilizar o comando [USE CHARACTER SET](use-character-set.md) para modificar este conjunto de caracteres. 

Durante a utilização de EXPORT TEXT, o delimitador de campos padrão é o caractere de tabulação (código 9). O delimitador do registro por padrão é o retorno de carro (código 13). Pode modificar estes valores atribuindo novos valores às *Variáveis sistema* **FldDelimit** e **RecDelimit**. O usuário pode mudar estes valores na caixa de diálogo de exportação do ambiente Aplicação. Note que os campos exportados contêm caracteres definidos como campo ou delimitadores de registros, estes caracteres são automaticamente substituidos com espaço no arquivo exportado, de modo a evitar problemas ocm o processo de importação.

#### Exemplo 

Este exemplo exporta dados a um documento texto. O método primeiro começa por definir o formulário de saída de maneira que os dados sejam exportados pelo formulário correto, modifica os delimitadores, depois realiza a exportação:

```4d
 FORM SET OUTPUT([Pessoas];"Exportar")
 FldDelimit:=27 // Definir caractere delimitador de campos: Escape
 RecDelimit:=10 // Definir caractere delimitador de registros: Line Feed
 EXPORT TEXT([Pessoas];"Novas_Pessoas.txt") // Exportação do documento "Novas_Pessoas.txt"
```

#### Variáveis e conjuntos do sistema 

OK toma o valor 1 se a exportação termina com sucesso; do contrário, toma o valor 0.

#### Ver também 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[IMPORT TEXT](import-text.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 167 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


