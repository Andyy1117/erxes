import { safeRemainderItemFields } from './queries';

const transactionAdd = `
  mutation TransactionAdd(
    $branchId: String,
    $departmentId: String,
    $contentId: String,
    $contentType: String,
    $status: String,
    $products: [TransactionProductInput]
  ) {
    transactionAdd(
      branchId: $branchId,
      departmentId: $departmentId,
      contentId: $contentId,
      contentType: $contentType,
      status: $status,
      products: $products
    )
  }
`;

const safeRemainderItemEdit = `
  mutation safeRemainderItemEdit(
    $_id: String,
    $status: String,
    $remainder: Float,
  ) {
    safeRemainderItemEdit(
      _id: $_id,
      status: $status,
      remainder: $remainder,
    ) {
      ${safeRemainderItemFields}
    }
  }
`;

const safeRemainderItemRemove = `
  mutation safeRemainderItemRemove(
    $_id: String
  ) {
    safeRemainderItemRemove(
      _id: $_id
    )
  }
`;

export default {
  transactionAdd,
  safeRemainderItemEdit,
  safeRemainderItemRemove
};
