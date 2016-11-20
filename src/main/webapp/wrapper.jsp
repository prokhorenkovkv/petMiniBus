<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%--<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>--%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div id="body" class="col-sm-offset-3">
    <div>WRAPPER</div>
    -------------------------------------------
    <%--city--%>
    <div ng-controller="CityController" ng-init="countries = getCountries(); cities = getCities()">
        <%--city list--%>
        <div ng-init="cities = getCities()">
            <div ng-repeat="city in cities">
                {{city.cityName}} {{city.zipCode}} {{city.country.countryName}}
                <button type="button" ng-click="editCity(city)">Edit</button>
                <button type="button" ng-click="deleteCity(city)">Remove</button>
            </div>
            <br>
        </div>
        <%--city form--%>
        <div>
            <input type="hidden" ng-model="cityId">
            <input type="text" ng-model="cityName">
            <input type="text" ng-model="zipCode">
            <select ng-options="country as country.countryName for country in countries" ng-model="country" ng-selected="country"></select>
            <input type="submit" ng-click="submitCityForm()">
        </div>
    </div>
    -------------------------------------------
    <%--country--%>
    <div ng-controller="CountryController">
        <%--countries list--%>
        <div ng-init="countries = getCountries()">
            <div ng-repeat="country in countries">
                {{country.countryName}}
                <button type="button" ng-click="editCountry(country)">Edit</button>
                <button type="button" ng-click="deleteCountry(country)">Remove</button>
            </div>
            <br>
        </div>
        <%--country form--%>
        <div>
            <input type="hidden" ng-model="countryId">
            <input type="text" ng-model="countryName">
            <input type="submit" ng-click="submitCountryForm()">
        </div>
    </div>
</div>