export const types = `
  type ExportHistory {
    _id: String!
    total: String
    contentType: String
    date: Date
    status: String
    user: JSON
    exportLink: String
    name: String
  }

  type ExportHistoryList {
    list: [ExportHistory]
    count: Int 
  }
`;

export const queries = `
  exportHistoryGetTypes: JSON
  exportHistories(perPage: Int, page: Int, type: String): ExportHistoryList
  exportHistoryDetail(_id: String!): ImportHistory
  exportHistoryPreviewExportCount(segmentId: String, contentType: String!): String
  exportHistoryGetColumns(attachmentName: String): JSON
  exportHistoryGetDuplicatedHeaders(attachmentNames: [String]): JSON
  exportHistoryGetExportableServices: JSON
`;

export const mutations = `
  exportHistoriesCreate(contentType: String!, columnsConfig: [String], segmentData: JSON, name: String): JSON
`;