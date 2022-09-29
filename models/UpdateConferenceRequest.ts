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

export enum UpdateConferenceRequestPlayBeepEnum {

    ALWAYS = 'always',
    NEVER = 'never',
    ENTRY_ONLY = 'entryOnly',
    EXIT_ONLY = 'exitOnly'
}
export enum UpdateConferenceRequestStatusEnum {

    EMPTY = 'empty',
    TERMINATED = 'terminated'
}
interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'alias'?: string;
    'playBeep'?: UpdateConferenceRequestPlayBeepEnum;
    'status'?: UpdateConferenceRequestStatusEnum;
}
export class UpdateConferenceRequest {
    /**
    * Description for this conference. Maximum 64 characters.
    */
    'alias'?: string;
    /**
    * Controls when a beep is played. Valid values: `always`, `never`, `entryOnly`, `exitOnly`.
    */
    'playBeep'?: UpdateConferenceRequestPlayBeepEnum;
    /**
    * New status of the conference. Valid values: `empty` or `terminated`. For more information, see **Status Parameter** below.**
    */
    'status'?: UpdateConferenceRequestStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "playBeep",
            "baseName": "playBeep",
            "type": "UpdateConferenceRequestPlayBeepEnum",
            "format": "",
            
            "defaultValue": UpdateConferenceRequestPlayBeepEnum.ALWAYS
            

        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateConferenceRequestStatusEnum",
            "format": "",
            
            
            "defaultValue": undefined

        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return UpdateConferenceRequest.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = UpdateConferenceRequest.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}
