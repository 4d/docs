---
id: select-document
title: Select document
slug: /commands/select-document
displayed_sidebar: docs
---

<!--REF #_command_.Select document.Syntax-->**Select document** ( *diretorio* ; *tipoArquivos* ; *titulo* ; *opçoes* {; *selecionados*} ) : Text<!-- END REF-->
<!--REF #_command_.Select document.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| diretorio | Text, Integer | &#8594;  | Rota de acesso do diretório a exibir na caixa de diálogo de seleção de documentos, ou String vazia para exibir a pasta de usuário padrão ("Meus documentos" em Windows e "Documentos" em Mac OS) ou Número da rota de acesso memorizada. |
| tipoArquivos | Text | &#8594;  | Lista de tipos de documentos a filtrar, ou "*" para não filtrar os documentos |
| titulo | Text | &#8594;  | Título da caixa de diálogo de seleção |
| opçoes | Integer | &#8594;  | Opções de seleção |
| selecionados | Text array | &#8592; | Array que contém a lista de rotas de acesso + nomes dos arquivos selecionados |
| Resultado | Text | &#8592; | Nome dos arquivos selecionados (primeiro arquivo da lista em caso de seleção múltipla) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Select document.Summary-->O comando Select document mostra uma caixa de diálogo padrão de abertura de documentos, permitindo ao usuário definir um ou mais arquivos e devolver o nome e/ou rota de acesso completa dos arquivos selecionados.<!-- END REF-->  
  
O parâmetro diretório indica a pasta cujo conteúdo deve ser mostrado inicialmente na caixa de diálogo de abertura de documentos. Pode passar três tipos de valores:

* um texto que contenha a rota de acesso completa do diretório a mostrar.
* uma string vazia ("") para mostrar a pasta do usuário por padrão do sistema (“Meus documentos” em Windows, “Documentos” em Mac OS).
* um número de rota de acesso memorizada (de 1 a 32.000) para mostrar a pasta associada.

Com este princípio, pode armazenar em memória a rota de acesso da pasta aberta no momento em que o usuário faz clique no botão de seleção, em outras palavras, a pasta selecionada pelo usuário. Durante a primeira chamada de um número arbitrário (por exemplo, 5) o comando mostra a pasta usuário por padrão do sistema operativo (equivalente a passar uma string vazia). O usuário poderá navegar as pastas no disco duro. Quando o usuário clicar no botão de seleção, a rota de acesso é memorizada e associa ao número 5\. Durante as seguintes chamadas ao número 5, a rota de acesso memorizada será utilizada por padrão. Caso seja selecionada uma nova localização, a rota número 5 é atualizada.  
  
Este mecanismo lhe permite memorizar até 32.000 rotas de acesso. Em Windows, cada rota se conserva apenas durante a sessão. Em Mac OS, as rotas são conservadas pelo sistema e permanecem armazenadas de uma sessão a outra.  
  
Nota: este mecanismo é o mesmo que o utilizado pelo comando [Select folder](select-folder.md).. Os números das rotas de acesso memorizadas são compartidos por ambos comandos.  
  
Passe no parâmetro tiposArquivos os tipo(s) de arquivo(s) que podem ser selecionados na caixa de diálogo de abertura. Pode passar uma lista de vários tipos separados por um ";" (ponto e vírgula). Para cada tipo definido, uma fila será adicionada no menú de seleção do tipo da caixa de diálogo.  
Em Mac OS, pode passar um tipo Mac OS clássico (TEXT, APPL, etc.), ou um tipo UTI (Uniform Tipo Identifier). Os tipos UTIs são definidos por Apple para cumprir com as necessidades de padronização de tipos de arquivos. Por exemplo, "public.text" é o tipo UTI dos arquivos de tipo texto. Para maior informação sobre UTIs, consulte o seguinte endereço: *https://developer.apple.com/library/ios/documentation/FileManagement/Conceptual/understanding\_utis/understand\_utis\_conc/understand\_utis\_conc.html*.

Em Windows, pode também passar um tipo de arquivo clássico Mac OS, 4D realiza a correspondência internamente ou a extensão de arquivos (.txt, .exe, etc.). Note que em Windows, o usuário pode “forçar” a visualização de todos os tipos de arquivos introduzindo \*.\* na caixa de diálogo. Entretanto, neste caso, 4D efetuará uma verificação adicional dos tipos de arquivos selecionados: se o usuário selecionar um tipo de arquivo não autorizado, o comando retorna um erro.

Se não desejar restringir os arquivos mostrados a um ou mais tipos, passe "\*" (asterisco) ou ".\*" em tiposArquivos.  
  
Passe no parâmetro título a etiqueta que deve aparecer na caixa de diálogo. Por padrão, se passar uma string vazia, se mostra a etiqueta “Abrir”.  
  
O parâmetro opções permite especificar funções avançadas autorizadas na caixa de diálogo de abertura. 4D oferece as seguintes constantes pré-definidas no tema *Documentos Sistema*:

| Constante         | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allow alias files | Inteiro longo | 8     | Autoriza a seleção de atalhos (Windows) ou de alias (Mac OS) como documentos.Por padrão, se não é utilizada esta constante, quando um alias ou atalho seja selecionado, o comando retornará a rota de acesso do elemento objetivo. Quando passe a constante, o comando retorna a rota do alias ou do atalho.                                                                                                                                                                           |
| File name entry   | Inteiro longo | 32    | Permite ao usuário introduzir um nome de arquivo na caixa de diálogo "Guardar como". Não são guardados os arquivos, o desenvolvedor deverá criar um arquivo em resposta a esta ação (a variável do sistema Documento é atualizada) Neste contexto, o parâmetro diretório pode conter a via a um arquivo em lugar de a um diretório. O nome do arquivo será utilizado como nome de arquivo sugerido no campo de texto Guardar como. O diretório pai será utilizado como via por padrão. |
| Multiple files    | Inteiro longo | 1     | Autoriza a seleção simultânea de vários arquivos utilizando as combinações Shift+clique (seleção adjacente) e Ctrl+clique (Windows) ou Comando+clique (Mac OS). Neste caso, o parâmetro selecionado, se for passado, contém a lista de todos os arquivos selecionados. por padrão, se esta constante não for utilizada, o comando não permitirá a seleção de múltiplos arquivos.                                                                                                       |
| Package open      | Inteiro longo | 2     | (Somente Mac OS): autoriza a apertura de pacotes como pastas e assim a visualização/seleção dos seus conteúdos. Por padrãom e não for utilizada esta constante, o comando não permitirá a abertura de pacotes.                                                                                                                                                                                                                                                                         |
| Package selection | Inteiro longo | 4     | (Somente Mac OS): autoriza a seleção de pacotes como entidades (como padrão é omitido). Utilize Package open se quiser permitir que os usuários visualizem/selecionem conteúdos do pacote.                                                                                                                                                                                                                                                                                             |
| Use sheet window  | Inteiro longo | 16    | (Somente Mac OS): mostra a caixa de diálogo de seleção na forma de uma janela folha (esta opção é ignorada no Windows).As janelas folha são especificas para o Mac OS X com animação gráfica (para mais informação consulte a seção *Tipos de Janelas*). Por padrão, se esta constante não é utilizada, o comando mostrará uma caixa de diálogo padrão.                                                                                                                                |

Se não quer utilizar uma opção, passe 0 no parâmetro opções. O parâmetro opcional selecionados lhe permite obter a rota de acesso completa (rota de acesso + nome) de cada arquivo selecionado pelo usuário. O comando cria, dimensiona e preenche o array de acordo com a seleção do usuário. Este parâmetro é útil quando a opção Multiple files for utilizada ou quando deseja conhecer a rota de acesso do arquivo selecionado (simplesmente tome o nome do arquivo devolvido pelo comando do valor do array). Se nenhum arquivo estiver selecionado, o array se retorna vazio.  

Nota: em Mac OS, um pacote selecionado se considera como sendo uma pasta. A rota de acesso retornada no array selecionados inclui um caractere final ":" . Por exemplo: Disk:Applications:4D:4D v11.4:US:4D Volume Desktop.app:

O comando retorna o nome (nome + extensão em Windows) do arquivo selecionado. Se forem selecionados vários arquivos, o comando retorna o nome do primeiro arquivo da lista de arquivos selecionados. A lista de arquivos pode ser recuperada no parâmetro selecionados. Se nenhum arquivo for selecionado, o comando retorna uma string vazia.

#### Exemplo 1 

Este exemplo é utilizado para especificar um arquivo de dados 4D: 

```4d
 var $plataforma : Integer
 PLATFORM PROPERTIES($plataforma)
 If($plataforma=Windows)
    $DocTipo:=".4DD"
 Else
    $DocTipo:="com.4d.4d.data-file" //UTI type
 End if
 $Opções:=Allow alias files+Package open+Use sheet window
 $Doc:=Select document("";$DocTipo;"Selecionar o arquivo de dados";$Opções)
```

#### Exemplo 2 

Criação de um documento personalizado pelo usuário:

```4d
 $doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Report name:";File name entry)
 If(OK=1)
    BLOB TO DOCUMENT(Document;$blob) // $blob contém o documento a registrar
 End if
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente e for selecionado um documento válido, a variável sistema OK toma o valor 1 e a variável sistema Document conterá a rota de acesso completa do arquivo selecionado.  
  
Se não for selecionado nenhum arquivo (por exemplo, se o usuário clicar no botão **Cancelar** na caixa de diálogo de abertura de arquivos), a variável sistema OK toma o valor 0 e a variável Document estará vazia.

#### Ver também 

[Open document](open-document.md)  
[Select folder](select-folder.md)  