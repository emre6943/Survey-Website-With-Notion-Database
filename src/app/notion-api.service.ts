import { Injectable } from '@angular/core';
import { keys } from 'src/app/keys';
import { Client } from '@notionhq/client';

@Injectable({
  providedIn: 'root'
})
export class NotionApiService {

constructor() { }

saveToC1Table() {
    (async () => {
    let notion = new Client({ auth: keys.notionKey });
    const response = await notion.pages.create({
        parent: {
        database_id: keys.c1ExperimentTableKey,
        },
        icon: {
            type: "emoji",
                emoji: "🤓"
        },
        properties: {
            Name: {
                title: [
                {
                    text: {
                    content: 'Tuscan Kale',
                    },
                },
                ],
            },
            Description: {
                rich_text: [
                {
                    text: {
                    content: 'A dark green leafy vegetable',
                    },
                },
                ],
            },
            'Food group': {
                select: {
                name: '🥦 Vegetable',
                },
            },
            Price: {
                number: 2.5,
            },
            },
            children: [
            {
                object: 'block',
                type: 'heading_2',
                heading_2: {
                rich_text: [
                    {
                    type: 'text',
                    text: {
                        content: 'Lacinato kale',
                    },
                    },
                ],
                },
            },
            {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                rich_text: [
                    {
                    type: 'text',
                    text: {
                        content: 'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                        link: {
                        url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
                        },
                    },
                    },
                ],
            },
        },
        ],
    });
    console.log(response);
    })();
}

saveToC2Table() {

}

async getC1Data() {
    let notion = new Client({ auth: keys.notionKey });

    try {
        let result = await notion.databases.retrieve({
            database_id:  keys.c1ExperimentTableKey
        });
        console.log("amk")
        console.log(result);
    } catch (error) {
        console.log("sadge")
        console.error(error);
    }
}


getC2Data() {

}

}
