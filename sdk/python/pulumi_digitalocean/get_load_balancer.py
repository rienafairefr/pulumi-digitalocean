# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class GetLoadBalancerResult:
    """
    A collection of values returned by getLoadBalancer.
    """
    def __init__(__self__, algorithm=None, droplet_ids=None, droplet_tag=None, enable_proxy_protocol=None, forwarding_rules=None, healthcheck=None, ip=None, name=None, redirect_http_to_https=None, region=None, status=None, sticky_sessions=None, urn=None, id=None):
        if algorithm and not isinstance(algorithm, str):
            raise TypeError("Expected argument 'algorithm' to be a str")
        __self__.algorithm = algorithm
        if droplet_ids and not isinstance(droplet_ids, list):
            raise TypeError("Expected argument 'droplet_ids' to be a list")
        __self__.droplet_ids = droplet_ids
        if droplet_tag and not isinstance(droplet_tag, str):
            raise TypeError("Expected argument 'droplet_tag' to be a str")
        __self__.droplet_tag = droplet_tag
        if enable_proxy_protocol and not isinstance(enable_proxy_protocol, bool):
            raise TypeError("Expected argument 'enable_proxy_protocol' to be a bool")
        __self__.enable_proxy_protocol = enable_proxy_protocol
        if forwarding_rules and not isinstance(forwarding_rules, list):
            raise TypeError("Expected argument 'forwarding_rules' to be a list")
        __self__.forwarding_rules = forwarding_rules
        if healthcheck and not isinstance(healthcheck, dict):
            raise TypeError("Expected argument 'healthcheck' to be a dict")
        __self__.healthcheck = healthcheck
        if ip and not isinstance(ip, str):
            raise TypeError("Expected argument 'ip' to be a str")
        __self__.ip = ip
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if redirect_http_to_https and not isinstance(redirect_http_to_https, bool):
            raise TypeError("Expected argument 'redirect_http_to_https' to be a bool")
        __self__.redirect_http_to_https = redirect_http_to_https
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        if sticky_sessions and not isinstance(sticky_sessions, dict):
            raise TypeError("Expected argument 'sticky_sessions' to be a dict")
        __self__.sticky_sessions = sticky_sessions
        if urn and not isinstance(urn, str):
            raise TypeError("Expected argument 'urn' to be a str")
        __self__.urn = urn
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_load_balancer(name=None,opts=None):
    """
    Get information on a load balancer for use in other resources. This data source
    provides all of the load balancers properties as configured on your DigitalOcean
    account. This is useful if the load balancer in question is not managed by
    Terraform or you need to utilize any of the load balancers data.
    
    An error is triggered if the provided load balancer name does not exist.
    """
    __args__ = dict()

    __args__['name'] = name
    if opts is None:
        opts = pulumi.ResourceOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('digitalocean:index/getLoadBalancer:getLoadBalancer', __args__, opts=opts)

    return GetLoadBalancerResult(
        algorithm=__ret__.get('algorithm'),
        droplet_ids=__ret__.get('dropletIds'),
        droplet_tag=__ret__.get('dropletTag'),
        enable_proxy_protocol=__ret__.get('enableProxyProtocol'),
        forwarding_rules=__ret__.get('forwardingRules'),
        healthcheck=__ret__.get('healthcheck'),
        ip=__ret__.get('ip'),
        name=__ret__.get('name'),
        redirect_http_to_https=__ret__.get('redirectHttpToHttps'),
        region=__ret__.get('region'),
        status=__ret__.get('status'),
        sticky_sessions=__ret__.get('stickySessions'),
        urn=__ret__.get('urn'),
        id=__ret__.get('id'))
