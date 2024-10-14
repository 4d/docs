"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77270],{537772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=s(474848),r=s(28453);const l={id:"vp-set-workbook-options",title:"VP SET WORKBOOK OPTIONS"},i=void 0,d={id:"ViewPro/commands/vp-set-workbook-options",title:"VP SET WORKBOOK OPTIONS",description:"VP SET WORKBOOK OPTIONS ( vpAreaName Object)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-workbook-options.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-workbook-options",permalink:"/docs/fr/ViewPro/commands/vp-set-workbook-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-workbook-options.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-workbook-options",title:"VP SET WORKBOOK OPTIONS"},sidebar:"docs",previous:{title:"VP SET VALUES",permalink:"/docs/fr/ViewPro/commands/vp-set-values"},next:{title:"VP SHOW CELL",permalink:"/docs/fr/ViewPro/commands/vp-show-cell"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET WORKBOOK OPTIONS"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"optionObj"})," : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"optionObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Object containing the workbook options to be set"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VP SET WORKBOOK OPTIONS"}),"\nsets the workbook options in ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"optionObj"}),", pass the workbook options to apply to ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"optionObj"})," is empty, the command does nothing."]}),"\n",(0,t.jsx)(n.p,{children:"Les options modifi\xe9es du classeur sont enregistr\xe9es avec le document."}),"\n",(0,t.jsx)(n.p,{children:"Le tableau suivant r\xe9pertorie les options de classeur disponibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserDragMerge"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The drag merge operation is allowed (select cells and drag the selection to merge cells)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowAutoCreateHyperlink"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Enables automatic creation of hyperlinks in the spreadsheet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowContextMenu"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The built-in context menu can be opened."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowCopyPasteExcelStyle"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Styles from a spreadsheet can be copied and pasted to Excel, and vice-versa."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowDynamicArray"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Enables dynamic arrays in worksheets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowExtendPasteRange"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Extends the pasted range if the pasted range is not enough for the pasted data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowSheetReorder"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Sheet reordering is allowed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUndo"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Undoing edits is allowed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserDeselect"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Deselecting specific cells from a selection is allowed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserDragDrop"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Drag and drop of range data is allowed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserDragFill"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Drag fill is allowed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserEditFormula"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Formulas can be entered in cells"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserResize"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Columns and rows can be resized"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"allowUserZoom"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Zooming (ctrl + mouse wheel) is allowed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoFitType"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Content is formatted to fit in cells, or cells and headers. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fit type cell "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" The content autofits cells"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fit type cell with header "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" The content autofits cells and headers"})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"backColor"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'A color string used to represent the background color of the area, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5". The initial backgroundcolor is hidden when a backgroundImage is set.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"backgroundImage"}),(0,t.jsx)(n.td,{children:"string / picture / file"}),(0,t.jsx)(n.td,{children:"Background image for the area."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"backgroundImageLayout"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["How the background image is displayed. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk image layout center "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" In the center of the area."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk image layout none "}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:" In the upper left corner of the area with its original size."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk image layout stretch "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Fills the area."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk image layout zoom "}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:" Displayed with its original aspect ratio."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"calcOnDemand"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Formulas are calculated only when they are demanded."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"columnResizeMode"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Resize mode for columns. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk resize mode normal "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Use normal resize mode (i.e remaining columns are affected)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk resize mode split "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Use split mode (i.e remaining columns are not affected)"})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"copyPasteHeaderOptions"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Headers to include when data is copied to or pasted. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk copy paste header options all headers"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:" Includes selected headers when data is copied; overwrites selected headers when data is pasted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk copy paste header options column headers "}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:" Includes selected column headers when data is copied; overwrites selected column headers when data is pasted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk copy paste header options no headers"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Column and row headers are not included when data is copied; does not overwrite selected column or row headers when data is pasted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk copy paste header options row headers"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"  Includes selected row headers when data is copied; overwrites selected row headers when data is pasted."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"customList"}),(0,t.jsx)(n.td,{children:"collection"}),(0,t.jsxs)(n.td,{children:["The list for users to customize drag fill, prioritize matching this list in each fill. Each collection item is a collection of strings. See on ",(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/cells/AutoFillData/AutoFillLists",children:"SpreadJS docs"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cutCopyIndicatorBorderColor"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Border color for the indicator displayed when the user cuts or copies the selection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cutCopyIndicatorVisible"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display an indicator when copying or cutting the selected item."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defaultDragFillType"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["The default drag fill type. Available values : ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fill type auto "}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:" Automatically fills cells. "})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fill type clear values "}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:" Clears cell values."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fill type copycells "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Fills cells with all data objects, including values, formatting, and formulas."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fill type fill formatting only "}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:" Fills cells only with formatting."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fill type fill series "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Fills cells with series. "})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk auto fill type fill without formatting "}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:" Fills cells with values and not formatting. "})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enableAccessibility"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Accessibility support is enabled in the spreadsheet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enableFormulaTextbox"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The formula text box is enabled."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"grayAreaBackColor"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'A color string used to represent the background color of the gray area , such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"highlightInvalidData"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Invalid data is highlighted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"iterativeCalculation"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Enables iterative calculation. See on ",(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/formulareference/formulaoverview/calculating-iterative",children:"SpreadJS docs"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"iterativeCalculationMaximumChange"}),(0,t.jsx)(n.td,{children:"num\xe9rique"}),(0,t.jsx)(n.td,{children:"Maximum amount of change between two calculation values."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"iterativeCalculationMaximumIterations"}),(0,t.jsx)(n.td,{children:"num\xe9rique"}),(0,t.jsx)(n.td,{children:"Number of times the formula should recalculate."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newTabVisible"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display a special tab to let users insert new sheets."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numbersFitMode"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Changes display mode when date/number data width is longer than column width. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk numbers fit mode mask"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:' Replace data content with "###" and shows tip'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk numbers fit mode overflow "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Display data content as a string. If next cell is empty, overflow the content."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pasteSkipInvisibleRange"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Paste or skip pasting data in invisible ranges: ",(0,t.jsxs)(n.ul,{children:[(0,t.jsx)(n.li,{children:"False (default): paste data"}),(0,t.jsx)(n.li,{children:"True: Skip pasting in invisible ranges"})]}),"See ",(0,t.jsx)(n.a,{href:"https://developer.mescius.com/spreadjs/docs/features/rows-columns/paste-skip-data-invisible-range",children:"SpreadJS docs"})," for more information on invisible ranges."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"referenceStyle"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Style for cell and range references in cell formulas. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk reference style A1 "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Use A1 style."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk reference style R1C1 "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Use R1C1 style"})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resizeZeroIndicator"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Drawing policy when the row or column is resized to zero. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk resize zero indicator default "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Uses the current drawing policy when the row or column is resized to zero."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk resize zero indicator enhanced "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Draws two short lines when the row or column is resized to zero."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowResizeMode"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"The way rows are resized. Available values are the same as columnResizeMode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scrollbarAppearance"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Scrollbar appearance. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk scrollbar appearance mobile"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Mobile scrollbar appearance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk scrollbar appearance skin (default)"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Excel-like classic scrollbar appearance."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scrollbarMaxAlign"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The scroll bar aligns with the last row and column of the active sheet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scrollbarShowMax"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The displayed scroll bars are based on the entire number of columns and rows in the sheet."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scrollByPixel"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Enable precision scrolling by pixel."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scrollIgnoreHidden"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The scroll bar ignores hidden rows or columns."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scrollPixel"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsxs)(n.td,{children:["Decides scrolling by that number of pixels at a time when scrollByPixel is true. The final scrolling pixels are the result of ",(0,t.jsx)(n.code,{children:"scrolling delta * scrollPixel"}),". For example: scrolling delta is 3, scrollPixel is 5, the final scrolling pixels are 15."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showDragDropTip"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the drag-drop tip."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showDragFillSmartTag"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the drag fill dialog."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showDragFillTip"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the drag-fill tip."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showHorizontalScrollbar"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the horizontal scroll bar."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showResizeTip"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["How to display the resize tip. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show resize tip both "}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:" Horizontal and vertical resize tips are displayed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show resize tip column "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Only the horizontal resize tip is displayed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show resize tip none "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" No resize tip is displayed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show resize tip row "}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:" Only the vertical resize tip is displayed."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showScrollTip"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["How to display the scroll tip. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show scroll tip both "}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:" Horizontal and vertical scroll tips are displayed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show scroll tip horizontal "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Only the horizontal scroll tip is displayed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show scroll tip none "}),(0,t.jsx)(n.td,{children:" No scroll tip is displayed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk show scroll tip vertical "}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:" Only the vertical scroll tip is displayed."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"showVerticalScrollbar"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the vertical scroll bar."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabEditable"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"The sheet tab strip can be edited."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabNavigationVisible"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the sheet tab navigation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabStripPosition"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Position of the tab strip. Available values: ",(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk tab strip position bottom "}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:" Tab strip position is relative to the bottom of the workbook."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk tab strip position left "}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:" Tab strip position is relative to the left of the workbook."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk tab strip position right "}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:" Tab strip position is relative to the right of the workbook."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:" vk tab strip position top "}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:" Tab strip position is relative to the top of the workbook."})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabStripRatio"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Percentage value (0.x) that specifies how much of the horizontal space will be allocated to the tab strip. The rest of the horizontal area (1 - 0.x) will allocated to the horizontal scrollbar."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabStripVisible"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Display the sheet tab strip."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabStripWidth"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Width of the tab strip when position is left or right. Default and minimum is 80."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"useTouchLayout"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Whether to use touch layout to present the Spread component."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:'Pour d\xe9finir l\'option allowExtendpasteRange dans "ViewProArea" :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $workbookOptions : Object\n\n$workbookOptions:= New Object\n$workbookOptions.allowExtendPasteRange:=True\n\nVP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-workbook-options",children:"VP Get workbook options"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);