/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ApiOperationDisplay: msRest.CompositeMapper = {
  serializedName: "ApiOperation_display",
  type: {
    name: "Composite",
    className: "ApiOperationDisplay",
    modelProperties: {
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricDimension: msRest.CompositeMapper = {
  serializedName: "MetricDimension",
  type: {
    name: "Composite",
    className: "MetricDimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      },
      toBeExportedForShoebox: {
        serializedName: "toBeExportedForShoebox",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const MetricSpecification: msRest.CompositeMapper = {
  serializedName: "MetricSpecification",
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      supportedAggregationTypes: {
        serializedName: "supportedAggregationTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      metricClass: {
        serializedName: "metricClass",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricDimension"
            }
          }
        }
      }
    }
  }
};

export const ApiOperationPropertiesServiceSpecification: msRest.CompositeMapper = {
  serializedName: "ApiOperation_properties_serviceSpecification",
  type: {
    name: "Composite",
    className: "ApiOperationPropertiesServiceSpecification",
    modelProperties: {
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const ApiOperation: msRest.CompositeMapper = {
  serializedName: "ApiOperation",
  type: {
    name: "Composite",
    className: "ApiOperation",
    modelProperties: {
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ApiOperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "ApiOperationPropertiesServiceSpecification"
        }
      }
    }
  }
};

export const CloudErrorBody: msRest.CompositeMapper = {
  serializedName: "CloudErrorBody",
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AscOperation: msRest.CompositeMapper = {
  serializedName: "AscOperation",
  type: {
    name: "Composite",
    className: "AscOperation",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      },
      output: {
        serializedName: "properties.output",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const CacheIdentity: msRest.CompositeMapper = {
  serializedName: "CacheIdentity",
  type: {
    name: "Composite",
    className: "CacheIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "None"
          ]
        }
      }
    }
  }
};

export const SystemData: msRest.CompositeMapper = {
  serializedName: "systemData",
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CacheHealth: msRest.CompositeMapper = {
  serializedName: "CacheHealth",
  type: {
    name: "Composite",
    className: "CacheHealth",
    modelProperties: {
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      statusDescription: {
        serializedName: "statusDescription",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheUpgradeStatus: msRest.CompositeMapper = {
  serializedName: "CacheUpgradeStatus",
  type: {
    name: "Composite",
    className: "CacheUpgradeStatus",
    modelProperties: {
      currentFirmwareVersion: {
        readOnly: true,
        serializedName: "currentFirmwareVersion",
        type: {
          name: "String"
        }
      },
      firmwareUpdateStatus: {
        readOnly: true,
        serializedName: "firmwareUpdateStatus",
        type: {
          name: "String"
        }
      },
      firmwareUpdateDeadline: {
        readOnly: true,
        serializedName: "firmwareUpdateDeadline",
        type: {
          name: "DateTime"
        }
      },
      lastFirmwareUpdate: {
        readOnly: true,
        serializedName: "lastFirmwareUpdate",
        type: {
          name: "DateTime"
        }
      },
      pendingFirmwareVersion: {
        readOnly: true,
        serializedName: "pendingFirmwareVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheNetworkSettings: msRest.CompositeMapper = {
  serializedName: "CacheNetworkSettings",
  type: {
    name: "Composite",
    className: "CacheNetworkSettings",
    modelProperties: {
      mtu: {
        serializedName: "mtu",
        defaultValue: 1500,
        constraints: {
          InclusiveMaximum: 1500,
          InclusiveMinimum: 576
        },
        type: {
          name: "Number"
        }
      },
      utilityAddresses: {
        readOnly: true,
        serializedName: "utilityAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const KeyVaultKeyReferenceSourceVault: msRest.CompositeMapper = {
  serializedName: "KeyVaultKeyReference_sourceVault",
  type: {
    name: "Composite",
    className: "KeyVaultKeyReferenceSourceVault",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyVaultKeyReference: msRest.CompositeMapper = {
  serializedName: "KeyVaultKeyReference",
  type: {
    name: "Composite",
    className: "KeyVaultKeyReference",
    modelProperties: {
      keyUrl: {
        required: true,
        serializedName: "keyUrl",
        type: {
          name: "String"
        }
      },
      sourceVault: {
        required: true,
        serializedName: "sourceVault",
        type: {
          name: "Composite",
          className: "KeyVaultKeyReferenceSourceVault"
        }
      }
    }
  }
};

export const CacheEncryptionSettings: msRest.CompositeMapper = {
  serializedName: "CacheEncryptionSettings",
  type: {
    name: "Composite",
    className: "CacheEncryptionSettings",
    modelProperties: {
      keyEncryptionKey: {
        serializedName: "keyEncryptionKey",
        type: {
          name: "Composite",
          className: "KeyVaultKeyReference"
        }
      }
    }
  }
};

export const NfsAccessRule: msRest.CompositeMapper = {
  serializedName: "NfsAccessRule",
  type: {
    name: "Composite",
    className: "NfsAccessRule",
    modelProperties: {
      scope: {
        required: true,
        serializedName: "scope",
        type: {
          name: "String"
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      access: {
        required: true,
        serializedName: "access",
        type: {
          name: "String"
        }
      },
      suid: {
        serializedName: "suid",
        type: {
          name: "Boolean"
        }
      },
      submountAccess: {
        serializedName: "submountAccess",
        type: {
          name: "Boolean"
        }
      },
      rootSquash: {
        serializedName: "rootSquash",
        type: {
          name: "Boolean"
        }
      },
      anonymousUID: {
        serializedName: "anonymousUID",
        defaultValue: '-2',
        type: {
          name: "String"
        }
      },
      anonymousGID: {
        serializedName: "anonymousGID",
        defaultValue: '-2',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NfsAccessPolicy: msRest.CompositeMapper = {
  serializedName: "NfsAccessPolicy",
  type: {
    name: "Composite",
    className: "NfsAccessPolicy",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      accessRules: {
        required: true,
        serializedName: "accessRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NfsAccessRule"
            }
          }
        }
      }
    }
  }
};

export const CacheSecuritySettings: msRest.CompositeMapper = {
  serializedName: "CacheSecuritySettings",
  type: {
    name: "Composite",
    className: "CacheSecuritySettings",
    modelProperties: {
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NfsAccessPolicy"
            }
          }
        }
      }
    }
  }
};

export const CacheActiveDirectorySettingsCredentials: msRest.CompositeMapper = {
  serializedName: "CacheActiveDirectorySettings_credentials",
  type: {
    name: "Composite",
    className: "CacheActiveDirectorySettingsCredentials",
    modelProperties: {
      username: {
        required: true,
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        required: true,
        serializedName: "password",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheActiveDirectorySettings: msRest.CompositeMapper = {
  serializedName: "CacheActiveDirectorySettings",
  type: {
    name: "Composite",
    className: "CacheActiveDirectorySettings",
    modelProperties: {
      primaryDnsIpAddress: {
        required: true,
        serializedName: "primaryDnsIpAddress",
        type: {
          name: "String"
        }
      },
      secondaryDnsIpAddress: {
        serializedName: "secondaryDnsIpAddress",
        type: {
          name: "String"
        }
      },
      domainName: {
        required: true,
        serializedName: "domainName",
        type: {
          name: "String"
        }
      },
      domainNetBiosName: {
        required: true,
        serializedName: "domainNetBiosName",
        type: {
          name: "String"
        }
      },
      cacheNetBiosName: {
        required: true,
        serializedName: "cacheNetBiosName",
        constraints: {
          Pattern: /^[-0-9a-zA-Z]{1,15}$/
        },
        type: {
          name: "String"
        }
      },
      domainJoined: {
        readOnly: true,
        serializedName: "domainJoined",
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "CacheActiveDirectorySettingsCredentials"
        }
      }
    }
  }
};

export const CacheUsernameDownloadSettingsCredentials: msRest.CompositeMapper = {
  serializedName: "CacheUsernameDownloadSettings_credentials",
  type: {
    name: "Composite",
    className: "CacheUsernameDownloadSettingsCredentials",
    modelProperties: {
      bindDn: {
        serializedName: "bindDn",
        type: {
          name: "String"
        }
      },
      bindPassword: {
        serializedName: "bindPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CacheUsernameDownloadSettings: msRest.CompositeMapper = {
  serializedName: "CacheUsernameDownloadSettings",
  type: {
    name: "Composite",
    className: "CacheUsernameDownloadSettings",
    modelProperties: {
      extendedGroups: {
        serializedName: "extendedGroups",
        type: {
          name: "Boolean"
        }
      },
      usernameSource: {
        serializedName: "usernameSource",
        defaultValue: 'None',
        type: {
          name: "String"
        }
      },
      groupFileURI: {
        serializedName: "groupFileURI",
        type: {
          name: "String"
        }
      },
      userFileURI: {
        serializedName: "userFileURI",
        type: {
          name: "String"
        }
      },
      ldapServer: {
        serializedName: "ldapServer",
        type: {
          name: "String"
        }
      },
      ldapBaseDN: {
        serializedName: "ldapBaseDN",
        type: {
          name: "String"
        }
      },
      encryptLdapConnection: {
        serializedName: "encryptLdapConnection",
        type: {
          name: "Boolean"
        }
      },
      requireValidCertificate: {
        serializedName: "requireValidCertificate",
        type: {
          name: "Boolean"
        }
      },
      autoDownloadCertificate: {
        serializedName: "autoDownloadCertificate",
        type: {
          name: "Boolean"
        }
      },
      caCertificateURI: {
        serializedName: "caCertificateURI",
        type: {
          name: "String"
        }
      },
      usernameDownloaded: {
        readOnly: true,
        serializedName: "usernameDownloaded",
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "CacheUsernameDownloadSettingsCredentials"
        }
      }
    }
  }
};

export const CacheDirectorySettings: msRest.CompositeMapper = {
  serializedName: "CacheDirectorySettings",
  type: {
    name: "Composite",
    className: "CacheDirectorySettings",
    modelProperties: {
      activeDirectory: {
        serializedName: "activeDirectory",
        type: {
          name: "Composite",
          className: "CacheActiveDirectorySettings"
        }
      },
      usernameDownload: {
        serializedName: "usernameDownload",
        type: {
          name: "Composite",
          className: "CacheUsernameDownloadSettings"
        }
      }
    }
  }
};

export const CacheSku: msRest.CompositeMapper = {
  serializedName: "Cache_sku",
  type: {
    name: "Composite",
    className: "CacheSku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cache: msRest.CompositeMapper = {
  serializedName: "Cache",
  type: {
    name: "Composite",
    className: "Cache",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Object"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "CacheIdentity"
        }
      },
      systemData: {
        readOnly: true,
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      cacheSizeGB: {
        serializedName: "properties.cacheSizeGB",
        type: {
          name: "Number"
        }
      },
      health: {
        readOnly: true,
        serializedName: "properties.health",
        type: {
          name: "Composite",
          className: "CacheHealth"
        }
      },
      mountAddresses: {
        readOnly: true,
        serializedName: "properties.mountAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "String"
        }
      },
      upgradeStatus: {
        serializedName: "properties.upgradeStatus",
        type: {
          name: "Composite",
          className: "CacheUpgradeStatus"
        }
      },
      networkSettings: {
        serializedName: "properties.networkSettings",
        type: {
          name: "Composite",
          className: "CacheNetworkSettings"
        }
      },
      encryptionSettings: {
        serializedName: "properties.encryptionSettings",
        type: {
          name: "Composite",
          className: "CacheEncryptionSettings"
        }
      },
      securitySettings: {
        serializedName: "properties.securitySettings",
        type: {
          name: "Composite",
          className: "CacheSecuritySettings"
        }
      },
      directoryServicesSettings: {
        serializedName: "properties.directoryServicesSettings",
        type: {
          name: "Composite",
          className: "CacheDirectorySettings"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CacheSku"
        }
      }
    }
  }
};

export const NamespaceJunction: msRest.CompositeMapper = {
  serializedName: "NamespaceJunction",
  type: {
    name: "Composite",
    className: "NamespaceJunction",
    modelProperties: {
      namespacePath: {
        serializedName: "namespacePath",
        type: {
          name: "String"
        }
      },
      targetPath: {
        serializedName: "targetPath",
        type: {
          name: "String"
        }
      },
      nfsExport: {
        serializedName: "nfsExport",
        type: {
          name: "String"
        }
      },
      nfsAccessPolicy: {
        serializedName: "nfsAccessPolicy",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Nfs3Target: msRest.CompositeMapper = {
  serializedName: "Nfs3Target",
  type: {
    name: "Composite",
    className: "Nfs3Target",
    modelProperties: {
      target: {
        serializedName: "target",
        constraints: {
          Pattern: /^[-.0-9a-zA-Z]+$/
        },
        type: {
          name: "String"
        }
      },
      usageModel: {
        serializedName: "usageModel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClfsTarget: msRest.CompositeMapper = {
  serializedName: "ClfsTarget",
  type: {
    name: "Composite",
    className: "ClfsTarget",
    modelProperties: {
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnknownTarget: msRest.CompositeMapper = {
  serializedName: "UnknownTarget",
  type: {
    name: "Composite",
    className: "UnknownTarget",
    modelProperties: {
      unknownMap: {
        serializedName: "unknownMap",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StorageTargetProperties: msRest.CompositeMapper = {
  serializedName: "StorageTargetProperties",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "targetType",
      clientName: "targetType"
    },
    uberParent: "StorageTargetProperties",
    className: "StorageTargetProperties",
    modelProperties: {
      junctions: {
        serializedName: "junctions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NamespaceJunction"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      nfs3: {
        serializedName: "nfs3",
        type: {
          name: "Composite",
          className: "Nfs3Target"
        }
      },
      clfs: {
        serializedName: "clfs",
        type: {
          name: "Composite",
          className: "ClfsTarget"
        }
      },
      unknown: {
        serializedName: "unknown",
        type: {
          name: "Composite",
          className: "UnknownTarget"
        }
      },
      targetType: {
        required: true,
        serializedName: "targetType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageTargetResource: msRest.CompositeMapper = {
  serializedName: "StorageTargetResource",
  type: {
    name: "Composite",
    className: "StorageTargetResource",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      systemData: {
        readOnly: true,
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const StorageTarget: msRest.CompositeMapper = {
  serializedName: "StorageTarget",
  type: {
    name: "Composite",
    className: "StorageTarget",
    modelProperties: {
      ...StorageTargetResource.type.modelProperties,
      junctions: {
        serializedName: "properties.junctions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NamespaceJunction"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      nfs3: {
        serializedName: "properties.nfs3",
        type: {
          name: "Composite",
          className: "Nfs3Target"
        }
      },
      clfs: {
        serializedName: "properties.clfs",
        type: {
          name: "Composite",
          className: "ClfsTarget"
        }
      },
      unknown: {
        serializedName: "properties.unknown",
        type: {
          name: "Composite",
          className: "UnknownTarget"
        }
      },
      targetType: {
        required: true,
        serializedName: "properties.targetType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Nfs3TargetProperties: msRest.CompositeMapper = {
  serializedName: "nfs3",
  type: {
    name: "Composite",
    polymorphicDiscriminator: StorageTargetProperties.type.polymorphicDiscriminator,
    uberParent: "StorageTargetProperties",
    className: "Nfs3TargetProperties",
    modelProperties: {
      ...StorageTargetProperties.type.modelProperties
    }
  }
};

export const ClfsTargetProperties: msRest.CompositeMapper = {
  serializedName: "clfs",
  type: {
    name: "Composite",
    polymorphicDiscriminator: StorageTargetProperties.type.polymorphicDiscriminator,
    uberParent: "StorageTargetProperties",
    className: "ClfsTargetProperties",
    modelProperties: {
      ...StorageTargetProperties.type.modelProperties
    }
  }
};

export const UnknownTargetProperties: msRest.CompositeMapper = {
  serializedName: "unknown",
  type: {
    name: "Composite",
    polymorphicDiscriminator: StorageTargetProperties.type.polymorphicDiscriminator,
    uberParent: "StorageTargetProperties",
    className: "UnknownTargetProperties",
    modelProperties: {
      ...StorageTargetProperties.type.modelProperties
    }
  }
};

export const ResourceSkuCapabilities: msRest.CompositeMapper = {
  serializedName: "ResourceSkuCapabilities",
  type: {
    name: "Composite",
    className: "ResourceSkuCapabilities",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSkuLocationInfo: msRest.CompositeMapper = {
  serializedName: "ResourceSkuLocationInfo",
  type: {
    name: "Composite",
    className: "ResourceSkuLocationInfo",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      zones: {
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Restriction: msRest.CompositeMapper = {
  serializedName: "Restriction",
  type: {
    name: "Composite",
    className: "Restriction",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      values: {
        readOnly: true,
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      reasonCode: {
        serializedName: "reasonCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: msRest.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      resourceType: {
        readOnly: true,
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCapabilities"
            }
          }
        }
      },
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locationInfo: {
        serializedName: "locationInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuLocationInfo"
            }
          }
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      restrictions: {
        serializedName: "restrictions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Restriction"
            }
          }
        }
      }
    }
  }
};

export const UsageModelDisplay: msRest.CompositeMapper = {
  serializedName: "UsageModel_display",
  type: {
    name: "Composite",
    className: "UsageModelDisplay",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageModel: msRest.CompositeMapper = {
  serializedName: "UsageModel",
  type: {
    name: "Composite",
    className: "UsageModel",
    modelProperties: {
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "UsageModelDisplay"
        }
      },
      modelName: {
        serializedName: "modelName",
        type: {
          name: "String"
        }
      },
      targetType: {
        serializedName: "targetType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiOperationListResult: msRest.CompositeMapper = {
  serializedName: "ApiOperationListResult",
  type: {
    name: "Composite",
    className: "ApiOperationListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiOperation"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkusResult: msRest.CompositeMapper = {
  serializedName: "ResourceSkusResult",
  type: {
    name: "Composite",
    className: "ResourceSkusResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
            }
          }
        }
      }
    }
  }
};

export const UsageModelsResult: msRest.CompositeMapper = {
  serializedName: "UsageModelsResult",
  type: {
    name: "Composite",
    className: "UsageModelsResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UsageModel"
            }
          }
        }
      }
    }
  }
};

export const CachesListResult: msRest.CompositeMapper = {
  serializedName: "CachesListResult",
  type: {
    name: "Composite",
    className: "CachesListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cache"
            }
          }
        }
      }
    }
  }
};

export const StorageTargetsResult: msRest.CompositeMapper = {
  serializedName: "StorageTargetsResult",
  type: {
    name: "Composite",
    className: "StorageTargetsResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StorageTarget"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'StorageTargetProperties' : StorageTargetProperties,
  'StorageTargetProperties.nfs3' : Nfs3TargetProperties,
  'StorageTargetProperties.clfs' : ClfsTargetProperties,
  'StorageTargetProperties.unknown' : UnknownTargetProperties

};
