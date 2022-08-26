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

export class OutDialAllOf {
    /**
    * URL to which FreeClimb sends an HTTP POST request. 
    */
    'actionUrl': string;
    /**
    * URL to which FreeClimb makes an HTTP POST request informing the result of the OutDial.
    */
    'callConnectUrl': string;
    /**
    * he caller ID to show to the called party when FreeClimb calls. This can be one of the following: The To or From number provided in the first Webhook to your webserver. Any phone number you have purchased from FreeClimb.
    */
    'callingNumber': number;
    /**
    * E.164 representation of the phone number to Call. 
    */
    'destination': number;
    /**
    * Specifies how FreeClimb should handle this OutDial if an answering machine answers the Call. Valid values: `redirect` invokes the ifMachineUrl for instructions. `hangup` hangs up the Call. The ifMachineUrl will not be invoked.
    */
    'ifMachine'?: string;
    /**
    * When the `ifMachine` flag is set to `redirect`, this attribute specifies a URL to which FreeClimb makes a POST request when an answering machine or a fax machine is detected. This URL is required if the `ifMachine` flag is set to `redirect`. Otherwise, it should not be included.
    */
    'ifMachineUrl'?: string;
    /**
    * DTMF tones to play to the outdialed Call. This is typically used to dial a number and then dial an extension.
    */
    'sendDigits'?: string;
    /**
    * When the outdialed Call leg terminates, FreeClimb sends a `callStatus` Webhook to the `statusCallbackUrl`. This is a notification only; any PerCL command returned is ignored.
    */
    'statusCallbackUrl'?: string;
    /**
    * Maximum time in seconds the `OutDial` command waits for the called party to answer the Call. When a timeout occurs, FreeClimb invokes the `callConnectUrl` Webhook to report that the out-dialed Call has ended with a status of `noAnswer`.
    */
    'timeout'?: number;
    /**
    * Parameter `privacyMode` will not log the `text` as required by PCI compliance.
    */
    'privacyMode'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "callConnectUrl",
            "baseName": "callConnectUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "callingNumber",
            "baseName": "callingNumber",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "ifMachine",
            "baseName": "ifMachine",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "ifMachineUrl",
            "baseName": "ifMachineUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "sendDigits",
            "baseName": "sendDigits",
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
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "privacyMode",
            "baseName": "privacyMode",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap() {
        return OutDialAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

