// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package digitalocean

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a DigitalOcean DNS record resource.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/record.html.markdown.
type DnsRecord struct {
	s *pulumi.ResourceState
}

// NewDnsRecord registers a new resource with the given unique name, arguments, and options.
func NewDnsRecord(ctx *pulumi.Context,
	name string, args *DnsRecordArgs, opts ...pulumi.ResourceOpt) (*DnsRecord, error) {
	if args == nil || args.Domain == nil {
		return nil, errors.New("missing required argument 'Domain'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	if args == nil || args.Value == nil {
		return nil, errors.New("missing required argument 'Value'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["domain"] = nil
		inputs["flags"] = nil
		inputs["name"] = nil
		inputs["port"] = nil
		inputs["priority"] = nil
		inputs["tag"] = nil
		inputs["ttl"] = nil
		inputs["type"] = nil
		inputs["value"] = nil
		inputs["weight"] = nil
	} else {
		inputs["domain"] = args.Domain
		inputs["flags"] = args.Flags
		inputs["name"] = args.Name
		inputs["port"] = args.Port
		inputs["priority"] = args.Priority
		inputs["tag"] = args.Tag
		inputs["ttl"] = args.Ttl
		inputs["type"] = args.Type
		inputs["value"] = args.Value
		inputs["weight"] = args.Weight
	}
	inputs["fqdn"] = nil
	s, err := ctx.RegisterResource("digitalocean:index/dnsRecord:DnsRecord", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DnsRecord{s: s}, nil
}

// GetDnsRecord gets an existing DnsRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDnsRecord(ctx *pulumi.Context,
	name string, id pulumi.ID, state *DnsRecordState, opts ...pulumi.ResourceOpt) (*DnsRecord, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["domain"] = state.Domain
		inputs["flags"] = state.Flags
		inputs["fqdn"] = state.Fqdn
		inputs["name"] = state.Name
		inputs["port"] = state.Port
		inputs["priority"] = state.Priority
		inputs["tag"] = state.Tag
		inputs["ttl"] = state.Ttl
		inputs["type"] = state.Type
		inputs["value"] = state.Value
		inputs["weight"] = state.Weight
	}
	s, err := ctx.ReadResource("digitalocean:index/dnsRecord:DnsRecord", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DnsRecord{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *DnsRecord) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *DnsRecord) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The domain to add the record to.
func (r *DnsRecord) Domain() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["domain"])
}

// The flags of the record. Only valid when type is `CAA`. Must be between 0 and 255.
func (r *DnsRecord) Flags() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["flags"])
}

// The FQDN of the record
func (r *DnsRecord) Fqdn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["fqdn"])
}

// The name of the record.
func (r *DnsRecord) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The port of the record. Only valid when type is `SRV`.  Must be between 1 and 65535.
func (r *DnsRecord) Port() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["port"])
}

// The priority of the record. Only valid when type is `MX` or `SRV`. Must be between 0 and 65535.
func (r *DnsRecord) Priority() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["priority"])
}

// The tag of the record. Only valid when type is `CAA`. Must be one of `issue`, `issuewild`, or `iodef`.
func (r *DnsRecord) Tag() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tag"])
}

// The time to live for the record, in seconds. Must be at least 0.
func (r *DnsRecord) Ttl() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["ttl"])
}

// The type of record. Must be one of `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, or `SRV`.
func (r *DnsRecord) Type() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["type"])
}

// The value of the record.
func (r *DnsRecord) Value() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["value"])
}

// The weight of the record. Only valid when type is `SRV`.  Must be between 0 and 65535.
func (r *DnsRecord) Weight() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["weight"])
}

// Input properties used for looking up and filtering DnsRecord resources.
type DnsRecordState struct {
	// The domain to add the record to.
	Domain interface{}
	// The flags of the record. Only valid when type is `CAA`. Must be between 0 and 255.
	Flags interface{}
	// The FQDN of the record
	Fqdn interface{}
	// The name of the record.
	Name interface{}
	// The port of the record. Only valid when type is `SRV`.  Must be between 1 and 65535.
	Port interface{}
	// The priority of the record. Only valid when type is `MX` or `SRV`. Must be between 0 and 65535.
	Priority interface{}
	// The tag of the record. Only valid when type is `CAA`. Must be one of `issue`, `issuewild`, or `iodef`.
	Tag interface{}
	// The time to live for the record, in seconds. Must be at least 0.
	Ttl interface{}
	// The type of record. Must be one of `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, or `SRV`.
	Type interface{}
	// The value of the record.
	Value interface{}
	// The weight of the record. Only valid when type is `SRV`.  Must be between 0 and 65535.
	Weight interface{}
}

// The set of arguments for constructing a DnsRecord resource.
type DnsRecordArgs struct {
	// The domain to add the record to.
	Domain interface{}
	// The flags of the record. Only valid when type is `CAA`. Must be between 0 and 255.
	Flags interface{}
	// The name of the record.
	Name interface{}
	// The port of the record. Only valid when type is `SRV`.  Must be between 1 and 65535.
	Port interface{}
	// The priority of the record. Only valid when type is `MX` or `SRV`. Must be between 0 and 65535.
	Priority interface{}
	// The tag of the record. Only valid when type is `CAA`. Must be one of `issue`, `issuewild`, or `iodef`.
	Tag interface{}
	// The time to live for the record, in seconds. Must be at least 0.
	Ttl interface{}
	// The type of record. Must be one of `A`, `AAAA`, `CAA`, `CNAME`, `MX`, `NS`, `TXT`, or `SRV`.
	Type interface{}
	// The value of the record.
	Value interface{}
	// The weight of the record. Only valid when type is `SRV`.  Must be between 0 and 65535.
	Weight interface{}
}
