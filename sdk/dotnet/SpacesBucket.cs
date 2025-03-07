// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Digitalocean
{
    /// <summary>
    /// Provides a bucket resource for Spaces, DigitalOcean's object storage product.
    /// 
    /// The [Spaces API](https://developers.digitalocean.com/documentation/spaces/) was
    /// designed to be interoperable with Amazon's AWS S3 API. This allows users to
    /// interact with the service while using the tools they already know. Spaces
    /// mirrors S3's authentication framework and requests to Spaces require a key pair
    /// similar to Amazon's Access ID and Secret Key.
    /// 
    /// The authentication requirement can be met by either setting the
    /// `SPACES_ACCESS_KEY_ID` and `SPACES_SECRET_ACCESS_KEY` environment variables or
    /// the provider's `spaces_access_id` and `spaces_secret_key` arguments to the
    /// access ID and secret you generate via the DigitalOcean control panel. For
    /// example:
    /// 
    /// 
    /// For more information, See [An Introduction to DigitalOcean Spaces](https://www.digitalocean.com/community/tutorials/an-introduction-to-digitalocean-spaces)
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/spaces_bucket.html.markdown.
    /// </summary>
    public partial class SpacesBucket : Pulumi.CustomResource
    {
        /// <summary>
        /// Canned ACL applied on bucket creation (`private` or `public-read`)
        /// </summary>
        [Output("acl")]
        public Output<string?> Acl { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the bucket (e.g. bucket-name.nyc3.digitaloceanspaces.com)
        /// </summary>
        [Output("bucketDomainName")]
        public Output<string> BucketDomainName { get; private set; } = null!;

        /// <summary>
        /// A container holding a list of elements describing allowed methods for a specific origin.
        /// </summary>
        [Output("corsRules")]
        public Output<ImmutableArray<Outputs.SpacesBucketCorsRules>> CorsRules { get; private set; } = null!;

        /// <summary>
        /// Unless `true`, the bucket will only be destroyed if empty (Defaults to `false`)
        /// </summary>
        [Output("forceDestroy")]
        public Output<bool?> ForceDestroy { get; private set; } = null!;

        /// <summary>
        /// The name of the bucket
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The region where the bucket resides (Defaults to `nyc3`)
        /// </summary>
        [Output("region")]
        public Output<string?> Region { get; private set; } = null!;

        /// <summary>
        /// The uniform resource name for the bucket
        /// </summary>
        [Output("urn")]
        public Output<string> Urn { get; private set; } = null!;


        /// <summary>
        /// Create a SpacesBucket resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SpacesBucket(string name, SpacesBucketArgs? args = null, CustomResourceOptions? options = null)
            : base("digitalocean:index/spacesBucket:SpacesBucket", name, args, MakeResourceOptions(options, ""))
        {
        }

        private SpacesBucket(string name, Input<string> id, SpacesBucketState? state = null, CustomResourceOptions? options = null)
            : base("digitalocean:index/spacesBucket:SpacesBucket", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SpacesBucket resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SpacesBucket Get(string name, Input<string> id, SpacesBucketState? state = null, CustomResourceOptions? options = null)
        {
            return new SpacesBucket(name, id, state, options);
        }
    }

    public sealed class SpacesBucketArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Canned ACL applied on bucket creation (`private` or `public-read`)
        /// </summary>
        [Input("acl")]
        public Input<string>? Acl { get; set; }

        [Input("corsRules")]
        private InputList<Inputs.SpacesBucketCorsRulesArgs>? _corsRules;

        /// <summary>
        /// A container holding a list of elements describing allowed methods for a specific origin.
        /// </summary>
        public InputList<Inputs.SpacesBucketCorsRulesArgs> CorsRules
        {
            get => _corsRules ?? (_corsRules = new InputList<Inputs.SpacesBucketCorsRulesArgs>());
            set => _corsRules = value;
        }

        /// <summary>
        /// Unless `true`, the bucket will only be destroyed if empty (Defaults to `false`)
        /// </summary>
        [Input("forceDestroy")]
        public Input<bool>? ForceDestroy { get; set; }

        /// <summary>
        /// The name of the bucket
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The region where the bucket resides (Defaults to `nyc3`)
        /// </summary>
        [Input("region")]
        public Input<string>? Region { get; set; }

        public SpacesBucketArgs()
        {
        }
    }

    public sealed class SpacesBucketState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Canned ACL applied on bucket creation (`private` or `public-read`)
        /// </summary>
        [Input("acl")]
        public Input<string>? Acl { get; set; }

        /// <summary>
        /// The FQDN of the bucket (e.g. bucket-name.nyc3.digitaloceanspaces.com)
        /// </summary>
        [Input("bucketDomainName")]
        public Input<string>? BucketDomainName { get; set; }

        [Input("corsRules")]
        private InputList<Inputs.SpacesBucketCorsRulesGetArgs>? _corsRules;

        /// <summary>
        /// A container holding a list of elements describing allowed methods for a specific origin.
        /// </summary>
        public InputList<Inputs.SpacesBucketCorsRulesGetArgs> CorsRules
        {
            get => _corsRules ?? (_corsRules = new InputList<Inputs.SpacesBucketCorsRulesGetArgs>());
            set => _corsRules = value;
        }

        /// <summary>
        /// Unless `true`, the bucket will only be destroyed if empty (Defaults to `false`)
        /// </summary>
        [Input("forceDestroy")]
        public Input<bool>? ForceDestroy { get; set; }

        /// <summary>
        /// The name of the bucket
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The region where the bucket resides (Defaults to `nyc3`)
        /// </summary>
        [Input("region")]
        public Input<string>? Region { get; set; }

        /// <summary>
        /// The uniform resource name for the bucket
        /// </summary>
        [Input("urn")]
        public Input<string>? Urn { get; set; }

        public SpacesBucketState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class SpacesBucketCorsRulesArgs : Pulumi.ResourceArgs
    {
        [Input("allowedHeaders")]
        private InputList<string>? _allowedHeaders;

        /// <summary>
        /// A list of headers that will be included in the CORS preflight request's `Access-Control-Request-Headers`. A header may contain one wildcard (e.g. `x-amz-*`).
        /// </summary>
        public InputList<string> AllowedHeaders
        {
            get => _allowedHeaders ?? (_allowedHeaders = new InputList<string>());
            set => _allowedHeaders = value;
        }

        [Input("allowedMethods", required: true)]
        private InputList<string>? _allowedMethods;

        /// <summary>
        /// A list of HTTP methods (e.g. `GET`) which are allowed from the specified origin.
        /// </summary>
        public InputList<string> AllowedMethods
        {
            get => _allowedMethods ?? (_allowedMethods = new InputList<string>());
            set => _allowedMethods = value;
        }

        [Input("allowedOrigins", required: true)]
        private InputList<string>? _allowedOrigins;

        /// <summary>
        /// A list of hosts from which requests using the specified methods are allowed. A host may contain one wildcard (e.g. http://*.example.com).
        /// </summary>
        public InputList<string> AllowedOrigins
        {
            get => _allowedOrigins ?? (_allowedOrigins = new InputList<string>());
            set => _allowedOrigins = value;
        }

        /// <summary>
        /// The time in seconds that browser can cache the response for a preflight request.
        /// </summary>
        [Input("maxAgeSeconds")]
        public Input<int>? MaxAgeSeconds { get; set; }

        public SpacesBucketCorsRulesArgs()
        {
        }
    }

    public sealed class SpacesBucketCorsRulesGetArgs : Pulumi.ResourceArgs
    {
        [Input("allowedHeaders")]
        private InputList<string>? _allowedHeaders;

        /// <summary>
        /// A list of headers that will be included in the CORS preflight request's `Access-Control-Request-Headers`. A header may contain one wildcard (e.g. `x-amz-*`).
        /// </summary>
        public InputList<string> AllowedHeaders
        {
            get => _allowedHeaders ?? (_allowedHeaders = new InputList<string>());
            set => _allowedHeaders = value;
        }

        [Input("allowedMethods", required: true)]
        private InputList<string>? _allowedMethods;

        /// <summary>
        /// A list of HTTP methods (e.g. `GET`) which are allowed from the specified origin.
        /// </summary>
        public InputList<string> AllowedMethods
        {
            get => _allowedMethods ?? (_allowedMethods = new InputList<string>());
            set => _allowedMethods = value;
        }

        [Input("allowedOrigins", required: true)]
        private InputList<string>? _allowedOrigins;

        /// <summary>
        /// A list of hosts from which requests using the specified methods are allowed. A host may contain one wildcard (e.g. http://*.example.com).
        /// </summary>
        public InputList<string> AllowedOrigins
        {
            get => _allowedOrigins ?? (_allowedOrigins = new InputList<string>());
            set => _allowedOrigins = value;
        }

        /// <summary>
        /// The time in seconds that browser can cache the response for a preflight request.
        /// </summary>
        [Input("maxAgeSeconds")]
        public Input<int>? MaxAgeSeconds { get; set; }

        public SpacesBucketCorsRulesGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class SpacesBucketCorsRules
    {
        /// <summary>
        /// A list of headers that will be included in the CORS preflight request's `Access-Control-Request-Headers`. A header may contain one wildcard (e.g. `x-amz-*`).
        /// </summary>
        public readonly ImmutableArray<string> AllowedHeaders;
        /// <summary>
        /// A list of HTTP methods (e.g. `GET`) which are allowed from the specified origin.
        /// </summary>
        public readonly ImmutableArray<string> AllowedMethods;
        /// <summary>
        /// A list of hosts from which requests using the specified methods are allowed. A host may contain one wildcard (e.g. http://*.example.com).
        /// </summary>
        public readonly ImmutableArray<string> AllowedOrigins;
        /// <summary>
        /// The time in seconds that browser can cache the response for a preflight request.
        /// </summary>
        public readonly int? MaxAgeSeconds;

        [OutputConstructor]
        private SpacesBucketCorsRules(
            ImmutableArray<string> allowedHeaders,
            ImmutableArray<string> allowedMethods,
            ImmutableArray<string> allowedOrigins,
            int? maxAgeSeconds)
        {
            AllowedHeaders = allowedHeaders;
            AllowedMethods = allowedMethods;
            AllowedOrigins = allowedOrigins;
            MaxAgeSeconds = maxAgeSeconds;
        }
    }
    }
}
