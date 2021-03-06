/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { PolicyClientContext } from "./policyClientContext";


class PolicyClient extends PolicyClientContext {
  // Operation groups
  policyDefinitions: operations.PolicyDefinitions;
  policyAssignments: operations.PolicyAssignments;

  /**
   * Initializes a new instance of the PolicyClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.PolicyClientOptions) {
    super(credentials, subscriptionId, options);
    this.policyDefinitions = new operations.PolicyDefinitions(this);
    this.policyAssignments = new operations.PolicyAssignments(this);
  }
}

// Operation Specifications

export {
  PolicyClient,
  PolicyClientContext,
  Models as PolicyModels,
  Mappers as PolicyMappers
};
export * from "./operations";
