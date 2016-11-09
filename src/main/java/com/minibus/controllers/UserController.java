package com.minibus.controllers;

import com.minibus.entities.User;
import com.minibus.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public @ResponseBody User viewUsers() throws IOException {
        return userService.findById("2");

    }
    @PostMapping("/user/add")
    public @ResponseBody /*String*/ void saveUser(@RequestBody String json) {
        System.out.println(json);
        //return "index";
    }

    @GetMapping("/user/delete")
    public String deleteUser(String id) {
        userService.delete(id);
        return "index";
    }
}

