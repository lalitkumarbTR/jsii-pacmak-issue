/**
 * Gets all GitHub connections available in the given region.
 *
 * @param region The region to check for GitHub connections.
 */
export interface GithubConnection {
    readonly connectionName: string;
}
export declare function getGithubConnections(region: string): Promise<string>;
/**
 * Gets the current account.
 */
export declare function getCurrentAccount(): Promise<string>;
