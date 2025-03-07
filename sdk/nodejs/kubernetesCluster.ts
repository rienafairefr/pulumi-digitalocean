// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

import {Region} from "./index";

/**
 * Provides a DigitalOcean Kubernetes cluster resource. This can be used to create, delete, and modify clusters. For more information see the [official documentation](https://www.digitalocean.com/docs/kubernetes/).
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/kubernetes_cluster.html.markdown.
 */
export class KubernetesCluster extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterState, opts?: pulumi.CustomResourceOptions): KubernetesCluster {
        return new KubernetesCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'digitalocean:index/kubernetesCluster:KubernetesCluster';

    /**
     * Returns true if the given object is an instance of KubernetesCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesCluster.__pulumiType;
    }

    /**
     * The range of IP addresses in the overlay network of the Kubernetes cluster.
     */
    public /*out*/ readonly clusterSubnet!: pulumi.Output<string>;
    /**
     * The date and time when the Kubernetes cluster was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The base URL of the API server on the Kubernetes master node.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The public IPv4 address of the Kubernetes master node.
     */
    public /*out*/ readonly ipv4Address!: pulumi.Output<string>;
    public /*out*/ readonly kubeConfigs!: pulumi.Output<outputs.KubernetesClusterKubeConfig[]>;
    /**
     * A name for the Kubernetes cluster.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A block representing the cluster's default node pool. Additional node pools may be added to the cluster using the `digitalocean..KubernetesNodePool` resource. The following arguments may be specified:
     * - `name` - (Required) A name for the node pool.
     * - `size` - (Required) The slug identifier for the type of Droplet to be used as workers in the node pool.
     * - `nodeCount` - (Optional) The number of Droplet instances in the node pool. If auto-scaling is enabled, this should only be set if the desired result is to explicitly reset the number of nodes to this value. If auto-scaling is enabled, and the node count is outside of the given min/max range, it will use the min nodes value.
     * - `autoScale` - (Optional) Enable auto-scaling of the number of nodes in the node pool within the given min/max range.
     * - `minNodes` - (Optional) If auto-scaling is enabled, this represents the minimum number of nodes that the node pool can be scaled down to.
     * - `maxNodes` - (Optional) If auto-scaling is enabled, this represents the maximum number of nodes that the node pool can be scaled up to.
     * - `tags` - (Optional) A list of tag names to be applied to the Kubernetes cluster.
     */
    public readonly nodePool!: pulumi.Output<outputs.KubernetesClusterNodePool>;
    /**
     * The slug identifier for the region where the Kubernetes cluster will be created.
     */
    public readonly region!: pulumi.Output<Region>;
    /**
     * The range of assignable IP addresses for services running in the Kubernetes cluster.
     */
    public /*out*/ readonly serviceSubnet!: pulumi.Output<string>;
    /**
     * A string indicating the current status of the cluster. Potential values include running, provisioning, and errored.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * A list of tag names to be applied to the Kubernetes cluster.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The date and time when the Kubernetes cluster was last updated.
     * * `kube_config.0` - A representation of the Kubernetes cluster's kubeconfig with the following attributes:
     * - `rawConfig` - The full contents of the Kubernetes cluster's kubeconfig file.
     * - `host` - The URL of the API server on the Kubernetes master node.
     * - `clusterCaCertificate` - The base64 encoded public certificate for the cluster's certificate authority.
     * - `token` - The DigitalOcean API access token used by clients to access the cluster.
     * - `clientKey` - The base64 encoded private key used by clients to access the cluster. Only available if token authentication is not supported on your cluster.
     * - `clientCertificate` - The base64 encoded public certificate used by clients to access the cluster. Only available if token authentication is not supported on your cluster.
     * - `expiresAt` - The date and time when the credentials will expire and need to be regenerated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The slug identifier for the version of Kubernetes used for the cluster. Use [doctl](https://github.com/digitalocean/doctl) to find the available versions `doctl kubernetes options versions`. (**Note:** A cluster may only be upgraded to newer versions in-place. If the version is decreased, a new resource will be created.)
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a KubernetesCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterArgs | KubernetesClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as KubernetesClusterState | undefined;
            inputs["clusterSubnet"] = state ? state.clusterSubnet : undefined;
            inputs["createdAt"] = state ? state.createdAt : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["ipv4Address"] = state ? state.ipv4Address : undefined;
            inputs["kubeConfigs"] = state ? state.kubeConfigs : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodePool"] = state ? state.nodePool : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["serviceSubnet"] = state ? state.serviceSubnet : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["updatedAt"] = state ? state.updatedAt : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as KubernetesClusterArgs | undefined;
            if (!args || args.nodePool === undefined) {
                throw new Error("Missing required property 'nodePool'");
            }
            if (!args || args.region === undefined) {
                throw new Error("Missing required property 'region'");
            }
            if (!args || args.version === undefined) {
                throw new Error("Missing required property 'version'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["nodePool"] = args ? args.nodePool : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["clusterSubnet"] = undefined /*out*/;
            inputs["createdAt"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["ipv4Address"] = undefined /*out*/;
            inputs["kubeConfigs"] = undefined /*out*/;
            inputs["serviceSubnet"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(KubernetesCluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KubernetesCluster resources.
 */
export interface KubernetesClusterState {
    /**
     * The range of IP addresses in the overlay network of the Kubernetes cluster.
     */
    readonly clusterSubnet?: pulumi.Input<string>;
    /**
     * The date and time when the Kubernetes cluster was created.
     */
    readonly createdAt?: pulumi.Input<string>;
    /**
     * The base URL of the API server on the Kubernetes master node.
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * The public IPv4 address of the Kubernetes master node.
     */
    readonly ipv4Address?: pulumi.Input<string>;
    readonly kubeConfigs?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterKubeConfig>[]>;
    /**
     * A name for the Kubernetes cluster.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A block representing the cluster's default node pool. Additional node pools may be added to the cluster using the `digitalocean..KubernetesNodePool` resource. The following arguments may be specified:
     * - `name` - (Required) A name for the node pool.
     * - `size` - (Required) The slug identifier for the type of Droplet to be used as workers in the node pool.
     * - `nodeCount` - (Optional) The number of Droplet instances in the node pool. If auto-scaling is enabled, this should only be set if the desired result is to explicitly reset the number of nodes to this value. If auto-scaling is enabled, and the node count is outside of the given min/max range, it will use the min nodes value.
     * - `autoScale` - (Optional) Enable auto-scaling of the number of nodes in the node pool within the given min/max range.
     * - `minNodes` - (Optional) If auto-scaling is enabled, this represents the minimum number of nodes that the node pool can be scaled down to.
     * - `maxNodes` - (Optional) If auto-scaling is enabled, this represents the maximum number of nodes that the node pool can be scaled up to.
     * - `tags` - (Optional) A list of tag names to be applied to the Kubernetes cluster.
     */
    readonly nodePool?: pulumi.Input<inputs.KubernetesClusterNodePool>;
    /**
     * The slug identifier for the region where the Kubernetes cluster will be created.
     */
    readonly region?: pulumi.Input<Region>;
    /**
     * The range of assignable IP addresses for services running in the Kubernetes cluster.
     */
    readonly serviceSubnet?: pulumi.Input<string>;
    /**
     * A string indicating the current status of the cluster. Potential values include running, provisioning, and errored.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * A list of tag names to be applied to the Kubernetes cluster.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The date and time when the Kubernetes cluster was last updated.
     * * `kube_config.0` - A representation of the Kubernetes cluster's kubeconfig with the following attributes:
     * - `rawConfig` - The full contents of the Kubernetes cluster's kubeconfig file.
     * - `host` - The URL of the API server on the Kubernetes master node.
     * - `clusterCaCertificate` - The base64 encoded public certificate for the cluster's certificate authority.
     * - `token` - The DigitalOcean API access token used by clients to access the cluster.
     * - `clientKey` - The base64 encoded private key used by clients to access the cluster. Only available if token authentication is not supported on your cluster.
     * - `clientCertificate` - The base64 encoded public certificate used by clients to access the cluster. Only available if token authentication is not supported on your cluster.
     * - `expiresAt` - The date and time when the credentials will expire and need to be regenerated.
     */
    readonly updatedAt?: pulumi.Input<string>;
    /**
     * The slug identifier for the version of Kubernetes used for the cluster. Use [doctl](https://github.com/digitalocean/doctl) to find the available versions `doctl kubernetes options versions`. (**Note:** A cluster may only be upgraded to newer versions in-place. If the version is decreased, a new resource will be created.)
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KubernetesCluster resource.
 */
export interface KubernetesClusterArgs {
    /**
     * A name for the Kubernetes cluster.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A block representing the cluster's default node pool. Additional node pools may be added to the cluster using the `digitalocean..KubernetesNodePool` resource. The following arguments may be specified:
     * - `name` - (Required) A name for the node pool.
     * - `size` - (Required) The slug identifier for the type of Droplet to be used as workers in the node pool.
     * - `nodeCount` - (Optional) The number of Droplet instances in the node pool. If auto-scaling is enabled, this should only be set if the desired result is to explicitly reset the number of nodes to this value. If auto-scaling is enabled, and the node count is outside of the given min/max range, it will use the min nodes value.
     * - `autoScale` - (Optional) Enable auto-scaling of the number of nodes in the node pool within the given min/max range.
     * - `minNodes` - (Optional) If auto-scaling is enabled, this represents the minimum number of nodes that the node pool can be scaled down to.
     * - `maxNodes` - (Optional) If auto-scaling is enabled, this represents the maximum number of nodes that the node pool can be scaled up to.
     * - `tags` - (Optional) A list of tag names to be applied to the Kubernetes cluster.
     */
    readonly nodePool: pulumi.Input<inputs.KubernetesClusterNodePool>;
    /**
     * The slug identifier for the region where the Kubernetes cluster will be created.
     */
    readonly region: pulumi.Input<Region>;
    /**
     * A list of tag names to be applied to the Kubernetes cluster.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The slug identifier for the version of Kubernetes used for the cluster. Use [doctl](https://github.com/digitalocean/doctl) to find the available versions `doctl kubernetes options versions`. (**Note:** A cluster may only be upgraded to newer versions in-place. If the version is decreased, a new resource will be created.)
     */
    readonly version: pulumi.Input<string>;
}
