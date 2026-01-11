// ...existing code...
package com._blog.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com._blog.demo.model.Entity.User;
import org.springframework.security.core.Authentication;
import com._blog.demo.service.*;

@RestController
@RequestMapping("/auth")
public class UserControl {
    @Autowired
    private Userservice userService;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request){
        Authentication auth=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        
        return jwtService.generateToken(request.getUsername());
    }
    


    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return userService.saveUser(user);
    }
}