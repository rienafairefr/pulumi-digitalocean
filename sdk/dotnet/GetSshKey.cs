// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Digitalocean
{
    public static partial class Invokes
    {
        /// <summary>
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/d/ssh_key.html.markdown.
        /// </summary>
        public static Task<GetSshKeyResult> GetSshKey(GetSshKeyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSshKeyResult>("digitalocean:index/getSshKey:getSshKey", args, options.WithVersion());
    }

    public sealed class GetSshKeyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the ssh key.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        public GetSshKeyArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetSshKeyResult
    {
        public readonly string Fingerprint;
        public readonly string Name;
        public readonly string PublicKey;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetSshKeyResult(
            string fingerprint,
            string name,
            string publicKey,
            string id)
        {
            Fingerprint = fingerprint;
            Name = name;
            PublicKey = publicKey;
            Id = id;
        }
    }
}
