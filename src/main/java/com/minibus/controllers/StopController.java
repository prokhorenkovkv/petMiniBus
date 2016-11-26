package com.minibus.controllers;

import com.minibus.entities.Stop;
import com.minibus.services.StopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class StopController {
    @Autowired
    private StopService stopService;

    @GetMapping(value = "/stops", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    List<Stop> getStops() {
        return stopService.findAll();
    }

    @GetMapping(value = "/stop", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    Stop getStop(@RequestBody Stop stop) {
        return stopService.find(stop);
    }

    @PostMapping(value = "/stop/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void saveStop(@RequestBody Stop stop) {
        stopService.save(stop);
    }

    @PostMapping(value = "/stop/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteStop(@RequestBody Stop stop) {
        stopService.delete(stop);
    }
}