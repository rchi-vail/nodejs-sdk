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

import { ConferenceListAllOf } from './ConferenceListAllOf';
import { ConferenceResult } from './ConferenceResult';
import { PaginationModel } from './PaginationModel';
import { HttpFile } from '../http/http';

export class ConferenceList {
    /**
    * Total amount of requested resource.
    */
    'total'?: number;
    /**
    * Resource index at start of current page
    */
    'start'?: number;
    /**
    * Resource index at end of current page
    */
    'end'?: number;
    /**
    * Current page
    */
    'page'?: number;
    /**
    * Total number of pages
    */
    'numPages'?: number;
    /**
    * Number of items per page
    */
    'pageSize'?: number;
    /**
    * Uri to retrieve the next page of items
    */
    'nextPageUri'?: string;
    'conferences'?: Array<ConferenceResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "numPages",
            "baseName": "numPages",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "nextPageUri",
            "baseName": "nextPageUri",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "conferences",
            "baseName": "conferences",
            "type": "Array<ConferenceResult>",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap() {
        return ConferenceList.attributeTypeMap;
    }

    public constructor() {
    }
}

