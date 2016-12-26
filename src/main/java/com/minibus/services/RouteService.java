package com.minibus.services;

import com.minibus.entities.City;
import com.minibus.entities.Route;
import com.minibus.entities.RouteType;
import com.minibus.entities.Stop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RouteService {
    @Autowired
    private MongoOperations mongoOperations;

    public List<Route> findAll() {
        return mongoOperations.findAll(Route.class);
    }

    public Route findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), Route.class);
    }

    public Route find(Route route) {
        return mongoOperations.findById(route, Route.class);
    }

    public List<Route> findByRouteType(RouteType routeType) {
        return mongoOperations.find(Query.query(Criteria.where("type").is(routeType)), Route.class);
    }

    public List<Route> findBySubRoute(Map<String, Stop> subRoute) {
        Stop startStop = subRoute.get("startStop");
        Stop endStop = subRoute.get("endStop");
        List<Route> routesByStartStop = findByStop(startStop);
        List<Route> routesBySubRoute = new ArrayList<Route>();
        for (Route route : routesByStartStop) {
            List<Stop> stops = route.getStops();
            if (stops.contains(endStop) && stops.indexOf(startStop) < stops.indexOf(endStop)) {
                routesBySubRoute.add(route);
            }
        }
        return routesBySubRoute;
    }

    public List<Route> findByStop(Stop stop) {
        List<Route> routesByCity = findByCity(stop.getCity());
        List<Route> routesByStop = new ArrayList<Route>();
        for (Route route : routesByCity) {
            if (route.getStops().contains(stop)) {
                routesByStop.add(route);
            }
        }
        return routesByStop;
    }

    public List<Route> findByCity(City city) {
        return mongoOperations.find(Query.query(Criteria.where("city").is(city)), Route.class);
    }

    public void save(Route route) {
        mongoOperations.save(route);
    }

    public void delete(Route route) {
        mongoOperations.remove(route);
    }
}