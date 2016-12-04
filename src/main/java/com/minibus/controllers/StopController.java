package com.minibus.controllers;

import com.minibus.entities.Stop;
import com.minibus.services.StopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StopController {
    @Autowired
    private StopService stopService;

    @GetMapping(value = "/stops", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Stop> getStops() {
        return stopService.findAll();
    }

    @GetMapping(value = "/stop", produces = MediaType.APPLICATION_JSON_VALUE)
    public Stop getStop(@RequestBody Stop stop) {
        return stopService.find(stop);
    }

    @PostMapping(value = "/stop/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveStop(@RequestBody Stop stop) {
        stopService.save(stop);
    }

    @DeleteMapping(value = "/stop/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteStop(@RequestBody Stop stop) {
        stopService.delete(stop);
    }
}