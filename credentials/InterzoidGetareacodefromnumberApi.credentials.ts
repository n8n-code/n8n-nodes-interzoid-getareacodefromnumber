import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class InterzoidGetareacodefromnumberApi implements ICredentialType {
        name = 'N8nDevInterzoidGetareacodefromnumberApi';

        displayName = 'Interzoid Getareacodefromnumber API';

        icon: Icon = { light: 'file:../nodes/InterzoidGetareacodefromnumber/interzoid-getareacodefromnumber.png', dark: 'file:../nodes/InterzoidGetareacodefromnumber/interzoid-getareacodefromnumber.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.interzoid.com',
                        required: true,
                        placeholder: 'https://api.interzoid.com',
                        description: 'The base URL of your Interzoid Getareacodefromnumber API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
