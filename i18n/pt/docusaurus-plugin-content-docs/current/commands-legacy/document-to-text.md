---
id: document-to-text
title: Document to text
slug: /commands/document-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Document to text.Syntax-->**Document to text** ( *nomeArquivo* {; *conjCaracteres* {; *modoRetorno*}} ) : Text<!-- END REF-->
<!--REF #_command_.Document to text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Nome do documento ou caminho ao documento |
| conjCaracteres | Text, Integer | &#8594;  | Nome ou número do conjunto de caracteres |
| modoRetorno | Integer | &#8594;  | Modo de processamento para as linhas de ruptura |
| Resultado | Text | &#8592; | Texto do documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Document to text.Summary-->O comando **Document to text** le permite recuperar o conteúdo de um arquivo diretamente no disco em uma variável texto 4D ou campo texto.<!-- END REF-->

Em *nomeArquivo*, passe o nome ou caminho de acesso do arquivo a ler. O arquivo deve existir no disco, caso contrário é gerado um erro. Pode passar:

* Só o nome do arquivo, por exemplo "meuArquivo.txt": neste caso, o arquivo deve estar localizado junto ao arquivo de estrutura da aplicação.
* Um caminho de acesso relativo ao arquivo de estrutura da aplicação, por exemplo, "\\\\docs\\\\meuArquivo.txt" em Windows ou ": docs: meuArquivo.txt" em OS X.
* Um caminho de acesso absoluto, por exemplo, "c:\\\\app\\\\docs\\\\meuArquivo.txt" em Windows ou "MacHD:docs:meuArquivo.txt" em OS X.

Em *conjCaracteres*, se passa o conjunto de caracteres a utilizar para a leitura dos conteúdos. Pode passar uma cadeia com o nome estandarte do conjunto (por exemplo, "ISO-8859-1" ou "UTF-8") ou seu ID MIBEnum (inteiro longo). Para mais informação sobre a lista de conjuntos de caracteres suportados por 4D, consulte a descrição do comando [CONVERT FROM TEXT](convert-from-text.md).  
  
Se o documento contém um Byte Order Mark (BOM), 4D utiliza o conjunto de caracteres que foi definido em *conjCaracteres* (este parâmetro então se ignora).  
  
Se o documento não contém um BOM e se for omitido o parâmetro *conjCaracteres,* 4D utiliza por padrão os seguintes conjuntos de caracteres:

* Sob Windows: ANSI
* Sob OS X: MacRoman

Em breakMode, pode passar um inteiro longo que indica o processo a realizar nos caracteres de fim de linha presentes no documento. Pode passar uma das seguintes constantes, do tema "*Documentos Sistema*":

| Constante                   | Tipo          | Valor | Comentário                                                                                                                                                                  |
| --------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Inteiro longo | 0     | Sem processamento                                                                                                                                                           |
| Document with CR            | Inteiro longo | 3     | As linhas de ruptura se convertem ao formato OS X: CR (*retorno de carro*)                                                                                                  |
| Document with CRLF          | Inteiro longo | 2     | As linhas de ruptura se convertem ao formato Windows: CRLF (*return + salto de linha*)                                                                                      |
| Document with LF            | Inteiro longo | 4     | As linhas de ruptura se convertem ao formato Unix: LF (*salto de linha*)                                                                                                    |
| Document with native format | Inteiro longo | 1     | (Por padrão) as linhas de ruptura se convertem ao formato nativo do sistema operativo: CR (retorno de carro) em OS X, CRLF (*retorno de carro + salto de linha*) em Windows |

Por padrão, quando se omite o parâmetro *modoRetorno*, os saltos de linha se processam em modo nativo (1).

Nota de Compatibidade: opções de compatibilidade estão disponíveis para gerenciamento EOL e BOM. Ver *Página Compatibilidade*.  
  
**Nota**: Este comando não modifica a variável OK. Em caso de falha, é gerado um erro que pode interceptar utilizando um método instalado pelo comando [ON ERR CALL](on-err-call.md).

#### Exemplo 

Dado o documento texto seguinte (os campos estão separados por tabulações):

```RAW
id    name    price    vat3    4D Tags    99    19.6
```

Quando executa este código:

```4d
 $Text:=Document to text("products.txt")
```

... obtém:

```4d
  // $Text = "id\tname\tprice\tvat\r\n3\t4D Tags\t99 \t19.6"
  // \t = tab
  // \r = CR
```

#### Ver também 

*Documentos Sistema*  
[TEXT TO DOCUMENT](text-to-document.md)  