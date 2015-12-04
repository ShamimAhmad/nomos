/**
 * Created by Thomas on 11/21/2015.
 */
'use strict';

angular
    .module('mmpApp')
    .factory('MemberCardService1', ['$http', function ($http) {
        return {
            GetGenuineCardDetails: function(key) {
                return $http.get("/services/web/MemberCardService1.svc/GetGenuineCardDetails?key=" + key)
                    .then(function(response) { return response.data; });
            },
            RegisterGenuineCard: function(key, notes) {
                return $http.post("/services/web/MemberCardService1.svc/RegisterGenuineCard", {key: key, notes: notes})
                    .then(function(response) { return response.data; });
            },
            ValidateGenuineCard: function(key) {
                return $http.post("/services/web/MemberCardService1.svc/ValidateGenuineCard", {key: key})
                    .then(function(response) { return response.data; });
            },
            IssueCard: function(email, key) {
                return $http.post("/services/web/MemberCardService1.svc/IssueCard", {email: email, key: key})
                    .then(function(response) { return response.data; });
            },
            ListUserGenuineCards: function(userid, page, size, columns, order, filters) {
                return $http.post("/services/web/MemberCardService1.svc/ListUserGenuineCards", { userid: userid, page: page, size: size, columns: columns, order: order, filters: filters })
                    .then(function(response) { return response.data; });
            },
            ListGenuineCards: function(page, size, columns, order, filters) {
                return $http.post("/services/web/MemberCardService1.svc/ListGenuineCards", { page: page, size: size, columns: columns, order: order, filters: filters })
                    .then(function(response) { return response.data; });
            }
        };
    }]);