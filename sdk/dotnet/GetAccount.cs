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
        /// Get information on your DigitalOcean account.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/d/account.html.markdown.
        /// </summary>
        public static Task<GetAccountResult> GetAccount(InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAccountResult>("digitalocean:index/getAccount:getAccount", null, options.WithVersion());
    }

    [OutputType]
    public sealed class GetAccountResult
    {
        public readonly int DropletLimit;
        public readonly string Email;
        public readonly bool EmailVerified;
        public readonly int FloatingIpLimit;
        public readonly string Status;
        public readonly string StatusMessage;
        public readonly string Uuid;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetAccountResult(
            int dropletLimit,
            string email,
            bool emailVerified,
            int floatingIpLimit,
            string status,
            string statusMessage,
            string uuid,
            string id)
        {
            DropletLimit = dropletLimit;
            Email = email;
            EmailVerified = emailVerified;
            FloatingIpLimit = floatingIpLimit;
            Status = status;
            StatusMessage = statusMessage;
            Uuid = uuid;
            Id = id;
        }
    }
}
