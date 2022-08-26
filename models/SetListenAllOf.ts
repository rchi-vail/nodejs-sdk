/**
 * FreeClimb API
 * FreeClimb is a cloud-based application programming interface (API) that puts the power of the Vail platform in your hands. FreeClimb simplifies the process of creating applications that can use a full range of telephony features without requiring specialized or on-site telephony equipment. Using the FreeClimb REST API to write applications is easy! You have the option to use the language of your choice or hit the API directly. Your application can execute a command by issuing a RESTful request to the FreeClimb API. The base URL to send HTTP requests to the FreeClimb REST API is: /apiserver. FreeClimb authenticates and processes your request.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@freeclimb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SetListenAllOf {
    /**
    * ID of the call leg that is to be assigned the listen privilege. The Call must be in a Conference or an error will be triggered.
    */
    'callId': string;
    /**
    * Specifying `false` will silence the Conference for this Participant.
    */
    'listen'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "callId",
            "baseName": "callId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "listen",
            "baseName": "listen",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap() {
        return SetListenAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

