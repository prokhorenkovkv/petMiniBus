package com.minibus.controllers;

import com.minibus.entities.RouteType;
import com.minibus.services.RouteTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class RouteTypeController {
    @Autowired
    private RouteTypeService routeTypeService;

    @GetMapping(value = "/routeTypes", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    List<RouteType> getRouteTypes() {
        return routeTypeService.findAll();
    }

    @GetMapping(value = "/routeType", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    RouteType getRouteType(@RequestBody RouteType routeType) {
        return routeTypeService.find(routeType);
    }

    @PostMapping(value = "/routeType/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void saveCountry(@RequestBody RouteType routeType) {
        routeTypeService.save(routeType);
    }

    @PostMapping(value = "/routeType/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteCountry(@RequestBody RouteType routeType) {
        routeTypeService.delete(routeType);
    }
}
