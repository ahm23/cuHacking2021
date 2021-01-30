import * as AWS from 'aws-sdk';
import { AttributeMap } from 'aws-sdk/clients/dynamodb';




export interface EventData {
  class: string,
  endTime: number,
  startTime: number,
  title: string
}

export interface UserEvent {
  UID: string,
  data: EventData
}


export interface Credentials {
  username: string;
  password: string;
}

export default class DynamoDbStuff {
  docClient: AWS.DynamoDB.DocumentClient;

  constructor(credentials?: AWS.Credentials) {
    this.docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2', credentials});
  }

  /*public async upsert(UID: string, table: string) {
    const params = {
      TableName: table,
      Key: {
        id: UID,
      },
      UpdateExpression: `set callhomeValue = :callhomeValue,
    updatedOn = :updatedOn,
    missingDates = :missingDates,
    externalId = :externalId,
    parserFamily = :parserFamily,
    itemType = :itemType,
    customer = :customer`,
      ExpressionAttributeValues: {
        ':itemType': item.itemType,
        ':externalId': item.externalId,
        ':updatedOn': new Date().valueOf(),
        ':callhomeValue': '',
        ':missingDates': item.missingDates,
        ':parserFamily': item.parserFamily,
        ':customer': item.customer
      }
    };

    await this.docClient.update(params).promise();
  }*/

  /*public async query(params: AWS.DynamoDB.DocumentClient.QueryInput): Promise<DataSourceItem[]> {
    const devices: DataSourceItem[] = [];
    let dynamoDBItems: AWS.DynamoDB.DocumentClient.QueryOutput;
    do {
      dynamoDBItems = await this.docClient.query(params).promise();
      if (dynamoDBItems.Items) {
        for (const dbItem of dynamoDBItems.Items) {
          devices.push(dbItem as DataSourceItem);
        }
      }
      params.ExclusiveStartKey = dynamoDBItems.LastEvaluatedKey;
    } while (dynamoDBItems.LastEvaluatedKey);
    return devices;
  }

  public async queryTillProvisioned(params: AWS.DynamoDB.DocumentClient.QueryInput) {
    let timeout: number = 0;
    let attempt: number = 0;
    while (true) {
      try {
        return await this.query(params);
      } catch (e) {
        if (e.code === 'ProvisionedThroughputExceededException') {
          const newTimeout = (timeout || 50) * ++attempt + Math.random() * 50;
          if (newTimeout > 60000) {
            console.error('Backoff limit exceeded ', e);
            throw e;
          }
          console.error(`ProvisionedThroughputExceededException retry count ${attempt}`);
          await new Promise((resolve) => setTimeout(resolve, newTimeout));
          timeout = newTimeout;
          continue;
        }
        throw e;
      }
    }
  }*/

  async getEventsFromDynamoDB(UID: string): Promise<AttributeMap | undefined> {
    const params: AWS.DynamoDB.DocumentClient.GetItemInput = {
      TableName: 'user_events',
      Key: {
        UID
      }
    };
    let response = await this.docClient.get(params).promise();
    console.log(response);
    let no = response.Item;
    return no;
  }
}
