import {Injectable, Logger} from "@nestjs/common";
import {Cron, CronExpression} from "@nestjs/schedule";

@Injectable()
export class CronHandler {
    private readonly logger = new Logger(CronHandler.name);

    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron() {
        this.logger.log("I am running!")
    }
}
