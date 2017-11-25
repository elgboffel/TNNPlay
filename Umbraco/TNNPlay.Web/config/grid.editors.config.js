[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Macro",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt color-red"
    },
    {
        "name": "Carousel",
        "alias": "carousel",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-picture color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Karousel",
                    "alias": "carousel",
                    "propretyType": {},
                    "dataType": "5d9998f2-4355-4141-9457-ad6df51c8ea7"
                }
            ],
            "expiration": null,
            "frontView": ""
        }
    },
    {
        "name": "Factbox",
        "alias": "factbox",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-notepad color-yellow",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Kort Lokation",
                    "alias": "mapLocation",
                    "propretyType": {},
                    "dataType": "10cce73a-733d-412b-bda5-ce80c22123ae"
                },
                {
                    "name": "Heading",
                    "alias": "heading",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Content",
                    "alias": "rte",
                    "propretyType": {},
                    "dataType": "3e091be8-a6d8-4db2-930b-99add0475f77"
                },
                {
                    "name": "Faktaboks Position",
                    "alias": "factboxPosition",
                    "propretyType": {},
                    "dataType": "30fb23d2-2f02-40e6-b0e3-8f04780f282f"
                },
                {
                    "name": "Vælg Faktaboks",
                    "alias": "pickFactbox",
                    "propretyType": {},
                    "dataType": "9c9dd57b-1e80-41d8-860e-d8b11d03f39d",
                    "description": "Genbrug en faktaboks. Hvis valgt, vil den overskrive de andre inputfelter."
                }
            ],
            "renderInGrid": "1",
            "expiration": null,
            "frontView": ""
        }
    },
    {
        "name": "Spot",
        "alias": "spot",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-lightbulb-active color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Billede",
                    "alias": "image",
                    "propretyType": {},
                    "dataType": "93929b9a-93a2-4e2a-b239-d99334440a59"
                },
                {
                    "name": "Trumpet",
                    "alias": "trumpet",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Rubrik",
                    "alias": "headline",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Link",
                    "alias": "link",
                    "propretyType": {},
                    "dataType": "4e1aa3a9-c2f7-4423-9086-c48253554b2d"
                },
                {
                    "name": "Tekst",
                    "alias": "content",
                    "propretyType": {},
                    "dataType": "54f514ae-137c-4647-a609-234450b8edf5"
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Image",
        "alias": "image",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-picture color-green",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Billede",
                    "alias": "image",
                    "propretyType": {},
                    "dataType": "135d60e0-64d9-49ed-ab08-893c9ba44ae5"
                },
                {
                    "name": "Billedtekst",
                    "alias": "imageText",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "renderInGrid": "1",
            "frontView": ""
        }
    },
    {
        "name": "Listevisning",
        "alias": "list",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-thumbnail-list color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Vælg Sider",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "152b2bb0-6545-408f-a827-b6a2ed1b37dc",
                    "description": "Valgte sider vil blive vist i en liste."
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Employee List",
        "alias": "employeeList",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-users color-yellow",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Heading",
                    "alias": "headline",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Pick Employees",
                    "alias": "employeePicker",
                    "propretyType": {},
                    "dataType": "cf122230-f075-4fff-a952-5605f1b03659",
                    "description": "Choosen employees will be shown as a list."
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Inject Html",
        "alias": "injectHtml",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-script-alt color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Html",
                    "alias": "html",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Quote",
        "alias": "quote",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-quote",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Quote Position",
                    "alias": "quotePosition",
                    "propretyType": {},
                    "dataType": "30fb23d2-2f02-40e6-b0e3-8f04780f282f"
                },
                {
                    "name": "Quote",
                    "alias": "quote",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3"
                },
                {
                    "name": "Byline",
                    "alias": "byline",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Pick Employee",
        "alias": "employee",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-umb-users color-yellow",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Heading",
                    "alias": "headline",
                    "propretyType": {},
                    "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
                },
                {
                    "name": "Pick Employee",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "bb329145-266f-4914-ab10-510db1f804fd"
                }
            ],
            "frontView": ""
        }
    },
    {
        "name": "Spot (Sidevælger)",
        "alias": "spotPicker",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-lightbulb-active color-blue",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Vælg Side",
                    "alias": "contentPicker",
                    "propretyType": {},
                    "dataType": "260b8432-d737-44e5-b758-14f2ccc2c9e4"
                }
            ],
            "frontView": "",
            "renderInGrid": "1"
        }
    },
    {
        "name": "Login",
        "alias": "login",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-unlocked color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "frontView": "",
            "editors": [
                {
                    "name": "Fejlbesked",
                    "alias": "fejlbesked",
                    "propretyType": {},
                    "dataType": "c6bac0dd-4ab9-45b1-8e30-e4b619ee5da3",
                    "description": "Hvilken fejlmelding skal der komme."
                }
            ]
        }
    },
    {
        "name": "Vælg Video",
        "alias": "video",
        "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
        "icon": "icon-video color-red",
        "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
        "config": {
            "editors": [
                {
                    "name": "Vælg Video",
                    "alias": "videoPicker",
                    "propretyType": {},
                    "dataType": "a3eec30b-008f-452d-84f9-0a775be656c7"
                }
            ],
            "frontView": ""
        }
    }
]