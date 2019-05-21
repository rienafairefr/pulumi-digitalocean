# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class GetTagResult:
    """
    A collection of values returned by getTag.
    """
    def __init__(__self__, name=None, id=None):
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_tag(name=None,opts=None):
    """
    Get information on a tag. This data source provides the name as configured on
    your DigitalOcean account. This is useful if the tag name in question is not
    managed by Terraform or you need validate if the tag exists in the account.
    
    An error is triggered if the provided tag name does not exist.
    """
    __args__ = dict()

    __args__['name'] = name
    if opts is None:
        opts = pulumi.ResourceOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('digitalocean:index/getTag:getTag', __args__, opts=opts)

    return GetTagResult(
        name=__ret__.get('name'),
        id=__ret__.get('id'))
