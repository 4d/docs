---
id: import-dif
title: IMPORT DIF
slug: /commands/import-dif
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT DIF.Syntax-->**IMPORT DIF** ( {*tabela* ;} *documento* )<!-- END REF-->
<!--REF #_command_.IMPORT DIF.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual se importarão os dados, ou a tabela Padrão, se omitido |
| documento | Text | &#8594;  | documento DIF a importar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.IMPORT DIF.Summary-->O comando IMPORT DIF lê dados de *documento*, um documento DIF Windows ou Macintosh e os escreve em *tabela* criando novos registros para essa tabela.<!-- END REF-->

A operação de importação é realizada através do formulário de entrada atual. A operação de importação lê os campos e as variáveis en função do plano dos objetos no formulário de entrada. Por esta razão, deve ter muito cuidado em relação à ordem dos objetos texto (campos e variáveis) no formulário. O primeiro objeto no qual os dados serão importados deve estar ao fundo do formulario, etc. Se o número de campos ou variáveis no formulário não corresponde ao número de campos a importar, os campos extras são ignorados. Um formulário de entrada utilizado para importar não pode conter botões. Os objetos de subformulário são ignorados.

**Nota:** Uma maneira de ter certeza que os dados sejam importados nos objetos corretos é selecionar o objeto no qual deve ser importado o primeiro campo e movê-lo ao primeiro plano. Continue movendo os campos e variáveis ao primeiro plano, em ordem, tendo certeza de que tenha um campo ou variável para cada campo a importar. 

Um evento On Validate é enviado ao método de formulário para cada registro que seja importado. Utilize este evento para copiar os dados das variáveis aos campos, se utiliza as variáveis no formulário de importação.

O parâmetro *documento* pode incluir uma rota de acesso que contenha os nomes de volumes e pastas. Se passa uma string vazia, aparece a caixa de diálogo padrão de abertura de arquivos. Se usuário cancela este diálogo, se cancela a operação de importação, e a variável sistema OK toma o valor 0.

Um termômetro de progresso aparece durante a importação. O usuário pode cancelar a operação clicando no botão Parar. Os registros que tenham sido importados não serão removidos se usuário pressiona o botão Parar. Se a importação termina com sucesso, a variável sistema OK toma o valor 1\. Se ocorre um erro ou se a operação é interrompida, a variável sistema toma o valor 0\. O termômetro pode ser ocultado com o comando [MESSAGES OFF](messages-off.md). 

O comando utiliza por padrão o conjunto de caracteres UTF-8\. Os documentos com formato DIF utilizam geralmente o conjunto de caracteres IBM437, pode ser necessário utilizar o comando [USE CHARACTER SET](use-character-set.md) para definir o conjunto de caracteres apropriado.

Durante a utilização de [EXPORT DIF](export-dif.md "EXPORT DIF"), o delimitador de campos automaticamente é o caractere de tabulação (código 9). O delimitador do registro por padrão é o retorno de carro (código 13). Pode modificar estes valores atribuindo novos valores às duas variáveis sistema FldDelimit e RecDelimit. O usuário pode mudar estes valores na caixa de diálogo de exportação do ambiente Desenho. Como os campos Texto podem conter retornos de carro, seja cuidadoso se utilizar o retorno de carro como delimitador entre os campos a exportar.

#### Exemplo 

O exemplo a seguir importa dados de um documento DIF. O método começa definindo o formulário de entrada de maneira que os dados sejam importados pelo formulário correto, depois realiza a importação:

```4d
 FORM SET INPUT([Pessoas];"Importar")
 IMPORT DIF([Pessoas];"Novas_Pessoas.dif") // Importação do documento “Novas_Pessoas.dif”
```

#### Variáveis e conjuntos do sistema 

OK toma o valor 1 se la importação termina com sucesso; do contrário, toma o valor 0.

#### Ver também 

[EXPORT DIF](export-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 86 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


