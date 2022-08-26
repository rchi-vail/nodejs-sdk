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

export enum ConferenceResultAllOfPlayBeepEnum {

    ALWAYS = 'always',
    NEVER = 'never',
    ENTRY_ONLY = 'entryOnly',
    EXIT_ONLY = 'exitOnly'
}
export enum ConferenceResultAllOfStatusEnum {

    CREATING = 'creating',
    EMPTY = 'empty',
    POPULATED = 'populated',
    IN_PROGRESS = 'inProgress',
    TERMINATED = 'terminated'
}
export class ConferenceResultAllOf {
    /**
    * A string that uniquely identifies this Conference resource.
    */
    'conferenceId'?: string;
    /**
    * ID of the account that created this Conference.
    */
    'accountId'?: string;
    /**
    * A description for this Conference.
    */
    'alias'?: string;
    /**
    * Setting that controls when a beep is played. One of: always, never, entryOnly, exitOnly. Defaults to always.
    */
    'playBeep'?: ConferenceResultAllOfPlayBeepEnum;
    /**
    * Flag indicating whether recording is enabled for this Conference.
    */
    'record'?: boolean;
    /**
    * The status of the Conference. One of: creating, empty, populated, inProgress, or terminated.
    */
    'status'?: ConferenceResultAllOfStatusEnum;
    /**
    * URL referencing the audio file to be used as default wait music for the Conference when it is in the populated state.
    */
    'waitUrl'?: string;
    /**
    * URL invoked once the Conference is successfully created.
    */
    'actionUrl'?: string;
    /**
    * URL to inform that the Conference status has changed.
    */
    'statusCallbackUrl'?: string;
    /**
    * The list of subresources for this Conference. This includes participants and/or recordings.
    */
    'subresourceUris'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "conferenceId",
            "baseName": "conferenceId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
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
            "type": "ConferenceResultAllOfPlayBeepEnum",
            "format": "",
            
            
            "defaultValue": undefined

        },
        {
            "name": "record",
            "baseName": "record",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ConferenceResultAllOfStatusEnum",
            "format": "",
            
            
            "defaultValue": undefined

        },
        {
            "name": "waitUrl",
            "baseName": "waitUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "statusCallbackUrl",
            "baseName": "statusCallbackUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "subresourceUris",
            "baseName": "subresourceUris",
            "type": "any",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap() {
        return ConferenceResultAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

