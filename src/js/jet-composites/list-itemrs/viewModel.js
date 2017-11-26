/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojcollapsible', 'ojs/ojdefer', 'ojs/ojlabel',
     'ojs/ojinputtext'], function (oj, ko, $) {
    'use strict';

    function ExampleComponentModel(context) {
        var self = this;
        self.composite = context.element;

        self.headerMsg = ko.observable();
        self.phoneMsg = ko.observable();
        self.emailMsg = ko.observable();
        self.jobMsg = ko.observable();

        context.props.then(function (propertyMap) {
            self.properties = propertyMap;

            var firstname = self.properties.firstname;
            var lastname = self.properties.lastname;
            self.headerMsg(firstname + ' ' + lastname);

            var phone = self.properties.phone;
            var email = self.properties.email;
            var job = self.properties.job;
            self.phoneMsg(phone);
            self.emailMsg(email);
            self.jobMsg(job);
        });

        self.handleClick = function(data) {
            var params = {
              'bubbles': true,
              'detail': {'value': data()}
            };
            self.composite.dispatchEvent(new CustomEvent('openDetails', params));
        }
    };

    //Lifecycle methods - uncomment and implement if necessary
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.attached = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.detached = function(context){
    //};

    return ExampleComponentModel;
});
