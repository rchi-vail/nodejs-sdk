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

import { AddToConference } from './AddToConference';
import { CreateConferenceAllOf } from './CreateConferenceAllOf';
import { Dequeue } from './Dequeue';
import { Enqueue } from './Enqueue';
import { GetDigits } from './GetDigits';
import { GetSpeech } from './GetSpeech';
import { Hangup } from './Hangup';
import { OutDial } from './OutDial';
import { Pause } from './Pause';
import { PerclCommand } from './PerclCommand';
import { Play } from './Play';
import { PlayEarlyMedia } from './PlayEarlyMedia';
import { RecordUtterance } from './RecordUtterance';
import { Redirect } from './Redirect';
import { Reject } from './Reject';
import { RemoveFromConference } from './RemoveFromConference';
import { Say } from './Say';
import { SendDigits } from './SendDigits';
import { SetListen } from './SetListen';
import { SetTalk } from './SetTalk';
import { Sms } from './Sms';
import { StartRecordCall } from './StartRecordCall';
import { TerminateConference } from './TerminateConference';
import { HttpFile } from '../http/http';

/**
* The `CreateConference` command does exactly what its name implies — it creates an unpopulated Conference (one without any Participants). Once created, a Conference remains in FreeClimb until explicitly terminated by a customer. Once a Conference has been terminated, it can no longer be used.
*/
export class CreateConference extends PerclCommand {
    /**
    *  This URL is invoked once the Conference is successfully created. Actions on the Conference, such as adding Participants, can be performed via the PerCL script returned in the response. 
    */
    'actionUrl': string;
    /**
    * Descriptive name for the Conference. 
    */
    'alias'?: boolean;
    /**
    * Indicates whether to play a beep when a Participant enters or leaves the Conference. either `always`, `never`, `entryOnly`, or `exitOnly`. Leaving this unset will make conference default to `always` 
    */
    'playBeep'?: string;
    /**
    * When set to `true`, the entire Conference is recorded. The `statusCallbackUrl` of the Conference will receive a `conferenceRecordingEnded` Webhook when the Conference transitions from the `inProgress` to empty state.
    */
    'record'?: boolean;
    /**
    * This URL is invoked when the status of the Conference changes or when a recording of the Conference has become available.
    */
    'statusCallbackUrl'?: boolean;
    /**
    * If specified, this URL provides the custom hold music for the Conference when it is in the populated state. This attribute is always fetched using HTTP GET and is fetched just once – when the Conference is created. The URL must be an audio file that is reachable and readable by FreeClimb.
    */
    'waitUrl'?: string;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "playBeep",
            "baseName": "playBeep",
            "type": "string",
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
            "name": "statusCallbackUrl",
            "baseName": "statusCallbackUrl",
            "type": "boolean",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "waitUrl",
            "baseName": "waitUrl",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CreateConference.attributeTypeMap);
    }

    public constructor() {
        super();
        this.command = "CreateConference";
    }
}

