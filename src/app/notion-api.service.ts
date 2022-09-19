import { Injectable } from '@angular/core';
import { keys } from 'src/app/keys';
import { Client } from '@notionhq/client';
import { C1RecordData } from './models/c1Record.model';
import { C2RecordData } from './models/c2Record.model';

@Injectable({
  providedIn: 'root'
})
export class NotionApiService {

constructor() { }

saveToC1Table (c1Data : C1RecordData) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", `https://cors-anywhere.herokuapp.com/${keys.notionUrl}/pages`, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", keys.notionKey);
    xmlHttp.setRequestHeader("Notion-Version", keys.notionVersion);
    xmlHttp.setRequestHeader("Content-Type", "application/json");

    var data = `{
        "parent": { "database_id" : "${keys.c1ParentKey}" },
        "icon": { "emoji" : "🤓" },
        "properties" : {
            "Participant": {
                "title": [
                    {
                        "text": {
                            "content": "${c1Data.participant}"
                        }
                    }
                ]
            },
            "Word Pair": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c1Data.wordPair}"
                        }
                    }
                ]
            },
            "Test Word": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c1Data.testWord}"
                        }
                    }
                ]
            },
            "Test Answer": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c1Data.testAnswer}"
                        }
                    }
                ]
            },
            "Response Time": {
                "number" : ${c1Data.answerGivenInMs}
            }
        }
    }`

    xmlHttp.send( data );

    console.log(JSON.parse(xmlHttp.response));
}

saveToC2Table(c2Data : C2RecordData) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", `https://cors-anywhere.herokuapp.com/${keys.notionUrl}/pages`, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", keys.notionKey);
    xmlHttp.setRequestHeader("Notion-Version", keys.notionVersion);
    xmlHttp.setRequestHeader("Content-Type", "application/json");

    var data = `{
        "parent": { "database_id" : "${keys.c2ExperimentTableKey}" },
        "icon": { "emoji" : "🤓" },
        "properties" : {
            "Participant": {
                "title": [
                    {
                        "text": {
                            "content": "${c2Data.participant}"
                        }
                    }
                ]
            },
            "Word Shown": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c2Data.wordShown}"
                        }
                    }
                ]
            },
            "Word Answer": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c2Data.wordAnswer}"
                        }
                    }
                ]
            },
            "Test Word": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c2Data.testWord}"
                        }
                    }
                ]
            },
            "Test Answer": {
                "rich_text": [
                    {
                        "text": {
                            "content": "${c2Data.testAnswer}"
                        }
                    }
                ]
            }
        }
    }`

    xmlHttp.send( data );

    console.log(JSON.parse(xmlHttp.response));
}


// to test
getC1Data() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", `https://cors-anywhere.herokuapp.com/${keys.notionUrl}/databases/${keys.c1ExperimentTableKey}/query`, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", keys.notionKey);
    xmlHttp.setRequestHeader("Notion-Version", keys.notionVersion);
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
}


getC2Data() {

}

}
function notionUrl(arg0: string, notionUrl: any, arg2: boolean) {
    throw new Error('Function not implemented.');
}

