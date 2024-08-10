import { StoreBranches as TStoreBranches } from "../api/storeBranches/StoreBranches";

export const STOREBRANCHES_TITLE_FIELD = "id";

export const StoreBranchesTitle = (record: TStoreBranches): string => {
  return record.id?.toString() || String(record.id);
};
