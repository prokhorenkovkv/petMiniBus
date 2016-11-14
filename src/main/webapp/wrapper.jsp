<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%--<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>--%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div id="body" class="col-sm-offset-3">
    <div>WRAPPER</div>

    <div ng-controller="CountryController">
        <input type="text" ng-model="countryName">
        <input type="submit" ng-click="submitCountryForm()">
    </div>
    <div ng-controller="CountryController">
        <button ng-click="deleteCountry()">delete smth</button>
    </div>
</div>




















<%--<div id="asd">
        <div ng-controller="userController">
            <button ng-click="loadData()">load</button>
            <h3>{{user}}</h3>
        </div>
    </div>--%>