// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

import {RecordType} from "./index";

/**
 * Provides a DigitalOcean DNS record resource.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/record.html.markdown.
 */
export class DnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing DnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsRecordState, opts?: pulumi.CustomResourceOptions): DnsRecord {
        return new DnsRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'digitalocean:index/dnsRecord:DnsRecord';

    /**
     * Returns true if the given object is an instance of DnsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsRecord.__pulumiType;
    }

    /**
     * The domain to add the record to.
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * The flags of the record. Only valid when type is `CAA`. Must be between 0 and 255.
     */
    public readonly flags!: pulumi.Output<number | undefined>;
    /**
     * The FQDN of the record
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * The name of the record.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The port of the record. Only valid when type is `SRV`.  Must be between 1 and 65535.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The priority of the record. Only valid when type is `MX` or `SRV`. Must be between 0 and 65535.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The tag of the record. Only valid when type is `CAA`. Must be one of `issue`, `issuewild`, or `iodef`.
     */
    public readonly tag!: pulumi.Output<string | undefined>;
    /**
     * The time to live for the record, in seconds. Must be at least 0.
     */
    public readonly ttl!: pulumi.Output<number>;
    /**
     * The type of record. Must be one of `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, or `SRV`.
     */
    public readonly type!: pulumi.Output<RecordType>;
    /**
     * The value of the record.
     */
    public readonly value!: pulumi.Output<string>;
    /**
     * The weight of the record. Only valid when type is `SRV`.  Must be between 0 and 65535.
     */
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a DnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnsRecordArgs | DnsRecordState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DnsRecordState | undefined;
            inputs["domain"] = state ? state.domain : undefined;
            inputs["flags"] = state ? state.flags : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["tag"] = state ? state.tag : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["value"] = state ? state.value : undefined;
            inputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as DnsRecordArgs | undefined;
            if (!args || args.domain === undefined) {
                throw new Error("Missing required property 'domain'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            if (!args || args.value === undefined) {
                throw new Error("Missing required property 'value'");
            }
            inputs["domain"] = args ? args.domain : undefined;
            inputs["flags"] = args ? args.flags : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["tag"] = args ? args.tag : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["value"] = args ? args.value : undefined;
            inputs["weight"] = args ? args.weight : undefined;
            inputs["fqdn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DnsRecord.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DnsRecord resources.
 */
export interface DnsRecordState {
    /**
     * The domain to add the record to.
     */
    readonly domain?: pulumi.Input<string>;
    /**
     * The flags of the record. Only valid when type is `CAA`. Must be between 0 and 255.
     */
    readonly flags?: pulumi.Input<number>;
    /**
     * The FQDN of the record
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * The name of the record.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The port of the record. Only valid when type is `SRV`.  Must be between 1 and 65535.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The priority of the record. Only valid when type is `MX` or `SRV`. Must be between 0 and 65535.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The tag of the record. Only valid when type is `CAA`. Must be one of `issue`, `issuewild`, or `iodef`.
     */
    readonly tag?: pulumi.Input<string>;
    /**
     * The time to live for the record, in seconds. Must be at least 0.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The type of record. Must be one of `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, or `SRV`.
     */
    readonly type?: pulumi.Input<RecordType>;
    /**
     * The value of the record.
     */
    readonly value?: pulumi.Input<string>;
    /**
     * The weight of the record. Only valid when type is `SRV`.  Must be between 0 and 65535.
     */
    readonly weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DnsRecord resource.
 */
export interface DnsRecordArgs {
    /**
     * The domain to add the record to.
     */
    readonly domain: pulumi.Input<string>;
    /**
     * The flags of the record. Only valid when type is `CAA`. Must be between 0 and 255.
     */
    readonly flags?: pulumi.Input<number>;
    /**
     * The name of the record.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The port of the record. Only valid when type is `SRV`.  Must be between 1 and 65535.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The priority of the record. Only valid when type is `MX` or `SRV`. Must be between 0 and 65535.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The tag of the record. Only valid when type is `CAA`. Must be one of `issue`, `issuewild`, or `iodef`.
     */
    readonly tag?: pulumi.Input<string>;
    /**
     * The time to live for the record, in seconds. Must be at least 0.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The type of record. Must be one of `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, or `SRV`.
     */
    readonly type: pulumi.Input<RecordType>;
    /**
     * The value of the record.
     */
    readonly value: pulumi.Input<string>;
    /**
     * The weight of the record. Only valid when type is `SRV`.  Must be between 0 and 65535.
     */
    readonly weight?: pulumi.Input<number>;
}
