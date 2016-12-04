package com.minibus.controllers;

import com.minibus.entities.SubRoute;
import com.minibus.services.SubRouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SubRouteController {
    @Autowired
    private SubRouteService subRouteService;

    @GetMapping(value = "/subroutes", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<SubRoute> getSubRoutes() {
        return subRouteService.findAll();
    }

    @GetMapping(value = "/subroute", produces = MediaType.APPLICATION_JSON_VALUE)
    public SubRoute getRoute(@RequestBody SubRoute subRoute) {
        return subRouteService.find(subRoute);
    }

    @PostMapping(value = "/subroute/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveSubRoute(@RequestBody SubRoute subRoute) {
        subRouteService.save(subRoute);
    }

    @DeleteMapping(value = "/subroute/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteSubRoute(@RequestBody SubRoute subRoute) {
        subRouteService.delete(subRoute);
    }
}