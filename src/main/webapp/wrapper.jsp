<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%--<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>--%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div id="body" class="col-sm-offset-3">
    <div>WRAPPER</div>
    <%--subroute--%>
    Route
    <div ng-controller="SubRouteController"
         ng-init="subRoutes = getSubRoutes();
            countries = getCountries()">
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
            <select ng-options="stop as stop.title for stop in stops"
                    ng-model="selectedStartStop">
            </select>
            <select ng-options="stop as stop.title for stop in stops"
                    ng-model="selectedEndStop" ng-change="getRoutesBySubRouteStartEndStops()">
            </select>
            <%--<input type="text" ng-model="number">--%>
            <%--<input type="button" value="Add" ng-click="addStopToRoute()"/>
            <div ng-repeat="stopInRoute in stopsInRoute">{{$index + 1}} {{stopInRoute.title}}
                <input type="button" value="Delete from route" ng-click="deleteStopFromRoute($index)"/>
            </div>--%>
            <input type="submit" ng-click="submitSubRouteForm()">

        </div>
    </div>
    <%---------------------------------------------
    &lt;%&ndash;route&ndash;%&gt;
    Route
    <div ng-controller="RouteController"
         ng-init="routes = getRoutes();
            routeTypes = getRouteTypes();
            countries = getCountries();
            stopsInRoute = []">
        &lt;%&ndash;route list&ndash;%&gt;
        <div ng-repeat="route in routes">
            {{route.routeType.type}}
            {{route.number}}
            {{route.stops[0].title}} - {{route.stops[route.stops.length - 1].title}}
            <button type="button" ng-click="editRoute(route)">Edit</button>
            <button type="button" ng-click="deleteRoute(route)">Remove</button>
        </div>
        <br>
        &lt;%&ndash;route form&ndash;%&gt;
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
    &lt;%&ndash;routetype&ndash;%&gt;
    RouteType
    <div ng-controller="RouteTypeController" ng-init="routeTypes=getRouteTypes()">
        &lt;%&ndash;routetypes list&ndash;%&gt;
        <div ng-repeat="routeType in routeTypes">
            {{routeType.type}}
            <button type="button" ng-click="editRouteType(routeType)">Edit</button>
            <button type="button" ng-click="deleteRouteType(routeType)">Remove</button>
        </div>
        <br>
        &lt;%&ndash;routetype form&ndash;%&gt;
        <div>
            <input type="hidden" ng-model="routeTypeId">
            <input type="text" ng-model="routeType">
            <input type="submit" ng-click="submitRouteTypeForm()">
        </div>
    </div>
    -------------------------------------------
    &lt;%&ndash;stop&ndash;%&gt;
    Stop
    <div ng-controller="StopController" ng-init="stops = getStops(); countries = getCountries()">
        &lt;%&ndash;stop list&ndash;%&gt;
        <div ng-repeat="stop in stops">
            {{stop.title}} {{stop.street}} {{stop.building}} {{stop.city.cityName}} {{stop.city.country.countryName}}
            <button type="button" ng-click="editStop(stop)">Edit</button>
            <button type="button" ng-click="deleteStop(stop)">Remove</button>
        </div>
        <br>
        &lt;%&ndash;stop form&ndash;%&gt;
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
    &lt;%&ndash;city&ndash;%&gt;
    City
    <div ng-controller="CityController" ng-init="countries = getCountries(); cities = getCities()">
        &lt;%&ndash;city list&ndash;%&gt;
        <div ng-repeat="city in cities">
            {{city.cityName}} {{city.zipCode}} {{city.country.countryName}}
            <button type="button" ng-click="editCity(city)">Edit</button>
            <button type="button" ng-click="deleteCity(city)">Remove</button>
        </div>
        <br>
        &lt;%&ndash;city form&ndash;%&gt;
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
    &lt;%&ndash;country&ndash;%&gt;
    Country
    <div ng-controller="CountryController" ng-init="countries = getCountries()">
        &lt;%&ndash;countries list&ndash;%&gt;
        <div ng-repeat="country in countries">
            {{country.countryName}}
            <button type="button" ng-click="editCountry(country)">Edit</button>
            <button type="button" ng-click="deleteCountry(country)">Remove</button>
        </div>
        <br>
        &lt;%&ndash;country form&ndash;%&gt;
        <div>
            <input type="hidden" ng-model="countryId">
            <input type="text" ng-model="countryName">
            <input type="submit" ng-click="submitCountryForm()">
        </div>
    </div>--%>
</div>