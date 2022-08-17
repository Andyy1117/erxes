const userFields = `
  _id
  username
  email
  details {
    avatar
    fullName
  }
`;

const listParamsDef = `
  $page: Int
  $perPage: Int
  $ids: [String]
  $excludeIds: Boolean
  $searchValue: String
  $sortField: String
  $sortDirection: Int
`;

const listParamsValue = `
  page: $page
  perPage: $perPage
  ids: $ids
  excludeIds: $excludeIds
  searchValue: $searchValue
  sortField: $sortField
  sortDirection: $sortDirection
`;

const dashboards = `
  query dashboards(${listParamsDef}) {
    dashboards(${listParamsDef}) {
	    _id
	    name
      description
      visibility
      selectedMemberIds
      parentId
      order
      createdAt
      relatedIds
      createdAt
      updatedAt
      createdBy
      updatedBy
      createdUser {
        ${userFields}
      }
      updatedUser {
        ${userFields}
      }
      itemsCount
	  }
  }
`;

export const dashboardsMain = `
  query dashboardsMain(${listParamsDef}) {
    dashboardsMain(${listParamsValue}) {
      list {
        _id
        name
        description
        visibility
        selectedMemberIds
        parentId
        order
        createdAt
        relatedIds
        itemsCount
      }

      totalCount
    }
  }
`;

const dashboardDetails = `
  query dashboardDetails($_id: String!) {
    dashboardDetails(_id: $_id) {
	    _id
	    name
      description
      visibility
      selectedMemberIds
      parentId
      order
      createdAt
      relatedIds
    }
  }
`;

const totalCount = `
  query dashboardsTotalCount {
	  dashboardsTotalCount
  }
`;

const dashboardItems = `
  query dashboardItems($dashboardId: String!) {
    dashboardItems(dashboardId: $dashboardId) {
      _id
      layout
      vizState
      name
    }
  }
`;

const dashboardItemDetail = `
  query dashboardItemDetail($_id: String!) {
    dashboardItemDetail(_id: $_id) {
      _id
      layout
      vizState
      name
      type
      isDateRange
    }
  }
`;

export default {
  dashboardItemDetail,
  dashboardItems,
  dashboardsMain,
  totalCount,
  dashboards,
  dashboardDetails
};