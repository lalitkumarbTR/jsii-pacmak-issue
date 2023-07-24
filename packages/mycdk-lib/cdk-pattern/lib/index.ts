import { CodeStarConnections, ProviderType } from '@aws-sdk/client-codestar-connections';
import { STS } from '@aws-sdk/client-sts';

/**
 * Gets all GitHub connections available in the given region.
 *
 * @param region The region to check for GitHub connections.
 */
export interface GithubConnection {
    // readonly connectionArn: string;
    readonly connectionName: string;
}
export async function getGithubConnections(region: string): Promise<string>{
    const client = new CodeStarConnections({ region: region });
    const connections = await client.listConnections({ ProviderTypeFilter: ProviderType.GITHUB });
    const output: string[] = [];
    for (const connection of connections.Connections || []) {
        // output.push({ connectionArn: connection.ConnectionArn!, connectionName: connection.ConnectionName! });
        output.push(connection.ConnectionName!);
    }
    return "hello";
}

/**
 * Gets the current account.
 */
export async function getCurrentAccount(): Promise<string> {
    const client = new STS({ region: 'us-east-1' });
    const response = await client.getCallerIdentity({});
    return response.Account!;
}
