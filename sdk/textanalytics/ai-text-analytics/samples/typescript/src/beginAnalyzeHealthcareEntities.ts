// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * detects healthcare entities in a piece of text and prints them
 */

import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<cognitive services endpoint>";
const apiKey = process.env["TEXT_ANALYTICS_API_KEY"] || "<api key>";

const documents = [
  "The patient is a 54-year-old gentleman with a history of progressive angina over the past several months.",
  "Prescribed 100mg ibuprofen, taken twice daily.",
  "Patient does not suffer from high blood pressure."
];

export async function main() {
  console.log("== Recognize Healthcare Entities Sample ==");

  const client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

  const poller = await client.beginAnalyzeHealthcareEntities(documents, "en", {
    includeStatistics: true
  });
  const results = await poller.pollUntilDone();
  console.log(
    `The healthcare operation created on ${poller.getOperationState().createdOn} finished process`
  );
  console.log(
    `The healthcare operation results will expire on ${poller.getOperationState().expiresOn}`
  );

  for await (const result of results) {
    console.log(`- Document ${result.id}`);
    if (!result.error) {
      console.log("\tRecognized Entities:");
      for (const entity of result.entities) {
        console.log(`\t- Entity "${entity.text}" of type ${entity.category}`);
        if (entity.dataSources.length > 0) {
          console.log("\t and it can be referenced in the following data sources:");
          for (const ds of entity.dataSources) {
            console.log(`\t\t- ${ds.name} with Entity ID: ${ds.entityId}`);
          }
        }
      }
      if (result.entityRelations.length > 0) {
        console.log(`\tRecognized relations between entities:`);
        for (const relation of result.entityRelations) {
          console.log(
            `\t\t- Relation of type ${relation.relationType} found between the following entities:`
          );
          for (const role of relation.roles) {
            console.log(`\t\t\t- "${role.entity.text}" with the role ${role.name}`);
          }
        }
      }
    } else console.error("\tError:", result.error);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
