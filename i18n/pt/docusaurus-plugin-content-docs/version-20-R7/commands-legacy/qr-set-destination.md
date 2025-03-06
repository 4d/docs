---
id: qr-set-destination
title: QR SET DESTINATION
slug: /commands/qr-set-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DESTINATION.Syntax-->**QR SET DESTINATION** ( *area* ; *tipo* {; *especificos*} )<!-- END REF-->
<!--REF #_command_.QR SET DESTINATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| tipo | Integer | &#8594;  | Tipo do relatório |
| especificos | Text, Variable | &#8594;  | Específicos conectados ao tipo de saída |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET DESTINATION.Summary-->O comando QR SET DESTINATION permite definir o tipo de saída do relatório rápido em *area*.<!-- END REF-->  
  
No parâmetro *tipo*, passe uma das constantes do tema *QR Destino de saída*. O conteúdo do parâmetro *especificos* depende do valor de *tipo*. A tabela a seguir descreve os valores que podem ser passados nos parâmetros *tipo* e *especificos*:  
  
| Constante    | Tipo          | Valor | Comentário                                                       |
| ------------ | ------------- | ----- | ---------------------------------------------------------------- |
| qr HTML file | Inteiro longo | 5     |                                                                  |
| qr printer   | Inteiro longo | 1     | *detalhes:* "\*" para eliminar as caixas de diálogo de impressão |
| qr text file | Inteiro longo | 2     |                                                                  |

*qr printer* (1): se passar uma cadeia que contém um asterisco ("\*") no parâmetro *especificos*, não será mostrada uma caixa de diálogo durante a impressão e os parâmetros de impressão atuais se utilizarão automaticamente. Esta configuração é necessária se deseja imprimir o suporte no servidor.

*qr text file* (2): se passar uma cadeia vazia como no parâmetro *especificos*, é mostrada uma caixa de diálogo padrão de guardar arquivo. Se passar uma rota de acesso válida, o relatório rápido será guardado na localização indicada.   
  
Por padrão, o delimitador do campo é o caractere tab (ASCII 9). O delimitador de registro por padrão é o caractere retorno de carro (ASCII 13). Pode mudar esses caracteres por padrão atribuindo valores às variáveis sistema: FldDelimit e RecDelimit. Se em Windows, FldDelimit é igual a 13, um caractere 10 (salto de linha) será adicionado depois do retorno de carro. Considere que essas variáveis são utilizadas por outros comandos como por exemplo [IMPORT TEXT](import-text.md) Toda modificação dessas variáveis repercute em toda a aplicação.  
  
*qr 4D View area* (3): se o usuário tiver 4D View, é criada uma janela externa 4D View e mostra os resultados dos parâmetros atuais da área do relatório rápido.  
  
*qr HTML file* (5): é criado um arquivo HTML utilizando o modelo definido por [QR SET HTML TEMPLATE](qr-set-html-template.md). Para maior informação sobre o modo de conversão dos dados, consulte o manual de Desenho.

Se passar um número de *area* inválido, é gerado o erro -9850.  
Se o valor do destino *tipo* é incorreto, é gerado o erro -9852.

#### Exemplo 

O código a seguir define o arquivo texto Midoc.txt como tipo de destino do relatório rápido e o executa: 

```4d
 QR SET DESTINATION(MinhaArea;qr text file;"MeuDoc.txt")
 QR RUN(MinhaArea)
```

#### Ver também 

[QR GET DESTINATION](qr-get-destination.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 745 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


