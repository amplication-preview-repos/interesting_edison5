import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoreBranchesService } from "./storeBranches.service";
import { StoreBranchesControllerBase } from "./base/storeBranches.controller.base";

@swagger.ApiTags("storeBranches")
@common.Controller("storeBranches")
export class StoreBranchesController extends StoreBranchesControllerBase {
  constructor(protected readonly service: StoreBranchesService) {
    super(service);
  }
}
