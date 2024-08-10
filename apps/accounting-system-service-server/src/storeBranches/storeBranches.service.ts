import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreBranchesServiceBase } from "./base/storeBranches.service.base";

@Injectable()
export class StoreBranchesService extends StoreBranchesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
