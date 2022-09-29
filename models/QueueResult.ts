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

import { MutableResourceModel } from './MutableResourceModel';
import { QueueResultAllOf } from './QueueResultAllOf';
import { HttpFile } from '../http/http';

interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'uri'?: string;
    'dateCreated'?: string;
    'dateUpdated'?: string;
    'revision'?: number;
    'accountId'?: string;
    'queueId'?: string;
    'alias'?: string;
    'maxSize'?: number;
    'currentSize'?: string;
    'averageWaitTime'?: string;
    'subresourceUris'?: any;
}
export class QueueResult {
    /**
    * The URI for this resource, relative to /apiserver.
    */
    'uri'?: string;
    /**
    * The date that this resource was created (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT).
    */
    'dateCreated'?: string;
    /**
    * The date that this resource was last updated (GMT) in RFC 1123 format (e.g., Mon, 15 Jun 2009 20:45:30 GMT).
    */
    'dateUpdated'?: string;
    /**
    * Revision count for the resource. This count is set to 1 on creation and is incremented every time it is updated.
    */
    'revision'?: number;
    /**
    * ID of the account that created this Queue.
    */
    'accountId'?: string;
    /**
    * A string that uniquely identifies this Queue resource.
    */
    'queueId'?: string;
    /**
    * A description for this Queue.
    */
    'alias'?: string;
    /**
    * The maximum number of Calls permitted in the Queue. Default is 100. Maximum is 1000.
    */
    'maxSize'?: number;
    /**
    * Count of Calls currently in the Queue.
    */
    'currentSize'?: string;
    /**
    * Average wait time (in seconds) of all Calls in the Queue.
    */
    'averageWaitTime'?: string;
    /**
    * List of subresources for this Queue (which includes Queue members).
    */
    'subresourceUris'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "dateCreated",
            "baseName": "dateCreated",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "dateUpdated",
            "baseName": "dateUpdated",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number",
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
            "name": "queueId",
            "baseName": "queueId",
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
            "name": "maxSize",
            "baseName": "maxSize",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "currentSize",
            "baseName": "currentSize",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "averageWaitTime",
            "baseName": "averageWaitTime",
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

    static getAttributeTypeMap(): AttributeType[] {
        return QueueResult.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = QueueResult.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}

