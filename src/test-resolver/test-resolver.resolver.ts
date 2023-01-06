import {Query, Resolver} from '@nestjs/graphql';

@Resolver("Test")
export class TestResolverResolver {

    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }

    @Query(() => String)
    sayHello2(): string {
        return 'Hello World!2';
    }
}
