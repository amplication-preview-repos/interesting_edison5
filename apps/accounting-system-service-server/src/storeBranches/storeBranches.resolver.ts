import * as graphql from "@nestjs/graphql";
import { StoreBranchesResolverBase } from "./base/storeBranches.resolver.base";
import { StoreBranches } from "./base/StoreBranches";
import { StoreBranchesService } from "./storeBranches.service";

@graphql.Resolver(() => StoreBranches)
export class StoreBranchesResolver extends StoreBranchesResolverBase {
  constructor(protected readonly service: StoreBranchesService) {
    super(service);
  }
}
