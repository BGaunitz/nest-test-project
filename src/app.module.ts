import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { TestResolverResolver } from './test-resolver/test-resolver.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: process.cwd() + '/src/schema.gql',
        }),
    ],
    controllers: [AppController],
    providers: [AppService, TestResolverResolver],
})
export class AppModule {
}
