package com.minibus.controllers;

import com.minibus.entities.Country;
import com.minibus.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping(value = "/countries", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Country> getCountries() {
        return countryService.findAll();
    }

    @GetMapping(value = "/country", produces = MediaType.APPLICATION_JSON_VALUE)
    public Country getCountry(@RequestBody Country country) {
        return countryService.find(country);
    }

    @PostMapping(value = "/country/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveCountry(@RequestBody Country country) {
        countryService.save(country);
    }

    @DeleteMapping(value = "/country/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteCountry(@RequestBody Country country) {
        countryService.delete(country);
    }
}