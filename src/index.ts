import {
  Configuration,
  MultipleComponentsList,
  UsVerificationsApi,
  UsVerificationsWritable
} from "@lob/lob-typescript-sdk";
import { testData } from './data';
const API_KEY = "<YOUR API KEY>";

export async function example() {
  const config: Configuration = new Configuration({
    username: API_KEY,
  });

  const usVerificationsClient = new UsVerificationsApi(config);
  const lobWritables = testData.map(item => new UsVerificationsWritable(item));
  const lobAddresses = new MultipleComponentsList({ addresses: lobWritables });
  try {
    const results = await usVerificationsClient.verifyBulk(lobAddresses);
    console.log('results:', results);
    return results;
  } catch (err:any) {
    console.error(err.message);
    throw new Error(err);
  }

}

example();
