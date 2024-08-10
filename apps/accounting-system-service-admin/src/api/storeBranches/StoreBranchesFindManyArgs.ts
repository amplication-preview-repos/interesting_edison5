import { StoreBranchesWhereInput } from "./StoreBranchesWhereInput";
import { StoreBranchesOrderByInput } from "./StoreBranchesOrderByInput";

export type StoreBranchesFindManyArgs = {
  where?: StoreBranchesWhereInput;
  orderBy?: Array<StoreBranchesOrderByInput>;
  skip?: number;
  take?: number;
};
