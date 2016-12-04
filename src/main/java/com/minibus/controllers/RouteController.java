package com.minibus.controllers;

import com.minibus.entities.Route;
import com.minibus.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping(value = "/route/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveRoute(@RequestBody Route route) {
        routeService.save(route);
    }

    @DeleteMapping(value = "/route/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteRoute(@RequestBody Route route) {
        routeService.delete(route);
    }
}