/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-http";
import {
  ImportUpdateInput as ImportUpdateInputMapper,
  Group as GroupMapper,
  Deployment as DeploymentMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const updateToImport: OperationParameter = {
  parameterPath: "updateToImport",
  mapper: ImportUpdateInputMapper
};

export const accountEndpoint: OperationURLParameter = {
  parameterPath: "accountEndpoint",
  mapper: {
    serializedName: "accountEndpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const action: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "import",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const provider: OperationURLParameter = {
  parameterPath: "provider",
  mapper: {
    serializedName: "provider",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const version: OperationURLParameter = {
  parameterPath: "version",
  mapper: {
    serializedName: "version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "accessCondition", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const fileId: OperationURLParameter = {
  parameterPath: "fileId",
  mapper: {
    serializedName: "fileId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const deviceClassId: OperationURLParameter = {
  parameterPath: "deviceClassId",
  mapper: {
    serializedName: "deviceClassId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const deviceId: OperationURLParameter = {
  parameterPath: "deviceId",
  mapper: {
    serializedName: "deviceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tagName: OperationURLParameter = {
  parameterPath: "tagName",
  mapper: {
    serializedName: "tagName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const groupId: OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    serializedName: "groupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const group: OperationParameter = {
  parameterPath: "group",
  mapper: GroupMapper
};

export const deploymentId: OperationURLParameter = {
  parameterPath: "deploymentId",
  mapper: {
    serializedName: "deploymentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const deployment: OperationParameter = {
  parameterPath: "deployment",
  mapper: DeploymentMapper
};

export const action1: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "cancel",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};

export const action2: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "retry",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};
