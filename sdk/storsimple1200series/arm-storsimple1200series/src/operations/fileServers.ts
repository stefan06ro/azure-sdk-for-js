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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/fileServersMappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClientContext } from "../storSimpleManagementClientContext";

/** Class representing a FileServers. */
export class FileServers {
  private readonly client: StorSimpleManagementClientContext;

  /**
   * Create a FileServers.
   * @param {StorSimpleManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimpleManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the file servers in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileServersListByDeviceResponse>
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileServersListByDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.FileServerList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileServerList>): void;
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileServerList>, callback?: msRest.ServiceCallback<Models.FileServerList>): Promise<Models.FileServersListByDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      listByDeviceOperationSpec,
      callback) as Promise<Models.FileServersListByDeviceResponse>;
  }

  /**
   * Returns the properties of the specified file server name.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileServersGetResponse>
   */
  get(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileServersGetResponse>;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  get(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.FileServer>): void;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileServer>): void;
  get(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileServer>, callback?: msRest.ServiceCallback<Models.FileServer>): Promise<Models.FileServersGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FileServersGetResponse>;
  }

  /**
   * Creates or updates the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param fileServer The file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileServersCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, fileServerName: string, fileServer: Models.FileServer, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileServersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,fileServerName,fileServer,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FileServersCreateOrUpdateResponse>;
  }

  /**
   * Deletes the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,fileServerName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Backup the file server now.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  backupNow(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginBackupNow(deviceName,fileServerName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the file server metrics.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileServersListMetricsResponse>
   */
  listMetrics(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: Models.FileServersListMetricsOptionalParams): Promise<Models.FileServersListMetricsResponse>;
  /**
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetrics(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricList>): void;
  /**
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options: Models.FileServersListMetricsOptionalParams, callback: msRest.ServiceCallback<Models.MetricList>): void;
  listMetrics(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: Models.FileServersListMetricsOptionalParams | msRest.ServiceCallback<Models.MetricList>, callback?: msRest.ServiceCallback<Models.MetricList>): Promise<Models.FileServersListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.FileServersListMetricsResponse>;
  }

  /**
   * Retrieves metric definitions of all metrics aggregated at the file server.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileServersListMetricDefinitionResponse>
   */
  listMetricDefinition(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileServersListMetricDefinitionResponse>;
  /**
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  /**
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  listMetricDefinition(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricDefinitionList>, callback?: msRest.ServiceCallback<Models.MetricDefinitionList>): Promise<Models.FileServersListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricDefinitionOperationSpec,
      callback) as Promise<Models.FileServersListMetricDefinitionResponse>;
  }

  /**
   * Retrieves all the file servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileServersListByManagerResponse>
   */
  listByManager(resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileServersListByManagerResponse>;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.FileServerList>): void;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileServerList>): void;
  listByManager(resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileServerList>, callback?: msRest.ServiceCallback<Models.FileServerList>): Promise<Models.FileServersListByManagerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managerName,
        options
      },
      listByManagerOperationSpec,
      callback) as Promise<Models.FileServersListByManagerResponse>;
  }

  /**
   * Creates or updates the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param fileServer The file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, fileServerName: string, fileServer: Models.FileServer, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        fileServerName,
        fileServer,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Backup the file server now.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginBackupNow(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        options
      },
      beginBackupNowOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileServer
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/metrics",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listMetricDefinitionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/metricsDefinitions",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByManagerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/fileservers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileServerList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "fileServer",
    mapper: {
      ...Mappers.FileServer,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FileServer
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginBackupNowOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/backup",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
