import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { S3EventSourceProps } from 'aws-cdk-lib/aws-lambda-event-sources';
/**
 * @summary The properties for the S3ToLambda class.
 */
export interface S3ToLambdaProps {
    /**
     * Existing instance of Lambda Function object, providing both this and `lambdaFunctionProps` will cause an error.
     *
     * @default - None
     */
    readonly existingLambdaObj?: lambda.Function;
    /**
     * Optional user provided props to override the default props for the Lambda function.
     *
     * @default - Default props are used
     */
    readonly lambdaFunctionProps?: lambda.FunctionProps;
    /**
     * Existing instance of S3 Bucket object, providing both this and `bucketProps` will cause an error.
     *
     * @default - None
     */
    readonly existingBucketObj?: s3.Bucket;
    /**
     * Optional user provided props to override the default props for the S3 Bucket.
     *
     * @default - Default props are used
     */
    readonly bucketProps?: s3.BucketProps;
    /**
     * Optional user provided props to override the default props
     *
     * @default - Default props are used
     */
    readonly s3EventSourceProps?: S3EventSourceProps;
    /**
     * Optional user provided props to override the default props for the S3 Logging Bucket.
     *
     * @default - Default props are used
     */
    readonly loggingBucketProps?: s3.BucketProps;
    /**
     * Whether to turn on Access Logs for the S3 bucket with the associated storage costs.
     * Enabling Access Logging is a best practice.
     *
     * @default - true
     */
    readonly logS3AccessLogs?: boolean;
}
export declare class S3ToLambda extends Construct {
    readonly s3Bucket?: s3.Bucket;
    readonly s3LoggingBucket?: s3.Bucket;
    /**
     * @summary Constructs a new instance of the S3ToLambda class.
     * @param {cdk.App} scope - represents the scope for all the resources.
     * @param {string} id - this is a a scope-unique id.
     * @param {S3ToLambdaProps} props - user provided props for the construct
     * @since 0.8.0
     * @access public
     */
    constructor(scope: Construct, id: string, props: S3ToLambdaProps);
}
