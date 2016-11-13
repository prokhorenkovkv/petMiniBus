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
        return userService.findById("ObjectId(\"5823a63fee14f42b880955db\")");
    }

    @GetMapping("/user")
    public User view() throws IOException {
        System.out.println(userService.findById("5823a63fee14f42b880955db").getId());
        return null;
    }

    @GetMapping("/user/add")
    public /*@ResponseBody*/ String saveUser(/*@RequestBody String json*/) {
        User user = new User();
        //user.setId("jhg");
        user.setFirstName("kostya");
        user.setPhone("10101");
        user.setEmail("emaillll");
        userService.save(user);
        //System.out.println(json);
        return "index";
    }

    @GetMapping("/user/delete")
    public String deleteUser(String id) {
        userService.delete(id);
        return "index";
    }
}

