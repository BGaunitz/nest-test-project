import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {TestResolverResolver} from './test-resolver/test-resolver.resolver';
import {ScheduleModule} from "@nestjs/schedule";
import {CronHandler} from "./cron-handler/cron-handler";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: process.cwd() + '/src/schema.gql',
        }),
        ScheduleModule.forRoot()
    ],
    controllers: [AppController],
    providers: [
        AppService,
        TestResolverResolver,
        CronHandler
    ],
})
export class AppModule {
}
