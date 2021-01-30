import {Client} from '@elastic/elasticsearch';

export function launchES() {
    const client = new Client({
        node: 'https://158.69.1.52/search/',
        auth: {
          apiKey: {
              id: '1PThxXYBzjC1l_w4_PbP',
              api_key: 'YRONRqOIR66uQe8bIbkA9A'
          }
        },
        ssl: {
          rejectUnauthorized: false
        }
    });
    
    let res = client.get({
        id: 'testUser',
        index: 'user_events'
    });
    console.log(res);
}
