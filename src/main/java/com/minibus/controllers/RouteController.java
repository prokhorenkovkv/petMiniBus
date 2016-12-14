package com.minibus.controllers;

import com.minibus.entities.Route;
import com.minibus.entities.Stop;
import com.minibus.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class RouteController {
    @Autowired
    private RouteService routeService;

    @GetMapping(value = "/routes", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Route> getRoutes() {
        return routeService.findAll();
    }

    @GetMapping(value = "/route", produces = MediaType.APPLICATION_JSON_VALUE)
    public Route getRoute(@RequestBody Route route) {
        return routeService.find(route);
    }

    @PostMapping(value = "routesBySubRouteStartEndStops", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Route> getRoutesBySubRouteStartEndStops (@RequestBody Map<String, Stop> startEnd) {
        return null;
    }

    @PostMapping(value = "/route/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveRoute(@RequestBody Route route) {
        routeService.save(route);
    }

    @DeleteMapping(value = "/route/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteRoute(@RequestBody Route route) {
        routeService.delete(route);
    }
}