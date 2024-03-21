import * as cdk from 'aws-cdk-lib';
import { AssetStorage } from './storage';

export class ApplicationStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new AssetStorage(this, 'Storage');
  }
}
