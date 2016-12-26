<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%--<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>--%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div id="body" class="col-sm-offset-3">
    <div>WRAPPER</div>
    <%--subroute--%>
    Subroute
    <div ng-controller="SubRouteController"
         ng-init="subRoutes = getSubRoutes();
            countries = getCountries();
            routes = []">
        <%--subroute list--%>
        <div ng-repeat="subRoute in subRoutes">
            {{subRoute.startEnd.startStop.title}} - {{subRoute.startEnd.endStop.title}}
            <button type="button" ng-click="editSubRoute(subRoute)">Edit</button>
            <button type="button" ng-click="deleteSubRoute(subRoute)">Remove</button>
        </div>
        <br>
        <%--subroute form--%>
        <div>
            <input type="hidden" ng-model="subRouteId">
            <select ng-options="country as country.countryName for country in countries"
                    ng-model="selectedCountry" ng-change="getCitiesByCountry()">
            </select>
            <select ng-options="city as city.cityName for city in cities"
                    ng-model="selectedCity" ng-change="getStopsByCity()">
            </select>
            <select ng-options="stop as stop.title for stop in stopsForStart"
                    ng-model="selectedStartStop" ng-change="getRoutesBySubRouteStartEndStops()">
            </select>
            <select ng-options="stop as stop.title for stop in stopsForEnd"
                    ng-model="selectedEndStop" ng-change="getRoutesBySubRouteStartEndStops()">
            </select>
            <div ng-repeat="route in routesByStartEndStops">
                {{route.number}}
                <input type="button" value="Submit route" ng-click="submitRoute(route)"/>
            </div>
            Submitted routes
            <div ng-repeat="route in routes">
                {{route.number}}
                <input type="button" value="Unsubmit route" ng-click="unsubmitRoute(route)"/>
            </div>
            <input type="submit" ng-click="submitSubRouteForm()">
        </div>
    </div>
    -------------------------------------------
    <%--route--%>
    Route
    <div ng-controller="RouteController"
         ng-init="routes = getRoutes();
            routeTypes = getRouteTypes();
            countries = getCountries();
            stopsInRoute = []">
        <%--route list--%>
        <div ng-repeat="route in routes">
            {{route.routeType.type}}
            {{route.number}}
            {{route.city.cityName}}
            {{route.stops[0].title}} - {{route.stops[route.stops.length - 1].title}}
            <button type="button" ng-click="editRoute(route)">Edit</button>
            <button type="button" ng-click="deleteRoute(route)">Remove</button>
        </div>
        <br>
        <%--route form--%>
        <div>
            <input type="hidden" ng-model="routeId">
            <select ng-options="routeType as routeType.type for routeType in routeTypes"
                    ng-model="selectedRouteType">
            </select>
            <select ng-options="country as country.countryName for country in countries"
                    ng-model="selectedCountry" ng-change="getCitiesByCountry()">
            </select>
            <select ng-options="city as city.cityName for city in cities"
                    ng-model="selectedCity" ng-change="getStopsByCity()">
            </select>
            <input type="text" ng-model="number">
            <select ng-options="stop as stop.title for stop in stops"
                    ng-model="selectedStop">
            </select>
            <input type="button" value="Add" ng-click="addStopToRoute()"/>
            <div ng-repeat="stopInRoute in stopsInRoute">{{$index + 1}} {{stopInRoute.title}}
                <input type="button" value="Delete from route" ng-click="deleteStopFromRoute($index)"/>
            </div>
            <input type="submit" ng-click="submitRouteForm()">

        </div>
    </div>
    -------------------------------------------
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
    -------------------------------------------
    <%--stop--%>
    Stop
    <div ng-controller="StopController" ng-init="stops = getStops(); countries = getCountries()">
        <%--stop list--%>
        <div ng-repeat="stop in stops">
            {{stop.title}} {{stop.street}} {{stop.building}} {{stop.city.cityName}} {{stop.city.country.countryName}}
            <button type="button" ng-click="editStop(stop)">Edit</button>
            <button type="button" ng-click="deleteStop(stop)">Remove</button>
        </div>
        <br>
        <%--stop form--%>
        <div>
            <input type="hidden" ng-model="stopId">
            <select ng-options="country as country.countryName for country in countries"
                    ng-model="selectedCountry" ng-change="getCitiesByCountry()">
            </select>
            <select ng-options="city as city.cityName for city in cities"
                    ng-model="selectedCity">
            </select>
            <input type="text" ng-model="title">
            <input type="text" ng-model="street">
            <input type="text" ng-model="building">

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