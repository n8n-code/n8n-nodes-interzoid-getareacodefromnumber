import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { areaCodeInformationDescription } from './resources/area-code-information';

export class InterzoidGetareacodefromnumber implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Interzoid Getareacodefromnumber',
		name: 'N8nDevInterzoidGetareacodefromnumber',
		icon: { light: 'file:./interzoid-getareacodefromnumber.png', dark: 'file:./interzoid-getareacodefromnumber.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API returns area code for telephone number.',
		defaults: { name: 'Interzoid Getareacodefromnumber' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevInterzoidGetareacodefromnumberApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Area Code Information",
					"value": "Area Code Information",
					"description": ""
				}
			],
			"default": ""
		},
		...areaCodeInformationDescription
		],
	};
}
