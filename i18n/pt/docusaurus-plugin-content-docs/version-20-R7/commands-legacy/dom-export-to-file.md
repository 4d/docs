---
id: dom-export-to-file
title: DOM EXPORT TO FILE
slug: /commands/dom-export-to-file
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO FILE.Syntax-->**DOM EXPORT TO FILE** ( *refElemento* ; *viaArquivo* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência do elemento Root XMLK |
| viaArquivo | Text | &#8594;  | Acesso de rota completo do arquivo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM EXPORT TO FILE.Summary-->O comando DOM EXPORT TO FILE permite guardar uma árvore XML em um arquivo no disco.<!-- END REF-->  
  
Passe em *refElemento* a referência do elemento raiz a exportar.  
  
Passe em *rotaArquivo* a rota de acesso completa do arquivo de exportação a utilizar ou a criar. Se o arquivo não existir, ele é criado.  
  
Se passar unicamente um nome de arquivo (sem rota de acesso), será pesquisado o arquivo ou será criado ao lado do arquivo de estrutura.  
  
Se passar uma cadeia vazia (""), aparece uma caixa de diálogo padrão de abertura e criação de arquivos.

##### Notas sobre o processamento de caracteres de fim de linha 

Em XML, os saltos de linha não são significativos, independentemente se encontram dentro ou entre os elementos XML. Internamente, XML utiliza caracteres estandarte LF como separadores de linhas. Durante as operações de importação e exportação, os caracteres de salto de linha se podem converter. Durante uma importação, o analisador XML substitui os caracteres CRLF (rupturas de linha estandarte em Windows) por caracteres de LF. Durante a exportação, os caracteres LF se substituem por caracteres CR em caracteres macOS e CRLF em Windows.

Nota: Se deseja manter os retornos de carro, deve incluir em um elemento XML CDATA de forma que não seja processado pelo analisador XML. Em lugar de caracteres CRLF, também pode utilizar o caractere "<br/>", que é um retorno de carro explícito que não será processado pelo analisador.

Como padrão, arquivos XML são escritos sem BOM (Byte order mask). 

Pode controlar o final de linha de XML e gerenciamento BOM com o comando [XML SET OPTIONS](xml-set-options.md). 

**Nota de compatibilidade**: em bancos de dados/projetos criados com versões 4D anteriores a v19.x, como padrão 4D usava CR como caracteres de final de linha em macOS e BOM. Para ativar as novas configurações padrão, marque as configurações de compatibilidade (ver *Página Compatibilidade*) ou use o comando [XML SET OPTIONS](xml-set-options.md). 

#### Exemplo 

Este exemplo guarda a árvore *vRefElem* no arquivo MeuDoc.xml: 

```4d
 DOM EXPORT TO FILE(vRefElem;"C:\\pasta\MeuDoc.xml")
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0 e é gerado um erro.

#### Gestão de erros 

Se gera um erro quando: 

* A referência do elemento não for válida,
* A rota de acesso especificada não for válida,
* O volume de armazenamento retorna um erro (disco cheio, etc.).

#### Ver também 

[DOM EXPORT TO VAR](dom-export-to-var.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  