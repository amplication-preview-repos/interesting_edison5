import { Module } from "@nestjs/common";
import { StoreBranchesModuleBase } from "./base/storeBranches.module.base";
import { StoreBranchesService } from "./storeBranches.service";
import { StoreBranchesController } from "./storeBranches.controller";
import { StoreBranchesResolver } from "./storeBranches.resolver";

@Module({
  imports: [StoreBranchesModuleBase],
  controllers: [StoreBranchesController],
  providers: [StoreBranchesService, StoreBranchesResolver],
  exports: [StoreBranchesService],
})
export class StoreBranchesModule {}
