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
import { CreateConference } from './CreateConference';
import { Dequeue } from './Dequeue';
import { Enqueue } from './Enqueue';
import { GetDigits } from './GetDigits';
import { GetSpeech } from './GetSpeech';
import { Hangup } from './Hangup';
import { OutDial } from './OutDial';
import { Pause } from './Pause';
import { PerclCommand } from './PerclCommand';
import { PlayAllOf } from './PlayAllOf';
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
* The `Play` command plays an audio file back to the caller. The audio file may be located at any location accessible via a URL. `Play` can exist as a stand-alone command or as a nested command. It does not allow barge-in unless nested within a `GetSpeech` command. The file will always be played to completion unless nested.
*/
export class Play extends PerclCommand {
    /**
    * RL of the audio file to be played to the caller. The URL can be the `recordingUrl` generated from the `RecordUtterance` or `StartRecordCall` PerCL commands. 
    */
    'file': string;
    /**
    * Number of times the audio file is played. Specifying '0' causes the Play action to loop until the Call is hung up.
    */
    'loop'?: number;
    /**
    * ID of the Conference the audio should be rendered to. If this is not specified, the audio is by default rendered to the caller associated with the call leg that corresponds to the current PerCL execution context. The call leg associated with this command must be in the specified Conference or the command will return an error.
    */
    'conferenceId'?: string;
    /**
    * Parameter `privacyMode` will not log the `text` as required by PCI compliance.
    */
    'privacyMode'?: boolean;

    static readonly discriminator: string | undefined = "command";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "loop",
            "baseName": "loop",
            "type": "number",
            "format": "",
            
            
            "defaultValue": undefined
        },
        {
            "name": "conferenceId",
            "baseName": "conferenceId",
            "type": "string",
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
        return super.getAttributeTypeMap().concat(Play.attributeTypeMap);
    }

    public constructor() {
        super();
        this.command = "Play";
    }
}

