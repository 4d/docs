module.exports =
{
	docs: [
		{
			type: "category",
			label: "Getting Started",
			items: [
				"GettingStarted/installation",
				"GettingStarted/creating"
			],
		},
		{
			type: "category",
			label: "Core Development",
			items: [
				{
					type: "category",
					label: "Project Management",
					items: [
						"Project/overview",
						"Project/architecture",
						"Project/documentation",
						"Project/compiler"
					],
				},
				{
					type: "category",
					label: "4D Language Concepts",
					items: [
						"Concepts/about",
						"Concepts/quick-tour",
						"Concepts/operators",
						{ 
							type: "category",
							label: "Data Types",
							items: [
								"Concepts/data-types",
								"Concepts/blob",
								"Concepts/boolean",
								"Concepts/collection",
								"Concepts/date",
								"Concepts/null-undefined",
								"Concepts/number",
								"Concepts/object",
								"Concepts/picture",
								"Concepts/pointer",
								"Concepts/string",
								"Concepts/time",
								"Concepts/variant",
							],
						},
						"Concepts/variables",
						"Concepts/arrays",
						"Concepts/methods",
						"Concepts/parameters",
						"Concepts/shared",
						"Concepts/classes",
						{
							type: "category",
							label: "Control Flow",
							items: [
								"Concepts/control-flow",
								"Concepts/branching",
								"Concepts/looping",
							],
						},
						"Concepts/error-handling",
						"Concepts/interpreted-compiled",
						"Concepts/components",
						"Concepts/plug-ins",
						"Concepts/identifiers",
						"Concepts/paths"
					],
				},
				{
						  type: 'link',
						  label: '4D Language Reference', // The link label
						  href: 'https://doc.4d.com/4Dv19R6/4D/19-R6/4D-Language-Reference.100-5910320.en.html', 
				},
				{
					type: "category",
					label: "ORDA",
					items: [
						"ORDA/overview",
						"ORDA/dsmapping",
						"ORDA/ordaClasses",
						"ORDA/entities",
						"ORDA/datastores",
						"ORDA/glossary"
					],
				},
				{
					type: "category",
					label: "Class API Reference",
					items: [
						"API/overview",
						"API/BlobClass",
						"API/ClassClass",
						"API/CollectionClass",
						"API/CryptoKeyClass",
						"API/DataClassClass",
						"API/DataClassAttributeClass",
						"API/DataStoreClass",
						"API/EmailObjectClass",
						"API/EntityClass",
						"API/EntitySelectionClass",
						"API/FileClass",
						"API/FileHandleClass",
						"API/FolderClass",
						"API/FunctionClass",
						"API/HTTPRequestClass",
						"API/IMAPTransporterClass",
						"API/MailAttachmentClass",
						"API/POP3TransporterClass",
						"API/SessionClass",
						"API/SignalClass",
						"API/SMTPTransporterClass",
						"API/SystemWorkerClass",
						"API/WebServerClass",
						"API/ZipArchiveClass",
						"API/ZipFileClass",
						"API/ZipFolderClass"
					],
				},
				{
					type: "category",
					label: "Handling Code",
					items: [
						"code-editor/overview",
						"code-editor/write-class-method",
						"code-editor/find-replace",
						"code-editor/creating-using-macros",
						"Tags/tags"
					]
				},
				{
					type: "category",
					label: "Debugging",
					items: [
						"Debugging/basics",
						"Debugging/debugger",
						"Debugging/breakpoints",
						"Debugging/debugging-remote",
						"Debugging/debugLogFiles"
					]
				},
				{
					type: "category",
					label: "Settings",
					items: [
						"settings/overview",
						"settings/general",
						"settings/interface",
						"settings/compiler",
						"settings/database",
						"settings/backup",
						"settings/client-server",
						"settings/web",
						"settings/sql",
						"settings/php",
						"settings/security",
						"settings/compatibility"
					],
				},
				{
					type: "category",
					label: "Preferences",
					items: [
						"Preferences/overview",
						"Preferences/general",
						"Preferences/structure",
						"Preferences/forms",
						"Preferences/methods",
						"Preferences/shortcuts",
					]
				}
			]
		},
		
		{
			type: "category",
			label: "Administration",
			items: [
				{	
					type: "category",
					label: "4D Server Administration Window",
					items: [
						"ServerWindow/overview",
						"ServerWindow/monitor",
						"ServerWindow/users",
						"ServerWindow/processes",
						"ServerWindow/maintenance",
						"ServerWindow/application-server",
						"ServerWindow/sql-server",
						"ServerWindow/http-server",
						"ServerWindow/real-time-monitor",
					],
				},
				{
					type: "category",
					label: "Web Administration",
					items: [
						"Admin/webAdmin",
						"Admin/dataExplorer",
					],
				},
				{
					type: "category",
					label: "Command Line Interface",
					items: ["Admin/cli",]
				},
				{
					type: "category",
					label: "TLS Protocol",
					items: ["Admin/tls"],
				},
				{
					type: "category",
					label: "Licenses & Data Collection",
					items: [
						"Admin/licenses",
						"Admin/data-collect",
					],
				},
				{
					type: "category",
					label: "Access Rights",
					items: [
						"Admin/tls",
						"Users/overview",
						"Users/editing",
					],
				},
				{
					type: "category",
					label: "MSC",
					items: [
						"MSC/overview",
						"MSC/information",
						"MSC/analysis",
						"MSC/verify",
						"MSC/backup",
						"MSC/compact",
						"MSC/rollback",
						"MSC/restore",
						"MSC/repair",
						"MSC/encrypt",
					],
				},
				{
					type: "category",
					label: "Backup and Restore",
					items: [
						"Backup/overview",
						"Backup/backup",
						"Backup/settings",
						"Backup/log",
						"Backup/restore",
					]
				},
			],	
		},
		{
			type: "category",
			label: "Extensions",
			items: [
						"Extensions/overview",
						{
							type: "category",
							label: "4D View Pro",
							items: [				
								"ViewPro/getting-started",
								"ViewPro/configuring",
								"ViewPro/formulas",
								"ViewPro/method-list",
								"ViewPro/advanced-programming"
									]
							},
						{
						  type: 'link',
						  label: '4D Mobile App Server', // The link label
						  href: 'https://github.com/4d-go-mobile/4D-Mobile-App-Server', 
						},
						{
						  type: 'link',
						  label: '4D NetKit', // The link label
						  href: 'https://github.com/4d/4D-NetKit', 
						},
						{
						  type: 'link',
						  label: '4D Progress', // The link label
						  href: 'https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html', 
						},
						{
						  type: 'link',
						  label: '4D SVG', // The link label
						  href: 'https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html', 
						},
						{
						  type: 'link',
						  label: '4D Widgets', // The link label
						  href: 'https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html', 
						},
						{
						  type: 'link',
						  label: '4D Write Pro Interface', // The link label
						  href: 'https://github.com/4d/4D-WritePro-Interface', 
						},					
						"Extensions/develop-components",
						"Extensions/develop-plug-ins",

				]
			},
		{
			type: "category",
			label: "Web Applications",
			items: [
				{	
					type: "category",
					label: "Web Server",
					items: [
						"WebServer/webServer",
						"WebServer/webServerConfig",
						"WebServer/webServerAdmin",
						"WebServer/webServerObject",
					],
				},
				{
					type: "category",
					label: "Web Development",
					items: [
						"WebServer/gettingStarted",
						"WebServer/templates",
						"WebServer/httpRequests",
						"WebServer/allowProject",
						"WebServer/errorPages",
						"WebServer/authentication",
						"WebServer/sessions",
						"WebServer/preemptiveWeb"
					],
				},
				{
					type: "category",
					label: "REST Server",
					items: [
						{
						type: "category",
						label: "Guides",
						items: [
								"REST/gettingStarted",
								"REST/configuration",
								"REST/authUsers",
								"REST/genInfo",
								"REST/manData",
								"REST/classFunctions",
								"REST/REST_requests",
							],
						},
						{
							type: "category",
							label: "API (general)",
							items: [
								"REST/catalog",
								"REST/directory",
								"REST/info",
								"REST/upload",
							],
						},
						{
							type: "category",
							label: "API (dataClass)",
							items: [
								"REST/dataClass",
								"REST/asArray",
								"REST/atomic_$atonce",
								"REST/attributes",
								"REST/binary",
								"REST/compute",
								"REST/distinct",
								"REST/entityset",
								"REST/expand",
								"REST/filter",
								"REST/imageformat",
								"REST/lock",
								"REST/method",
								"REST/orderby",
								"REST/querypath",
								"REST/queryplan",
								"REST/savedfilter",
								"REST/savedorderby",
								"REST/skip",
								"REST/timeout",
								"REST/top_$limit",
								"REST/version",
							],
						},
					],
				},
				],
				},
				
				{
					type: "category",
					label: "Desktop Applications",
					items: [
						{	
							type: "category",
							label: "Client/Server",
							items: ["Desktop/clientServer"],
						},
						{
							type: "category",
							label: "Forms",
							items: [
								"FormEditor/forms",
								"FormEditor/stylesheets",
								"FormEditor/pictures",
								{	
									type: "category",
									label: "Form Editor",
									items: [								
										"FormEditor/formEditor",
										"FormEditor/macros",
										"FormEditor/objectLibrary"	]
								},
								{
									type: "category",
									label: "Form Properties",
									items: [
								"FormEditor/jsonReference",
								"FormEditor/action",
								"FormEditor/propertiesForm",
								"FormEditor/formSize",
								"FormEditor/markers",
								"FormEditor/menu",
								"FormEditor/print",
								"FormEditor/windowSize"
									],
								},
								{
									type: "category",
									label: "Form Objects",
									items: [
										"FormObjects/formObjectsOverview",
										"FormObjects/buttonOverview",
										"FormObjects/buttonGridOverview",
										"FormObjects/checkboxOverview",
										"FormObjects/comboBoxOverview",
										"FormObjects/dropdownListOverview",
										"FormObjects/groupBox",
										"FormObjects/inputOverview",
										"FormObjects/listOverview",
										"FormObjects/listboxOverview",
										"FormObjects/pictureButtonOverview",
										"FormObjects/picturePopupMenuOverview",
										"FormObjects/pluginAreaOverview",
										"FormObjects/progressIndicator",
										"FormObjects/radiobuttonOverview",
										"FormObjects/ruler",
										"FormObjects/shapesOverview",
										"FormObjects/spinner",
										"FormObjects/splitters",
										"FormObjects/staticPicture",
										"FormObjects/stepper",
										"FormObjects/subformOverview",
										"FormObjects/tabControl",
										"FormObjects/text",
										"FormObjects/webAreaOverview",
										"FormObjects/viewProAreaOverview",
										"FormObjects/writeProAreaOverview"
									],
								},
								{
									type: "category",
									label: "Form Object Properties",
									items: [
										"FormObjects/propertiesReference",
										"FormObjects/propertiesAction",
										"FormObjects/propertiesAnimation",
										"FormObjects/propertiesAppearance",
										"FormObjects/propertiesBackgroundAndBorder",
										"FormObjects/propertiesCoordinatesAndSizing",
										"FormObjects/propertiesCrop",
										"FormObjects/propertiesDataSource",
										"FormObjects/propertiesDisplay",
										"FormObjects/propertiesEntry",
										"FormObjects/propertiesFooters",
										"FormObjects/propertiesGridlines",
										"FormObjects/propertiesHeaders",
										"FormObjects/propertiesHelp",
										"FormObjects/propertiesHierarchy",
										"FormObjects/propertiesListBox",
										"FormObjects/propertiesObject",
										"FormObjects/propertiesPicture",
										"FormObjects/propertiesPlugIns",
										"FormObjects/propertiesPrint",
										"FormObjects/propertiesRangeOfValues",
										"FormObjects/propertiesResizingOptions",
										"FormObjects/propertiesScale",
										"FormObjects/propertiesSubform",
										"FormObjects/propertiesText",
										"FormObjects/propertiesTextAndPicture",
										"FormObjects/propertiesWebArea"
									],
								},
								{
									type: "category",
									label: "Form Events",
									items: [
										"Events/overview",
										"Events/onActivate",
										"Events/onAfterEdit",
										"Events/onAfterKeystroke",
										"Events/onAfterSort",
										"Events/onAlternativeClick",
										"Events/onBeforeDataEntry",
										"Events/onBeforeKeystroke",
										"Events/onBeginDragOver",
										"Events/onBeginUrlLoading",
										"Events/onBoundVariableChange",
										"Events/onClicked",
										"Events/onCloseBox",
										"Events/onCloseDetail",
										"Events/onCollapse",
										"Events/onColumnMoved",
										"Events/onColumnResize",
										"Events/onDataChange",
										"Events/onDeactivate",
										"Events/onDeleteAction",
										"Events/onDisplayDetail",
										"Events/onDoubleClicked",
										"Events/onDragOver",
										"Events/onDrop",
										"Events/onEndUrlLoading",
										"Events/onExpand",
										"Events/onFooterClick",
										"Events/onGettingFocus",
										"Events/onHeader",
										"Events/onHeaderClick",
										"Events/onLoad",
										"Events/onLoadRecord",
										"Events/onLongClick",
										"Events/onLosingFocus",
										"Events/onMenuSelected",
										"Events/onMouseEnter",
										"Events/onMouseLeave",
										"Events/onMouseMove",
										"Events/onMouseUp",
										"Events/onOpenDetail",
										"Events/onOpenExternalLink",
										"Events/onOutsideCall",
										"Events/onPageChange",
										"Events/onPlugInArea",
										"Events/onPrintingBreak",
										"Events/onPrintingDetail",
										"Events/onPrintingFooter",
										"Events/onResize",
										"Events/onRowMoved",
										"Events/onRowResize",
										"Events/onScroll",
										"Events/onSelectionChange",
										"Events/onTimer",
										"Events/onUnload",
										"Events/onUrlFiltering",
										"Events/onUrlLoadingError",
										"Events/onUrlResourceLoading",
										"Events/onValidate",
										"Events/onVpRangeChanged",
										"Events/onVpReady",
										"Events/onWindowOpeningDenied"
									],
								},
										
								
								
							],
						},
						
						{
							type: "category",
							label: "Menus",
							items: [
								"Menus/overview",
								"Menus/creating",
								"Menus/properties",
								"Menus/bars",
								"Menus/sdi"
							],
						},
						{
							type: "category",
							label: "User Settings",
							items: ["Desktop/user-settings"],
						},
						{
							type: "category",
							label: "Build Application",
							items: ["Desktop/building"]
						}
					]
				},
				{
					type: "category",
					label: "Mobile Applications",
					items: [
						{
						  type: 'link',
						  label: 'Go Mobile', // The link label
						  href: 'https://developer.4d.com/go-mobile/', // The external URL
						},
						{
						  type: 'link',
						  label: '4D for iOS (archive)', // The link label
						  href: 'https://developer.4d.com/4d-for-ios', // The external URL
						}
					],
				},

	 ]
}