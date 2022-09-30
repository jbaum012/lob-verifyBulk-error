import {
  Configuration,
  MultipleComponentsList,
  UsVerificationsApi,
  UsVerificationsWritable
} from "@lob/lob-typescript-sdk";
import { testData } from './data';
const API_KEY = process.env.API_KEY;

export async function example() {
  const config: Configuration = new Configuration({
    username: API_KEY,
  });

  const usVerificationsClient = new UsVerificationsApi(config);
  const lobWritables = testData.map(item => new UsVerificationsWritable(item));
  const lobAddresses = new MultipleComponentsList({ addresses: lobWritables });
  const results = await usVerificationsClient.verifyBulk(lobAddresses);
  return results;
}

example();
