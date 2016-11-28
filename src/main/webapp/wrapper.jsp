<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%--<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>--%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div id="body" class="col-sm-offset-3">
    <div>WRAPPER</div>
    <%--routetype--%>
    RouteType
    <div ng-controller="RouteTypeController" ng-init="routeTypes=getRouteTypes()">
        <%--routetypes list--%>
        <div ng-repeat="routeType in routeTypes">
            {{routeType.type}}
            <button type="button" ng-click="editRouteType(routeType)">Edit</button>
            <button type="button" ng-click="deleteRouteType(routeType)">Remove</button>
        </div>
        <br>
        <%--routetype form--%>
        <div>
            <input type="hidden" ng-model="routeTypeId">
            <input type="text" ng-model="routeType">
            <input type="submit" ng-click="submitRouteTypeForm()">
        </div>
    </div>
    <%---------------------------------------------
    &lt;%&ndash;route&ndash;%&gt;
    Route
    <div ng-controller="RouteController" ng-init="routes = getRoutes(); types = getTypes()">
        &lt;%&ndash;route list&ndash;%&gt;
        <div ng-repeat="route in routes">
            {{route.type}} {{route.number}} {{route.stops}}
            <button type="button" ng-click="editRoute(route)">Edit</button>
            <button type="button" ng-click="deleteRoute(route)">Remove</button>
        </div>
        <br>
        &lt;%&ndash;stop form&ndash;%&gt;
        <div>
            <input type="hidden" ng-model="routeId">
            <select ng-options="type as typefor type in types"
                    ng-model="selectedCity">
            </select>
            <input type="text" ng-model="title">
            <input type="text" ng-model="street">
            <input type="text" ng-model="building">
            <select ng-options="city as city.cityName for city in cities"
                    ng-model="selectedCity">
            </select>
            <input type="submit" ng-click="submitStopForm()">
        </div>
    </div>--%>
    -------------------------------------------
    <%--stop--%>
    Stop
    <div ng-controller="StopController" ng-init="stops = getStops(); cities = getCities()">
        <%--stop list--%>
        <div ng-repeat="stop in stops">
            {{stop.title}} {{stop.street}} {{stop.building}} {{stop.city.cityName}}
            <button type="button" ng-click="editStop(stop)">Edit</button>
            <button type="button" ng-click="deleteStop(stop)">Remove</button>
        </div>
        <br>
        <%--stop form--%>
        <div>
            <input type="hidden" ng-model="stopId">
            <input type="text" ng-model="title">
            <input type="text" ng-model="street">
            <input type="text" ng-model="building">
            <select ng-options="city as city.cityName for city in cities"
                    ng-model="selectedCity">
            </select>
            <input type="submit" ng-click="submitStopForm()">
        </div>
    </div>
    -------------------------------------------
    <%--city--%>
    City
    <div ng-controller="CityController" ng-init="countries = getCountries(); cities = getCities()">
        <%--city list--%>
        <div ng-repeat="city in cities">
            {{city.cityName}} {{city.zipCode}} {{city.country.countryName}}
            <button type="button" ng-click="editCity(city)">Edit</button>
            <button type="button" ng-click="deleteCity(city)">Remove</button>
        </div>
        <br>
        <%--city form--%>
        <div>
            <input type="hidden" ng-model="cityId">
            <input type="text" ng-model="cityName">
            <input type="text" ng-model="zipCode">
            <select ng-options="country as country.countryName for country in countries"
                    ng-model="selectedCountry">
            </select>
            <input type="submit" ng-click="submitCityForm()">
        </div>
    </div>
    -------------------------------------------
    <%--country--%>
    Country
    <div ng-controller="CountryController" ng-init="countries = getCountries()">
        <%--countries list--%>
        <div ng-repeat="country in countries">
            {{country.countryName}}
            <button type="button" ng-click="editCountry(country)">Edit</button>
            <button type="button" ng-click="deleteCountry(country)">Remove</button>
        </div>
        <br>
        <%--country form--%>
        <div>
            <input type="hidden" ng-model="countryId">
            <input type="text" ng-model="countryName">
            <input type="submit" ng-click="submitCountryForm()">
        </div>
    </div>
</div>