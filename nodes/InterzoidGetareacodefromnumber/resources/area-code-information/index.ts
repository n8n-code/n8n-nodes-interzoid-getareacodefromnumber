import type { INodeProperties } from 'n8n-workflow';

export const areaCodeInformationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Area Code Information"
					]
				}
			},
			"options": [
				{
					"name": "Getareacodefromnumber",
					"value": "Getareacodefromnumber",
					"action": "Gets area code information from a telephone number",
					"description": "The area code will be parsed out of a telephone number and used to retrieve information about the area code.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getareacodefromnumber"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getareacodefromnumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Area Code Information"
					],
					"operation": [
						"Getareacodefromnumber"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Area Code Information"
					],
					"operation": [
						"Getareacodefromnumber"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"required": true,
			"description": "Telephone number to retrieve area code information",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Area Code Information"
					],
					"operation": [
						"Getareacodefromnumber"
					]
				}
			}
		},
];
