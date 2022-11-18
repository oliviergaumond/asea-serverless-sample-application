#!/usr/bin/env node

/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import "source-map-support/register";
import * as cdk from 'aws-cdk-lib';
import { SEASampleAppStack } from "../lib/sea-sample-app-stack";


const app = new cdk.App();

const Prefix = app.node.tryGetContext("applicationPrefixName");

new SEASampleAppStack(app, `${Prefix}Stack`, {
    env: {
      account: "968718451842",
      region: "ca-central-1",
    },
    vpcId: "vpc-039d9e918821e4b27",
    appSubnetIds: ["subnet-001dffdc812465a34", "subnet-09ec3b32aa239bf0a"],
    appSecurityGroup: "sg-0be13d2ad6f3bb80c",
    dataSubnetIds: ["subnet-0f2ba3ec8eccddf0b", "subnet-0ca3b089df9c5b812"],
    dataSecurityGroup: "sg-088403cc6c59ca368",
    tags: {
      Application: "Sample Demo",
    },
    prefix: Prefix,
    dbName: "sampleappdb",
    staticSiteBuildPath: "sample-application/web/dist",
    apiContainerPath: "../sample-application/api",
    webSecurityGroup: "sg-05b7d1ac363a3baef",
    albListenerArn: "arn:aws:elasticloadbalancing:ca-central-1:968718451842:listener/app/Core-mydevacct1-alb/a52d119cb8775847/2ec58eb24965eb66",
    appDnsName: "api-eba.pub.og-cloud.ca"
  });