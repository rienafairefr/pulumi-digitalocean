// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

import {Region} from "./index";

/**
 * Provides a bucket resource for Spaces, DigitalOcean's object storage product.
 * 
 * The [Spaces API](https://developers.digitalocean.com/documentation/spaces/) was
 * designed to be interoperable with Amazon's AWS S3 API. This allows users to
 * interact with the service while using the tools they already know. Spaces
 * mirrors S3's authentication framework and requests to Spaces require a key pair
 * similar to Amazon's Access ID and Secret Key.
 * 
 * The authentication requirement can be met by either setting the
 * `SPACES_ACCESS_KEY_ID` and `SPACES_SECRET_ACCESS_KEY` environment variables or
 * the provider's `spacesAccessId` and `spacesSecretKey` arguments to the
 * access ID and secret you generate via the DigitalOcean control panel. For
 * example:
 * 
 * 
 * For more information, See [An Introduction to DigitalOcean Spaces](https://www.digitalocean.com/community/tutorials/an-introduction-to-digitalocean-spaces)
 * 
 * ## Example Usage
 * 
 * ### Create a New Bucket
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as digitalocean from "@pulumi/digitalocean";
 * 
 * const foobar = new digitalocean.SpacesBucket("foobar", {
 *     region: "nyc3",
 * });
 * ```
 * 
 * ### Create a New Bucket With CORS Rules
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as digitalocean from "@pulumi/digitalocean";
 * 
 * const foobar = new digitalocean.SpacesBucket("foobar", {
 *     corsRules: [
 *         {
 *             allowedHeaders: ["*"],
 *             allowedMethods: ["GET"],
 *             allowedOrigins: ["*"],
 *             maxAgeSeconds: 3000,
 *         },
 *         {
 *             allowedHeaders: ["*"],
 *             allowedMethods: [
 *                 "PUT",
 *                 "POST",
 *                 "DELETE",
 *             ],
 *             allowedOrigins: ["https://www.example.com"],
 *             maxAgeSeconds: 3000,
 *         },
 *     ],
 *     region: "nyc3",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/spaces_bucket.html.markdown.
 */
export class SpacesBucket extends pulumi.CustomResource {
    /**
     * Get an existing SpacesBucket resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpacesBucketState, opts?: pulumi.CustomResourceOptions): SpacesBucket {
        return new SpacesBucket(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'digitalocean:index/spacesBucket:SpacesBucket';

    /**
     * Returns true if the given object is an instance of SpacesBucket.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpacesBucket {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpacesBucket.__pulumiType;
    }

    /**
     * Canned ACL applied on bucket creation (`private` or `public-read`)
     */
    public readonly acl!: pulumi.Output<string | undefined>;
    /**
     * The FQDN of the bucket (e.g. bucket-name.nyc3.digitaloceanspaces.com)
     */
    public /*out*/ readonly bucketDomainName!: pulumi.Output<string>;
    /**
     * A container holding a list of elements describing allowed methods for a specific origin.
     */
    public readonly corsRules!: pulumi.Output<outputs.SpacesBucketCorsRule[] | undefined>;
    /**
     * Unless `true`, the bucket will only be destroyed if empty (Defaults to `false`)
     */
    public readonly forceDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the bucket
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The region where the bucket resides (Defaults to `nyc3`)
     */
    public readonly region!: pulumi.Output<Region | undefined>;
    /**
     * The uniform resource name for the bucket
     */
    public /*out*/ readonly urn!: pulumi.Output<string>;

    /**
     * Create a SpacesBucket resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SpacesBucketArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpacesBucketArgs | SpacesBucketState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SpacesBucketState | undefined;
            inputs["acl"] = state ? state.acl : undefined;
            inputs["bucketDomainName"] = state ? state.bucketDomainName : undefined;
            inputs["corsRules"] = state ? state.corsRules : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["urn"] = state ? state.urn : undefined;
        } else {
            const args = argsOrState as SpacesBucketArgs | undefined;
            inputs["acl"] = args ? args.acl : undefined;
            inputs["corsRules"] = args ? args.corsRules : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["bucketDomainName"] = undefined /*out*/;
            inputs["urn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SpacesBucket.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SpacesBucket resources.
 */
export interface SpacesBucketState {
    /**
     * Canned ACL applied on bucket creation (`private` or `public-read`)
     */
    readonly acl?: pulumi.Input<string>;
    /**
     * The FQDN of the bucket (e.g. bucket-name.nyc3.digitaloceanspaces.com)
     */
    readonly bucketDomainName?: pulumi.Input<string>;
    /**
     * A container holding a list of elements describing allowed methods for a specific origin.
     */
    readonly corsRules?: pulumi.Input<pulumi.Input<inputs.SpacesBucketCorsRule>[]>;
    /**
     * Unless `true`, the bucket will only be destroyed if empty (Defaults to `false`)
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * The name of the bucket
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region where the bucket resides (Defaults to `nyc3`)
     */
    readonly region?: pulumi.Input<Region>;
    /**
     * The uniform resource name for the bucket
     */
    readonly urn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SpacesBucket resource.
 */
export interface SpacesBucketArgs {
    /**
     * Canned ACL applied on bucket creation (`private` or `public-read`)
     */
    readonly acl?: pulumi.Input<string>;
    /**
     * A container holding a list of elements describing allowed methods for a specific origin.
     */
    readonly corsRules?: pulumi.Input<pulumi.Input<inputs.SpacesBucketCorsRule>[]>;
    /**
     * Unless `true`, the bucket will only be destroyed if empty (Defaults to `false`)
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * The name of the bucket
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region where the bucket resides (Defaults to `nyc3`)
     */
    readonly region?: pulumi.Input<Region>;
}
