---
id: dom-export-to-var
title: DOM EXPORT TO VAR
slug: /commands/dom-export-to-var
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO VAR.Syntax-->**DOM EXPORT TO VAR** ( *refElemento* ; *vXMLVar* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO VAR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência do elemento Root XMLK |
| vXMLVar | Text, Blob | &#8592; | Variável que recebe a árvore XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM EXPORT TO VAR.Summary-->O comando DOM EXPORT TO VAR permite salvar um árvore XML em uma variável texto ou BLOB.<!-- END REF-->  

Passe em *refElemento* a referência do elemento raiz a exportar.  
  
Passe em *vXMLVar* o nome da variável que deve conter a árvore XML. Esta variável pode ser de tipo Texto ou BLOB. Pode selecionar o tipo em função das operações a ser realizada ou do tamanho que a árvore possa alcançar (lembre que em modo Unicode, as variáveis de tipo Texto estão limitadas a 32 K de texto, enquanto em modo Unicode, este limite é de 2 GB).  
  
Lembre que se utilizar uma variável de tipo texto para armazenar o elemento *refElemento*, em modo não Unicode, será codificado utilizando o conjunto de caracteres Mac “atual” (é dizer, Mac Romam na maioria dos sistemas ocidentais). Isso significa que o texto retornado perderá sua codificação original (encoding="xxx"). Neste caso, as variáveis *vXMLVar* permite visualizar ou armazenar o código obtido mas NÃO para gerar um documento XML válido (utilizando o comando [SEND PACKET](send-packet.md) por exemplo).  
  
Em modo Unicode, o código original se conserva na variável.

##### Notas sobre o processamento de caracteres de fim de linha 

Em XML, os saltos de linha não são significativos, independentemente se encontram dentro ou entre os elementos XML. Internamente, XML utiliza caracteres estandarte LF como separadores de linhas. Durante as operações de importação e exportação, os caracteres de salto de linha se podem converter. Durante uma importação, o analisador XML substitui os caracteres CRLF (rupturas de linha estandarte em Windows) por caracteres de LF. Durante a exportação, os caracteres LF se substituem por caracteres CR em caracteres macOS e CRLF em Windows.

Nota: Se deseja manter os retornos de carro, deve incluir em um elemento XML CDATA de forma que não seja processado pelo analisador XML. Em lugar de caracteres CRLF, também pode utilizar o caractere "<br/>", que é um retorno de carro explícito que não será processado pelo analisador.

Como padrão, arquivos XML são escritos sem BOM (Byte order mask). 

Pode controlar o final de linha de XML e gerenciamento BOM com o comando [XML SET OPTIONS](xml-set-options.md). 

**Nota de compatibilidade**: em bancos de dados/projetos criados com versões 4D anteriores a v19.x, como padrão 4D usava CR como caracteres de final de linha em macOS e BOM. Para ativar as novas configurações padrão, marque as configurações de compatibilidade (ver *Página Compatibilidade*) ou use o comando [XML SET OPTIONS](xml-set-options.md). 

#### Exemplo 

Este exemplo salva a árvore vRefElem em uma variável texto: 

```4d
 var vtMeuTexto : Text
 DOM EXPORT TO VAR(vRefElem;vtMeuTexto)
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0 e um erro é gerado (por exemplo, se a referência do elemento não for válida).

#### Ver também 

[DOM EXPORT TO FILE](dom-export-to-file.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 863 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


