package com.minibus.controllers;

import com.minibus.entities.City;
import com.minibus.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CityController {
    @Autowired
    private CityService cityService;

    @GetMapping(value = "/cities", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    List<City> getCities() {
        return cityService.findAll();
    }

    @GetMapping(value = "/city", produces = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    City getCity(@RequestBody City city) {
        return cityService.find(city);
    }

    @PostMapping(value = "/city/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void saveCity(@RequestBody City city) {
        cityService.save(city);
    }

    @PostMapping(value = "/city/edit", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void editCity(@RequestBody City city) {
        cityService.save(city);
    }

    @PostMapping(value = "/city/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteCity(@RequestBody City city) {
        cityService.delete(city);
    }
}