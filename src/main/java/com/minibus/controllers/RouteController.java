package com.minibus.controllers;

import com.minibus.entities.Route;
import com.minibus.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class RouteController {
    @Autowired
    private RouteService routeService;

    @GetMapping(value = "/routes", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    List<Route> getRoutes() {
        return routeService.findAll();
    }

    @GetMapping(value = "/route", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    Route getRoute(@RequestBody Route route) {
        return routeService.find(route);
    }

    @PostMapping(value = "/route/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void saveRoute(@RequestBody Route route) {
        routeService.save(route);
    }

    @PostMapping(value = "/route/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteRoute(@RequestBody Route route) {
        routeService.delete(route);
    }
}