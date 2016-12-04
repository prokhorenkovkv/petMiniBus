package com.minibus.controllers;

import com.minibus.entities.RouteType;
import com.minibus.services.RouteTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RouteTypeController {
    @Autowired
    private RouteTypeService routeTypeService;

    @GetMapping(value = "/routeTypes", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<RouteType> getRouteTypes() {
        return routeTypeService.findAll();
    }

    @GetMapping(value = "/routeType", produces = MediaType.APPLICATION_JSON_VALUE)
    public RouteType getRouteType(@RequestBody RouteType routeType) {
        return routeTypeService.find(routeType);
    }

    @PostMapping(value = "/routeType/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveRouteType(@RequestBody RouteType routeType) {
        routeTypeService.save(routeType);
    }

    @DeleteMapping(value = "/routeType/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteRouteType(@RequestBody RouteType routeType) {
        routeTypeService.delete(routeType);
    }
}