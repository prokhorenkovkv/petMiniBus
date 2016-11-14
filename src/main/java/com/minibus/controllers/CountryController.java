package com.minibus.controllers;

import com.minibus.entities.Country;
import com.minibus.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping(value = "/countries", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Country> getCountries() {
        return countryService.findAll();
    }

    @GetMapping(value = "/country", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Country getCountry(@RequestBody Country country) {
        return countryService.find(country);
    }

    @PostMapping(value = "/country/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void saveCountry(@RequestBody Country country) {
        countryService.save(country);
    }

    @GetMapping(value = "/country/{id}/delete")
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteCountryById(@PathVariable String id) {
        countryService.deleteById(id);
    }

    @PostMapping(value = "/country/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteCountry(@RequestBody Country country) {
        countryService.delete(country);
    }
}