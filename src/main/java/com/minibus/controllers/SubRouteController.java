package com.minibus.controllers;

import com.minibus.entities.SubRoute;
import com.minibus.services.SubRouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class SubRouteController {
    @Autowired
    private SubRouteService subRouteService;

    @GetMapping(value = "/subroutes", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    List<SubRoute> getSubRoutes() {
        return subRouteService.findAll();
    }

    @GetMapping(value = "/subroute", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    SubRoute getRoute(@RequestBody SubRoute subRoute) {
        return subRouteService.find(subRoute);
    }

    @PostMapping(value = "/subroute/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void saveSubRoute(@RequestBody SubRoute subRoute) {
        subRouteService.save(subRoute);
    }

    @PostMapping(value = "/subroute/edit", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void editSubRoute(@RequestBody SubRoute subRoute) {
        subRouteService.save(subRoute);
    }

    @PostMapping(value = "/subroute/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteSubRoute(@RequestBody SubRoute subRoute) {
        subRouteService.delete(subRoute);
    }
}
